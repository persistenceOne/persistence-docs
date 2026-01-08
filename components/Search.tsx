'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
  VStack,
  Text,
  Link,
  HStack,
  Divider,
  Kbd,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useColorModeValue,
} from '@chakra-ui/react'
import { SearchIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { navigation } from '@/lib/navigation'

interface SearchResult {
  title: string
  path: string
  section: string
  description?: string
}

// Flatten navigation to get all pages
function flattenNavigation(items: typeof navigation, section = ''): SearchResult[] {
  const results: SearchResult[] = []
  
  items.forEach((item) => {
    const currentSection = section || item.title
    if (item.children) {
      results.push(...flattenNavigation(item.children, currentSection))
    } else {
      results.push({
        title: item.title,
        path: item.path,
        section: currentSection,
      })
    }
  })
  
  return results
}

const allPages = flattenNavigation(navigation)

export function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  // Handle Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          onOpen()
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onOpen, onClose])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Search logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchTerm = query.toLowerCase()
    const filtered = allPages.filter((page) => {
      const titleMatch = page.title.toLowerCase().includes(searchTerm)
      const sectionMatch = page.section.toLowerCase().includes(searchTerm)
      return titleMatch || sectionMatch
    })

    // Sort by relevance (title matches first)
    const sorted = filtered.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().startsWith(searchTerm)
      const bTitleMatch = b.title.toLowerCase().startsWith(searchTerm)
      if (aTitleMatch && !bTitleMatch) return -1
      if (!aTitleMatch && bTitleMatch) return 1
      return a.title.localeCompare(b.title)
    })

    setResults(sorted.slice(0, 10)) // Limit to 10 results
  }, [query])

  const handleResultClick = (path: string) => {
    router.push(path)
    onClose()
    setQuery('')
  }

  // Group results by section
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.section]) {
      acc[result.section] = []
    }
    acc[result.section].push(result)
    return acc
  }, {} as Record<string, SearchResult[]>)

  return (
    <>
      <InputGroup
        maxW="400px"
        onClick={onOpen}
        cursor="pointer"
      >
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          value=""
          readOnly
          bg="white"
          borderColor="gray.200"
          _hover={{ borderColor: 'gray.300' }}
        />
        <InputRightElement width="auto" px={2}>
          <HStack spacing={1}>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </HStack>
        </InputRightElement>
      </InputGroup>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(4px)" />
        <ModalContent maxH="80vh" overflow="hidden" bg="white" borderRadius="lg" boxShadow="xl">
          <ModalBody p={0}>
            <Box p={4} borderBottom="1px" borderColor="gray.200" bg="white">
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  ref={inputRef}
                  placeholder="Search documentation..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  border="none"
                  _focus={{ boxShadow: 'none' }}
                  fontSize="lg"
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Close search"
                    icon={<CloseIcon />}
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                  />
                </InputRightElement>
              </InputGroup>
            </Box>

            <Box overflowY="auto" maxH="60vh">
              {query && results.length === 0 && (
                <Box p={8} textAlign="center">
                  <Text color="gray.500">No results found for {query}</Text>
                </Box>
              )}

              {query && results.length > 0 && (
                <VStack align="stretch" spacing={0} divider={<Divider />}>
                  {Object.entries(groupedResults).map(([section, sectionResults]) => (
                    <Box key={section}>
                      <Box px={4} py={2} bg="gray.50">
                        <Text fontSize="xs" fontWeight="bold" color="gray.600" textTransform="uppercase">
                          {section}
                        </Text>
                      </Box>
                      <VStack align="stretch" spacing={0}>
                        {sectionResults.map((result) => (
                          <Link
                            key={result.path}
                            as={NextLink}
                            href={result.path}
                            onClick={() => handleResultClick(result.path)}
                            display="block"
                            px={4}
                            py={3}
                            _hover={{ bg: 'gray.100' }}
                            textDecoration="none"
                            bg="white"
                          >
                            <HStack justify="space-between">
                              <VStack align="start" spacing={0}>
                                <Text fontWeight="medium" color="gray.900">
                                  {result.title}
                                </Text>
                                {result.description && (
                                  <Text fontSize="sm" color="gray.600" noOfLines={1}>
                                    {result.description}
                                  </Text>
                                )}
                              </VStack>
                              <Text fontSize="xs" color="gray.400">
                                →
                              </Text>
                            </HStack>
                          </Link>
                        ))}
                      </VStack>
                    </Box>
                  ))}
                </VStack>
              )}

              {!query && (
                <Box p={8} textAlign="center">
                  <Text color="gray.500">Start typing to search...</Text>
                </Box>
              )}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}


'use client'

import {
  Box,
  VStack,
  Link,
  Text,
  Collapse,
  useDisclosure,
  Icon,
  HStack,
  Button,
  Image,
} from '@chakra-ui/react'
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { NavItem } from '@/lib/navigation'
import { navigation } from '@/lib/navigation'

interface NavItemProps {
  item: NavItem
  level?: number
}

function NavItemComponent({ item, level = 0 }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.path
  const hasChildren = item.children && item.children.length > 0
  const isTopLevel = level === 0
  const { isOpen, onToggle } = useDisclosure({
    defaultIsOpen: pathname?.startsWith(item.path) || false,
  })

  return (
    <Box>
      {hasChildren ? (
        // Top-level items with children: always show, no collapse
        isTopLevel ? (
          <Box py={1} px={2}>
            <Text fontSize="sm" fontWeight="bold" color="gray.700" textTransform="uppercase" mb={1}>
              {item.title}
            </Text>
          </Box>
        ) : (
          // Nested items with children: collapsible
          <Button
            onClick={onToggle}
            variant="ghost"
            size="sm"
            justifyContent="flex-start"
            width="100%"
            py={1}
            px={2}
            borderRadius="md"
            bg={isActive ? 'blue.50' : 'transparent'}
            color={isActive ? 'blue.600' : 'gray.700'}
            fontWeight={isActive ? 'semibold' : 'normal'}
            _hover={{ bg: 'gray.50' }}
            pl={level * 4 + 2}
            height="auto"
          >
            <HStack spacing={2} width="100%">
              <Icon
                as={isOpen ? ChevronDownIcon : ChevronRightIcon}
                boxSize={3}
              />
              {item.icon && (
                <Image
                  src={`/images/icons/${item.icon}`}
                  alt=""
                  boxSize="16px"
                  objectFit="contain"
                />
              )}
              <Text fontSize="sm" textAlign="left">{item.title}</Text>
            </HStack>
          </Button>
        )
      ) : (
        <Link
          as={NextLink}
          href={item.path}
          display="block"
          py={1}
          px={2}
          borderRadius="md"
          bg={isActive ? 'blue.50' : 'transparent'}
          color={isActive ? 'blue.600' : 'gray.700'}
          fontWeight={isActive ? 'semibold' : 'normal'}
          _hover={{ bg: 'gray.50', textDecoration: 'none' }}
          pl={level * 4 + 2}
        >
          <HStack spacing={2}>
            {item.icon && (
              <Image
                src={`/images/icons/${item.icon}`}
                alt=""
                boxSize="16px"
                objectFit="contain"
              />
            )}
            <Text fontSize="sm">{item.title}</Text>
          </HStack>
        </Link>
      )}
      {hasChildren && (
        // Top-level items: always show children, no collapse
        isTopLevel ? (
          <VStack align="stretch" pl={0} mt={1}>
            {item.children?.map((child) => (
              <NavItemComponent key={child.path} item={child} level={level + 1} />
            ))}
          </VStack>
        ) : (
          // Nested items: use collapse
          <Collapse in={isOpen} animateOpacity>
            <VStack align="stretch" pl={4} mt={1}>
              {item.children?.map((child) => (
                <NavItemComponent key={child.path} item={child} level={level + 1} />
              ))}
            </VStack>
          </Collapse>
        )
      )}
    </Box>
  )
}

export function Sidebar() {
  return (
    <Box
      as="nav"
      width="320px"
      bg="gray.50"
      borderRight="1px"
      borderColor="gray.200"
      p={4}
      overflowY="auto"
      height="100%"
      flexShrink={0}
    >
      <VStack align="stretch" spacing={1}>
        {navigation.map((item) => (
          <NavItemComponent key={item.path} item={item} />
        ))}
      </VStack>
    </Box>
  )
}


'use client'

import { Box, Text, Flex, useColorMode } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '@/lib/navigation'
import colors from '@/theme/colors'

interface PageNavigationProps {
  currentPath?: string
}

function flattenNavigation(items: any[]): Array<{ path: string; title: string }> {
  const result: Array<{ path: string; title: string }> = []
  
  for (const item of items) {
    if (item.children && item.children.length > 0) {
      // If it has children, only include the children (skip the parent)
      result.push(...flattenNavigation(item.children))
    } else if (item.path) {
      // Only include items with paths (actual pages)
      result.push({ path: item.path, title: item.title })
    }
  }
  
  return result
}

export function PageNavigation({ currentPath }: PageNavigationProps) {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const pathname = usePathname()
  const path = currentPath || pathname || '/'
  
  const allPages = flattenNavigation(navigation)
  const currentIndex = allPages.findIndex(page => page.path === path)
  
  const previousPage = currentIndex > 0 ? allPages[currentIndex - 1] : null
  const nextPage = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <Box mt={8}>
      <Box
        borderTop="1px solid"
        borderColor={themeColors.borderColor}
        pt={6}
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems="stretch"
        gap={4}
      >
        {previousPage ? (
          <Box
            as={NextLink}
            href={previousPage.path}
            flex="1"
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            bg={themeColors.card.variant0}
            display="flex"
            alignItems="center"
            gap={3}
            _hover={{
              borderColor: themeColors.accent.primary,
              bg: themeColors.card.variant0,
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <ChevronLeftIcon color={themeColors.text[500]} boxSize={5} />
            <Box flex="1">
              <Text fontSize="xs" color={themeColors.text[400]} mb={1}>
                Previous
              </Text>
              <Text fontSize="sm" fontWeight="medium" color={themeColors.text[700]}>
                {previousPage.title}
              </Text>
            </Box>
          </Box>
        ) : (
          <Box flex="1" />
        )}

        {nextPage && (
          <Box
            as={NextLink}
            href={nextPage.path}
            flex="1"
            border="1px solid"
            borderColor={themeColors.borderColor}
            borderRadius="md"
            p={4}
            bg={themeColors.card.variant0}
            display="flex"
            alignItems="center"
            gap={3}
            justifyContent="flex-end"
            _hover={{
              borderColor: themeColors.accent.primary,
              bg: themeColors.card.variant0,
              textDecoration: 'none',
            }}
            transition="all 0.2s"
          >
            <Box flex="1" textAlign="right">
              <Text fontSize="xs" color={themeColors.text[400]} mb={1}>
                Next
              </Text>
              <Text fontSize="sm" fontWeight="medium" color={themeColors.text[700]}>
                {nextPage.title}
              </Text>
            </Box>
            <ChevronRightIcon color={themeColors.text[500]} boxSize={5} />
          </Box>
        )}
      </Box>
      {/*<Text fontSize="sm" color={themeColors.text[400]} mt={4}>*/}
      {/*  Last updated 1 year ago*/}
      {/*</Text>*/}
    </Box>
  )
}


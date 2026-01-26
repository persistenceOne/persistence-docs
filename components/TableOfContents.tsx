'use client'

import { Box, VStack, Link, Text, Divider, useColorMode } from '@chakra-ui/react'
import { HeadingItem } from '@/lib/extractHeadings'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './ThemeToggle'
import colors from '@/theme/colors'

interface TableOfContentsProps {
  headings: HeadingItem[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66% 0px',
        threshold: 0,
      }
    )

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (!element) {
      console.warn(`Element with id "${id}" not found`)
      return
    }

    // Find the scrollable container using data attribute or by traversing up
    let scrollContainer: HTMLElement | null = 
      document.querySelector('[data-scroll-container]') as HTMLElement ||
      null
    
    if (!scrollContainer) {
      // Fallback: find by traversing up the DOM
      let parent: HTMLElement | null = element.parentElement
      while (parent && parent !== document.body) {
        const style = window.getComputedStyle(parent)
        if (style.overflowY === 'auto' || style.overflowY === 'scroll' || style.overflow === 'auto' || style.overflow === 'scroll') {
          scrollContainer = parent
          break
        }
        parent = parent.parentElement
      }
    }
    
    const offset = 100 // Account for fixed header
    
    if (!scrollContainer || scrollContainer === document.body) {
      // Fallback to window scrolling
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: Math.max(0, elementTop - offset),
        behavior: 'smooth',
      })
    } else {
      // Container scrolling - calculate relative position
      const containerRect = scrollContainer.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      const relativeTop = elementRect.top - containerRect.top
      const currentScroll = scrollContainer.scrollTop
      const targetScroll = currentScroll + relativeTop - offset
      
      scrollContainer.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth',
      })
    }
  }

  return (
    <Box
      position="sticky"
      top="80px"
      maxH="calc(100vh - 100px)"
      w="240px"
      flexShrink={0}
      pl={6}
      pr={4}
      py={4}
      display={{ base: 'none', xl: 'flex' }}
      flexDirection="column"
    >
      <Text
        fontSize="sm"
        fontWeight="semibold"
        color={themeColors.text[400]}
        textTransform="uppercase"
        letterSpacing="wide"
        mb={2}
        flexShrink={0}
      >
        On this page
      </Text>
      <Box
        flex="1"
        overflowY="auto"
        overflowX="hidden"
        mb={4}
      >
        <VStack align="stretch" spacing={2}>
          {headings.map((heading) => (
            <Link
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              fontSize="sm"
              color={activeId === heading.id ? themeColors.accent.primary : themeColors.text[500]}
              fontWeight={activeId === heading.id ? 'medium' : 'normal'}
              pl={heading.level > 2 ? `${(heading.level - 2) * 12}px` : '0'}
              _hover={{
                color: themeColors.accent.primary,
                textDecoration: 'none',
              }}
              transition="color 0.2s"
            >
              {heading.text}
            </Link>
          ))}
        </VStack>
      </Box>
      <Box flexShrink={0} pt={2} borderTop="1px" borderColor={themeColors.borderColor}>
        <ThemeToggle />
      </Box>
    </Box>
  )
}

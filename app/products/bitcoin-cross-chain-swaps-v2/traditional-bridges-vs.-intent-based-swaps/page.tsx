'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, useDisclosure, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `# Traditional Bridges vs. Intent-Based Swaps

| Feature                  | Traditional Bridges 🏗️                         | Intent-Based Swaps ⚡                                      |
| ------------------------ | ----------------------------------------------- | --------------------------------------------------------- |
| Scalability              | Limited by locked TVL, leading to bottlenecks   | Access to a global liquidity network, infinitely scalable |
| Slippage & MEV           | Prone to slippage and MEV front-running attacks | Zero slippage, immune to MEV exploitation                 |
| Security                 | Centralized TVL pools create honeypot risks     | No locked TVL, minimizing security vulnerabilities        |
| User Experience (UX)     | Slow transaction speeds, high gas fees          | Ultra-fast swaps, no wait for network finality            |
| Liquidity Requirements   | Requires heavy incentives to attract liquidity  | No need for liquidity bootstrapping or incentives         |

### Why Intent-Based Swaps Are Better 🏅

Intent-based swaps revolutionize cross-chain transactions by eliminating the traditional limitations of bridges. They prioritize security, efficiency, and user experience, making them the future of blockchain interoperability.

`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header onMenuClick={onOpen} />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar isOpen={isOpen} onClose={onClose} />
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Traditional Bridges vs. Intent-Based Swaps
            </ChakraHeading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      </Box>
    </Box>
  )
}

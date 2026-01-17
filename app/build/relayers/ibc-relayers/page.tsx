'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, useDisclosure, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# IBC Relayers

All the relayer details can be found on these dashboard.

> ✅ **Success:** All the platforms listed below are managed by external community supporters. If you notice any inaccuracies, please reach out to them directly for assistance.

1. **Interscope by Positiva** (Prev Paranormal Bros)

<figure><img src="/images/Screenshot 2024-12-03 at 12.09.19 AM.png" alt=""><figcaption><p><a href="https://persistence.interscope.pro/"><em>https://persistence.interscope.pro/</em></a></p></figcaption></figure>
`
  const hideFirstHeading = true
  const description = 'Huge shout-out to our reliable IBC-Relayer operators!'
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
            <>
              <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={description ? 2 : 4}>
                IBC Relayers
              </Heading></Link>
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
                  {description}
                </Text>
              )}
            </>
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

'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Container, Heading, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# 🦾 Create Your Persistence Address

Once you have your [wallet setup](/begin-and-explore/wallet-setup) done, it takes less than a minute to ensure the ‘Persistence chain’ is visible in your [Keplr wallet](https://wallet.keplr.app/).



### Click on ‘Settings’ at the bottom right-hand corner

<figure><img src="https://blog.persistence.one/wp-content/uploads/2024/12/Screenshot-2024-12-03-at-10.52.38%E2%80%AFAM-1024x596.png" alt=""><figcaption></figcaption></figure>



### Click on ‘General’ on the settings page

<figure><img src="https://blog.persistence.one/wp-content/uploads/2024/12/Screenshot-2024-12-03-at-10.54.24%E2%80%AFAM-1024x596.png" alt=""><figcaption></figcaption></figure>



### Scroll down to find the option ‘Manage chain visibility’

<figure><img src="https://blog.persistence.one/wp-content/uploads/2024/12/Screenshot-2024-12-03-at-10.55.11%E2%80%AFAM-1024x596.png" alt=""><figcaption></figcaption></figure>



### Ensure that the ‘Persistence chain’ is selected

<figure><img src="https://blog.persistence.one/wp-content/uploads/2024/12/Screenshot-2024-12-03-at-10.56.23%E2%80%AFAM-1024x596.png" alt=""><figcaption></figcaption></figure>



### After clicking ‘Save’ and opening your Keplr wallet, you can find and copy your Persistence address by clicking the copy button beside it

<figure><img src="https://blog.persistence.one/wp-content/uploads/2024/12/Screenshot-2024-12-03-at-10.57.41%E2%80%AFAM-1024x596.png" alt=""><figcaption></figcaption></figure>



Now you are all set to acquire $XPRT from either a centralised exchange or a decentralised exchange to your Keplr wallet.
`
  const hideFirstHeading = true
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>🦾 Create Your Persistence Address</Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
  )
}

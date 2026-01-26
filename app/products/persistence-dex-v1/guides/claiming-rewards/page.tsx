'use client'
import { useColorMode } from '@chakra-ui/react'

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
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Claiming Rewards

Liquidity providers can claim rewards in real-time on Persistence DEX, unlike on an epoch basis on most DEXs.

Follow the steps below to claim your liquidity mining rewards.

* Head over to the assets page - [app.persistence.one/assets](https://app.persistence.one/assets)

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FGg9zUkYTMIkzpS4u8Jn4%252FScreenshot%25202023-05-25%2520at%25205.19.03%2520PM.png%3Falt%3Dmedia%26token%3Dd6c11c77-ecce-418d-befa-b6a46c670277&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=c1a803fdd66852f180a2a3207aa87fbc85e9209c11d3d3e2cbfb7a1be6a41477" alt=""><figcaption></figcaption></figure>

* Click on the "Claim All Rewards" button.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FYCBCVBDyD2lCBoJqbpF8%252FScreenshot%25202023-05-25%2520at%25205.19.37%2520PM.png%3Falt%3Dmedia%26token%3De9207185-6fa1-4112-aab1-f3c7b78c51fb&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=d6ccdb080fe5616de4c5d6d6f9e6f7bb47bf5ca170aedf1c7885352157a097f2" alt=""><figcaption></figcaption></figure>

* Click on the "Claim Rewards" button to confirm.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Fh2ROXMWSDLTKVCs0wIXc%252FScreenshot%25202023-05-25%2520at%25205.20.15%2520PM.png%3Falt%3Dmedia%26token%3Dc83b7965-5cb2-4aa2-8f18-366840a30aee&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=a64770aa448372cd92c402ecca2509b48f3741f01dcf02b2d8e4bcdc4a33ab06" alt=""><figcaption></figcaption></figure>

Confirm the transaction to claim rewards in your wallet.
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
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Claiming Rewards
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

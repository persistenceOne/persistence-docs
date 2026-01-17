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
# XPRT Token

<figure><img src="/images/XPRT.jpg" alt=""><figcaption></figcaption></figure>

> ✅ **Success:** **Note:** For your safety, always verify the contract addresses when bridging your tokens to other ecosystems. Using an incorrect token contract address may result in the loss of funds.

<table><thead><tr><th width="209">Network</th><th width="471">IBC Denom/Token Contract</th><th>Managed by/Contract Owner</th></tr></thead><tbody><tr><td>Persistence Core-1</td><td>persistence/uxprt</td><td>Persistence One</td></tr><tr><td>Osmosis</td><td>ibc/A0CC0CF735BFB30E730C70019D4218A1244FF383503FF7579C9201AB93CA9293</td><td>Osmosis Zone</td></tr><tr><td>AxelarNet</td><td>ibc/553507B81B0A26B2FF168B2A56A7CEB7C75491994D2DB5784AC6E40874E27E63</td><td>Axelar</td></tr><tr><td>Base</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Arbitrum</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Avalanche</td><td>0xe9ED8e918A20937E2C6B6f9d9a249dc6E99D3D3e</td><td>Axelar</td></tr><tr><td>BNB Chain</td><td>0xd060040976a02f0e330d3ADFEb5dc418f41Da80A</td><td>Axelar</td></tr><tr><td>Blast</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Ethereum</td><td>0xD454b59f16D42667Be2fA55292d16647E27f40C4</td><td>Axelar</td></tr><tr><td>Optimism</td><td>0xc7Edf7B7b3667a06992508e7B156eff794a9e1c8</td><td>Axelar</td></tr><tr><td>Polygon</td><td>0xc690C48E3a64d8b59E54aD4202DF3cb95a85dB79</td><td>Axelar</td></tr></tbody></table>

> ℹ️ **Info:** To find updates for XPRT, you can check the dedicated page on the Persistence One blog.

<div class="embed-container"><iframe src="https://blog.persistence.one/xprt/" frameborder="0" allowfullscreen></iframe></div>

To check all the EVM Token contract addresses for XPRT, you can check [here](https://axelarscan.io/resources/assets).

`
  const hideFirstHeading = true
  const description = 'This documentation contains all the IBC Denom or Token Contract for XPRT on the respective chains.'
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
                XPRT Token
              </Heading></Link>
            </>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
                  {description}
                </Text>
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

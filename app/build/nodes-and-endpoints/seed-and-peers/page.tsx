'use client'
import { useColorMode } from '@chakra-ui/react'

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
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Seed & Peers

## Seed

Seed nodes are used to provide a list of peers (other nodes) for new nodes within the network to connect to.

| Provider              | Mainnet (core-1)                                                                      | Testnet (test-core-2)                                                                              | Testnet (test-core-1)                                                                   |
| --------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Allnodes.com          | e1b058e5cfa2b836ddaa496b10911da62dcf182e@persistence-seed-1.allnodes.me:26656         |                                                                                                    |                                                                                         |
| Allnodes.com          | e726816f42831689eab9378d5d577f1d06d25716@persistence-seed-2.allnodes.me:26656         |                                                                                                    |                                                                                         |
| AutoStake             | ebc272824924ea1a27ea3183dd0b9ba713494f83@persistence.mainnet.seed.autostake.net:26896 | 5c2a752c9b1952dbed075c56c600c3a79b58c395@persistence-testnet-seed.autostake.com                    | 5c2a752c9b1952dbed075c56c600c3a79b58c395@persistence.testnet.seed.autostake.net:26896   |
| CryptoCrew Validators | eaa76966cad27a9807b7d8b9a62c9b2ca4924581@tenderseed.ccvalidators.com:26003            |                                                                                                    |                                                                                         |
| Paranormal Bros       | 646d0ad08c408f93276f90cd29d4e410e2d60f63@xprt.paranorm.pro:25656                      |                                                                                                    |                                                                                         |
| Persistence           | fbf0aa94b512902a249b246ed5763b50df9c0543@seed.core.persistence.one:26656              |                                                                                                    | b4237f8a7ca357d380ad119b76cbceec7e7e8a75@seed.testnet.persistence.one:26656             |
| Polkachu              | ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@seeds.polkachu.com:15456                     | [https://polkachu.com/testnets/persistence/seeds](https://polkachu.com/testnets/persistence/seeds) | ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0@testnet-seeds.polkachu.com:15456               |
| Starsquid             | c16799ee5a236e08b1e49df62a545cf55d976dab@seed-persistence.starsquid.io:15607          |                                                                                                    |                                                                                         |
| Genesis Lab           | ce9dc9467af943bf35f17f04cfcdf3895914d867@seed-persistence-01.stakeflow.io:33656       |                                                                                                    | 61c6448536ca4445465c2fa907a5e7ebb688b2a4@seed-persistence-testnet-01.stakeflow.io:19007 |

## Peers

| Provider        | Mainnet (core-1)                                                                      | Testnet (test-core-2)                                                                                                                                                                                             | Testnet (test-core-1)                                                                 |
| --------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| AutoStake       | ebc272824924ea1a27ea3183dd0b9ba713494f83@persistence.mainnet.peer.autostake.net:26896 | 5c2a752c9b1952dbed075c56c600c3a79b58c395@persistence-testnet-peer.autostake.com                                                                                                                                   | 5c2a752c9b1952dbed075c56c600c3a79b58c395@persistence.testnet.peer.autostake.net:26896 |
| Paranormal Bros | 646d0ad08c408f93276f90cd29d4e410e2d60f63@xprt.paranorm.pro:25656                      |                                                                                                                                                                                                                   |                                                                                       |
| Polkachu        | 25fc0c04fe3387e8b28aefb364e2e1736860cff1@65.108.234.23:15456                          | [https://polkachu.com/testnets/persistence/peers](https://polkachu.com/testnets/persistence/peers)                                                                                                                | 987c7cd05003194334f55ed5cbcc0fe8cd9df021@65.108.233.109:15456                         |
| Genesis Lab     | ce9dc9467af943bf35f17f04cfcdf3895914d867@135.181.113.227:33656                        |                                                                                                                                                                                                                   | 61c6448536ca4445465c2fa907a5e7ebb688b2a4@65.21.202.61:19007                           |
| Persistence     |                                                                                       | <p>1. cee6b94965f301e8b5ad905a65fa39c03cd193ce@51.68.152.17:26656</p><p>2. 7f971fc5fc2ffedbaf32f3b4021645571461a712@198.244.177.67:26656</p><p>3. 21ca0b996db604681fb73721ecb01d2c6410c628@162.19.94.46:26656</p> |                                                                                       |
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Seed & Peers
            </Heading></Link>
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

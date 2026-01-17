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
  const content = `# Fees

#### There are two kinds of fees users pay on Persistence DEX: <a href="#there-are-two-kinds-of-fees-users-pay-on-dexter" id="there-are-two-kinds-of-fees-users-pay-on-dexter"></a>

* Transaction Fees
* Swap Fees

#### Transaction Fees <a href="#transaction-fees" id="transaction-fees"></a>

Transaction fees are paid by any user to post a transaction on the chain. The transaction fee is distributed to XPRT stakers on the network as block rewards.

#### Swap Fees <a href="#swap-fees" id="swap-fees"></a>

Swap fees are charged to all traders performing swaps in any of the pools available on Persistence DEX. Swap fees are calculated as a percentage of the swap amount specific to each pool. Swap fees are charged on the input asset of a swap (So if a user swaps ATOM for XPRT, they pay the swap fee in the form of ATOM). This is a configurable parameter decided by the Vault Admin. The default fee is set to 0.3%. The swap fee will be distributed between liquidity providers and the Persistence Community Pool as defined by the Vault Admin.

#### Example <a href="#example" id="example"></a>

Let's say we swap 100 ATOM for XPRT on Persistence DEX, the total fees charged would include the swap fees and the transaction fees.

**Swap Fees** - A 0.3%(about $3 in this case) swap fee will be charged in the input asset, in this case - $ATOM

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FXxnWi0eEMeFgvFNemXoK%252FScreenshot%25202023-05-25%2520at%25202.51.04%2520PM.png%3Falt%3Dmedia%26token%3D4181ae60-0792-45be-b505-7bf9bd145dd1&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=16005dd68e5da04c6cb4a778d07ac8f37f4b779331a2bc8db554f2933d68272f" alt=""><figcaption></figcaption></figure>

**Transaction Fees** - A transaction fee will be charged in $XPRT(the native asset of the chain) to execute the swap transaction on the Persistence Core-1 chain.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FjHN3KGhI0pcKJNScakbE%252FScreenshot%25202023-05-30%2520at%25208.55.18%2520PM.png%3Falt%3Dmedia%26token%3Df11401f9-4f65-48a3-a0fc-bd3a311ddfd6&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=aec35e82c0617aeb2712ce622ce884b53ea6b971df57ba2ea369c8f06e387859" alt=""><figcaption></figcaption></figure>
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
              Fees
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

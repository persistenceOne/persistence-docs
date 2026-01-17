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
  const content = `# Intents for Blockchain Interoperability

### What are Intents?

Imagine you want to perform a task, like sending money to a friend, but you don’t want to worry about all the technical details. Instead, you simply state your intention, and the system figures out the rest. That’s the basic idea behind intents and purposes in the blockchain world.

Intents are high-level commands that tell the system what you want to achieve without needing to know how it’s done.

### How Intents Power Cross-Chain Swaps

Intents simplify complex interactions across different blockchain networks. They make it easier for users and applications to interact with various blockchains without dealing with the technical intricacies of each one.

### Key Components of Intent

<table data-view="cards"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><strong>User Declaration 💬</strong></td><td></td><td>Users state their desired outcome.</td></tr><tr><td><strong>Solvers 🤖</strong></td><td></td><td>These are entities or protocols that interpret and fulfil the intent.</td></tr><tr><td><strong>Execution ⚙️</strong></td><td></td><td>The solvers carry out the necessary steps to fulfil the intent.</td></tr></tbody></table>

### Who are Solvers?

These are third-party actors who compete to fulfil the intent signed by the user.These can be: Cross-Chain Bridges, Liquidity providers, Smart Contract Executors(like AMMs) etc.

### How do Intents work?



### Declare Your Intent

You start by specifying what you want to do and sign the message. For instance, you might want to move assets from one BTC L2 to another BTC L2 or any chain that supports a BTC variant, like from Merlin to BNB Chain.



### Solvers Take Over

Blockchain interoperability protocols, known as solvers, understand your intent and figure out the best way to accomplish it. This may involve several steps, such as converting tokens, bridging assets, or interacting with smart contracts on different blockchains.



### Funds Handling

When you submit an intent, your funds might be temporarily held in a smart contract or escrow to ensure security and proper execution.



### Fulfilment on the Destination Chain

Solvers execute all the required actions behind the scenes. For example, they swap M-BTC for BTCB and transfer it to your wallet on the Binance Smart Chain.



### How Solvers get paid :money\\_with\\_wings:

* Solvers get compensated for their services through fees or incentives.
* A small transaction fee is charged for executing the intent.
* Additional charges may apply for using specific services or protocols.
* In some cases, there may be rewards in the form of native tokens or governance tokens.

### Benefits of an Intent-Based Architecture

* **Simplicity:** Users don’t need to understand the technical details of different blockchains, making blockchain accessible to everyone.
* **Efficiency:** Solvers find the most efficient way to complete your task, saving time and costs.
* **Security:** Reduces the risk of errors in complex transactions, ensuring your transactions are secure and reliable.

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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Intents for Blockchain Interoperability
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

import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Creating New Pool - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Creating New Pool

This page is intended to guide integrating teams on setting up pools for their tokens on Persistence DEX.

## 📌 Important details to note prior to creation of a new pool on Persistence <a href="#important-details-to-note-prior-to-creation-of-a-new-pool-on-dexter" id="important-details-to-note-prior-to-creation-of-a-new-pool-on-dexter"></a>

1. Tokens must be present on the Persistence Chain and in order for tokens to be present they must have an active relayer with Persistence
2. Persistence DEX does not allow for duplication of pools of the same pool type and assets
3. Fees Required in order to create a new pool
   1. Pool Creation Fee - 250 XPRT is required regardless of the type of pool
   2. Deposit Advance - 3,500 XPRT is required as a deposit advance while creation of the proposal as decided by the Persistence Governance.
4. New Pool will be visible on Persistence DEX after the approval of the proposal.
5. If you need any support, please raise a ticket on [our Discord server](https://discord.persistence.one), and the team will be available to help.

## ✨ There are several different types of liquidity pools on Persistence DEX , each with unique benefits; they are as follows: <a href="#there-are-several-different-types-of-liquidity-pools-on-dexter-each-with-unique-benefits-they-are-as" id="there-are-several-different-types-of-liquidity-pools-on-dexter-each-with-unique-benefits-they-are-as"></a>

1. **Metastable Pool** - Best suited for liquid-staked assets such as stkATOM and interest-bearing tokens.
2. **Weighted Pool** - Best suited for any kind of assets.
3. **Stable Swap Pool** - Best suited for similarly priced tokens like stablecoins.
`
  const hideFirstHeading = true

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Creating New Pool
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

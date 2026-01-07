import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Traditional Bridges vs. Intent-Based Swaps - Persistence Docs',
  description: '',
}

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

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Traditional Bridges vs. Intent-Based Swaps
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

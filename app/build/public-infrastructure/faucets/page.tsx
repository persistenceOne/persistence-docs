import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Faucets - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Faucets

This page provides a list of available faucets for both the Persistence mainnet and testnet. Access these resources to request tokens, test transactions, and support your development or experimentation with Persistence’s blockchain environment.

| Provider             | Mainnet (core-1)                                                                     | Testnet (test-core-2)                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| All That Node (DSRV) |                                                                                      | [https://www.allthatnode.com/faucet/persistence.dsrv](https://www.allthatnode.com/faucet/persistence.dsrv) |
| Stakely.io           | [https://stakely.io/en/faucet/persistence](https://stakely.io/en/faucet/persistence) | [https://stakely.io/en/faucet/persistence-testnet](https://stakely.io/en/faucet/persistence-testnet)       |
| Paranormal Bros.     |                                                                                      | [https://ptf.paranorm.pro](https://ptf.paranorm.pro)                                                       |
| Kitkat Zone          | [https://faucet.kitkat.zone](https://faucet.kitkat.zone)                             | [https://faucet.kitkat.zone](https://faucet.kitkat.zone)                                                   |

> ℹ️ **Info:** No balance in the faucet? Visit[connect-and-follow](/docs/community-and-support/connect-and-follow.md "mention") to contact us directly for tokens!
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
              Faucets
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Smart Contracts - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Smart Contracts

**Section to be reviewed and updated**

Via CosmWasm, the Persistence chain enables developers to deploy smart contracts on the chain allowing to build Dapps for a variety of use cases. Find out how it all works in the following sections

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Overview</strong></td><td><a href="overview.md">overview.md</a></td></tr><tr><td><strong>Uploading a contract</strong></td><td><a href="uploading-a-contract.md">uploading-a-contract.md</a></td></tr><tr><td><strong>CosmWasm</strong></td><td><a href="cosmwasm.md">cosmwasm.md</a></td></tr></tbody></table>
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
              Smart Contracts
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

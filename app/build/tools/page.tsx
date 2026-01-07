import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Developer Tools - Persistence Docs',
  description: 'A builder without the right tool is just a fool',
}

export default function Page() {
  const content = `
# Developer Tools

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-cover data-type="files"></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Persistence JS</strong></td><td><a href="/images/Screenshot 2025-01-01 at 2.46.16 PM.png">Screenshot 2025-01-01 at 2.46.16 PM.png</a></td><td><a href="persistence-js.md">persistence-js.md</a></td></tr><tr><td><strong>Persistence SDK</strong></td><td><a href="/images/Screenshot 2025-01-01 at 2.46.41 PM.png">Screenshot 2025-01-01 at 2.46.41 PM.png</a></td><td><a href="persistence-sdk.md">persistence-sdk.md</a></td></tr></tbody></table>
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
              Developer Tools
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              A builder without the right tool is just a fool
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Math Wallet - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Math Wallet

**Math Wallet** doesn't support 118 coin-type wallet addresses currently. We are in touch with the team and integration is on it's way!

> ℹ️ **Info:** For the time being, 750 coin-type wallet will function as usual.&#x20;

Kindly check back here after some time or sign up for the updates on this from here:

<div class="embed-container"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdaEj_qlTkuSCk4ywVxksfVWcKB1DbCvisDGwo15JzUBjd3dQ/viewform" frameborder="0" allowfullscreen></iframe></div>

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
              Math Wallet
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Analytics - Persistence Docs',
  description: 'List of Network Analytics Dashboards',
}

export default function Page() {
  const content = `
# Analytics

****

## Network Stats

<div class="embed-container"><iframe src="https://persistence.smartstake.io/stats" frameborder="0" allowfullscreen></iframe></div>

## Validator Stats

<div class="embed-container"><iframe src="https://persistence.smartstake.io/" frameborder="0" allowfullscreen></iframe></div>

<div class="embed-container"><iframe src="https://observatory.zone/persistence" frameborder="0" allowfullscreen></iframe></div>

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
              Analytics
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              List of Network Analytics Dashboards
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

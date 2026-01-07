import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'IBC Relayers - Persistence Docs',
  description: 'Huge shout-out to our reliable IBC-Relayer operators!',
}

export default function Page() {
  const content = `
# IBC Relayers

All the relayer details can be found on these dashboard.

> ✅ **Success:** All the platforms listed below are managed by external community supporters. If you notice any inaccuracies, please reach out to them directly for assistance.

1. **Interscope by Positiva** (Prev Paranormal Bros)

<figure><img src="/images/Screenshot 2024-12-03 at 12.09.19 AM.png" alt=""><figcaption><p><a href="https://persistence.interscope.pro/"><em>https://persistence.interscope.pro/</em></a></p></figcaption></figure>
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
              IBC Relayers
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Huge shout-out to our reliable IBC-Relayer operators!
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

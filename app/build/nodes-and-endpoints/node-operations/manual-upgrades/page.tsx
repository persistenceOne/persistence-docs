import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Manual upgrades - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Manual upgrades

## Upgrade Node by manually swapping the upgrade binary (without cosmovisor)

1. Wait for **persistenceCore** to reach the upgrade height.
2. Look for a panic message, followed by endless peer logs, then **stop the daemon**.
3.  Run the following commands:

    \`\`\`bash
    # ensure you replace \`BINARY_VERSION\` with the appropriate upgrade version
    cd $HOME/persistenceCore
    git pull
    git checkout BINARY_VERSION # replace with the binary version
    mkdir bin
    make build
    cp bin/persistenceCore <destination-binary> # destination binary SHOULD be at "~/go/bin/persistenceCore"
    \`\`\`
4. Start the **persistenceCore** daemon again, watch the upgrade happen, and then continue to hit blocks.
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
              Manual upgrades
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

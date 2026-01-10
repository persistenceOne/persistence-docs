'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text , useDisclosure } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Manual upgrades
            </Heading>
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

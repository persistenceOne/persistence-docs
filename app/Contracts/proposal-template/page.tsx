'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Box, Container, Heading, Text, Link, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Contract Propoal

## Preamble
\`\`\`
Title: <Contract Name/Type:> <Upload Code/Instantiate Contract>
Author(s): <List of authors' names and/or email addresses and GitHub handles>
Contributors: <List of contributor's names and/or email addresses and GitHub handles>
Tags: <Contract/Code>
Status: <Assigned by  Editor>
Date Proposed: <yyyy-mm-dd>
Date Ratified: <yyyy-mm-dd>
License: <Sdded by Author>
\`\`\`

## References

- A list of supporting materials referenced.

## Summary

- A short description of what the Proposal is focused on. Suggest 30 words max.

## Abstract

- A 3-5 sentence description of the full Propoal going through the contract that is to be added to the chain.

## Motivation

- A short description of the motivation behind creating the contract.

## Specification

- Proposed process standard details - describes the new process or feature.

### Proposed Code

-  The final code or link to the reference or resources.

### Test Cases

- For the implementation or testing of the proposed code.

### Security Considerations

- This is one of the most important aspects of Contract Proposal. The purpose of this section is to proactively document any security-relevant design information, decisions, potential failure modes, implementation details, and important discussions related to the proposed. This section helps to optimize the process by providing proactive guidance on security considerations when proposing a change that will affect the persistence chain.

### Auditor Information and Report

- This section includes the audit partner details and the final audit report for the proposed code.

### Licensing
- Recommended licenses for developed code:
    -   MIT: [Expat/MIT/X11 license](https://opensource.org/licenses/MIT)
    -   BSD-2-Clause: [OSI-approved BSD 2-clause license](https://opensource.org/licenses/BSD-2-Clause)
    -   BSD-3-Clause: [OSI-approved BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause)
    -   CC0-1.0: [Creative Commons CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
    -   GNU-All-Permissive: [GNU All-Permissive License](http://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html)
    -   Apache-2.0: [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0)`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
  const pathname = usePathname()
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
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Contract Propoal
            </Heading></Link>
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

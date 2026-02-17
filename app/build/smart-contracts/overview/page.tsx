'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Overview

## Workflow

For you to upload contract on persistence chain you would have to go through the following steps.

### 1. Open a discussion

[Persistence Forums](https://forum.persistence.one/) is the first step towards putting your contract on persistence chain. You can find other proposal under the _proposal_ category. For a contract proposal there is a specific format you need to follow, have a look at the proposals that are already on the forums or have a look at the [reference](/Contracts/proposal-template).

The purpose of using forum is to give the core developers a clear picture of any security concerns related to contract. This might also streamline your efforts so that your contract can be up on the chain in no time.

If there are any concerns our developers will be taking it up with you so please make sure to mention your preferred contract detail.

Once this contract proposal discussion has been accepted you can proceed to upload your code and instantiate your contract.

### 2. Submitting Contract Code

You need to upload your contract code to the chain before instantiating. This is done through an on chain proposal.

Find a reference on [how to submit a proposal?](/build/smart-contracts/uploading-a-contract#code-upload-proposal)

Now, you can request to vote on the proposal in the forum discussion.

\`\`\`
proposal vote period: 
\`\`\`

### 3. Instantiate Contract

Once the above proposal passes your code will be submitted to the chain, and you will receive your codeId. You won't get your contract address yet. CodeId is used for initiating the contract after which you will receive the contract address and use it for the intended purpose.

Find a reference on [how to submit a proposal for initiating contract?](/build/smart-contracts/uploading-a-contract#initiate-contract)

Now you can request to vote again on the relative discussion. After the proposal passes the contract address can be retrieved from the chain.

## Why this Process?

## Resubmission

The process can be repeated for up to 3 more times if it failed to pass due to legitimate external reasons (e.g., potential low governance participation that did not meet the minimum on-chain quorum).
`
  const hideFirstHeading = true
  const pathname = usePathname()
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
        <Box display="flex" flex="1" overflow="hidden" flexDirection={{ base: "column", xl: "row" }}>
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Overview</Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}

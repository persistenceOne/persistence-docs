import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Overview - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# Overview

## Workflow

For you to upload contract on persistence chain you would have to go through the following steps.

### 1. Open a discussion

[Persistence Forums](https://forum.persistence.one/) is the first step towards putting your contract on persistence chain. You can find other proposal under the _proposal_ category. For a contract proposal there is a specific format you need to follow, have a look at the proposals that are already on the forums or have a look at the [reference](/docs/Contracts/proposal-template).

The purpose of using forum is to give the core developers a clear picture of any security concerns related to contract. This might also streamline your efforts so that your contract can be up on the chain in no time.

If there are any concerns our developers will be taking it up with you so please make sure to mention your preferred contract detail.

Once this contract proposal discussion has been accepted you can proceed to upload your code and instantiate your contract.

### 2. Submitting Contract Code

You need to upload your contract code to the chain before instantiating. This is done through an on chain proposal.

Find a reference on [how to submit a proposal?](/docs/build/smart-contracts/uploading-a-contract.md#code-upload-proposal)

Now, you can request to vote on the proposal in the forum discussion.

\`\`\`
proposal vote period: 
\`\`\`

### 3. Instantiate Contract

Once the above proposal passes your code will be submitted to the chain, and you will receive your codeId. You won't get your contract address yet. CodeId is used for initiating the contract after which you will receive the contract address and use it for the intended purpose.

Find a reference on [how to submit a proposal for initiating contract?](/docs/build/smart-contracts/uploading-a-contract.md#initiate-contract)

Now you can request to vote again on the relative discussion. After the proposal passes the contract address can be retrieved from the chain.

## Why this Process?

## Resubmission

The process can be repeated for up to 3 more times if it failed to pass due to legitimate external reasons (e.g., potential low governance participation that did not meet the minimum on-chain quorum).
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
              Overview
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Bonus Delegation

| Status        | Start Date | End Date   |
| ------------- | ---------- | ---------- |
| Bonus Cycle 1 | 25/08/2023 | 14/03/2024 |
| Bonus Cycle 2 | TBA        | TBA        |



We are thrilled to announce a special bonus delegation opportunity for all validators who choose to relocate their nodes out of high-density regions and Internet Service Providers (ISPs).&#x20;

At our core, we believe in decentralization, and with 100 validators active set, this initiative aligns perfectly with our mission to distribute network nodes across a wider geographic area.

### Why Relocate

\\
Relocating your validator node from high-density regions and ISPs can greatly enhance the overall resilience, security, and decentralization of our network (i.e. Nakamoto coefficient).&#x20;

By spreading our network presence across diverse locations, we ensure that our blockchain remains robust and less vulnerable to regional disruptions.

### What's In It for Validators?

\\
As a token of our appreciation for contributing to the network's health and decentralization, validators who make this move will receive a special bonus delegation. This bonus delegation will not only boost your staking rewards but also help you play a vital role in strengthening the network.

### Where to Find More Information?

\\
To learn more, we encourage you to visit Observatory & Network Visualizer. These resources will provide you with detailed insights for your validator nodes:

1\\. [Validator Observatory](https://observatory.zone/persistence) \\
2\\. [Network Visualizer](https://tools.highstakes.ch/geoloc/) (by High Stakes)

### How to Participate?

\\
1\\. Identify if your node is the high-density segment (Red, orange, or yellow).\\
2\\. Figure out which location could be most appropriate for your node.\\
3\\. Provide a heads-up to the team on our validator group on Telegram or Discord along with the new region details and ETA.\\
4\\. Start the migration, once completed provide the details to the team.&#x20;

If you have any questions or need further assistance, please don't hesitate to contact us.



***

### 🙋‍♂️ FAQs



<details>

<summary>Which all validators are eligible for this bonus?</summary>

This bonus delegation is only for validators who have been a part of the FDP Round 2.

</details>

<details>

<summary>Is RPCs, Endpoints or other services also included?</summary>

No, this bonus delegation is only for validator nodes.

</details>

<details>

<summary>Incorrect details are shown about my validator nodes. What should i do?</summary>

We understand that sometimes these tools might not show the most accurate data, Kindly ping us so that we can get that fixed.

</details>

<details>

<summary>My node is not eligible for this bonus delegation, do you have anything for us in the store?</summary>

We are always open to suggestions that can make our infra more robust and decentralised, Do send us a message if you have any interesting ideas

</details>

\\
Let's strengthen our network together! 🦾
`
  const hideFirstHeading = true
  const [headings, setHeadings] = useState<HeadingItem[]>([])

  useEffect(() => {
    const extracted = extractHeadings(content)
    setHeadings(extracted)
  }, [content])


  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box display="flex" flex="1" overflow="hidden">
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              Bonus Delegation
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Bonus Delegation for Validators Moving Out of High-Density Regions and ISPs!
            </Text>
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

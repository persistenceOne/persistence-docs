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
  const content = `# Round 1 - Closed

> ⚠️ **Warning:** In order to receive foundation delegations for this round, it is required to apply through [this form](https://forms.gle/NZnGe6iw3ev6qrwt7) before 30/12/2022 - 23.59UTC

## Baseline Delegation

Minimum requirements to be met in order to be eligible for any foundation delegation (including bonus delegations).&#x20;

On-chain:

* [ ] Be in the active set at all times
* [ ] Voting Power ≤2.5%
* [ ] Commission: ≤5%
* [ ] Self-Stake: ≥1,000 XPRT
* [ ] Uptime (30day average): ≥95% at all times
* [ ] Governance Participation (starting from Proposal #11)\\*: ≥80%&#x20;

Off-chain:&#x20;

* [ ] Not slashed in the last 6 months
* [ ] Applied through [this form](https://forms.gle/NZnGe6iw3ev6qrwt7) before 30/12/2022 - 23.59UTC

From 01/01/2023 onwards, all validators will be evaluated continuously against the above criteria. When submitting your application, please ensure that everything is in place to meet the above criteria.&#x20;

> ⚠️ **Warning:** If any of the above criteria are no longer met, the foundation delegation will be immediately removed



## Bonus Delegations

The following contributions are deemed valuable to the ecosystem and will earn points towards the calculation of a bonus delegation when submitted in the application form. Note that similar contributions don't necessarily earn similar points. In this first round, the points will be awarded by the Foundation based on deemed necessity, value and uniqueness of the contribution.&#x20;

#### Mainnet Contributions

<table><thead><tr><th width="596">Contribution</th></tr></thead><tbody><tr><td>Running IBC Relayers</td></tr><tr><td>Running ICA Relayers</td></tr><tr><td>Running Graph / subGraph Nodes</td></tr><tr><td>Providing API/RPC services</td></tr><tr><td>Maintain tooling - Explorers, Wallet  Support, Analytics etc.</td></tr></tbody></table>

#### Testnet Contributions

<table><thead><tr><th width="599">Contribution</th></tr></thead><tbody><tr><td>Run a Testnet Validator (95% uptime + fast responses)</td></tr><tr><td>Run a Testnet Faucet</td></tr><tr><td>Run Testnet IBC Relayers</td></tr><tr><td>Run Testnet ICA Relayers</td></tr><tr><td>Providing API/RPC services</td></tr><tr><td>Maintain Testnet tooling - Explorers, Wallet Support, Analytics etc.</td></tr></tbody></table>

#### Community Contributions

<table><thead><tr><th width="598">Contribution</th></tr></thead><tbody><tr><td>Educational Content</td></tr><tr><td>Marketing</td></tr><tr><td>Host events</td></tr><tr><td>Research Reports</td></tr><tr><td>Create and manage regional Persistence Communities</td></tr><tr><td>Official Community Moderation</td></tr></tbody></table>

#### Other Contributions

<table><thead><tr><th width="597">Contribution</th></tr></thead><tbody><tr><td>Contributions to Persistence Github</td></tr><tr><td>Contributions to Persistence Documentation</td></tr><tr><td>Provide validator support (articles, videos, onboarding)</td></tr><tr><td>Successful Talent Referrals</td></tr><tr><td>Successful Partnership Referrals (Investors, LPs, Projects)</td></tr><tr><td>Other*</td></tr></tbody></table>

\\*To include contributions that are not listed into this Round, please make your case in the Discord channel ‘validators-discussion’.&#x20;

As the rounds of the Foundation Program progress, the aim is to optimise the program and make the scoring system more community-driven.
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Round 1 - Closed
            </Heading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}

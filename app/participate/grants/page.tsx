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
# Grants

## Introduction

If you’re someone who wants to work on exciting problem statements while solving the fundamental issues around capital inefficiency within the current PoS ecosystem, the Persistence ecosystem is the place for you.

Persistence is committed to unlocking the true potential of staked assets through liquid staking, and we are excited to launch the Persistence Grants Program to work with builders around the world and achieve this vision together.

Persistence core team will work closely with all selected applicants of this program, assisting them along with all phases of development:

* Grants to develop and scale selected projects, leveraging the Persistence tech-stack
* Technical support through consistent product development assistance from the Persistence core team
* Marketing and promotional support via immediate access to our growing community and media partnerships
* Strategic partnerships with validators, protocols, accelerators, advisors and investors within the Persistence ecosystem

## Categories

<table><thead><tr><th width="176">Type</th><th>Description</th></tr></thead><tbody><tr><td>Micro Grant</td><td><p>For projects requiring a small amount of effort, and expected</p><p>to deliver on a shorter timeline (1-2 weeks).</p></td></tr><tr><td>One-off Grants</td><td>For projects requiring more effort that those in micro grants, and expected to deliver in moderate timelines (3-4 weeks). These projects once built can be later handed over to the Persistence Core team for maintenance.</td></tr><tr><td>Ongoing Grants</td><td>For projects requiring high effort such as building a standalone dApp on top of Persistence. Timelines for these projects will be decided on a case-to-case basis based on discussions with the selected applicants. Selected applicants will have to build a functional product to receive the grant. The Persistence core team can then choose to work closely with these applicants to scale the products further.</td></tr><tr><td>Open Grants</td><td>For ideas outside the proposed requirements from Persistence. Builders are invited to come up with ideas that they think</td></tr></tbody></table>

## Scope

Requirements eligible for grants can be found in the running sheet [here](https://docs.google.com/spreadsheets/d/1Vge7KSHS68Fz2_alFOMvLAjumRYsuDaJeJV1qVPu82k/edit#gid=0).

Builders applying under the Open Grants category are encouraged to head over to the [Persistence forum](https://forum.persistence.one/) and community platforms to discuss their ideas.

## How to apply

### Step 1: Application

Application Write to grants@persistence.one with subject as: “Grant Application | \\<Grant ID> | \\<Your Full Name>

The email should contain the following details:

* Basic contact information
* Concise descriptions of how you plan to approach the requirement
  * _In case of a miscellaneous requirement, explain what you wish to build and how it will benefit the Persistence ecosystem and the liquid staking economy_
* Team size and all individual members’ experience
  * _Include all past development/community experience to help the team better evaluate your applications_

The clearer your information is, the faster the review will be completed.

### Step 2: Application Review

Application Review Our team will review all applications as received, on a rolling basis, determine if more information is required, and then potentially schedule an intro call with the team.

### Step 3: Approval / Rejection

Approval / Rejection Applicants will be notified via email on the decision of approval / rejection of their applications. You can check the Requirements sheet to see the status of all Grant IDs.

If the application is accepted, our team will follow-up with a call to scope out specifications and associated timelines.

### Step 4: Follow up

Follow up After an applicant has been selected, the Persistence team will reach out at regular intervals for continual developmental support, and milestone check-ins

### Step 5: Conclusion

Conclusion Respective grants will be disbursed after the selected applicants deliver the required outcomes.

* In case of a Micro or One-Off grant, the collaboration will be concluded after the disbursal.
* In case of On-Going and Open grants, Persistence will evaluate on a case-to-case basis if the collaboration should be continued, based on the quality of the outcomes.

## Terms & Conditions

* Same team/individual can apply for multiple grants. However, each team/individual can apply for a particular grant only once.
* The grant amount associated with a grant ID will be disbursed in full only upon satisfactory delivery of the requirement.
* The grant category and associated amounts are non-negotiable. However, Persistence has the right to amend the grant amounts based on the outcomes delivered by an applicant.
* There can be multiple submissions for each grant ID. Unless specified otherwise, only one applicant will be selected to receive the grant for each grant ID.
* It is at the sole discretion of the Persistence team to select and/or reject applicants for any given grant.
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
              Grants
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Get support from the Foundation to build in the Persistence Ecosystem
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

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
  const content = `
# 🔃 Hosting IPFS Versions with Pinata

This guide provides step-by-step instructions for community members or Validators to pin and host IPFS versions of the frontends for Persistence products on their respective domains. The example uses Pinata as the pinning service and Cloudflare for DNS management.

### 1. Configuring Pinata

#### 1.1 Obtain CID from Release Notes

From the release notes in the respective frontend GitHub repositories, find CIDv0 and CIDv1. If the repository is private, contact us for the latest CIDs. Example: For pWallet, retrieve CIDs from the [latest release notes](https://github.com/persistenceOne/persistenceWallet/releases).

#### 1.2 Pinning on Pinata

1. Go to [Pinata](https://app.pinata.cloud/pinmanager) and click on "Pin by CID."

<figure><img src="/images/image (2).png" alt=""><figcaption></figcaption></figure>

2. Enter CIDv0 in the IPFS CID field and use the release name and version in the name field.

<figure><img src="/images/image (1) (1).png" alt=""><figcaption></figcaption></figure>

3. After successful pinning, navigate to the Gateways Tab.
4. Add a custom domain to the gateway (e.g., ipfs.\\<your\\_validator\\_domain>.\\<top\\_level\\_domain>).

<figure><img src="/images/image (2) (1).png" alt=""><figcaption></figcaption></figure>

> **Note:** A paid plan (Picnic plan) on Pinata will be required.

#### 1.3 Configure DNS on Pinata

1. Click on Domain Info and note the Pinata domain that will be hosted under your domain provider.

<figure><img src="/images/image (3).png" alt=""><figcaption></figcaption></figure>

### 2. Configuring DNS Provider (e.g., Cloudflare)

#### 2.1 Set Up Domain URLs

Host the latest hashes for Persistence products under your domain, such as:

* _https://ipfs.\\<your\\_validator\\_domain>.\\<top\\_level\\_domain>/pwallet_
* _https://ipfs.\\<your\\_validator\\_domain>.\\<top\\_level\\_domain>/pstake_
* _https://ipfs.\\<your\\_validator\\_domain>.\\<top\\_level\\_domain>/dexter_

Example: [https://ipfs.kitkat.zone/pwallet](https://ipfs.kitkat.zone/pwallet), [https://ipfs.kitkat.zone/pstake](https://ipfs.kitkat.zone/pstake), [https://ipfs.kitkat.zone/dexter](https://ipfs.kitkat.zone/dexter)

#### 2.2 Create CNAME Record

1. Create a CNAME record pointing to the custom domain created in Pinata (as per step 1.3).
   * Example: _ipfs.\\<your\\_validator\\_domain>.\\<top\\_level\\_domain>_

#### 2.3 Configure Transform Rules on Cloudflare

1. Use a transform rule to configure a constant URL per product under your hosted domain.
2.  Example: For Cloudflare, add a rule in the Rules section:

    \`\`\`plaintext
    (starts_with(http.request.full_uri, "https://ipfs.<your_validator_domain>.<top_level_domain>/pwallet")
    \`\`\`

    This rule redirects users to the latest pinned deployment for pWallet.

#### 2.4 Note

* Whenever a new app version is released, pin the latest CIDs and update transform rules.
* Release notes on GitHub will be updated with respective CIDs, ensuring users access the latest app release.
* Automate the process by triggering a CI process for pinning CIDs and linking them to your domains when a new release is available.

### 3. Latest Hashes

> ✅ **Success:** **Last Updated**: 30th June, 2025

#### pWALLET ([https://wallet.persistence.one/](https://wallet.persistence.one/))

* CIDv0: QmYDcsQbbZ7K1QVQ2HyH1Vng3Jxg877CRk3Hr4xzA2Qs1b
* CIDv1: bafybeiesy64tqr2iyrdz7rqh2fskgtqor3xkniek43nfn3u2l2piujp5gi
* Public Gateways:
  * [CF-IPFS](https://bafybeiesy64tqr2iyrdz7rqh2fskgtqor3xkniek43nfn3u2l2piujp5gi.ipfs.cf-ipfs.com/)
  * [DWeb Link](https://bafybeiesy64tqr2iyrdz7rqh2fskgtqor3xkniek43nfn3u2l2piujp5gi.ipfs.dweb.link/)

> ✅ **Success:** **Last Updated**: 30th June, 2025

#### pSTAKE ([https://app.pstake.finance/](https://app.pstake.finance/))

* CIDv0: QmSEVVBZz3Tz6DXHgqUegnYkCJfmhGY4LdvNwFjdrbYJ1X
* CIDv1: bafybeibz3lk2nketofkjqgltnvf5imj4chl6unqmtgznvn5v67oihllkdi
* Public Gateways:
  * [CF-IPFS](https://bafybeibz3lk2nketofkjqgltnvf5imj4chl6unqmtgznvn5v67oihllkdi.ipfs.cf-ipfs.com/)
  * [DWeb Link](https://bafybeibz3lk2nketofkjqgltnvf5imj4chl6unqmtgznvn5v67oihllkdi.ipfs.dweb.link/)

> ✅ **Success:** **Last Updated**: 30th June, 2025

#### pDEX ([https://app.persistence.one/](https://app.persistence.one/))

* CIDv0: QmdFVXU7V7SMpdAWnn57oYdY2KJ58kscRKivSMBMqYKbFd
* CIDv1: bafybeig5ruccbktzi4bf7yb3hwec4j3rtdvne426eqxfkkgvquld6hn33a
* Public Gateways:
  * [CF-IPFS](https://bafybeig5ruccbktzi4bf7yb3hwec4j3rtdvne426eqxfkkgvquld6hn33a.ipfs.cf-ipfs.com/)
  * [DWeb Link](https://bafybeig5ruccbktzi4bf7yb3hwec4j3rtdvne426eqxfkkgvquld6hn33a.ipfs.dweb.link/)
`
  const hideFirstHeading = true
  const description = 'Hosting a website/DApp frontend on IPFS grants several benefits, such as serverless hosting, potential resilience to DNS hijacks (together with IPNS/ENS), and high uptime.'
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>🔃 Hosting IPFS Versions with Pinata</Heading>
          )}
              {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color={themeColors.text[500]} mb={4}>
                  {description}
                </Text>
              )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}

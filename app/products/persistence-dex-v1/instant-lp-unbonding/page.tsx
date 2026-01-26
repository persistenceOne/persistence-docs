'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'
import colors from '@/theme/colors'

export default function Page() {
  const { colorMode } = useColorMode()
  const themeColors = colors[colorMode as 'light' | 'dark']
  const content = `# Instant LP Unbonding

## Overview

The Instant LP Unbonding feature is designed to offer Liquidity Providers (LPs) more control over their assets. This feature offers a fast and convenient way for liquidity providers (LPs) to access their liquidity. Normally, withdrawing liquidity involves a 7-day waiting period. However, with this option, LPs can bypass this and get their liquidity immediately. If their liquidity is already in the process of being unbonded, they can also speed up this remaining period. To use this functionality, LPs pay a fee based on the dollar value of their position. This fee is directly deducted from their LP shares, making the process straightforward and efficient. This feature helps strike a balance between providing flexibility to users and ensuring liquidity stability on Persistence DEX.

## Why Use Instant LP Unbonding

* **Immediate Access**: Withdraw your liquidity instantly in times of market crises or emergencies.
* **Risk Mitigation**: The fee structure discourages excessive withdrawals in normal market conditions, which helps maintain a stable liquidity environment, preventing fluctuations that could disrupt overall trading experiences.
* **Gradual Fee Reduction**: ILPU's fee structure adapts based on the remaining unbonding days. If you already have a position being unbonded, the fee gradually decreases as the number of unbonding days left decreases, providing a smoother and more favorable experience for LPs.

## How It Works

The Instant LP Unbonding feature operates on a structured fee tier mechanism, based on the duration of the unlock period. Here's how it works:

* The unlock period is calculated from the time you initiate the unbonding process to the time when your liquidity becomes available for withdrawal.
* The fee you pay for Instant LP Unbonding is determined by this unlock period and falls within predefined fee tiers.
* The longer you are willing to wait for your liquidity, the lower the fee you will be charged.

## Fee Structure

The Instant LP Unbonding feature employs a fee tier mechanism, ensuring fairness and transparency in fee calculation. The key fee parameters are as follows:

* **fee\\_tier\\_interval:** 86400 seconds (1 day)
* **unlock\\_period:** 604800 seconds (7 days)
* **min\\_lp\\_unbonding\\_fee\\_bp:** 300 basis points (3%)
* **max\\_lp\\_unbonding\\_fee\\_bp:** 500 basis points (5%)

For a detailed breakdown of fee tiers, please refer to the fee tiers table:

| Remaining Unbonding Days | Fee Charged |
| ------------------------ | ----------- |
| 7                        | 5%          |
| 6                        | 4.67%       |
| 5                        | 4.33%       |
| 4                        | 4%          |
| 3                        | 3.67%       |
| 2                        | 3.33%       |
| 1                        | 3%          |

## Guides

### Instant Unbond ⚡️

Users receive their tokens instantly with a 5% fee which is deducted from their LP tokens.

**Step by Step guide to Instant Unbond**

* **Step 1:** Select desired pool from which you want to unbond your tokens from

<figure><img src="/images/1.jpeg" alt=""><figcaption></figcaption></figure>

* **Step 2:** Click on “ Unbond”

<figure><img src="/images/2.jpeg" alt=""><figcaption></figcaption></figure>

* **Step 3:** The user has two options to receive their bonded tokens. In order to bypass the 7 days unbonding period - Users have the option to Instant Unbond them to receive their tokens immediately.

> ℹ️ **Info:** Instant Unbond has a fee of 5% that will be deducted in LP shares.

<figure><img src="/images/3.webp" alt=""><figcaption></figcaption></figure>

* **Step 4:** Continue to approve the transaction with the connected wallet.

<figure><img src="/images/4.webp" alt=""><figcaption></figcaption></figure>

* **Step 5:** Transaction Successful.

<figure><img src="/images/5.webp" alt=""><figcaption></figcaption></figure>

🥳 Congratulations! You've successfully Instantly Unbonded your assets on Persistence DEX.

## Instant Unlock 🔓

If the user has tokens which are currently unbonding and they wish to bypass the 7 day unbonding period. - the user can choose to Instant unlock them to receive them instantly.

**Step by Step guide to Instant Unlock**

* **Step 1:** Select desired pool from which you want to unbond your tokens from.

<figure><img src="/images/1.avif" alt=""><figcaption></figcaption></figure>

* **Step 2**: Incase of LP shares that are currently unbonding - The user has the option to Instant Unlock their shares to bypass the 7 day unbonding period.

<figure><img src="/images/2.avif" alt=""><figcaption></figcaption></figure>

* **Step 3:** Click on “instant unlock” to receive their unbonding tokens immediately.

> ℹ️ **Info:** The fee for Instant Unlock ranges between 5% and 3%, adjusted according to the remaining time in the unbonding period will be deducted in LP shares.

<figure><img src="/images/3 (1).webp" alt=""><figcaption></figcaption></figure>

* **Step 4:** Continue to approve the transaction with the connected wallet.

<figure><img src="/images/4 (1).webp" alt=""><figcaption></figcaption></figure>

* **Step 5:** Transaction Successful.

<figure><img src="/images/5 (1).webp" alt=""><figcaption></figcaption></figure>

🥳 Congratulations! You've successfully Instantly Unlocked your assets on Persistence DEX.



## FAQs

**Q1: Is there a waiting period for Instant LP Unbonding?** A1: No, Instant LP Unbonding allows you to withdraw your liquidity instantly.

**Q2: How is the fee calculated?** A2: The fee is determined based on the fee tier mechanism, which considers the unlock period. Refer to the fee tiers section for details.

**Q3: Can I use Instant LP Unbonding under normal market conditions?** A3: While it is possible, the fee structure is designed to disincentivize users from using it for regular withdrawals.

**Q4: Are there any restrictions on the number of times I can use Instant LP Unbonding?** A4: There are no restrictions on the number of times you can use this feature.

**Q5: Is the Instant LP Unbonding fee deducted from my LP shares?** A5: Yes, the fee is deducted directly from your LP shares.
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
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Instant LP Unbonding
            </ChakraHeading></Link>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}

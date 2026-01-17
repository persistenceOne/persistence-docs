'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading as ChakraHeading, Text, useDisclosure, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Stable Swap Pool

A stableswap is an automated market maker (AMM) optimised for similarly priced tokens and provides minimum slippage and efficient liquidity provision.

Stableswap combines the constant product and constant sum functions to achieve minimum slippage and provide a balanced pool. This function acts as a constant sum when the pool is balanced, providing low slippage trades, and shifts towards a constant product as the pool becomes more imbalanced to ensure the pool never runs out of liquidity.

For an in-depth explanation of Stable Swap Pools by Persistence DEX, [click here](https://app.gitbook.com/o/RFufum3BHCKnxiBseM8n/s/9LsBCKFqnrfW4Kl6Y0k0/deep-dive/pools/stableswap).

**How to create Stableswap Pool on Persistence DEX.**

* **Step 1:** Go to Pools page. [https://app.persistence.one/pools](https://app.persistence.one/pools)

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FaHijVp25lMpRKximeF2F%252Fimage.png%3Falt%3Dmedia%26token%3Df9f376b3-3c04-431e-b51f-fde2b575ae0c&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=5e1bce634a9190e24da6b0acfc7ff402c8aca6618ca4ab7a50d40e4658ba38e8" alt=""><figcaption></figcaption></figure>

* **Step 2:** Click "Create New Pool" button.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FZvTpkc6rpLFW9OH3OPKl%252Fimage.png%3Falt%3Dmedia%26token%3D73648ce3-a466-4324-8ff2-8e2321970fa9&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=66fa759f7dd37fb4f1fb6ec82483b582d20e75b0946a3559aa2757dce840a1a8" alt=""><figcaption></figcaption></figure>

* **Step 3:** Choose Pool Type - in this case, Stableswap Pool is selected as the preferred pool type.

You will need 250 XPRT to create the pool and 3500 XPRT as a proposal deposit for the governance proposal.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FZ7icWmI4QN6pouUT6MDC%252Fimage.png%3Falt%3Dmedia%26token%3D333bbc1c-e8f4-415a-89f0-c13bce490c62&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=51a352a2a0185f2a99db6664b4c30b51a9f5067b7edb03876ef46572788800b6" alt=""><figcaption></figcaption></figure>

**Step 4:** Select Token Pair for Stable Swap Pool

Minimum of 2 tokens will need to be selected in order to Create a New Pool.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FZdRohCibC1iYyf4YuGV2%252FScreenshot%25202023-12-20%2520at%25201.02.20%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D4a4d3e73-f71c-48f8-a3c6-94197eb0f7fd&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=11ee60334c389b8bcf8a7166142c0e6edcb5dbb0f6e59400c88f4d6ce73d56b3" alt=""><figcaption></figcaption></figure>

* **Step 5:** Assign token weight and repeat until all tokens have been added; ensure weights add to 100%.

The default settings for Swap Fee, AMP Factor, and Max Spread Limit follow protocol recommendations but can be modified to align with your preferences.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FGPjWiu3yUJrxIgPHGKLz%252Fimage.png%3Falt%3Dmedia%26token%3D6bbfcee1-4e70-4373-ae85-532eb40ac906&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=05564c26160e36f32c7741f2e707c2f501dba333f6ac1b8627c94cce2a9af905" alt=""><figcaption></figcaption></figure>

* _**\\[Optional]**_**&#x20;Step 6:** Add Liquidity by entering a >0 amount of each token to add liquidity to the pool upon creation.

If there's an insufficient balance for any assets, users can deposit those assets first and then proceed to add liquidity to the pool during its creation. Persistence DEX recommends bootstrapping the liquidity with a minimum of $1,000 in the ratio selected.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252F7rXbVc4O1dfP6UQKJZeN%252Fimage.png%3Falt%3Dmedia%26token%3Da4a2ae0a-07ef-46e0-90cd-8eae0d320f19&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=0b8ce471e3a5e97c68e10a2b4853223dedba9cf09680b61495f3e8e7c2b6be08" alt=""><figcaption></figcaption></figure>

_**\\[Optional]**_**&#x20;Step 7:** Set Pool Rewards Schedule by selecting reward token and amount, and rewards time period.

Setting up the rewards schedule is optional and can be done post pool creation. To create set rewards schedule for pool, click this link.

If there's an insufficient balance for any assets, users can deposit those assets first and then proceed to add liquidity to the pool during its creation.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FmvsQADUF4J3gtcfPmxVh%252Fimage.png%3Falt%3Dmedia%26token%3Dd6bb48ca-dac2-490f-bb1d-016a0d8ce965&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=512be84374d257d99ddb66293fbaeea23c9f72b2b653950295447aee6e86fb20" alt=""><figcaption></figcaption></figure>

* **Step 8:** Confirm Pool and Fee Summary Details

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Frnwst4Pa5bZzmizwU2in%252Fimage.png%3Falt%3Dmedia%26token%3D42f64a7d-344f-462e-ab14-308e05cf3c6b&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=f4af42986701656bf9930cc4d8efd00f1428f173aa01670f285c65c4c8d5f603" alt=""><figcaption></figcaption></figure>

* **Step 9:** Create Proposal for setting up the Stable Swap Pool. Title and Description for the proposal are pre defined as per the pool details. Additional information, if necessary, can be included within the additional message text box.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FWEdewmH1Ps5CxjGSEQLj%252Fimage.png%3Falt%3Dmedia%26token%3D4b0ab007-8958-4e04-b1db-2676e959218f&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=437f8a4f7fae0bbdab7af137e161fba48e2d3674323a0cfd58a6bdc5f607eb91" alt=""><figcaption></figcaption></figure>

* **Step 10:** Continue to approve the transaction with the connected wallet.

🥳 **Congratulations!** You have created a Stable Swap Pool with your preferred tokens, a confirmation message would be displayed in the bottom right.

Proposal is created and upon approval from the Persistence Governance, the pool will be created and accessible on the UI.

If you need any additional support, please raise a ticket [on our Discord server](https://discord.persistence.one), and the Persistence DEX Team will be available to help.
`
  const hideFirstHeading = true
  const description = 'Best suited for similarly priced tokens like stablecoins.'
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
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><ChakraHeading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Stable Swap Pool
            </ChakraHeading></Link>

          )}
            {description && (
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mb={4}>
                  {description}
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

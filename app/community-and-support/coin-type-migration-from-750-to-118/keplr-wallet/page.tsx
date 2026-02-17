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
  const content = `# Keplr Wallet

### TLDR

This guide is for users who use [Keplr wallet](https://keplr.app/) & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

***

### Is migration for my wallet address needed?

<table><thead><tr><th width="294.66666666666663">When was the wallet created?</th><th width="172">Default Coin-type</th><th>Migration Required?</th></tr></thead><tbody><tr><td>After 7 October 2022</td><td>118</td><td>No 🎉</td></tr><tr><td>Before 7 October 2022</td><td>750</td><td>Yes</td></tr><tr><td>Don't remember</td><td>-</td><td><a href="keplr-wallet#step-1-check-which-coin-type-youre-using">Refer here</a></td></tr></tbody></table>

> ✅ **Success:** Both coin-type wallet addresses are supported by keplr. Hence both of the addresses can be used simultaneously.

## Step 1: Check which coin-type you're using

<details>

<summary>Add your wallet again in keplr</summary>

<img src="/images/Screenshot 2023-11-01 at 11.55.16 PM.png" alt="" data-size="original"> <img src="/images/Screenshot 2023-11-01 at 11.55.25 PM.png" alt="" data-size="original">

<img src="/images/Screenshot 2023-11-01 at 11.55.34 PM.png" alt="" data-size="original">

<img src="/images/Screenshot 2023-11-01 at 11.56.01 PM.png" alt="" data-size="original">

Note: Name this wallet as "Wallet 2"

</details>

<details>

<summary>Select derivation path</summary>

You'll be given an option to select the coin-type

<img src="/images/Screenshot 2023-11-01 at 11.56.52 PM.png" alt="" data-size="original">

</details>

> ✅ **Success:** **Note:** If you didn't get the option to select your coin-type, that means that you are already on 118 coin-type & no migration is needed.

## Step 2: Make sure you have both the coin-types (750 & 118) wallet addresses added in keplr.

In this documentation, we will be denoting **Wallet 1** as the wallet with **750 coin-type** wallet address and **Wallet 2** as the wallet with **118 coin-type** wallet address.

Hence in this process, we have to move tokens from **Wallet 1** to **Wallet 2**.

## Step 3: Login to pWALLET with keplr & copy the wallet address

* Select **Wallet 2** from the Keplr Extension

<figure><img src="/images/Screenshot 2023-11-02 at 12.46.25 AM.png" alt=""><figcaption></figcaption></figure>

* Sign in pWALLET using keplr (With **Wallet 2**)

<figure><img src="/images/Screenshot 2023-11-02 at 12.32.41 AM.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/images/Screenshot 2023-11-02 at 12.34.24 AM.png" alt=""><figcaption></figcaption></figure>

* Go to 'Receive' & copy your **Wallet 2** address

<figure><img src="/images/Screenshot 2023-11-02 at 12.36.07 AM.png" alt=""><figcaption></figcaption></figure>

## Step 3: Sign into pWALLET with **Wallet 1** & Migrate Tokens

<figure><img src="/images/Screenshot 2023-11-02 at 12.47.54 AM.png" alt=""><figcaption></figcaption></figure>

**Migrating Staked Tokens**

A. Go to 'Staking' tab and select 'Delegated' from the menu.

> Skip this step if you don't have any staked tokens

<figure><img src="/images/Screenshot 2023-11-02 at 12.48.26 AM.png" alt=""><figcaption></figcaption></figure>

B. Check if the validator where you stake/delegate your tokens have enough capacity (i.e Validator Bond) to migrate your tokens (using[ Smartstake](https://analytics.smartstake.io/persistence/valbonds) dashboard)

> Eg: As I delegate \\~23 XPRT to smart stake validator, i need to check if smart stake validator has enough capacity to help facilitate migrate for my tokens. As in my case the validator has the capacity, we can move forward with the migation process.

<figure><img src="/images/Screenshot 2023-10-23 at 11.21.56 AM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Note:** If your validator doesn't have enough capacity, ask your validator to increase it or redelegate your staked/delegated tokens to a validator which has enough capacity for your tokens.

C. Click on '**Actions**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.30.27 AM (1).png" alt=""><figcaption></figcaption></figure>

D. Click on '**Transfer Delegation**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.32.19 AM.png" alt=""><figcaption></figcaption></figure>

E. Enter the amount and your **Wallet 2** address which we copied

<figure><img src="/images/Screenshot 2023-10-23 at 11.34.15 AM.png" alt=""><figcaption></figcaption></figure>

F. There will be 2 transactions, first to 'tokenise' your tokens & then to 'transfer' them to new address.

<figure><img src="/images/Screenshot 2023-10-23 at 11.40.57 AM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** Note: If the transaction fails due to gas issue, increase the gas to 750000 and select 'Zero' Option. using the 'Advanced' button.\\
\\
Once you process this transaction, it can take upto 1-2 mins for the transaction to complete. To cross check, refresh the wallet and check for your balance.

<img src="/images/Screenshot 2023-11-02 at 12.56.03 AM.png" alt="" data-size="original">

G. Your tokens are now transferred to the 118 coin-type wallet address from 750 coin-type wallet address.

<figure><img src="/images/Screenshot 2023-10-23 at 11.41.47 AM.png" alt=""><figcaption></figcaption></figure>

> Repeat these steps again if you have staked with more than 1 validator.

### Migrate all liquid tokens in the wallet

A. Claim all the pending rewards from your wallet

<figure><img src="/images/Screenshot 2023-11-02 at 1.01.42 AM.png" alt=""><figcaption></figcaption></figure>

B. Go to 'Wallet' page and select 'Send'

<figure><img src="/images/Screenshot 2023-11-02 at 12.59.03 AM.png" alt=""><figcaption></figcaption></figure>

C. Send all the tokens to your new coin-type wallet address.

## Step 4: Sign into pWALLET with **Wallet 2**

A. Go to '**Staking**' tab, select '**Tokenized Shares**' & click on '**Redeem**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.51.33 AM.png" alt=""><figcaption></figcaption></figure>

B. Click on '**Redeem Shares**' & Redeem your tokens.

<figure><img src="/images/Screenshot 2023-10-23 at 11.53.59 AM.png" alt=""><figcaption></figcaption></figure>

C. Migration done, your staked/delegated tokens will now be visible in the 'Delegated' Section like before.

<figure><img src="/images/Screenshot 2023-10-23 at 11.59.20 AM.png" alt=""><figcaption></figcaption></figure>

***

## Step 5: Sit back and Relax! 🎉

The migration from 750 coin-type to 118 coin-type has been completed successfully.

## FAQs

<details>

<summary>Is there any limit to transfer my tokens?</summary>

No, there is no limit.

</details>

<details>

<summary>URL for Persistence Wallet</summary>

This is the correct URL: https://wallet.persistence.one

</details>

<details>

<summary>I have provided liquidity on Dexter. Will that be transferred too?</summary>

No, this process does not transfer your liquidity. You need to first remove the bonded tokens on dexter, migrate using the above steps & then provide the liquidity again.

</details>

<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.
2. Never share your seed/keystore with anyone.
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Persistence community chat on Telegram](https://t.me/PersistenceOneChat).

</details>
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>Keplr Wallet</Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
              
              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}

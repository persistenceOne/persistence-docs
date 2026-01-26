'use client'
import { useColorMode } from '@chakra-ui/react'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import {Box, Container, Heading, Text, useDisclosure, Link} from '@chakra-ui/react'
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
  const content = `# Persistence Wallet

### TLDR

This guide is for users who have logged into **pWALLET** using Keystore or Mnemonic/Seed-Phrase & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

## Step 1: Check which coin-type you're using

<figure><img src="/images/Screenshot 2023-10-23 at 10.31.06 AM.png" alt=""><figcaption></figcaption></figure>

If you already have all your tokens on 118 coin-type wallet address then no migration is needed. However if you have funds in your 750 coin-type wallet address then you need to proceed with the migration (i.e move to [Step 2](/docs/community-and-support/coin-type-migration-from-750-to-118/persistence-wallet.md#step-2-migrate-all-the-available-tokens-in-your-wallet)).

***

## Step 2: Migrate all the available tokens in your wallet

> ℹ️ **Info:** This step will migrate all the available tokens from 750 coin-type address to 118 coin-type address. If you have staked/delegated tokens in your wallet, we'll migrate them in the [_Step 3_](/docs/community-and-support/coin-type-migration-from-750-to-118/persistence-wallet.md#step-3-migrate-all-the-staked-delegated-tokens-in-your-wallet).

A. Claim all the pending staking rewards.

<figure><img src="/images/Screenshot 2023-10-23 at 11.08.05 AM.png" alt=""><figcaption></figcaption></figure>

B. Click on **'Migrate Tokens from 750 to 118'**

<figure><img src="/images/Screenshot 2023-10-23 at 10.43.56 AM.png" alt=""><figcaption></figcaption></figure>

C. Hit '**Migrate**' button

> ℹ️ **Info:** By default, all the available tokens and your 118 coin-type wallet address will be pre-filled

<figure><img src="/images/Screenshot 2023-10-23 at 11.04.33 AM (2).png" alt=""><figcaption></figcaption></figure>

**Voila!** All of your available tokens are migrated. Now move to step 3, if you have any staked/Delegated Tokens.

***

## Step 3: Migrate all the staked/delegated tokens in your wallet

A. Go to '**Staking**' page and select '**Delegated**' from the sub-menu

<figure><img src="/images/Screenshot 2023-10-23 at 11.16.39 AM.png" alt=""><figcaption></figcaption></figure>

B. Check if the validator where you stake/delegate your tokens have enough capacity (i.e Validator Bond) to migrate your tokens (using[ Smartstake](https://analytics.smartstake.io/persistence/valbonds) dashboard)

> ℹ️ **Info:** Eg: As I delegate \\~23 XPRT to smart stake validator, i need to check if smart stake validator has enough capacity to help facilitate migrate for my tokens. As in my case the validator has the capacity, we can move forward with the migation process.

<figure><img src="/images/Screenshot 2023-10-23 at 11.21.56 AM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Note:** If your validator doesn't have enough capacity, ask your validator to increase it or redelegate your staked/delegated tokens to a validator which has enough capacity for your tokens.

C. Click on '**Actions**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.30.27 AM (1).png" alt=""><figcaption></figcaption></figure>

D. Click on '**Transfer Delegation**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.32.19 AM.png" alt=""><figcaption></figcaption></figure>

E. Enter the amount and your 118 coin-type wallet address

<figure><img src="/images/Screenshot 2023-10-23 at 11.34.15 AM.png" alt=""><figcaption></figcaption></figure>

F. There will be 2 transactions, first to 'tokenise' your tokens & then to 'transfer' them to new address.

<figure><img src="/images/Screenshot 2023-10-23 at 11.40.57 AM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** Note: If the transaction fails due to gas issue, increase the gas to 750000 and select 'Zero' Option. using the 'Advanced' button.\\
\\
Once you process this transaction, it can take upto 1-2 mins for the transaction to complete. To cross check, refresh the wallet and check for your balance.

<img src="/images/Screenshot 2023-10-23 at 11.45.45 AM.png" alt="" data-size="original">

G. Your tokens are now transferred to the 118 coin-type wallet address from 750 coin-type wallet address.

<figure><img src="/images/Screenshot 2023-10-23 at 11.41.47 AM.png" alt=""><figcaption></figcaption></figure>

H. Toggle to your 118 coin-type wallet address

<figure><img src="/images/Screenshot 2023-10-23 at 11.49.51 AM.png" alt=""><figcaption></figcaption></figure>

I. Go to '**Staking**' tab, select '**Tokenized Shares**' & click on '**Redeem**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.51.33 AM.png" alt=""><figcaption></figcaption></figure>

J. Click on '**Redeem Shares**' & Redeem your tokens.

<figure><img src="/images/Screenshot 2023-10-23 at 11.53.59 AM.png" alt=""><figcaption></figcaption></figure>

K. Migration done, your staked/delegated tokens will now be visible in the 'Delegated' Section like before.

<figure><img src="/images/Screenshot 2023-10-23 at 11.59.20 AM.png" alt=""><figcaption></figcaption></figure>

***

## Step 4: Sit back and Relax! 🎉

The migration from 750 coin-type to 118 coin-type has been completed successfully.

***

## FAQs

<details>

<summary>I can't see coin-types in my persistence wallet</summary>

To see both coin-type addresses in your persistence wallet, you need to login using Keystore file.

</details>

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

<summary>Do i need to create a new wallet?</summary>

No, by default both the coin-type will be visible in your wallet

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
              Persistence Wallet
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

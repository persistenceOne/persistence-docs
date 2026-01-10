'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text , useDisclosure } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `# Ledger Hardware Wallet

### TLDR

This guide is for users who use Ledger using Persistence Ledger App & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

## How do you use your ledger?

<table><thead><tr><th width="177" align="center">Variation</th><th width="205" align="center">118 Coin-type</th><th align="center">750 Coin-type</th><th>Migration Required?</th><th align="center">Default</th></tr></thead><tbody><tr><td align="center">Keplr + cosmos Ledger App</td><td align="center">Supported</td><td align="center">Not Supported</td><td>No 🎉</td><td align="center">118 Coin-type</td></tr><tr><td align="center">pWallet + Persistence Ledger App</td><td align="center">Not Supported</td><td align="center">Supported</td><td>Yes</td><td align="center">750 Coin-type</td></tr></tbody></table>

<details>

<summary>What do you mean by variation?</summary>

1. **Keplr (With Cosmos Ledger App) + Ledger**

Keplr by default only support 118 coin-type address derivation path for all the addresses generated through keplr since the beginning. Hence if you have always used keplr for your persistence address then you **don't** need wallet migration.

2. **pWallet (With Persistence Ledger App) + Ledger**

pWALLET (When connected with Persistence Ledger App) by default only support 750 coin-type address derivation path for all the addresses generated through pWALLET since the beginning. Hence if you have always used pWALLET (with Persistence Ledger App) for your persistence address then you need coin-type wallet migration.\\
**Note:** As pWALLET only supports 750 coin-type derivation path, so in this migration you'll have to add your ledger wallet in keplr. Steps are mentioned in the next steps.

</details>

> ℹ️ **Info:** **Still not sure which coin-type you're using?** This is the simplest method to determine:

If you login into pWALLET using Persistence ledger app, then you're on 750 coin-type wallet address.

If you login into pWALLET using cosmos ledger app, then you're on 118 coin-type wallet address.

***

### **Pre-Requisite Checklist for migration:**

* [x] You're a ledger user
* [x] You use Persistence Ledger App to login into pWALLET
* [x] Your wallet needs a migration (Check this [section](/docs/community-and-support/coin-type-migration-from-750-to-118/ledger-hardware-wallet.md#how-do-you-use-your-ledger))
* [x] Using preferred browser (Google Chrome, Brave or Firefox)
* [x] You have [Keplr wallet extension](https://www.keplr.app/) installed

> ✅ **Success:** **Note:** If you don't satisfy the Top 3 requirements in the above list then you don't need migration.

***

## Let's Start with the migration!

### Step 1: Add your 118 coin-type wallet address in keplr browser extension.

In this step we will import your ledger into keplr so that you can access your 118 coin-type wallet address.

A. Go to Keplr Wallet Extension in your browser

<figure><img src="/images/Screenshot 2023-11-25 at 2.50.45 PM.png" alt=""><figcaption></figcaption></figure>

B. Connect Ledger Hardware Wallet

<figure><img src="/images/Screenshot 2023-11-25 at 2.52.41 PM.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/images/Screenshot 2023-11-25 at 2.55.17 PM.png" alt=""><figcaption></figcaption></figure>

C. Name the wallet as 'My 118 coin-type wallet' (Don't worry you can change your wallet name later too) using Cosmos App as recommended.

<figure><img src="/images/Screenshot 2023-11-25 at 3.00.46 PM.png" alt=""><figcaption></figcaption></figure>

D. Follow the onscreen instructions.

<figure><img src="/images/Screenshot 2023-11-25 at 3.02.30 PM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Don't have cosmos app installed on your ledger?**

* Go to 'My ledger' tab on your Ledger Live app
* And search for 'Cosmos' and install it on your Ledger

<img src="/images/Screenshot 2023-11-25 at 3.09.01 PM.png" alt="" data-size="original">

E. Select 'Persistence' Chain and click on 'save'

<figure><img src="/images/Screenshot 2023-11-25 at 3.11.25 PM.png" alt=""><figcaption></figcaption></figure>

F. Voila! your 118 coin-type persistence wallet address is imported in keplr.

<figure><img src="/images/Screenshot 2023-11-25 at 3.12.56 PM.png" alt=""><figcaption></figcaption></figure>

### Step 2: Login into pWALLET using Keplr and copy your address

A. Click on 'Sign In'

<figure><img src="/images/Screenshot 2023-11-25 at 3.23.58 PM.png" alt=""><figcaption></figcaption></figure>

B. Connect using 'Use Keplr'

> ℹ️ **Info:** Make sure your Ledger wallet is selected in your keplr extension.

<figure><img src="/images/Screenshot 2023-11-25 at 3.31.24 PM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Error while connecting using Keplr?** Make sure you've opened cosmos app on your ledger.

C. go to 'Receive' sub-menu 'Wallet' tab and copy the address.

<figure><img src="/images/Screenshot 2023-11-25 at 3.36.21 PM.png" alt=""><figcaption></figcaption></figure>

### Step 3: Sign out of this wallet and login using Persistence App

<figure><img src="/images/Screenshot 2023-11-25 at 3.45.02 PM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Getting error while connecting using Persistence Ledger?** Make sure you have opened Persistence App on your Ledger

### Step 4: Migrate your Staked XPRT Tokens

A. Go to 'Staking' tab and select 'Delegated' from the menu.

> ❌ **Danger:** **Skip this step** if you don't have any staked tokens

<figure><img src="/images/Screenshot 2023-11-02 at 12.48.26 AM.png" alt=""><figcaption></figcaption></figure>

B. Check if the validator where you stake/delegate your tokens have enough capacity (i.e Validator Bond) to migrate your tokens (using[ Smartstake](https://analytics.smartstake.io/persistence/valbonds) dashboard)

> ℹ️ **Info:** Eg: As I delegate \\~23 XPRT to smart stake validator, i need to check if smart stake validator has enough capacity to help facilitate migrate for my tokens. As in my case the validator has the capacity, we can move forward with the migration process.

<figure><img src="/images/Screenshot 2023-10-23 at 11.21.56 AM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** **Note:** If your validator doesn't have enough capacity, ask your validator to increase it or re-delegate your staked/delegated tokens to a validator which has enough capacity for your tokens.

C. Click on '**Actions**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.30.27 AM (1).png" alt=""><figcaption></figcaption></figure>

D. Click on '**Transfer Delegation**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.32.19 AM.png" alt=""><figcaption></figcaption></figure>

E. Enter the amount and your wallet address which you copied in [Step 2](/docs/community-and-support/coin-type-migration-from-750-to-118/ledger-hardware-wallet.md#lets-start-with-the-migration).

<figure><img src="/images/Screenshot 2023-10-23 at 11.34.15 AM.png" alt=""><figcaption></figcaption></figure>

F. There will be 2 transactions, first to 'tokenise' your tokens & then to 'transfer' them to new address.

<figure><img src="/images/Screenshot 2023-10-23 at 11.40.57 AM.png" alt=""><figcaption></figcaption></figure>

> ⚠️ **Warning:** Note: If the transaction fails due to gas issue, increase the gas to 750000 and select 'Zero' Option. using the 'Advanced' button.\\
\\
Once you process this transaction, it can take upto 1-2 mins for the transaction to complete. To cross check, refresh the wallet and check for your balance.

<img src="/images/Screenshot 2023-11-02 at 12.56.03 AM.png" alt="" data-size="original">

G. Your staked tokens are now transferred to the 118 coin-type wallet address from 750 coin-type wallet address.

<figure><img src="/images/Screenshot 2023-10-23 at 11.41.47 AM.png" alt=""><figcaption></figcaption></figure>

> ℹ️ **Info:** Repeat these steps again if you have staked with more than 1 validator.

### Step 5: Migrate all liquid tokens

A. Claim all the pending rewards from your wallet

<figure><img src="/images/Screenshot 2023-11-02 at 1.01.42 AM.png" alt=""><figcaption></figcaption></figure>

B. Go to 'Wallet' page and select 'Send'

<figure><img src="/images/Screenshot 2023-11-02 at 12.59.03 AM.png" alt=""><figcaption></figcaption></figure>

C. Send all the tokens to your new coin-type wallet address which you copied.

### Step 6: Sign into pWallet back with Keplr app

> ℹ️ **Info:** Make sure your Ledger wallet is selected in your keplr extension.

<figure><img src="/images/Screenshot 2023-11-25 at 3.31.24 PM.png" alt=""><figcaption></figcaption></figure>

A. Go to '**Staking**' tab, select '**Tokenized Shares**' & click on '**Redeem**'

<figure><img src="/images/Screenshot 2023-10-23 at 11.51.33 AM.png" alt=""><figcaption></figcaption></figure>

B. Click on '**Redeem Shares**' & Redeem your tokens.

<figure><img src="/images/Screenshot 2023-10-23 at 11.53.59 AM.png" alt=""><figcaption></figcaption></figure>

C. Migration done, your staked/delegated tokens will now be visible in the 'Delegated' Section like before.

<figure><img src="/images/Screenshot 2023-10-23 at 11.59.20 AM.png" alt=""><figcaption></figcaption></figure>

***

## Step 7: Sit back and Relax! 🎉

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
2. Never share your seed with anyone.
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Persistence community chat on Telegram](https://t.me/PersistenceOneChat).

</details>
`
  const hideFirstHeading = true
  const { isOpen, onOpen, onClose } = useDisclosure()
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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Ledger Hardware Wallet
            </Heading>
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

'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading as ChakraHeading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'
import { TableOfContents } from '@/components/TableOfContents'
import { PageNavigation } from '@/components/PageNavigation'
import { extractHeadings, HeadingItem } from '@/lib/extractHeadings'

export default function Page() {
  const content = `
# Incentivized Mainnet

<figure><img src="/images/Image (1).png" alt=""><figcaption></figcaption></figure>

### How to access the incentivised mainnet <a href="#how-to-access-the-incentivised-mainnet" id="how-to-access-the-incentivised-mainnet"></a>

Before you get started, make sure you already have sufficient balances on BNB Chain and Base to try the product and rank in the daily leaderboard.

You will need a small amount of the gas fee token on each chain (ETH and BNB), along with the BTC variant you plan to swap ([CBBTC](https://app.squidrouter.com/?chains=1%2C8453\\&tokens=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee%2C0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf) or [BTCB](https://app.squidrouter.com/?chains=1%2C56\\&tokens=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee%2C0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c)). Please note that the swap amount is currently limited to a range between 0.00005 and 0.0002 per order, which is roughly 5 to 20 USD.

Now you’re all set to start. Navigate to the product using the link in the announcement or directly here: [https://beta.interop.persistence.one/](https://beta.interop.persistence.one/)

* Accept the terms and click on ‘Continue’ if you wish to proceed to the next steps.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/image-7-1024x527.png" alt=""><figcaption></figcaption></figure>

* That will bring you to the swap interface where you’ll see the menu bar with multiple tabs that help you track your progress and your rank in the daily epochs throughout the campaign.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-8.57.51-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

* You can also change the source chain from BNB Chain to Base and vice versa. As more networks are supported, they will appear in the list.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-8.58.32-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

* The Leaderboard page shows the number of participants in the ongoing epoch along with the previous epoch, their rewards, bridge volume, tiers and ranks.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/image-8-1024x527.png" alt=""><figcaption></figcaption></figure>

* The Transactions page shows your current and previous orders and their status.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-8.59.25-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

* In the ‘More’ tab, you will find additional information, including links to share your feedback, guides to test the product, frequently asked questions and a link to Persistence DEX (V1).

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-8.59.32-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

### Tasks to be eligible for rewards <a href="#tasks-to-be-eligible-for-rewards" id="tasks-to-be-eligible-for-rewards"></a>

Before diving into the tasks to be eligible for rewards, let’s first look at how the leaderboard rankings and reward multipliers work and what you should know before completing swaps.

#### How can I be eligible for reward multipliers? <a href="#how-can-i-be-eligible-for-reward-multipliers" id="how-can-i-be-eligible-for-reward-multipliers"></a>

**The reward multiplier is determined by a user’s staked XPRT balance on the Persistence chain.**

The idea is to strengthen long-term alignment with the Persistence ecosystem by linking staking directly to Interop rewards. The multiplier scales with staked XPRT, creating meaningful incentives for active users while preventing outsized dominance by large holders.

Growth naturally slows at higher balances, limiting whale capture while still rewarding commitment.

| **Staked XPRT** | **Multiplier** |
| --------------- | -------------- |
| 0               | 1.0×           |
| <1,000          | 1.0×           |
| **1,000**       | **2.0×**       |
| 3,000           | 2.5×           |
| **10,000**      | **3.0×**       |
| 30,000          | 3.5×           |
| **100,000**     | **4.0×**       |
| 300,000         | 4.5×           |
| **1,000,000**   | **5.0×**       |

_Below is a chart to help you visualise the same._

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/chart-1024x507.png" alt=""><figcaption></figcaption></figure>

#### How can I become eligible for fee rebates and move to a higher tier? <a href="#how-can-i-become-eligible-for-fee-rebates-and-move-to-a-higher-tier" id="how-can-i-become-eligible-for-fee-rebates-and-move-to-a-higher-tier"></a>

**The tiers and fee rebates are separate from the reward multipliers**, but if you already have the following staked XPRT amounts, you might just be eligible for swap fee discounts, move to a higher tier, and also access the reward multipliers.

| **Tier**              | **Staked XPRT** | **Fee** | **Perks**       |
| --------------------- | --------------- | ------- | --------------- |
| **Tier 0 – Explorer** | 0               | 0.05%   | Standard access |
| **Tier 1 – Voyager**  | ≥10,000 XPRT    | 0.025%  | Reduced fees    |
| **Tier 2 – Pioneer**  | ≥1,000,000 XPRT | 0%      | Full fee waiver |

#### How can I stake XPRT? <a href="#how-can-i-stake-xprt" id="how-can-i-stake-xprt"></a>

To walk you through each step of staking XPRT using a supported wallet and choosing a validator, we have a detailed guide available here:&#x20;

Once you understand the ranking mechanism, you are all set to look at the tasks you need to complete to earn daily rewards in each new epoch.

To put it simply, the more volume you bridge, the higher you rank on the leaderboard in the ongoing epoch. Based on your applicable multiplier and tier, you will also be eligible for swap fee rebates and boosted rewards, which will be displayed to you and distributed at the end of each cycle.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/image-9-1024x527.png" alt=""><figcaption></figcaption></figure>

### How to perform a swap <a href="#how-to-perform-a-swap" id="how-to-perform-a-swap"></a>

To perform bridging transactions, you will need to

* Navigate to the swap page, and enter the amount you wish to swap from the source chain, and the solver will present you with a quote of the expected amount in the destination chain, along with applicable fees.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-9.30.01-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

* If you are satisfied with the quote, approve the wallet prompt(s) and create your order.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-9.33.55-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-9.34.04-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-9.34.17-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

* It will then be fulfilled on the destination chain, and you will receive the desired asset. The status will update accordingly.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/Screenshot-2025-12-03-at-9.35.18-AM-1024x527.png" alt=""><figcaption></figcaption></figure>

* Now you have completed the tasks required to rank in the ongoing epoch. You can check your progress by navigating to the Leaderboard page to see your expected reward for the epoch. You can bridge more volume to climb higher in the rankings.

<figure><img src="https://blog.persistence.one/wp-content/uploads/2025/12/image-10-1024x527.png" alt=""><figcaption></figcaption></figure>

That’s it. We hope this was helpful.

### Frequently Asked Questions <a href="#frequently-asked-questions" id="frequently-asked-questions"></a>

**a) Are there any fees for participating in Persistence One’s incentivised mainnet?**

Participation in the campaign is entirely voluntary and free of charge. However, please be aware that you will need a small amount of the gas fee token for the source chain (ETH or BNB), as well as either CBBTC or BTCB, to execute swaps within the product. Note that the maximum swap limit is restricted to a range of 0.00005 to 0.0002 per order.

**b) How can I track the status of my swap?**

You can monitor the status of your swaps under the ‘Transactions’ tab in the menu bar. If you notice any discrepancies, please inform the team or include details in your feedback.

**c) How can I report a bug or provide feedback?**

Your feedback is important to us. Should you encounter any bugs or have suggestions, please use the ‘Submit Feedback’ link in the menu under the ‘More’ tab. This will take you to our Telegram community chat, where our moderators and team members are ready to assist you.

**d) What security measures are in place to protect my assets?**

Our cross-chain solution uses Intents to fulfil orders, which enhances efficiency, security, and speed compared to traditional bridges with liquidity pools. When you place an order, funds are escrowed on the Persistence One contract on the source chain until the solver fulfils your intent on the destination chain.

Only after a successful transaction are the escrowed funds released to the solver.

**e) What happens to my assets if I encounter an error during a swap?**

If the order isn’t fulfilled, the funds remain in escrow, and the order will expire. The user will then be able to claim it later from the ‘Transactions’ page.

**f) Who can I contact if I face any issues or have questions?**\\
You can always seek help from our moderators or the team on [Telegram](https://t.me/PersistenceOneChat) or [Discord](https://discord.persistence.one/).
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
            <ChakraHeading as="h1" size="2xl" mb={4}>
              Incentivized Mainnet
            </ChakraHeading>
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

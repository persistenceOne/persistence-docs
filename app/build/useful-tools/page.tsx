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
# Community Tools

<table><thead><tr><th width="207.33333333333331">Provider &#x26; Link</th><th width="529">Description</th></tr></thead><tbody><tr><td><a href="https://discord.com/channels/796174129077813248/854663233465090048">Active Nodes</a></td><td>Discord Validator Status Bot</td></tr><tr><td><a href="https://wallet.autostake.net/persistence">AutoStake</a></td><td>Dashboard for staking XPRT (incl auto-compounding) and governance</td></tr><tr><td><a href="https://monitor.baryon.dev/d/persistence/xprt-dashboard?theme=light&#x26;orgId=2&#x26;refresh=5m">Baryon</a></td><td>Dashboard for chain financials, validator performance and chain parameters</td></tr><tr><td><a href="https://www.cosmodash.zone">CosmoDash</a></td><td>Dashboard for XPRT Pools &#x26; auto-compunding results</td></tr><tr><td><a href="https://chain-monitor.cros-nest.com/d/Cros-nest/block-chains?var-chain_id=core-1&#x26;var-chain_name=persistence&#x26;orgId=1">Cros-nest</a></td><td>Dashboard for chain financials and validator performance</td></tr><tr><td><a href="https://github.com/HashQuark-Research1/cosmos-monitor">HashQuark</a></td><td>Validator Monitoring &#x26; Alerting tool</td></tr><tr><td><a href="https://observatory.zone/persistence">Observatory Zone</a></td><td>Statistics around the chain and decentralisation parameters</td></tr><tr><td><a href="https://persistence.omniflix.co/">Omniflix</a></td><td>Dashboard for staking XPRT and participating in Governance</td></tr><tr><td><a href="https://persistence.paranorm.pro/monitor">Paranormal Bros</a></td><td>Validator Monitoring &#x26; Alerting tool</td></tr><tr><td><a href="https://polkachu.com/chain_upgrades">Polkachu</a></td><td>Chain Upgrade watcher</td></tr><tr><td><a href="https://monolert.prithvidevs.in/">PrithviDevs</a></td><td>Telegram alerts bot for monitoring validators</td></tr><tr><td><a href="https://github.com/SimplyVC/panic">Simply Staking</a></td><td>Validator monitoring and alerting tool</td></tr><tr><td><a href="https://persistence.smartstake.io/">SmartStake</a></td><td>Information, statistics and analytics around the chain, validators, and relayers</td></tr><tr><td><a href="https://t.me/Stakeme_checker_bot">StakeMe</a></td><td>Telegram bot to monitor validator status</td></tr><tr><td><a href="https://t.me/stakewolleWallet_bot">StakeWolle</a></td><td>Telegram explorer bot</td></tr><tr><td><a href="https://app.unagii.com/stake/persistence">Unagii</a></td><td>Dashboard for staking XPRT and participating in Governance</td></tr></tbody></table>

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
              Community Tools
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Analytics, Dashboards, Monitoring etc. for users & validators
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

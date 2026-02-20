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
  const content = `# IBC Channels

## **IBC Channels for Persistence Mainnet (core-1)**

[Transfers](/build/relayers/ibc-channels#transfers)

### Transfers

<table><thead><tr><th width="162">source channel</th><th width="150">destination</th><th width="183">destination chain-id</th><th width="105">destination channel</th><th>known operators</th></tr></thead><tbody><tr><td>channel-6</td><td>Osmosis</td><td>osmosis-1</td><td>channel-4</td><td></td></tr><tr><td>channel-138</td><td>Osmosis</td><td>osmosis-1</td><td></td><td></td></tr><tr><td>channel-139</td><td>Osmosis</td><td>osmosis-1</td><td>channel-12987</td><td></td></tr><tr><td>channel-140</td><td>Osmosis</td><td>osmosis-1</td><td></td><td></td></tr><tr><td>channel-146</td><td>Osmosis</td><td>osmosis-1</td><td>channel-16252</td><td></td></tr><tr><td>channel-147</td><td>Osmosis</td><td>osmosis-1</td><td>channel-16254</td><td></td></tr><tr><td>channel-149</td><td>Osmosis</td><td>osmosis-1</td><td>channel-16747</td><td></td></tr><tr><td>channel-25</td><td>Osmosis</td><td>osmosis-1</td><td>channel-24</td><td></td></tr><tr><td>channel-24</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-190</td><td></td></tr><tr><td>channel-0</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-99</td><td></td></tr><tr><td>...</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>...</td><td></td></tr><tr><td>channel-65</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-484</td><td></td></tr><tr><td>channel-7</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-146</td><td></td></tr><tr><td>channel-132</td><td>Noble</td><td>noble-1</td><td>channel-36</td><td></td></tr><tr><td>channel-128</td><td>Noble</td><td>noble-1</td><td>channel-22</td><td></td></tr></tbody></table>

<table data-header-hidden><thead><tr><th width="162">source channel</th><th width="150">destination chain</th><th width="186">destination chain-id</th><th>destination channel</th><th>known operators</th></tr></thead><tbody><tr><td>channel-51</td><td>Axelar</td><td>axelar-dojo-1</td><td>channel-42</td><td>AUDIT.one, Cros-nest, Polkachu, QuantNode</td></tr><tr><td>channel-24</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-190</td><td>AUDIT.one, Architect Nodes, Cros-nest, CryptoCrew, DSRV, Stakin, Stakely</td></tr><tr><td>channel-41</td><td>Injective</td><td>injective-1</td><td>channel-82</td><td>Cros-nest, CryptoCrew, High Stakes, Smart Stake, Stakely</td></tr><tr><td>channel-72</td><td>Kujira</td><td>kaiyo-1</td><td>channel-56</td><td>Cros-nest , Paranormal Bros, Polkachu<br><em>**looking for more operators**</em></td></tr><tr><td>channel-6</td><td>Osmosis</td><td>osmosis-1</td><td>channel-4</td><td>Architect Nodes, Baryon, bitszn, Cephalopod,Cros-nest, CryptoCrew, DSRV, Imperator, Smart Stake, StakeWith.Us, Stakin, Stakely</td></tr><tr><td>channel-82</td><td>Secret Network</td><td>secret-4</td><td>channel-64</td><td>Cosmonaut Stakes, <em>**looking for more operators**</em></td></tr><tr><td>channel-67</td><td>Stride</td><td>stride-1</td><td>channel-53</td><td>Architect Nodes, Cosmonaut Stakes, Polkachu, QuantNode</td></tr></tbody></table>

<table data-header-hidden><thead><tr><th width="161">source channel</th><th width="151">destination</th><th width="189">destination chain-id</th><th>destination channel</th><th>known operators</th></tr></thead><tbody><tr><td>channel-131</td><td>dYdX Protocol</td><td></td><td>channel-4</td><td></td></tr><tr><td>channel-82</td><td>Secret</td><td>secret-4</td><td>channel-64</td><td></td></tr><tr><td>channel-136</td><td>Neutron</td><td><em>neutron</em>-1</td><td>channel-49</td><td></td></tr></tbody></table>

<table><thead><tr><th width="164">source channel</th><th width="149">destination</th><th width="190">destination chain-id</th><th>destination channel</th><th></th></tr></thead><tbody><tr><td>channel-41</td><td>Injective</td><td>injective-1</td><td>channel-82</td><td></td></tr><tr><td>channel-40</td><td>Injective</td><td>injective-1</td><td>channel-80</td><td></td></tr><tr><td>channel-42</td><td>Injective</td><td>injective-1</td><td>channel-86</td><td></td></tr><tr><td>channel-43</td><td>Injective</td><td>injective-1</td><td>channel-87</td><td></td></tr><tr><td>channel-67</td><td>Stride</td><td>stride-1</td><td>channel-53</td><td></td></tr><tr><td>channel-130</td><td>Agoric</td><td>agoriclocal</td><td>channel-67</td><td></td></tr><tr><td>channel-155</td><td>Agoric</td><td>agoriclocal</td><td>channel-71</td><td></td></tr><tr><td>channel-87</td><td>Agoric</td><td>agoriclocal</td><td>channel-39</td><td></td></tr><tr><td>channel-2</td><td>Akash</td><td>akash-1</td><td>channel-3</td><td></td></tr><tr><td>channel-20</td><td>Akash</td><td>akash-1</td><td>channel-20</td><td></td></tr><tr><td>channel-156</td><td>Archway</td><td>archway-1</td><td>channel-107</td><td></td></tr><tr><td>channel-113</td><td>Archway</td><td>archway-1</td><td>channel-5</td><td></td></tr><tr><td>channel-45</td><td>Axelar</td><td>axelar-dojo-1</td><td>channel-20</td><td></td></tr><tr><td>channel-51</td><td>Axelar</td><td>axelar-dojo-1</td><td>channel-42</td><td></td></tr></tbody></table>

<table><thead><tr><th width="166">source channel</th><th width="147">destination</th><th width="190">destination chain-id</th><th>destination channel</th><th></th></tr></thead><tbody><tr><td>channel-114</td><td>Composable</td><td>centauri-1</td><td>channel-23</td><td></td></tr><tr><td>channel-118</td><td>Composable</td><td>centauri-1</td><td>channel-33</td><td></td></tr><tr><td>channel-152</td><td>Kujira</td><td>kaiyo-1</td><td>channel-158</td><td></td></tr><tr><td>channel-152</td><td>Kujira</td><td>kaiyo-1</td><td>channel-13</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-5</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-124</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-130</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-14</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-43</td><td></td></tr><tr><td>channel-22</td><td>Sentinel</td><td>sentinelhub-2</td><td>channel-15</td><td></td></tr><tr><td>channel-22</td><td>Sentinel</td><td>sentinelhub-2</td><td>channel-4</td><td></td></tr><tr><td>channel-33</td><td>Shentu</td><td>shentu-2.2</td><td>channel-7</td><td></td></tr><tr><td>channel-33</td><td>Shentu</td><td>shentu-2.2</td><td>channel-5</td><td></td></tr><tr><td>channel-106</td><td>Stargaze</td><td>stargaze-1</td><td>channel-162</td><td></td></tr></tbody></table>

Find more details on relayers via [Map of Zones](https://mapofzones.com/zones/core-1/peers?columnKey=ibcVolumeIn\\&period=30d) and via [this dashboard provided by Smart Stake](https://relayers.smartstake.io/network/XPRT)

## **IBC Channels for Persistence Testnet (test-core-2)**

### Transfers

| source channel | destination chain | destination-chain-id  | destination channel | known operators  |
| -------------- | ----------------- | --------------------- | ------------------- | ---------------- |
| channel-0      | Axelar            | axelar-testnet-lisbon | channel-261         | Cosmonaut Stakes |
| channel-1      | Cosmos Hub        | theta-testnet-001     | channel-2447        | Paranormal Bros  |

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
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>IBC Channels</Heading>
          )}

          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />

              <PageNavigation />
            </Container>
          </Box>
          <TableOfContents headings={headings} />
        </Box>
      )
}

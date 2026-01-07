import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'IBC Channels - Persistence Docs',
  description: '',
}

export default function Page() {
  const content = `# IBC Channels

## **IBC Channels for Persistence Mainnet (core-1)**

[Transfers](/docs/build/relayers/ibc-channels.md#transfers)

[ICA](/docs/build/relayers/ibc-channels.md#ica)

### Transfers

<table><thead><tr><th width="162">source channel</th><th width="150">destination</th><th width="183">destination chain-id</th><th width="105">destination channel</th><th>known operators</th></tr></thead><tbody><tr><td>channel-6</td><td>Osmosis</td><td>osmosis-1</td><td>channel-4</td><td></td></tr><tr><td>channel-138</td><td>Osmosis</td><td>osmosis-1</td><td></td><td></td></tr><tr><td>channel-139</td><td>Osmosis</td><td>osmosis-1</td><td>channel-12987</td><td></td></tr><tr><td>channel-140</td><td>Osmosis</td><td>osmosis-1</td><td></td><td></td></tr><tr><td>channel-146</td><td>Osmosis</td><td>osmosis-1</td><td>channel-16252</td><td></td></tr><tr><td>channel-147</td><td>Osmosis</td><td>osmosis-1</td><td>channel-16254</td><td></td></tr><tr><td>channel-149</td><td>Osmosis</td><td>osmosis-1</td><td>channel-16747</td><td></td></tr><tr><td>channel-25</td><td>Osmosis</td><td>osmosis-1</td><td>channel-24</td><td></td></tr><tr><td>channel-24</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-190</td><td></td></tr><tr><td>channel-0</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-99</td><td></td></tr><tr><td>...</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>...</td><td></td></tr><tr><td>channel-65</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-484</td><td></td></tr><tr><td>channel-7</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-146</td><td></td></tr><tr><td>channel-132</td><td>Noble</td><td>noble-1</td><td>channel-36</td><td></td></tr><tr><td>channel-128</td><td>Noble</td><td>noble-1</td><td>channel-22</td><td></td></tr><tr><td>channel-38</td><td>Gravity Bridge</td><td>gravity-bridge</td><td>channel-24</td><td></td></tr><tr><td>channel-74</td><td>Gravity Bridge</td><td>gravity-bridge</td><td>channel-114</td><td></td></tr><tr><td>...</td><td>Gravity Bridge</td><td>gravity-bridge</td><td>...</td><td></td></tr><tr><td>channel-78</td><td>Gravity Bridge</td><td>gravity-bridge</td><td>channel-115</td><td></td></tr></tbody></table>

<table data-header-hidden><thead><tr><th width="162">source channel</th><th width="150">destination chain</th><th width="186">destination chain-id</th><th>destination channel</th><th>known operators</th></tr></thead><tbody><tr><td>channel-51</td><td>Axelar</td><td>axelar-dojo-1</td><td>channel-42</td><td>AUDIT.one, Cros-nest, Polkachu, QuantNode</td></tr><tr><td>channel-71</td><td>Comdex</td><td>comdex-1</td><td>channel-57</td><td>Architect Nodes, Cros-nest, Paranormal Bros<br><em>**looking for more operators**</em></td></tr><tr><td>channel-24</td><td>Cosmos Hub</td><td>cosmoshub-4</td><td>channel-190</td><td>AUDIT.one, Architect Nodes, Cros-nest, CryptoCrew, DSRV, Stakin, Stakely</td></tr><tr><td>channel-68</td><td>Crescent</td><td>crescent-1</td><td>channel-30</td><td>B-Harverst, Polkachu, Simply Staking, Stakely, Architect Nodes</td></tr><tr><td>channel-38</td><td>Gravity Bridge</td><td>gravity-bridge-3</td><td>channel-24</td><td>AUDIT.one, bitszn, Cosmonaut Stakes, CryptoCrew, Stakin</td></tr><tr><td>channel-41</td><td>Injective</td><td>injective-1</td><td>channel-82</td><td>Cros-nest, CryptoCrew, High Stakes, Smart Stake, Stakely</td></tr><tr><td>channel-37</td><td>Juno</td><td>juno-1</td><td>channel-33</td><td>Architect Nodes, AUDIT.one, CryptoCrew, Kleomedes, Notional, Smart Stake, STC Capital</td></tr><tr><td>channel-72</td><td>Kujira</td><td>kaiyo-1</td><td>channel-56</td><td>Cros-nest , Paranormal Bros, Polkachu<br><em>**looking for more operators**</em></td></tr><tr><td>channel-6</td><td>Osmosis</td><td>osmosis-1</td><td>channel-4</td><td>Architect Nodes, Baryon, bitszn, Cephalopod,Cros-nest, CryptoCrew, DSRV, Imperator, Smart Stake, StakeWith.Us, Stakin, Stakely</td></tr><tr><td>channel-73</td><td>Quicksilver</td><td>quicksilver-2</td><td>channel-16</td><td><p>Cosmonaut Stakes, Polkachu</p><p><em>**looking for more operators**</em></p></td></tr><tr><td>channel-26</td><td>Sifchain</td><td>sifchain-1</td><td>channel-7</td><td>bitszn, Cephalopod, Notional</td></tr><tr><td>channel-82</td><td>Secret Network</td><td>secret-4</td><td>channel-64</td><td>Cosmonaut Stakes, <em>**looking for more operators**</em></td></tr><tr><td>channel-67</td><td>Stride</td><td>stride-1</td><td>channel-53</td><td>Architect Nodes, Cosmonaut Stakes, Polkachu, QuantNode</td></tr><tr><td>channel-81</td><td>Umee</td><td>umee-1</td><td>channel-51</td><td>Cosmostake, Genesis Lab, Polkachu, QuantNode</td></tr></tbody></table>

<table data-header-hidden><thead><tr><th width="161">source channel</th><th width="151">destination</th><th width="189">destination chain-id</th><th>destination channel</th><th>known operators</th></tr></thead><tbody><tr><td>channel-131</td><td>dYdX Protocol</td><td></td><td>channel-4</td><td></td></tr><tr><td>channel-68</td><td>Crescent Network</td><td>crescent-1</td><td>channel-30</td><td></td></tr><tr><td>channel-82</td><td>Secret</td><td>secret-4</td><td>channel-64</td><td></td></tr><tr><td>channel-136</td><td>Neutron</td><td><em>neutron</em>-1</td><td>channel-49</td><td></td></tr><tr><td>channel-71</td><td>Comdex</td><td><em>comdex</em>-1</td><td>channel-57</td><td></td></tr><tr><td>channel-35</td><td>Comdex</td><td><em>comdex</em>-1</td><td>channel-10</td><td></td></tr><tr><td>channel-37</td><td>Juno</td><td>juno-1</td><td>channel-33</td><td></td></tr></tbody></table>

<table><thead><tr><th width="164">source channel</th><th width="149">destination</th><th width="190">destination chain-id</th><th>destination channel</th><th></th></tr></thead><tbody><tr><td>channel-41</td><td>Injective</td><td>injective-1</td><td>channel-82</td><td></td></tr><tr><td>channel-40</td><td>Injective</td><td>injective-1</td><td>channel-80</td><td></td></tr><tr><td>channel-42</td><td>Injective</td><td>injective-1</td><td>channel-86</td><td></td></tr><tr><td>channel-43</td><td>Injective</td><td>injective-1</td><td>channel-87</td><td></td></tr><tr><td>channel-67</td><td>Stride</td><td>stride-1</td><td>channel-53</td><td></td></tr><tr><td>channel-130</td><td>Agoric</td><td>agoriclocal</td><td>channel-67</td><td></td></tr><tr><td>channel-155</td><td>Agoric</td><td>agoriclocal</td><td>channel-71</td><td></td></tr><tr><td>channel-87</td><td>Agoric</td><td>agoriclocal</td><td>channel-39</td><td></td></tr><tr><td>channel-2</td><td>Akash</td><td>akash-1</td><td>channel-3</td><td></td></tr><tr><td>channel-20</td><td>Akash</td><td>akash-1</td><td>channel-20</td><td></td></tr><tr><td>channel-156</td><td>Archway</td><td>archway-1</td><td>channel-107</td><td></td></tr><tr><td>channel-113</td><td>Archway</td><td>archway-1</td><td>channel-5</td><td></td></tr><tr><td>channel-45</td><td>Axelar</td><td>axelar-dojo-1</td><td>channel-20</td><td></td></tr><tr><td>channel-51</td><td>Axelar</td><td>axelar-dojo-1</td><td>channel-42</td><td></td></tr></tbody></table>

<table><thead><tr><th width="166">source channel</th><th width="147">destination</th><th width="190">destination chain-id</th><th>destination channel</th><th></th></tr></thead><tbody><tr><td>channel-91</td><td>Bitcanna</td><td>bitcanna-1</td><td>channel-35</td><td></td></tr><tr><td>channel-92</td><td>BitSong</td><td>bitsong-2b</td><td>channel-25</td><td></td></tr><tr><td>channel-93</td><td>Bostrom</td><td>bostrom</td><td>channel-30</td><td></td></tr><tr><td>channel-80</td><td>Canto</td><td>canto_7700-1</td><td>channel-17</td><td></td></tr><tr><td>channel-62</td><td>Carbon</td><td>carbon-1</td><td>channel-14</td><td></td></tr><tr><td>channel-114</td><td>Composable</td><td>centauri-1</td><td>channel-23</td><td></td></tr><tr><td>channel-118</td><td>Composable</td><td>centauri-1</td><td>channel-33</td><td></td></tr><tr><td>channel-98</td><td>Chihuahua</td><td>chihuahua-1</td><td>channel-61</td><td></td></tr><tr><td>channel-11</td><td>Cronos POS Chain</td><td>cronosmainnet_25-1</td><td>channel-17</td><td></td></tr><tr><td>channel-11</td><td>Cronos POS Chain</td><td>cronosmainnet_25-1</td><td>channel-18</td><td></td></tr><tr><td>channel-11</td><td>Cronos POS Chain</td><td>cronosmainnet_25-1</td><td>channel-29</td><td></td></tr><tr><td>channel-11</td><td>Cronos POS Chain</td><td>cronosmainnet_25-1</td><td>channel-84</td><td></td></tr><tr><td>channel-94</td><td>Desmos</td><td>desmos-mainnet</td><td>channel-21</td><td></td></tr><tr><td>channel-31</td><td>E-money</td><td>emoney-3</td><td>channel-8</td><td></td></tr><tr><td>channel-31</td><td>E-money</td><td>emoney-3</td><td>channel-22</td><td></td></tr><tr><td>channel-109</td><td>Starname</td><td>iov-mainnet-ibc</td><td>channel-45</td><td></td></tr><tr><td>channel-109</td><td>Starname</td><td>iov-mainnet-ibc</td><td>channel-13</td><td></td></tr><tr><td>channel-19</td><td>Iris</td><td>irishub-1</td><td>channel-15</td><td></td></tr><tr><td>channel-19</td><td>Iris</td><td>irishub-1</td><td>channel-5</td><td></td></tr><tr><td>channel-19</td><td>Iris</td><td>irishub-1</td><td>channel-59</td><td></td></tr><tr><td>channel-100</td><td>Jackal</td><td>jackal-1</td><td>channel-31</td><td></td></tr><tr><td>channel-152</td><td>Kujira</td><td>kaiyo-1</td><td>channel-158</td><td></td></tr><tr><td>channel-152</td><td>Kujira</td><td>kaiyo-1</td><td>channel-13</td><td></td></tr><tr><td>channel-90</td><td>AssetMantle</td><td>assetmantle</td><td>channel-42</td><td></td></tr><tr><td>channel-97</td><td>Mars</td><td>mars-1</td><td>channel-26</td><td></td></tr><tr><td>channel-102</td><td>Migaloo</td><td>migaloo-1</td><td>channel-44</td><td></td></tr><tr><td>channel-102</td><td>Migaloo</td><td>migaloo-1</td><td>channel-9</td><td></td></tr><tr><td>channel-112</td><td>Terra</td><td>columbus-5</td><td>channel-177</td><td></td></tr><tr><td>channel-112</td><td>Terra</td><td>columbus-5</td><td>channel-221</td><td></td></tr><tr><td>channel-112</td><td>Terra</td><td>columbus-5</td><td>channel-127</td><td></td></tr><tr><td>channel-69</td><td>QuickSilver</td><td>quicksilver-2</td><td>channel-8</td><td></td></tr><tr><td>channel-69</td><td>QuickSilver</td><td>quicksilver-2</td><td>channel-16</td><td></td></tr><tr><td>channel-69</td><td>QuickSilver</td><td>quicksilver-2</td><td>channel-43</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-5</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-124</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-130</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-14</td><td></td></tr><tr><td>channel-10</td><td>Regen</td><td>regen-1</td><td>channel-43</td><td></td></tr><tr><td>channel-22</td><td>Sentinel</td><td>sentinelhub-2</td><td>channel-15</td><td></td></tr><tr><td>channel-22</td><td>Sentinel</td><td>sentinelhub-2</td><td>channel-4</td><td></td></tr><tr><td>channel-33</td><td>Shentu</td><td>shentu-2.2</td><td>channel-7</td><td></td></tr><tr><td>channel-33</td><td>Shentu</td><td>shentu-2.2</td><td>channel-5</td><td></td></tr><tr><td>channel-26</td><td>Sifchain</td><td>sifchain-1</td><td>channel-7</td><td></td></tr><tr><td>channel-26</td><td>Sifchain</td><td>sifchain-1</td><td>channel-22</td><td></td></tr><tr><td>channel-105</td><td>Sommelier</td><td>sommelier-3</td><td>channel-25</td><td></td></tr><tr><td>channel-106</td><td>Stargaze</td><td>stargaze-1</td><td>channel-162</td><td></td></tr><tr><td>channel-107</td><td>Teritori</td><td>teritori-1</td><td>channel-34</td><td></td></tr></tbody></table>

### ICA

| source-channel | destination | destination-chain-id | destination-channel | port                                                | known operators                                            |
| -------------- | ----------- | -------------------- | ------------------- | --------------------------------------------------- | ---------------------------------------------------------- |
| channel-53     | Cosmos Hub  | cosmoshub-4          | channel-428         | icacontroller-lscosmos\\_pstake\\_reward\\_account     | Architect Nodes, AUDIT.one, Cros-nest, CryptoCrew, Stakely |
| channel-66     | Cosmos Hub  | cosmoshub-4          | channel-490         | icacontroller-lscosmos\\_pstake\\_delegation\\_account | Architect Nodes, AUDIT.one, Cros-nest, CryptoCrew, Stakely |

Find more details on relayers via [Map of Zones](https://mapofzones.com/zones/core-1/peers?columnKey=ibcVolumeIn\\&period=30d) and via [this dashboard provided by Smart Stake](https://relayers.smartstake.io/network/XPRT)

## **IBC Channels for Persistence Testnet (test-core-2)**

### Transfers

| source channel | destination chain | destination-chain-id  | destination channel | known operators  |
| -------------- | ----------------- | --------------------- | ------------------- | ---------------- |
| channel-0      | Axelar            | axelar-testnet-lisbon | channel-261         | Cosmonaut Stakes |
| channel-1      | Cosmos Hub        | theta-testnet-001     | channel-2447        | Paranormal Bros  |

`
  const hideFirstHeading = true

  return (
    <Box display="flex" flexDirection="column" height="100vh" overflow="hidden">
      <Header />
      <Box display="flex" flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" bg="white" overflowY="auto" overflowX="hidden">
          <Container maxW="5xl" py={8} px={7}>
          {hideFirstHeading && (
            <Heading as="h1" size="2xl" mb={4}>
              IBC Channels
            </Heading>
          )}
          
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

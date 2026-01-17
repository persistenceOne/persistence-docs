'use client'

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

export default function Page() {
  const content = `# Relay on Mainnet

> **Note** This guide is based on the [Official Cosmos Relayer Setup Guide](https://github.com/cosmos/relayer/blob/main/README.md).

The Inter-Blockchain Communication (IBC) protocol enables different blockchains to communicate and transfer assets seamlessly. Relayers serve as intermediaries that facilitate this communication by relaying packets of data between interconnected chains. A relayer process monitors for updates on opens paths between sets of [IBC](https://ibcprotocol.org/) enabled chains. The relayer submits these updates in the form of specific message types to the counterparty chain. Clients are then used to track and verify the consensus state.

In addition to packet relaying, relayers play a vital role in establishing and managing connections, channels, and clients between various blockchains. This functionality fosters seamless interoperability and facilitates asset transfers across different networks.

Additional information on how IBC works can be found [here](https://ibc.cosmos.network/).

## Hardware Requirements

* **Minimum RAM requirement:**
  * 4 GB RAM
  * 50 GB SSD
  * 2 CPU
* **Recommended:**
  * 8 GB RAM
  * 100 GB SSD
  * 4 CPU
* **Operating System:**
  * **Recommended OS:** Linux(x86\\_64)
  * **Others:** Windows/MacOS(x86)

## Prerequisites

Ensure you have installed the required prerequisites before setting up the Cosmos Go Relayer. Because running the Cosmos Go Relayer software depends on them, prerequirements are also known as dependencies.

We need to install and setup one dependency - **Go**.

### Install Go

1.  Remove any previous installation:

    \`\`\`bash
    rm -rf /usr/local/go
    \`\`\`
2.  Add the Go PPA to Your System:

    First, add the \`longsleep/golang-backports\` PPA to your system. This repository contains the latest version of Go. You can add it by running the following command in your terminal:

    \`\`\`bash
    sudo add-apt-repository ppa:longsleep/golang-backports
    \`\`\`
3.  **Update Your Package List**:

    After adding the PPA, update your package list to include the latest packages available in the repository:

    \`\`\`bash
    sudo apt update
    \`\`\`
4.  **Install Go**:

    Now, install Go using the \`apt\` package manager. This command will install the latest version of Go available in the PPA:

    \`\`\`bash
    sudo apt install golang-go
    \`\`\`
5.  Check **Go** is installed correctly _(sample output: \`go version go1.19.4 linux/amd64\`)_:

    \`\`\`bash
    go version
    \`\`\`
6. Set $GOPATH:
   1.  Open the \`.profile\` file, where all your environment variables are stored:

       \`\`\`bash
       nano ~/.profile
       \`\`\`
   2.  Scroll down to the end of the file and add the following line before \`export $PATH\`:

       \`\`\`bash
       export GOPATH=$HOME/go
       \`\`\`
   3.  Add the following line to **PATH** (i.e. \`export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin\`):

       \`\`\`bash
       $GOPATH/bin
       \`\`\`
   4.  Reload the **PATH** environment variable:

       \`\`\`bash
       source ~/.profile
       \`\`\`
   5.  Create the directories we set in **PATH**:

       \`\`\`bash
       mkdir -p $GOPATH/bin
       \`\`\`

### Install Git

1.  Install **Git**:

    \`\`\`bash
    apt install git
    \`\`\`
2.  Verify **git** is installed correctly:

    \`\`\`bash
    git --version # Sample Output: git version 2.34.1
    \`\`\`

## Installation Steps

### 1. Install the Cosmos Relayer Binary

The Cosmos Go Relayer code is available at the [Official GitHub Repository](https://github.com/cosmos/relayer). First, we must 'download' all the code locally by cloning the GitHub repository, choosing the latest version _(as of time of writing: v5.0.0)_ and installing the binary into our GOPATH as explained in the [prerequisites section](/docs/build/relayers/relay-on-mainnet.md#Install-Go) of this guide.

\`\`\`bash
git clone https://github.com/cosmos/relayer.git # Download all the code locally
cd relayer && git checkout v5.0.0 # Choose the latest version
make install # Install the Cosmos Go Relayer (creates a binary in GOPATH)
\`\`\`

After installing the binary, verify its installation by executing the following command.

\`\`\`bash
rly version
\`\`\`

The command should output a similar message. If you're seeing an error, ensure you have correctly [installed and setup Go](/docs/build/relayers/relay-on-mainnet.md#Install-Go).

\`\`\`bash
version: v2.2.0-rc3
commit: unknown
cosmos-sdk: v0.46.6
go: go1.18.3 linux/amd64
\`\`\`

\\\\

### 2. Initialize the Relayer's Configuration Directory & File

After the relayer binary is correctly installed, it needs to be locally initialized. The following command creates a configuration location _(available at \`~/.relayer\`)_, containing a \`config/config.yaml\` file specifying how the relayer should run _(chains, channels, etc.)_.

Later on, when the keys are added, an extra folder is created. This folder is available at \`~/.relayer/keys\`. This is the default keys storage location for all the chains you relay between.

\`\`\`bash
rly config init
\`\`\`

**Default config file location:** \`~/.relayer/config/config.yaml\`

By default, transactions will be relayed with a memo of \`rly(VERSION)\` e.g. \`rly(v2.0.0)\`.

To customize the memo for all relaying, use the \`--memo\` flag when initializing the configuration.

\`\`\`bash
rly config init --memo "My custom memo"
\`\`\`

Custom memos will have \`rly(VERSION)\` appended. For example, a memo of \`My custom memo\` running on relayer version \`v2.0.0\` would result in a transaction memo of \`My custom memo | rly(v2.0.0)\`.

Additionally, the memo can be changed anytime in the following file: \`~/.relayer/config/config.yaml\`



### 3. Configure the Chains to Relay Between

In our example, we will configure the relayer to operate on the canonical path between Gravity Bridge and Persistence. These chains are chosen solely for the purpose of this guide.

The following command fetches chain metadata from the [chain-registry](https://github.com/cosmos/chain-registry) and adds it to your config file.

\`\`\`bash
rly chains add gravitybridge persistence
\`\`\`

Adding chains from the chain-registry randomly selects an RPC address from the registry entry.\\
If you are running your own node, manually go into the config and adjust the \`rpc-addr\` setting.

**NOTE:** \`rly chains add\` will check the liveliness of the available RPC endpoints for that chain in the [chain-registry](https://github.com/cosmos/chain-registry). It is possible that the command will fail if none of these RPC endpoints are available. In this case, you will be required to manually change the RPC endpoints in \`~/.relayer/config/config.yaml\`.

You can check available Gravity Bridge RPC endpoints [here](https://cosmos.directory/gravitybridge/nodes) and available Persistence RPC endpoints [here](https://cosmos.directory/persistence/nodes).



### 4. Import Keys OR Create Keys

Next, you're required to add an existing key (a.k.a. address) or create a new one. An address is necessary to sign and relay transactions between chains _(in our case, Gravity Bridge <-> Persistence)_.

> **Note** \`key-name\` is an identifier of your choosing.

If you need to generate a new private key, use the following command. Remember to replace \`key-name\` -> e.g. \`rly keys add persistence "MyRandomKeyName"\`

\`\`\`bash
rly keys add gravitybridge [key-name]
rly keys add persistence [key-name]
\`\`\`

If you already have a private key and want to restore it from your mnemonic you can use the following command. Remember to replace \`key-name\`.

\`\`\`bash
rly keys restore gravitybridge [key-name] "mnemonic words here"
rly keys restore persistence [key-name] "mnemonic words here"
\`\`\`

Before continuing, ensure your keys have been successfully added by running the following command. You can also check the \`~/.relayer/keys\` folder and observe the contents.

\`\`\`bash
rly keys list gravitybridge
rly keys list persistence
\`\`\`



### 5. Edit the Relayer Key Name in \`config.yaml\`

**NOTE:** This step is necessary if you chose a \`key-name\` other than "default" in the [previous step](/docs/build/relayers/relay-on-mainnet.md#Import-Keys-OR-Create-Keys). Be aware you need to replace the key names for both chains - Gravity Bridge and Persistence.

Example:

\`\`\`yaml
- type: cosmos
   value:
   key: YOUR-KEY-NAME-HERE # e.g.MyRandomKeyName
   chain-id: core-1
   rpc-addr: https://persistence-mainnet-rpc.cosmonautstakes.com:443
\`\`\`



### 6. Ensure the Keys are Funded

Your configured addresses will need to contain some of the respective native tokens for paying relayer fees. You can buy XPRT and GRAV on the [Osmosis Decentralized Exchange](https://app.osmosis.zone/). After acquiring some tokens, you need to send them to the addresses obtained by running the following commands:

\`\`\`bash
rly keys list gravitybridge
rly keys list persistence
\`\`\`

After sending some tokens, you can query the balance of each configured key by running:

\`\`\`bash
rly query balance gravitybridge
rly query balance persistence
\`\`\`



### 7. Configure Path Metadata

We have the chain metadata configured, now we need path metadata. For more info on \`path\` terminology visit [here](https://github.com/cosmos/relayer/blob/main/docs/troubleshooting.md).

> **Note** Thinking of chains in the config as "source" and "destination" can be confusing. Be aware that most paths are bi-directional.

Use the following command to retrieve IBC path metadata from the [chain-registry](https://github.com/cosmos/chain-registry/tree/master/\\_IBC) and add these paths to your config file.

\`\`\`bash
rly paths fetch
\`\`\`



### 8. Configure the Channel Filter

By default, the relayer will relay packets over all channels on a given connection. You can find all open IBC channels between Persistence and other chains [here](https://www.mintscan.io/persistence/relayers).

Each path has a \`src-channel-filter\` which you can utilize to specify which channels you would like to relay on.

The \`rule\` can be one of three values:

* \`allowlist\` which tells the relayer to relay on _ONLY_ the channels in \`channel-list\`
* \`denylist\` which tells the relayer to relay on all channels _BESIDES_ the channels in \`channel-list\`
* empty value, which is the default setting, and tells the relayer to relay on all channels

Since we are only worried about the canonical channel between the Gravity Bridge and Persistence our filter settings would look like the following.

\`\`\`yaml
gravitybridge-persistence:
     src:
         chain-id: gravity-bridge-3
         client-id: 07-tendermint-39
         connection-id: connection-50
     dst:
         chain-id: core-1
         client-id: 07-tendermint-51
         connection-id: connection-49
     src-channel-filter:
         rule: allowlist
         channel-list: [channel-24]
\`\`\`

Because two channels between chains are tightly coupled, there is no need to specify the **dst** channels.



### 9. Start Relayer

The relayer will periodically update the clients and listen for IBC messages to relay.

Since we have setup only one path _(Gravity Bridge <-> Persistence)_, we can start the relayer on the afore-mentioned path by running the following command

\`\`\`bash
rly start
\`\`\`

If you have multiple paths available (to check run \`rly chains list\`), then you can start relaying on just one path _(Gravity Bridge <-> Persistence)_ by running the following command:

\`\`\`bash
rly start gravitybridge-persistence
\`\`\`

When running multiple instances of \`rly start\`, you will need to use the \`--debug-addr\` flag and provide an address:port. You can also pass an empty string \`''\` to turn off this feature or pass \`localhost:0\` to randomly select a port.



### 10. How should \`~/.relayer/config/config.yaml\` look?

To aid in the setup of the configuration file, we've provided an example on how a relayer configuration file should look.

**Example:**

\`\`\`yaml
global:
    api-listen-addr: :5183
    timeout: 10s
    memo: You have been relayed by Cosmonaut Stakes
    light-cache-size: 20
chains:
    gravitybridge:
        type: cosmos
        value:
            key: CosmonautStakesRelayerKey
            chain-id: gravity-bridge-3
            rpc-addr: https://gravity-rpc.polkachu.com:443
            account-prefix: gravity
            keyring-backend: test
            gas-adjustment: 1.2
            gas-prices: 0.01ugraviton
            min-gas-amount: 1
            debug: false
            timeout: 20s
            output-format: json
            sign-mode: direct
            extra-codecs: []
    persistence:
        type: cosmos
        value:
            key: CosmonautStakesRelayerKey
            chain-id: core-1
            rpc-addr: https://persistence-mainnet-rpc.cosmonautstakes.com:443
            account-prefix: persistence
            keyring-backend: test
            gas-adjustment: 1.2
            gas-prices: 0.01uxprt
            min-gas-amount: 1
            debug: false
            timeout: 20s
            output-format: json
            sign-mode: direct
            extra-codecs: []
paths:
    gravitybridge-persistence:
        src:
            chain-id: gravity-bridge-3
            client-id: 07-tendermint-39
            connection-id: connection-50
        dst:
            chain-id: core-1
            client-id: 07-tendermint-51
            connection-id: connection-49
        src-channel-filter:
            rule: allowlist
            channel-list: [channel-24]
\`\`\`
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
          <Box flex="1" bg="white" overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4}>
              Relay on Mainnet
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

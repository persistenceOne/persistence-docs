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
  const content = `# Oracle Price Feeder

The \`x/oracle\` requires that all validators vote on the price of assets which governance has decided to add. In order to vote on these prices, the persistenceOne team has built the [Oracle price feeder](https://github.com/persistenceOne/oracle-feeder).

## How to setup

1. First, install the oracle-feeder:

    a. Install the binary from [releases](https://github.com/persistenceOne/oracle-feeder/releases)
    - Download the binary
    - Make the binary executable: \`chmod +x oracle-feeder\`
    - Move the binary to \`/usr/local/bin\`

    b. Or install using source code
    - clone oracle-feeder: \`git clone https://github.com/persistenceOne/oracle-feeder\`
    - install: \`cd oracle-feeder && make install\`

1. Setup account

    - Setup your keyring - checkout [this doc](https://docs.cosmos.network/v0.46/run-node/keyring.html)
    - You can setup a separate key for oracle account or use the validator's key as the oracle account

        > **Note**  
        > It is recommended to setup a separate key for oracle account, which will submit vote on behalf of validator.  
        > Make sure you have some tokens in this account to be able to submit pre-vote & vote txs, \`100xprt\` should be enough for \`~1M\` txs

    - Delegate consent to the oracle account (Not needed if you are using validator's key as oracle account)

        \`\`\`sh
        persistenceCore tx oracle delegate-feed-consent <validator-key> $(persistenceCore keys show <oracle-key> -a --keyring-backend file) --keyring-backend file
        \`\`\`

1. Create config file

    - Download the example config (or copy from source code)

        \`\`\`sh
        wget https://raw.githubusercontent.com/persistenceOne/oracle-feeder/main/price-feeder.example.toml
        \`\`\`

    - Update \`[account]\` information with correct chain-id (\`core-1\` for mainnet, \`test-core-1\` for testnet), address and validator address from your keyring

        \`\`\`toml
        [account]
        address = "persistence152nvc6f096v6n6tr5lg50xq22ak0chsr0ru7xc" # oracle account address
        chain_id = "test-core-1"
        validator = "persistencevaloper1pkkayn066msg6kn33wnl5srhdt3tnu2v94kvz9"
        \`\`\`

        In order to get your oracle address & validator address, you can run:

        \`\`\`sh
        persistenceCore keys show <oracle-key> -a --keyring-backend file
        persistenceCore keys show <validator-key> -a --bech=val --keyring-backend file
        \`\`\`

    - Update \`[keyring]\` information (learn about keyring backend [here](https://docs.cosmos.network/v0.46/run-node/keyring.html))

        \`\`\`toml
        [keyring]
        backend="file"
        dir="<path to .persistenceCore dir>"
        passphrase="xxxx"
        \`\`\`

        > **Note**
        > Passphrase can be provided via environment variable as well
        >
        > \`\`\`sh
        > export ORACLE_FEEDER_KEY_PASSPHRASE=xxxx
        > \`\`\`

1. Create a [systemd](https://systemd.io/) service file

    - Run this command to create \`oracle-feeder.service\`, make sure to update the config path.

        \`\`\`sh
        sudo tee /etc/systemd/system/oracle-feeder.service > /dev/null <<EOF
        [Unit]
        Description=PersistenceOne Oracle Price Feeder
        After=online.target[Service]
        StartLimitIntervalSec=0
        StartLimitBurst=0

        [Service]
        Environment="ORACLE_FEEDER_KEY_PASSPHRASE=xxxx" # remove this line, if not using env variable
        Type=simple
        User=$USER
        ExecStart=$(which oracle-feeder) <path/to/oracle/config.toml> --log-level=debug
        Restart=on-failure
        RestartSec=5s
        LimitNOFILE=65535

        [Install]
        WantedBy=multi-user.target
        EOF
        \`\`\`

        > **Note**  
        > The price feeder hits a lot of endpoints to get prices for assets. Sometimes the websocket connections disconnect and cannot reconnect. If this is happening, set up the service file to restart the process after a few hours
        >
        > \`\`\`yaml
        > Restart=always
        > RuntimeMaxSec=14400s # 4h
        > \`\`\`

1. Start your service

    \`\`\`sh
    sudo systemctl daemon-reload
    sudo systemctl enable oracle-feeder
    sudo systemctl start oracle-feeder
    \`\`\`

1. Please check to make sure your oracle feeder is running successfully

    \`\`\`sh
    sudo journalctl -u oracle-feeder.service -f
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
          <Box flex="1" bg={themeColors.body.bg} overflowY="auto" overflowX="hidden" data-scroll-container>
          <Container maxW="5xl" py={{ base: 4, md: 8 }} px={{ base: 4, md: 7 }}>
          {hideFirstHeading && (
            <Link as={NextLink} href={pathname} _hover={{ textDecoration: 'none' }}><Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={4} color={themeColors.text[700]}>
              Oracle Price Feeder
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

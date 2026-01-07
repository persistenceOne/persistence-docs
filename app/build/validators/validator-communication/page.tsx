import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'
import { MarkdownContent } from '@/components/MarkdownContent'

export const metadata = {
  title: 'Validator Communication - Persistence Docs',
  description: 'Communication is key!',
}

export default function Page() {
  const content = `
# Validator Communication

To improve coordination and interactions between the Persistence team and the validators when required, the following channels are used.

## Discord

| Discord Channels                                                                                         | Description                                                                       |
| -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [#validators-announcements](https://discord.com/channels/796174129077813248/1021758804410519594)         | Announcements regarding the mainnet.                                              |
| [#validators-discussion](https://discord.com/channels/796174129077813248/825820268231655425)             | For mainnet validators to discuss, ask questions, raise issues, and collaborate.  |
| [#validators-status](https://discord.com/channels/796174129077813248/854663233465090048)                 | Monitoring alerts on the status of the mainnet validators on \`Core-1 Chain.\`      |
| [#testnet-validators-announcements](https://discord.com/channels/796174129077813248/1042042319987294229) | Announcements regarding the testnet.                                              |
| [#testnet-validators-discussion](https://discord.com/channels/796174129077813248/1042043039113289778)    | For testnet validators to discuss, ask questions, raise issues, and collaborate.  |
| [#testnet-status](https://discord.gg/GsYrAVstjD)                                                         | Monitoring alerts on the status of the testnet validators on \`test-core-1 Chain.\` |

## Telegram

| Telegram Channel                                                                  | Description                                                                                                       |
| --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [Persistence Validators Announcements](https://t.me/PersistenceValidatorsUpdates) | Channel for all the communications regarding governance.                                                          |
| YourValidator <> Persistence (optional but encougared)                            | Channel for private communications. Please contact someone from the Persistence team to set it up if not done yet |



<details>

<summary>🙇‍♂️ Amelia (Persistence Super Bot) for Telegram</summary>

Persistence chain has 100+ and 50+ validator groups on telegram for mainnet & testnet respectively. Sending chain updates to all the groups manually becomes a tedious task and is comparatively slow at an emergency (Chain halt, Emergency Upgrade, exploit etc).

Hence, we launched a telegram bot (Amelia) which can relay the following details in a much faster way:&#x20;

1. Broadcast important announcement for Mainnet & Testnet.
2. Chain updates - Missing blocks, commission change, etc
3. Reminders - Automatically sends reminder for voting 24 hours prior to end time for validators who haven't voted.&#x20;

**Looks appealing?** [Contact team](/docs/community-and-support/connect-and-follow) if you don't have it installed on our group already.&#x20;

**PS:** This bot will not be used for spams or marketing announcements. Pinky Promise!

</details>

## Email

Join our Email list from[ here](http://eepurl.com/idRmrT) or contact someone from the Persistence team on Discord or Telegram in order to be added to the distribution list for validators announcements.&#x20;



## Your contact details

To ensure communication is always smooth, please ensure to have provided your latest contact details. To do so, please register your contact details via [the FDP-app](https://fdp.persistence.one). Note that you can provide your contact details without applying for the [Foundation Delegation Program](/docs/build/validators/foundation-delegations/), just complete step 1 in the FDP-app.&#x20;

## Monitoring

We recommend validators to set up their own monitoring tools and alerts to avoid any downtime. In absence of your own monitoring tools, we suggest using the tool made available by Paranormal Brothers:

<div class="embed-container"><iframe src="https://persistence.paranorm.pro/monitor/" frameborder="0" allowfullscreen></iframe></div>
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
              Validator Communication
            </Heading>
          )}
          {true && (
            <Text fontSize="lg" color="gray.600" mb={8}>
              Communication is key!
            </Text>
          )}
          <MarkdownContent content={content} hideFirstHeading={hideFirstHeading} />
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

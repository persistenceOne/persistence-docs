# 📡 Relayers

In IBC, blockchains do not directly pass messages to each other over the network. This is where relayers comes in. A relayer process monitors for updates on opens paths between sets of [IBC enabled chains](https://mapofzones.com/). The relayer submits these updates in the form of specific message types to the counterparty chain. Clients are then used to track and verify the consensus state.

In addition to relaying packets, this relayer can open paths across chains, thus creating clients, connections and channels.

Additional Resources:

* [Cosmos Docs](https://tutorials.cosmos.network/)
* [Relayers](https://tutorials.cosmos.network/hands-on-exercise/5-ibc-adv/2-relayer-intro.html)
* [IBC](https://ibc.cosmos.network/)

The following pages show the established relayers between the Persistence Core-1 Chain and other IBC-enabled chains. It also contains information for operators who want to set up additional relayers.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>IBC Channels</strong></td><td><a href="ibc-channels.md">ibc-channels.md</a></td></tr><tr><td><strong>IBC Relayers</strong></td><td><a href="ibc-relayers.md">ibc-relayers.md</a></td></tr><tr><td><strong>Relay on Mainnet</strong></td><td><a href="relay-on-mainnet.md">relay-on-mainnet.md</a></td></tr><tr><td><strong>Relay on Testnet</strong></td><td><a href="relay-on-testnet.md">relay-on-testnet.md</a></td></tr></tbody></table>

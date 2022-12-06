# Relayers

<mark style="color:red;">Section to be reviewed and updated</mark>

## General

In IBC, blockchains do not directly pass messages to each other over the network. This is where relayers comes in. A relayer process monitors for updates on opens paths between sets of [IBC](https://ibcprotocol.org/) enabled chains. The relayer submits these updates in the form of specific message types to the counterparty chain. Clients are then used to track and verify the consensus state.

In addition to relaying packets, this relayer can open paths across chains, thus creating clients, connections and channels.

Additional information on how IBC works can be found [here](https://ibc.cosmos.network/).&#x20;

| Relayer |        IBC-Go        |
| :-----: | :------------------: |
|  v1.0.0 | ibc-go v1, ibc-go v2 |
|  v2.0.0 |       ibc-go v3      |

{% embed url="https://github.com/cosmos/relayer" %}
Source
{% endembed %}

## Specific

The following pages show the established Relayers specifically between the Persistence Core-1 chains and other chains. It also contains info for operators who want to set up additional relayers.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>IBC Channels</strong></td><td><a href="ibc-channels.md">ibc-channels.md</a></td></tr><tr><td><strong>IBC Relayers</strong></td><td><a href="ibc-relayers.md">ibc-relayers.md</a></td></tr><tr><td><strong>Relay on Mainnet</strong></td><td><a href="relay-on-mainnet.md">relay-on-mainnet.md</a></td></tr><tr><td><strong>Relay on Testnet</strong></td><td><a href="relay-on-testnet.md">relay-on-testnet.md</a></td></tr></tbody></table>

# Public Infrastructure

<mark style="color:red;">To be reviewed and updated</mark>

{% hint style="info" %}
The following API's are recommended for development purposes. For maximum control and reliability it's recommended to [run your own node](setup.md).&#x20;
{% endhint %}

## Endpoints

We provide following endpoints to help developers with integration

| Protocol | Mainnet                                                                | Testnet                                                                        |
| -------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Chain ID | core-1                                                                 | test-core-1                                                                    |
| RPC      | [https://rpc.core.persistence.one](https://rpc.core.persistence.one)   | [https://rpc.testnet.persistence.one/](https://rpc.testnet.persistence.one/)   |
| REST     | [https://rest.core.persistence.one](https://rest.core.persistence.one) | [https://rest.testnet.persistence.one/](https://rest.testnet.persistence.one/) |
| GRPC     | grpc://grpc.core.persistence.one                                       |                                                                                |
| WSS      | wss://rpc.core.persistence.one:443/websocket                           |                                                                                |

We also provide archival endpoints to retrieve historical data

| Protocol | Endpoints                                     |
| :------: | --------------------------------------------- |
|    RPC   | https://rpc.persistence.audit.one             |
|   REST   | https://rest.persistence.audit.one            |
|    WSS   | wss://rpc.persistence.audit.one:443/websocket |



## State-Sync

to use statesync change the following under `config.toml`

```go
[statesync]
enable = true
rpc_servers = "https://rpc.core.persistence.one:443,https://rpc.core.persistence.one:443"
trust_height = 0
trust_hash = ""
trust_period = "112h0m0s"
```

and use a trusted height from the rpc,(recent height will do)

```go
curl -s https://rpc.core.persistence.one/status | jq '.result .sync_info | {trust_height: .latest_block_height, trust_hash: .latest_block_hash} | values'
```

## Snapshot

```
please use a recent snapshot provided by the providers below
```

Steps to use our backups

* Install `aria2` and `lz4`
*   Download our backup with

    ```
    aria2c -x 4 -x 4 -c <url>
    ```
*   Extract the contents to persistenced home.

    ```
    tar -I lz4 -xf data.tar.lz4 -C <persistence home which defaults to ~/.persistenceCore/>
    ```

##

## Chain Registry

This repo contains a chain.json and assetlist.json for a number of cosmos-sdk based chains. A chain.json contains data that makes it easy to start running or interacting with a node.

* [Chain Registry](https://github.com/cosmos/chain-registry) : `https://github.com/cosmos/chain-registry`
* [`assetlist.json`](https://github.com/cosmos/chain-registry/blob/master/persistence/assetlist.json) for Persistence
* [`chain.json`](https://github.com/cosmos/chain-registry/blob/master/persistence/chain.json) for Persistence

Use [this dashboard](https://cosmos.directory/persistence/nodes) to see a full list of RPC, REST, GRPC endpoints, seeds & peers

{% hint style="info" %}
Did you know there is also an NPM package that fetch chain-registry data?\
**Learn more** : [https://www.npmjs.com/package/chain-registry](https://www.npmjs.com/package/chain-registry)
{% endhint %}



## Public Nodes, Faucets, Snapshots, Statesync - provided by various providers

{% embed url="https://www.allthatnode.com/persistence.dsrv" %}
Public Nodes, Faucets, Snapshots, StateSync
{% endembed %}

{% embed url="https://bitszn.com/snapshots.html" %}
Snapshots
{% endembed %}

{% embed url="https://autostake.net/networks/persistence#services" %}
Snapshots, addrbook
{% endembed %}

{% embed url="https://persistence.paranorm.pro/" %}
Validator monitoring, Snapshots, RPC/Seed/Peer
{% endembed %}


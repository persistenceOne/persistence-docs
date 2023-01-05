
# Public Infrastructure

{% hint style="info" %}
The following API's are recommended for development purposes. For maximum control and reliability it's recommended to [run your own node](setup.md).&#x20;
{% endhint %}


## Endpoints

To help developers with integration, the following endpoints are provided.

| Protocol | Mainnet (core-1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Testnet (test-core-1)                                                                                                                                                                          |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RPC      | [https://rpc.core.persistence.one](https://rpc.core.persistence.one), [https://persistence-rpc.polkachu.com](https://persistence-rpc.polkachu.com), [https://persistence-mainnet-rpc.cosmonautstakes.com](https://persistence-mainnet-rpc.cosmonautstakes.com), [https://persistence-rpc.kleomedes.network](https://persistence-rpc.kleomedes.network), [https://rpc.core.persistence.one](https://rpc.core.persistence.one), [https://rpc-persistence.architectnodes.com](https://rpc-persistence.architectnodes.com), [https://rpc-persistent-ia.cosmosia.notional.ventures/](https://rpc-persistent-ia.cosmosia.notional.ventures/), [https://rpc.cosmos.directory/persistence](https://rpc.cosmos.directory/persistence), [http://xprt.paranorm.pro/](http://xprt.paranorm.pro/), [https://persistence-rpc.quantnode.tech](https://persistence-rpc.quantnode.tech)      | [https://rpc.testnet.persistence.one/](https://rpc.testnet.persistence.one/), [https://persistence-testnet-rpc.cosmonautstakes.com/](https://persistence-testnet-rpc.cosmonautstakes.com/)     |
| REST     | [https://rest.core.persistence.one](https://rest.core.persistence.one), [https://persistence-api.polkachu.com/](https://persistence-api.polkachu.com/), [https://persistence.mainnet.lcd.autostake.net/](https://persistence.mainnet.lcd.autostake.net/), [https://persistence-mainnet-rest.cosmonautstakes.com/](https://persistence-mainnet-rest.cosmonautstakes.com/), [https://persistence-api.kleomedes.network/](https://persistence-api.kleomedes.network/), [https://rest.core.persistence.one/](https://rest.core.persistence.one/), [https://rest-persistence.architectnodes.com/](https://rest-persistence.architectnodes.com/), [https://api-persistent-ia.cosmosia.notional.ventures/](https://api-persistent-ia.cosmosia.notional.ventures/), [https://rest.cosmos.directory/persistence](https://rest.cosmos.directory/persistence), [https://persistence-lcd.quantnode.tech](https://persistence-lcd.quantnode.tech)      | [https://rest.testnet.persistence.one/](https://rest.testnet.persistence.one/), [https://persistence-testnet-rest.cosmonautstakes.com/](https://persistence-testnet-rest.cosmonautstakes.com/) |
| GRPC     | grpc.core.persistence.one:443, grpc-persistent-ia.cosmosia.notional.ventures:443, persistence-grpc.polkachu.com:15490, persistence-grpc.quantnode.tech:9090                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                                                |
| WSS      | wss://rpc.core.persistence.one:443/websocket                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                |

## Archival Endpoints
To aid the retrieve of historical data, the following archival endpoints are provided.

| Protocol | Mainnet (core-1)                              | Testnet (test-core-1)                         |
| -------- | --------------------------------------------- | --------------------------------------------- |
| RPC      | https://rpc.persistence.audit.one             |                                               |
| REST     | https://rest.persistence.audit.one            |                                               |
| WSS      | wss://rpc.persistence.audit.one:443/websocket |                                               |


## State Sync
To aid with node syncing, the following State Sync endpoints are provided.

| Provider         | Mainnet (core-1)                                                                                                   | Testnet (test-core-1)                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| Persistence      | [https://rpc.core.persistence.one:443](https://rpc.core.persistence.one:443)                                       | [https://rpc.testnet.persistence.one:443](https://rpc.testnet.persistence.one:443)                                 |
| Cosmonaut Stakes | [https://persistence-mainnet-rpc.cosmonautstakes.com:443](https://persistence-mainnet-rpc.cosmonautstakes.com:443) | [https://persistence-testnet-rpc.cosmonautstakes.com:443](https://persistence-testnet-rpc.cosmonautstakes.com:443) |

To use State Sync change the following under `config.toml`. Choose at least 2 providers for the `rpc_servers` parameters from the table above.

```bash
[statesync]
enable = true
rpc_servers = "https://rpc.core.persistence.one:443,https://persistence-mainnet-rpc.cosmonautstakes.com:443"
trust_height = 0
trust_hash = ""
trust_period = "112h0m0s"
```

Replace `trust_height` and `trust_hash` with the output of the following command. Depending if you're syncing a mainnet or testnet node, you might also want to replace the RPC endpoint.

```bash
curl -s https://rpc.core.persistence.one/status | jq '.result .sync_info | {trust_height: .latest_block_height, trust_hash: .latest_block_hash} | values'
```


## Snapshots
To aid with node syncing, the following snapshots are provided.

| Provider            | Mainnet (core-1)                                                                                                                              | Testnet (test-core-1)                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------  | --------------------------------------------------------------------------------------------------------------------------------- |
| Bitszn              | [1]  [https://snapshots.bitszn.com/snapshots/persistence/persistence.tar](https://snapshots.bitszn.com/snapshots/persistence/persistence.tar) |                                                                                                                                   |
| Paranormal Brothers | [1]  [https://snapshot.paranorm.pro/persistence_snapshot.tar.gz](https://snapshot.paranorm.pro/persistence_snapshot.tar.gz)                   |                                                                                                                                   |   
| High Stakes         | [1]  [https://tools.highstakes.ch/files/persistence.tar.gz](https://tools.highstakes.ch/files/persistence.tar.gz)                             |                                                                                                                                   |
| Auto Stake          | [2]  [https://autostake.net/networks/persistence#services](https://autostake.net/networks/persistence#services)                               | [2]  [https://autostake.net/networks/testnets/persistence#services](https://autostake.net/networks/testnets/persistence#services) |

**How to use the backups:**
Depending on the provider's snapshot, a specific URL above needs to follow a set of instructions. Each table URL has a number attached indicating the usage instructions.

#### [1] Method One - using `wget`
1. Download Snapshot:
    ```bash
    cd ~/.persistenceCore && wget -O persistence_snapshot.tar.gz <SNAPSHOT_URL>
    ```
2. Stop your node.
3. Backup `~/.persistenceCore/data/priv_validator_state.json`.
4. Extract archive:
    ```bash
    tar zxf ~/.persistenceCore/persistence_snapshot.tar.gz
    ```
5. Copy & Paste the `priv_validator_state.json` backup back in `~/.persistenceCore/data/`.
6. Start your node.

#### [2] Method Two - following the provider's instructions
1. Visit the provider's website (click the link in the table).
2. Follow the instructions provided.


## Chain Registry

This repo contains a `chain.json` and `assetlist.json` for a number of cosmos-sdk based chains. A `chain.json` contains data that makes it easy to start running or interacting with a node.

* [Chain Registry](https://github.com/cosmos/chain-registry) : `https://github.com/cosmos/chain-registry`
* [`assetlist.json`](https://github.com/cosmos/chain-registry/blob/master/persistence/assetlist.json) for Persistence
* [`chain.json`](https://github.com/cosmos/chain-registry/blob/master/persistence/chain.json) for Persistence

Use [this dashboard](https://cosmos.directory/persistence/nodes) to see a full list of RPC, REST, GRPC endpoints, seeds & peers.

{% hint style="info" %}
Did you know there is also an NPM package that fetch chain-registry data?\
**Learn more** : [https://www.npmjs.com/package/chain-registry](https://www.npmjs.com/package/chain-registry)
{% endhint %}


## Public Nodes, Faucets, Snapshots, State Sync - provided by various providers

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


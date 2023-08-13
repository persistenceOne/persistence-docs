# State Sync

{% hint style="warning" %}
**On Aug 15th, 2023**, test-core`-1` will be deprecated. The new official testnet will be test-core-2. Would request all the current validators to migrate their nodes before that!
{% endhint %}



## State Sync

To aid with node syncing, the following State Sync endpoints are provided.

<table><thead><tr><th width="213.33333333333331">Provider</th><th width="267">Mainnet (core-1)</th><th width="277">Testnet (test-core-2)</th><th>Testnet (test-core-1)</th></tr></thead><tbody><tr><td>Cosmonaut Stakes</td><td>https://persistence-mainnet-rpc.cosmonautstakes.com:443</td><td><a href="https://persistence-testnet-rpc.cosmonautstakes.com/"> https://persistence-testnet-rpc.cosmonautstakes.com/</a></td><td>https://persistence-testnet-rpc.cosmonautstakes.com:443</td></tr><tr><td>Persistence</td><td>https://rpc.core.persistence.one:443</td><td></td><td>https://rpc.testnet.persistence.one:443</td></tr><tr><td>Polkachu</td><td>https://persistence-rpc.polkachu.com:443</td><td></td><td>https://persistence-testnet-rpc.polkachu.com:443</td></tr><tr><td>YTWOFUND</td><td></td><td><a href="https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md">https://github.com/YTWOFUND/PersistenceCore-service/blob/main/PersistenceCoreTestnet/README.md</a></td><td></td></tr><tr><td>Baryon</td><td></td><td><a href="https://persistence-testnet-api.baryon.dev/">https://persistence-testnet-api.baryon.dev/</a></td><td></td></tr></tbody></table>

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

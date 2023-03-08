# State Sync

## State Sync

To aid with node syncing, the following State Sync endpoints are provided.

| Provider         | Mainnet (core-1)                                        | Testnet (test-core-1)                                   |
| ---------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| Cosmonaut Stakes | https://persistence-mainnet-rpc.cosmonautstakes.com:443 | https://persistence-testnet-rpc.cosmonautstakes.com:443 |
| Persistence      | https://rpc.core.persistence.one:443                    | https://rpc.testnet.persistence.one:443                 |
| Polkachu         | https://persistence-rpc.polkachu.com:443                | https://persistence-testnet-rpc.polkachu.com:443        |

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

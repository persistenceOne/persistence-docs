# Join Mainnet

<mark style="color:red;">To be reviewed &  updated</mark>

****

**System Requirements**

* Four or more CPU cores
* At least 500 GB of disk storage
* At least 8 GB of memory
* At least 100 mbps of network bandwidth

\*\* HDD not recommended \*\*

**Binaries**

Download our binaries from [here](https://github.com/persistenceOne/persistenceCore/releases/tag/v0.2.3) and place it in your bin path

**Generate keys**

```
persistenceCore keys add [key_name]
```

or

```
persistenceCore keys add [key_name]   --recover  
```

to regenerate keys with your BIP39 mnemonic

**Setting up a Node**

Following steps are rudimentary way of setting up a validator, For production we advise your [sentry architecture](https://forum.cosmos.network/t/sentry-node-architecture-overview/454) to create well defined process

* [Install](https://github.com/persistenceOne/awesome-persistence/blob/main/Validator.md####Binaries) persistence core application
*   Initialize node

    ```
     persistenceCore init {{NODE_NAME}} --chain-id core-1
    ```
* Replace the contents of your `${HOME}/.persistenceCore/con, exchangesfig/genesis.json` with that of core-1/final\_genesis.json from the `master` branch of [repository](https://github.com/persistenceOne/genesisTransactions).
* Verify checksum `jq -S -c -M "" genesis.json | sha256sum` matches `f90fb025e9b5b55c88730ab5ab762b121daa7808cde27d50f465e1fe3b3e5cad`
* Inside file `${HOME}/.persistenceCore/config/config.toml`,
  * set `seeds` to `"08ab4552a74dd7e211fc79432918d35818a67189@52.69.58.231:26656,449a0f1b7dafc142cf23a1f6166bbbf035edfb10@13.232.85.66:26656,5b27a6d4cf33909c0e5b217789e7455e261941d1@15.222.29.207:26656"`.
  * If your node has a public ip, set it in `external_address = "tcp://<public-ip>:26656"`, else leave the filed empty.
* Set `minimum-gas-prices` in `${HOME}/.persistenceCore/config/app.toml` with the minimum price you want (example `0.005uxprt`) for the security of the network.
* \[OPTIONAL] if you want to speed things up, you can use our [backup](https://tendermint-snapshots.s3.ap-southeast-1.amazonaws.com/persistence/data.tar.lz4).
  * Install `aria2` and `lz4`
  *   Download our backup with

      ```
      aria2c -x 4 -x 4 -c  
      ```
  *   Extract the contents to persistenced home.

      ```
      tar -I lz4 -xf data.tar.lz4 -C (persistence home which defaults to ~/.persistenceCore/)
      ```
*   Start node

    ```
     persistenceCore start
    ```
* Acquire $XPRT tokens to self delegate to your validator node. Minimum 1 XPRT is require to become a validator. You must send your XPRT to the address created in the Generate Keys step previosuly.
*   Wait for the blockchain to sync. You can check the sync status using the command

    ```
     curl http://localhost:26657/status sync_info "catching_up": false
    ```
* Once `"catching_up"` is `false`, the sync is complete.

****

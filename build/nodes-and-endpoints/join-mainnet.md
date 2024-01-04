# Run a Mainnet Node

## Hardware Requirements

The minimum and recommended requirements to run a Mainnet Persistence Node increase as it produces more blocks and more features are added. Thus, there are no exact hardware requirements that are permanently sufficient. A mainnet node should always have redundant resources available.

* **Recommended:**
  * 16 GB RAM _(or more)_
  * 500 GB SSD _(or more)_
  * 4 CPU _(or more)_
  * 100mbps Network Bandwidth _(or more)_
* **Operating System:**
  * **Recommended:** Linux(x86\_64)
  * **Others:** Windows/MacOS(x86)

## Prerequisites

To successfully run a Persistence Mainnet Node, we need to install a few prerequirements. Because running the Persistence software depends on them, prerequirements are also known as dependencies.

We need to install and/or setup 5 dependencies - **Go**, **jq**, **gcc**, **make**, and **git**.

### Install Go

#### Ubuntu

1.  Remove any previous installation:

    ```bash
    rm -rf /usr/local/go
    ```
2. Make sure you're installing the latest **Go** version by visiting [this page](https://go.dev/doc/install)
3.  Download the latest version of **Go** (1.19.5 as of time of writing):

    ```bash
    wget https://go.dev/dl/go1.19.5.linux-amd64.tar.gz
    ```
4.  Extract the contents of the archive into /usr/local:

    ```bash
    tar -C /usr/local -xzf go1.19.5.linux-amd64.tar.gz
    ```
5.  Set **$GOPATH** by copying & pasting the following commands in your terminal:

    ```bash
    echo "" >> ~/.profile
    echo "export GOPATH=$HOME/go" >> ~/.profile
    echo "export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin" >> ~/.profile	
    source ~/.profile
    mkdir -p $GOPATH/bin
    ```
6.  Check **Go** is installed correctly _(sample output: `go version go1.19.5 linux/amd64`)_:

    ```bash
    go version
    ```

#### macOS

1.  Download the latest version of **Go** for macOS:

    ```bash
    wget https://go.dev/dl/go1.19.5.darwin-amd64.pkg
    ```
2.  Open the package file you downloaded and follow the prompts to install **Go**.

    The package installs the **Go** distribution to /usr/local/go. The package should put the /usr/local/go/bin directory in your `PATH` environment variable. You may need to restart any open Terminal sessions for the change to take effect.
3.  Verify that you've installed **Go** by opening a command prompt and typing the following command _(sample output: `go version go1.19.5`)_:

    ```
    go version
    ```

### Install jq, git, gcc, and make

1. Install:
   * **Ubuntu:** `apt install jq git gcc make`
   * **macOS:** `brew install jq git gcc make`
2. Verify Installations:
   * Verify **jq**: `jq --version` (sample output: `jq-1.6`)
   * Verify **gcc** : `gcc --version` (sample output: `gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0`)
   * Verify **make**: `make --version` (sample output: `GNU Make 4.2.1`)
   * Verify **git**: `git --version` (sample output: `git version 2.25.1`)

## Installation Steps

### Install the persistenceCore Binary

> **Note** The latest version available in the [releases page](https://github.com/persistenceOne/persistenceCore/releases) might not be the one running on the core-1 chain. To ensure you're running the correct version, join the [Discord Mainnet Validator Announcements Channel](https://discord.com/channels/796174129077813248/1021758804410519594).

1.  Clone the **persistenceCore** repository:

    ```bash
    git clone https://github.com/persistenceOne/persistenceCore.git $GOPATH/source/persistenceCore && cd $GOPATH/source/persistenceCore
    ```
2. Check what version is running on the core-1 chain by visiting the [Discord Mainnet Validators Announcements Channel](https://discord.com/channels/796174129077813248/1021758804410519594).
3.  Switch to the branch of the latest version _(v6.1.0 as of time of writing)_:

    ```bash
    git checkout v6.1.0
    ```
4.  Install the **persistenceCore** binary:

    ```bash
    make all
    ```
5.  Verify installation (sample output: `v6.1.0`):

    ```bash
    persistenceCore version
    ```

### Create or Import Key (XPRT Address)

*   Create **key** _(ensure you safely store the mnemonic seed phrase)_:

    ```bash
    persistenceCore keys add <KEY_NAME>
    ```
*   Recover **key** _(you'll be required to input your mnemonic seed phrase)_:

    ```bash
    persistenceCore keys add <KEY_NAME> --recover
    ```
*   Verify the **key** was created successfully:

    ```bash
    persistenceCore keys list
    ```

### Create and Sync the Node

1.  Initialize the **node** _(moniker = node name)_:

    ```bash
    persistenceCore init <MONIKER> --chain-id="core-1" # e.g. persistenceCore init "Persistence Node" --chain-id="core-1"
    ```
2.  Download the **core-1 genesis** file:

    ```bash
    cd ~/.persistenceCore/config && wget -O genesis.json  https://raw.githubusercontent.com/persistenceOne/networks/master/core-1/final_genesis.json
    ```
3. Use [**StateSync**](public-infrastructure.md) to sync with the rest of the nodes. Follow the step-by-step guide below:
   *   Run the following command and copy the values of `trust_height` and `trust_hash`. They are required in the next steps.

       ```bash
       curl -s https://persistence-mainnet-rpc.cosmonautstakes.com/status | jq '.result .sync_info | {trust_height: .latest_block_height, trust_hash: .latest_block_hash} | values'
       ```
   *   Open config:

       ```bash
       nano ~/.persistenceCore/config/config.toml
       ```
   *   Replace the existing settings in the opened file with the following:

       ```
       [p2p]
       seeds = "08ab4552a74dd7e211fc79432918d35818a67189@52.69.58.231:26656"

       persistent_peers = "137818b03a705cf86622b4d97a074091f2f22589@185.225.233.30:26756"

       [statesync]
       enable = true
       rpc_servers = "https://persistence-mainnet-rpc.cosmonautstakes.com:443,https://persistence-mainnet-rpc.cosmonautstakes.com:443"
       trust_height = XXXXXXX # Replace with the value copied in the previous step
       trust_hash = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" # Replace with the value copied in the previous step
       trust_period = "112h0m0s"
       ```
   * Make sure you replace `trust_height` and `trust_hash` values with the ones you've copied in the previous step.
4.  Open the `app.toml` file _(application-related configuration file)_:

    ```bash
    nano ~/.persistenceCore/config/app.toml
    ```
5. Change `minimum-gas-prices` to `minimum-gas-prices = "0.005uxprt"`
6.  Start the node:

    ```bash
    persistenceCore start
    ```
7. Because we used StateSync to sync with the other nodes, it shouldn't take more than 10 minutes to complete. In the meantime, a lot of output messages will pop one after another.
8.  When the node is completely synced, you should observe a similar output:

    ```
    11:28PM INF received complete proposal block hash=AE7196316065BC778E2BA5AFD1626C06CA2113B4F67DB2F4052B98700FD4B982 height=9305912 module=consensus
    11:28PM INF finalizing commit of block hash={} height=9305912 module=consensus num_txs=0 root=7B6B6A7C6D2CC68F266086794995E52F321B69FCA9530220093C47EC383278D0
    11:28PM INF minted coins from module account amount=8173386uxprt from=mint module=x/bank
    11:28PM INF executed block height=9305912 module=state num_invalid_txs=0 num_valid_txs=0
    11:28PM INF commit synced commit=436F6D6D697449447B5B3235312031313220323236203434203735203139322031362036312031373620373020323138203130332031383220313233203134302032332031353620313032203133392033342031393020323220343920313230203137322038203130372032313720313835203135322038332036345D3A3844464633387D
    11:28PM INF committed state app_hash=FB70E22C4BC0103DB046DA67B67B8C179C668B22BE163178AC086BD9B9985340 height=9305912 module=state num_txs=0
    11:28PM INF indexed block exents height=9305912 module=txindex
    ```

    Alternatively, you can use the following command _(response must be `false`)_:

    ```bash
    curl http://localhost:26657/status | jq -r ".result.sync_info.catching_up"
    ```

##

## Node operations

### [Run your node in the background](node-operations/run-in-the-background.md)

### Upgrade the Node's Software

#### [Using Cosmovisor](node-operations/cosmovisor-upgrades.md)

#### [Manually swap binaries](node-operations/manual-upgrades.md)


# Run a Testnet Node

## Hardware Requirements

The minimum and recommended requirements to run a Testnet Persistence Node increase as it produces more blocks and more features are added. Thus, there are no exact hardware requirements that are permanently sufficient. A testnet node should always have redundant resources available.

* **Recommended:**
  * 8 GB RAM
  * 100 GB SSD
  * 4 CPU
* **Operating System:**
  * **Recommended:** Linux(x86\_64)
  * **Others:** Windows/MacOS(x86)

## Prerequisites

To successfully run a Persistence Testnet Node, we need to install a few prerequirements. Because running the Persistence software depends on them, prerequirements are also known as dependencies.

We need to install and/or setup 5 dependencies - **Go**, **jq**, **gcc**, **make**, and **git**.

### Install Go

#### Ubuntu

1.  Remove any previous installation:

    ```bash
    rm -rf /usr/local/go
    ```
2.  Add the Go PPA to Your System:

    First, add the `longsleep/golang-backports` PPA to your system. This repository contains the latest version of Go. You can add it by running the following command in your terminal:

    ```bash
    sudo add-apt-repository ppa:longsleep/golang-backports
    ```
3.  **Update Your Package List**:

    After adding the PPA, update your package list to include the latest packages available in the repository:

    ```bash
    sudo apt update
    ```
4.  **Install Go**:

    Now, install Go using the `apt` package manager. This command will install the latest version of Go available in the PPA:

    ```bash
    sudo apt install golang-go
    ```
5.  **Set Up Your Go Environment**:\
    After installation, set up your Go workspace and add Go binaries to your PATH. You can do this by adding the following lines to your `~/.profile` file:

    ```bash
    echo "" >> ~/.profile
    echo "export GOPATH=$HOME/go" >> ~/.profile
    echo "export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin" >> ~/.profile
    source ~/.profile
    ```
6.  **Verify the Installation**:

    Finally, verify that Go has been installed correctly by checking its version. You should see the latest version of Go as the output:

    ```bash
    go version
    ```

#### macOS

1. Install Homebrew (if not already installed): If you don't have Homebrew on your macOS, you need to install it first. Visit the [Homebrew website](https://brew.sh/) for installation instructions.
2.  Install Go using Homebrew: \
    Open a terminal and run the following command:

    ```bash
    brew install go
    ```
3.  To ensure Go is installed correctly, check its version. In the terminal, type:

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

> **Note** The latest version available in the [releases page](https://github.com/persistenceOne/persistenceCore/releases) might not be the one running on the test-core-2 chain. To ensure you're running the correct version, join the [Discord Testnet Validator Announcements Channel](https://discord.com/channels/796174129077813248/1042042319987294229).

1.  Clone the **persistenceCore** repository:

    ```bash
    git clone https://github.com/persistenceOne/persistenceCore.git $GOPATH/source/persistenceCore && cd $GOPATH/source/persistenceCore
    ```
2. Check what version is running on the test-core-2 chain by visiting the [Discord Testnet Validators Announcements Channel](https://discord.com/channels/796174129077813248/1042042319987294229).
3.  Switch to the branch of the latest version _(v6.0.0-rc5 as of time of writing)_:

    ```bash
    git checkout v6.0.0-rc5
    ```
4.  Install the **persistenceCore** binary:

    ```bash
    make all
    ```
5.  Verify installation (sample output: `v6.0.0-rc5`):

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
    persistenceCore init <MONIKER> --chain-id="test-core-2" # e.g. persistenceCore init "Persistence Node" --chain-id="test-core-2"
    ```
2.  Download the **test-core-2 genesis** file:

    ```bash
    wget -O genesis.json https://raw.githubusercontent.com/persistenceOne/networks/master/test-core-2/genesis.json
    ```
3.  Use **StateSync** to sync with the rest of the nodes. Follow the step-by-step guide below:

    *   Run the following command and copy the values of `trust_height` and `trust_hash`. They are required in the next steps.

        ```bash
        curl -s https://persistence-testnet-rpc.cosmonautstakes.com/status | jq '.result .sync_info | {trust_height: .latest_block_height, trust_hash: .latest_block_hash} | values'
        ```
    *   Open config:

        ```bash
        nano ~/.persistenceCore/config/config.toml
        ```
    *   Replace the existing settings in the opened file with the following:

        ```
        [p2p]
        seeds = "b4237f8a7ca357d380ad119b76cbceec7e7e8a75@seed.testnet.persistence.one:26656"

        persistent_peers = "14ecdc5126ea8d93c7d3a863d9d38e380e46fc06@185.225.233.30:26656"

        [statesync]
        enable = true
        rpc_servers = "https://persistence-testnet-rpc.cosmonautstakes.com:443,https://persistence-testnet-rpc.cosmonautstakes.com:443"
        trust_height = XXXXXXX # Replace with the value copied in the previous step
        trust_hash = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" # Replace with the value copied in the previous step
        trust_period = "112h0m0s"
        ```
    * Make sure you replace `trust_height` and `trust_hash` values with the ones you've copied in the previous step.

    Note: For an automated script for **StateSync**, follow the instructions on this [link](https://polkachu.com/testnets/persistence/state_sync).\
    &#x20;          Refer to peers here: [peers.json](https://github.com/persistenceOne/networks/blob/auditOne/test-core-2/test-core-2/peers.json) . \
    &#x20;          For additional helpful values like seeds, refer here: [polkachu](https://polkachu.com/testnets/persistence) .
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

## Node operations

### [Run your node in the background](node-operations/run-in-the-background.md)

### Upgrade the Node's Software

#### [Using Cosmovisor](node-operations/cosmovisor-upgrades.md)

#### [Manually swap binaries](node-operations/manual-upgrades.md)

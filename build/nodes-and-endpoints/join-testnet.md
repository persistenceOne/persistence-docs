# Join the Testnet
## Hardware Requirements
The minimum and recommended requirements to run a Testnet Persistence Node increase as it produces more blocks and more features are added. For instance, a chain enabling [CosmWasm](https://cosmwasm.com/) has higher hardware requirements.

Thus, there is no exact hardware requirements that are permanently sufficient. A testnet node should always have redundant resources available.

- **Recommended:**
	- 8 GB RAM
	- 100 GB SSD
	- 4 CPU

- **Operating System:**
	- **Recommended:** Linux(x86\_64)
	- **Others:** Windows/MacOS(x86)

## Prerequisites
To successfully run a Persistence Testnet Node, we need to install a few prerequirements. Because running the Persistence software depends on them, prerequirements are also known as dependencies.

We need to install and/or setup 5 dependencies - **Go**, **jq**, **gcc**, **make**, and **git**.

### Install Go
#### Ubuntu
1. Remove any previous installation: 
	```bash
	rm -rf /usr/local/go
	```
2. Make sure you're installing the latest **Go** version by visiting [this page](https://go.dev/doc/install)
3. Download the latest version of **Go** (1.19.5 as of time of writing):
	```bash
	wget https://go.dev/dl/go1.19.5.linux-amd64.tar.gz
	```
4. Extract the contents of the archive into /usr/local: 
	```bash
	tar -C /usr/local -xzf go1.19.5.linux-amd64.tar.gz
	```
5. Set $GOPATH:

	1.  Open the `.profile` file, where all your environment variables are stored:
		```bash
		nano ~/.profile
		```
	2. Scroll down to the end of the file and add the following line before `export $PATH`:
		```bash
		export GOPATH=$HOME/go
		```
	3. Add the following line to **PATH**  (i.e. `export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin`):
		```bash
		$GOPATH/bin
		```
	4. Since **Go** is installed in `/usr/local`, it also needs to be added in the **PATH**. Your **PATH** should look similar to the following:
		``` bash
		export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin
		```
	6. Reload the **PATH** environment variable:
		```bash
		source ~/.profile
		```
	5. Create the directories we set in **PATH**:
		```bash
		mkdir -p $GOPATH/bin
		```
6. Check **Go** is installed correctly *(sample output: `go version go1.19.5 linux/amd64`)*: 
	```bash
	go version
	```

#### macOS
1. Dowload the latest version of **Go** for macOS:
	```bash
	wget https://go.dev/dl/go1.19.5.darwin-amd64.pkg
	```
3.  Open the package file you downloaded and follow the prompts to install **Go**.
    
    The package installs the **Go** distribution to /usr/local/go. The package should put the /usr/local/go/bin directory in your  `PATH`  environment variable. You may need to restart any open Terminal sessions for the change to take effect.
    
4.  Verify that you've installed **Go** by opening a command prompt and typing the following command  *(sample output: `go version go1.19.5`)*:
	```
	go version
	```

### Install jq, git, gcc, and make
1. Install:
	- **Ubuntu:** `apt install jq git gcc make`
	- **macOS:** `brew install jq git gcc make`
2. Verify Installations:
	- Verify **jq**: `jq --version` (sample output: `jq-1.6`)
	- Verify **gcc** : `gcc --version` (sample output: `gcc (Ubuntu 9.4.0-1ubuntu1~20.04.1) 9.4.0`)
	- Verify **make**: `make --version` (sample output: `GNU Make 4.2.1`)
	- Verify **git**: `git --version` (sample output: `git version 2.25.1`)

## Installation Steps
### Install the persistenceCore Binary

> **Note**
> The latest version available in the [releases page](https://github.com/persistenceOne/persistenceCore/releases) might not be the one running on the test-core-1 chain. To ensure you're running the correct version, join the [Discord Testnet Validator Announcements Channel](https://discord.com/channels/796174129077813248/1042042319987294229).

1.  Clone the **persistenceCore** repository:
	```bash
	git clone https://github.com/persistenceOne/persistenceCore.git $GOPATH/source/persistenceCore && cd $GOPATH/source/persistenceCore
	```
2. Check what version is running on the test-core-1 chain by visiting the [Discord Testnet Validators Announcements Channel](https://discord.com/channels/796174129077813248/1042042319987294229).
3. Switch to the branch of the latest version *(v6.0.0-rc5 as of time of writing)*: 
	```bash
	git checkout v6.0.0-rc5
	```
4. Install the **persistenceCore** binary:
	```bash
	make all
	```
5. Verify installation (sample output: `v6.0.0-rc5`): 
	```bash
	persistenceCore version
	```

### Create or Import Key (XPRT Address)
- Create **key** *(ensure you safely store the mnemonic seed phrase)*:
	```bash
	persistenceCore keys add <KEY_NAME>
	```
- Recover **key** *(you'll be required to input your mnemonic seed phrase)*: 
	```bash
	persistenceCore keys add <KEY_NAME> --recover
	```
- Verify the **key** was created successfully:
	```bash
	persistenceCore keys list
	```

### Create and Sync the Node
1. Initialize the **node** *(moniker = node name)*: 
	```bash
	persistenceCore init <MONIKER> --chain-id="test-core-1" # e.g. persistenceCore init "Persistence Node" --chain-id="test-core-1"
	```
2. Download the **test-core-1 genesis** file: 
	```bash
	cd ~/.persistenceCore/config && wget -O genesis.json  https://raw.githubusercontent.com/persistenceOne/networks/master/test-core-1/final_genesis.json
	```
3. Use **StateSync** to sync with the rest of the nodes. Follow the step-by-step guide below: 
	- Run the following command and copy the values of `trust_height` and `trust_hash`. They are required in the next steps.
		```bash
		curl -s https://persistence-testnet-rpc.cosmonautstakes.com/status | jq '.result .sync_info | {trust_height: .latest_block_height, trust_hash: .latest_block_hash} | values'
		```
	- Open config:
		```bash
		nano ~/.persistenceCore/config/config.toml
		```
	- Replace the existing settings in the opened file with the following:
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
	- Make sure you replace `trust_height` and `trust_hash` values with the ones you've copied in the previous step. 
5. Open the `app.toml` file *(application-related configuration file)*:
	```bash
	nano ~/.persistenceCore/config/app.toml
	```
6. Change `minimum-gas-prices` to `minimum-gas-prices = "0.005uxprt"`
7. Start the node:
	```bash
	persistenceCore start
	```
8. Because we used StateSync to sync with the other nodes, it shouldn't take more than 10 minutes to complete. In the meantime, a lot of output messages will pop one after another.
9. When the node is completely synced, you should observe a similar output:
	```
	11:28PM INF received complete proposal block hash=AE7196316065BC778E2BA5AFD1626C06CA2113B4F67DB2F4052B98700FD4B982 height=9305912 module=consensus
	11:28PM INF finalizing commit of block hash={} height=9305912 module=consensus num_txs=0 root=7B6B6A7C6D2CC68F266086794995E52F321B69FCA9530220093C47EC383278D0
	11:28PM INF minted coins from module account amount=8173386uxprt from=mint module=x/bank
	11:28PM INF executed block height=9305912 module=state num_invalid_txs=0 num_valid_txs=0
	11:28PM INF commit synced commit=436F6D6D697449447B5B3235312031313220323236203434203735203139322031362036312031373620373020323138203130332031383220313233203134302032332031353620313032203133392033342031393020323220343920313230203137322038203130372032313720313835203135322038332036345D3A3844464633387D
	11:28PM INF committed state app_hash=FB70E22C4BC0103DB046DA67B67B8C179C668B22BE163178AC086BD9B9985340 height=9305912 module=state num_txs=0
	11:28PM INF indexed block exents height=9305912 module=txindex
	```
	Alternatively, you can use the following command *(response must be `false`)*: 
	```bash
	curl http://localhost:26657/status | jq -r ".result.sync_info.catching_up"
	```

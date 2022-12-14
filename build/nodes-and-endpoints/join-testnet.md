# Setting up a Persistence Testnet Validator

## Hardware Requirements
The minimum and recommended requirements to run a Persistence Node increase as it produces more blocks and more features are added. For instance, a chain enabling [CosmWasm](https://cosmwasm.com/) has higher hardware requirements.

Thus, there is no exact hardware requirements that are permanently sufficient. A node should always have redundant resources available.
 
- **Minimal:**
	- 2 GB RAM
	- 25 GB SSD
	- 2 CPU

- **Recommended:**
	- 4 GB RAM
	- 100 GB SSD
	- 4 CPU

- **Operating System:**
	- **Recommended:** Linux(x86\_64)
	- **Others:** Windows/MacOS(x86)

## Prerequisites
To successfully run a Persistence Node, we need to install a few prerequirements. Because running the Persistence software depends on them,  prerequirements are also known as dependencies.

We need to install and setup 2 dependencies - Go and Git.

### Install Go
1. Remove any previous installation: 
	```
	rm -rf /usr/local/go
	```
2. Make sure you're installing the latest **Go** version by visiting [this page](https://go.dev/doc/install)
3. Download the latest version of **Go** (1.19.4 as of time of writing):
	```
	wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz
	```
4. Extract the contents of the archive into /usr/local: 
	```
	tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
	```
5. Check **Go** is installed correctly *(sample output: `go version go1.19.4 linux/amd64`)*: 
	```
	go version
	```
6. Set $GOPATH:

	1.  Open the `.profile` file, where all your environment variables are stored:
		```
		nano ~/.profile
		```
	2. Scroll down to the end of the file and add the following line before `export $PATH`:
		```
		export GOPATH=$HOME/go
		```
	3. Add the following line to **PATH**  (i.e. `export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin`):
		```
		$GOPATH/bin
		```
	4. Reload the $PATH environment variable:
		```
		source ~/.profile
		```
	5. Create the directories we set in $PATH:
		```
		mkdir -p $GOPATH/bin
		```

### Install Git
1. Install Git: `apt install git`
2. Verify **Git** is installed correctly: `git version` (sample output: `git version 2.25.1`)

## Installation Steps

The persistenceCore software enables you to interact with a Persistence node. We're going to set up the node later on this guide.

### Install the persistenceCore Binary
1. Check the latest version of the **persistenceCore** binary by visiting [this page](https://github.com/persistenceOne/persistenceCore/releases)
2. Download the latest version *(5.0.0 as of time of writing)*: 
	```
	wget https://github.com/persistenceOne/persistenceCore/releases/download/v5.0.0/persistenceCore-v5.0.0-linux-amd64
	```
3. Make the file executable: 
	```
	chmod +x persistenceCore-v5.0.0-linux-amd64
	```
4. Move binary to **GOPATH** and rename it: 
	```
	mv persistenceCore-v5.0.0-linux-amd64 $GOPATH/bin/persistenceCore
	```
5. Verify installation (sample output: `v5.0.0`): 
	```
	persistenceCore version
	```

### Create or Import Key (XPRT Address)
- Create key *(ensure you safely store the mnemonic seed phrase)*:
	```
	persistenceCore keys add <KEY_NAME>
	```
- Recover key *(you'll be required to input your mnemonic seed phrase)*: 
	```
	persistenceCore keys add <KEY_NAME> --recover
	```
- Verify the key was created successfully:
	```
	persistenceCore keys list
	```

### Create and Sync the Node
1. Initialize the node *(moniker = node name)*: 
	```
	persistenceCore init <MONIKER> # e.g. 'persistenceCore init "Persistence Node"'
	```
2. Download the test-core-1 genesis file: 
	```
	cd ~/.persistenceCore/config && wget -O genesis.json  https://raw.githubusercontent.com/persistenceOne/networks/master/test-core-1/final_genesis.json
	```
3. Follow [this guide to setup StateSync](https://www.allthatnode.com/persistence.dsrv?q=statesync). Make sure you tick **'Testnet'** not 'Mainnet'.
4. Open the `app.toml` file *(application-related configuration file)*:
	```
	nano ~/.persistenceCore/config/app.toml
	```
5. Change `minimum-gas-prices` to `minimum-gas-prices = "0.005uxprt"`
6. Start the node:
	```
	persistenceCore start
	```
7. Because we used StateSync to sync with the the rest of the nodes, it shouldn't take more than 10 minutes to. In the meantime, a lot of output messages will pop one after another.
8. When the node is completely synced, you should observe a similar output:
	```
	11:28PM INF received complete proposal block hash=AE7196316065BC778E2BA5AFD1626C06CA2113B4F67DB2F4052B98700FD4B982 height=9305912 module=consensus
	11:28PM INF finalizing commit of block hash={} height=9305912 module=consensus num_txs=0 root=7B6B6A7C6D2CC68F266086794995E52F321B69FCA9530220093C47EC383278D0
	11:28PM INF minted coins from module account amount=8173386uxprt from=mint module=x/bank
	11:28PM INF executed block height=9305912 module=state num_invalid_txs=0 num_valid_txs=0
	11:28PM INF commit synced commit=436F6D6D697449447B5B3235312031313220323236203434203735203139322031362036312031373620373020323138203130332031383220313233203134302032332031353620313032203133392033342031393020323220343920313230203137322038203130372032313720313835203135322038332036345D3A3844464633387D
	11:28PM INF committed state app_hash=FB70E22C4BC0103DB046DA67B67B8C179C668B22BE163178AC086BD9B9985340 height=9305912 module=state num_txs=0
	11:28PM INF indexed block exents height=9305912 module=txindex
	```
    Alternatively, you can use the following command to ensure your node is synced *(response must be `false`)*: 
    ```
    curl http://localhost:26657/status | jq -r ".result.sync_info.catching_up"
    ```

# Setting up a Persistence Testnet Node & Validator

## Hardware Requirements

- **Minimal:**
	- 1 GB RAM
	- 25 GB SSD
	- 1.4 GHz CPU

- **Recommended:**
	- 2 GB RAM
	- 100 GB SSD
	- 2.0 GHz x2 CPU

- **Operating System:**
	- **Recommended:** Linux(x86\_64)
	- **Others:** Windows/MacOS(x86)

## Prerequisites

### Install Go
1. Remove any previous installation: `rm -rf /usr/local/go`
2. Make sure you're installing the latest **Go** version by visiting [this page](https://go.dev/doc/install)
3. Download the latest version of **Go** (1.19.4 as of time of writing):
	```
	wget https://go.dev/dl/go1.19.4.linux-amd64.tar.gz
	```
4. Extract the contents of the archive into /usr/local: 
	```
	tar -C /usr/local -xzf go1.19.4.linux-amd64.tar.gz
	```
5. Check **Go** is installed correctly: `go version`
6. Set $GOPATH:
	- `nano ~/.profile`
	- add `export GOPATH=$HOME/go`
	- add `$GOPATH/bin` to your `$PATH` (i.e. `export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin`)
	- reload profile: `source ~/.profile`
	- create **GOPATH** directories: `mkdir -p $GOPATH/bin`

### Install Git
1. Run the following command:`apt install git`
2. Verify **Git** is installed correctly: `git version`

## Installation Steps

### Install the persistenceCore Binary
1. Check the latest version of the **persistenceCore** binary by visiting [this page](https://github.com/persistenceOne/persistenceCore/releases)
2. Download the latest version *(5.0.0 as of time of writing)*: 
	```
	wget https://github.com/persistenceOne/persistenceCore/releases/download/v5.0.0/persistenceCore-v5.0.0-linux-amd64
	```
3. Make the file executable: `chmod +x persistenceCore-v5.0.0-linux-amd64`
4. Move binary to **GOPATH** and rename it: 
	```
	mv persistenceCore-v5.0.0-linux-amd64 $GOPATH/bin/persistenceCore
	```
5. Verify installation: `persistenceCore version`

### Create or Import Key (XPRT Address)
- Create key: `persistenceCore keys add <KEY_NAME>` (safely store the mnemonic seed phrase)
**OR**
- Recover key: `persistenceCore keys add <KEY_NAME> --recover` (you'll be required to input your mnemonic seed phrase)
- Verify the key was created successfully: `persistenceCore keys list`

### Create and Sync the Node
1. Initialize the node: `persistenceCore init <MONIKER>`*(moniker = node name)*
2. Download the test-core-1 genesis file: 
	```
	cd ~/.persistenceCore/config && wget -O genesis.json  https://raw.githubusercontent.com/persistenceOne/networks/master/test-core-1/final_genesis.json
	```
3. Follow [this guide to setup StateSync](https://www.allthatnode.com/persistence.dsrv?q=statesync). Make sure you tick **'Testnet'** not 'Mainnet'.
4. Update `minimum-gas-prices` in `~/.persistenceCore/config/app.toml` to `minimum-gas-prices = "0.005uxprt"`
5. Start the node: `persistenceCore start`

### Create Validator
1. Ensure the node is synced *(response must be false)*: 
	```
	curl http://localhost:26657/status | jq -r ".result.sync_info.catching_up"
	```
2. Before requesting tokens, we need to [sign up here](https://www.allthatnode.com/login.dsrv).
3. Request XPRT by visiting [this faucet website](https://www.allthatnode.com/faucet/persistence.dsrv)
4. Create Validator: 
	```
	persistenceCore tx staking create-validator \
	--from="[KEY_NAME]" \
	--amount="1000000uxprt" \
	--pubkey="$(persistenceCore tendermint show-validator)" \
	--chain-id="test-core-1" \
	--moniker="[VALIDATOR_NAME]" \
	--commission-max-change-rate=0.05 \
	--commission-max-rate=0.20 \
	--commission-rate=0.10 \
	--min-self-delegation="1" \
	--website="[OPTIONAL]" \
	--identity="[OPTIONAL]" \
	--details="[OPTIONAL]" \
	--security-contact="[OPTIONAL]" \
	--gas="auto" \
	--gas-adjustment="1.5" \
	--gas-prices="10uxprt"
	```
5. Verify your validator is signing blocks by [visting the testnet explorer](https://testnet.ping.pub/test-core-1/uptime)
6. Congratulations! You've just created a Persistence Testnet Validator.

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
2. Make sure you're installing the latest **Go** version by visiting [this page](https://go.dev/doc/install)
3.  Download the latest version of **Go** (1.19.5 as of time of writing):

    ```bash
    wget https://go.dev/dl/go1.19.5.linux-amd64.tar.gz
    ```
4.  Extract the contents of the archive into /usr/local:

    ```bash
    tar -C /usr/local -xzf go1.19.5.linux-amd64.tar.gz
    ```
5. Set **$GOPATH** by copying & pasting the following commands in your terminal:

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

1.  Dowload the latest version of **Go** for macOS:

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

> **Note** The latest version available in the [releases page](https://github.com/persistenceOne/persistenceCore/releases) might not be the one running on the test-core-1 chain. To ensure you're running the correct version, join the [Discord Testnet Validator Announcements Channel](https://discord.com/channels/796174129077813248/1042042319987294229).

1.  Clone the **persistenceCore** repository:

    ```bash
    git clone https://github.com/persistenceOne/persistenceCore.git $GOPATH/source/persistenceCore && cd $GOPATH/source/persistenceCore
    ```
2. Check what version is running on the test-core-1 chain by visiting the [Discord Testnet Validators Announcements Channel](https://discord.com/channels/796174129077813248/1042042319987294229).
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
    persistenceCore init <MONIKER> --chain-id="test-core-1" # e.g. persistenceCore init "Persistence Node" --chain-id="test-core-1"
    ```
2.  Download the **test-core-1 genesis** file:

    ```bash
    cd ~/.persistenceCore/config && wget -O genesis.json  https://raw.githubusercontent.com/persistenceOne/networks/master/test-core-1/final_genesis.json
    ```
3. Use **StateSync** to sync with the rest of the nodes. Follow the step-by-step guide below:
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


## Run the Node in the Background

While you've probably used the `persistenceCore start` command in a terminal, you might question yourself what happens if you exit the window, stop the node by mistake, or need to restart your server. The answer is **services**. Imagine a service as a container for processes. It allows the Persistence test-core-1 node to run in the background while providing us with access to logs. Not to mention it's starting automatically on system (re)boot. In this section we will cover `systemd`.

Running a service using `systemd` is straightforward. While `systemd` itself provides many configuration options, we only need a few to run the Persistence test-core-1 node. Let's get started.

1. Since `systemd` is installed by default, there are no installation steps.
2. First, we need to create a service file in `/etc/systemd/system`. Let's name it `test-core-1.service`.
	
	```bash
	touch /etc/systemd/system/test-core-1.service # create the file
	nano /etc/systemd/system/test-core-1.service # open the file (to edit it)
	```

3. Now, with the file created and open, we need to populate it with the correct options to run the Persistence test-core-1 Node.

	```bash
	[Unit]
	Description=Persistence Testnet Node # description of the process running inside the service
	After=network-online.target # wait for internet connection before starting the process

	[Service]
	User=$USER # your system user name
	ExecStart=$(which persistenceCore) start # command to execute (this will run the node)
	Restart=always # always maintain the service running by restarting it in case it crashes
	RestartSec=3 # seconds to wait before restarting
	LimitNOFILE=4096 # maximum number of processes allowed to run in parallel

	[Install]
	WantedBy=multi-user.target # a special target unit for setting up a multi-user system
	```

4. Next, we need to reload systemd and enable the service.

	```bash
	systemctl daemon-reload
	systemctl enable test-core-1.service
	# output: Created symlink /etc/systemd/system/multi-user.target.wants/test-core-1.service → /etc/systemd/system/test-core-1.service
	```

5. All that's left to do is to start it.

	```bash
	systemctl start test-core-1.service
	```

6. Although you may think nothing has happened, the service is running in the background. To access its logs and see if it's running as it should use the following command:

	```bash
	journalctl -u test-core-1.service -f
	```
7. To check the status of the service, you can run:

	```bash
	service test-core-1.service status
	```

**Additional commands:**

```bash
systemctl stop test-core-1.service
systemctl restart test-core-1.service
```


## Upgrade the Node's Software

### A. Using Cosmovisor
We highly recommend validators to use **Cosmovisor** to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to manually upgrade binaries during the upgrade. Instead, they can pre-install new binaries, and **Cosmovisor** will automatically update them based on on-chain `SoftwareUpgrade` proposals.

In summary **Cosmovisor** does two things:
1. Run the Node
2. Upgrade the node *(with our manual pre-installation)*

For more information regarding **Cosmovisor** please visit https://docs.cosmos.network/v0.47/tooling/cosmovisor.

#### Run the Node using Cosmovisor

Before being able to update our nodes, **Cosmovisor** needs to be configured accordingly, so it can run our Persistence test-core-1 node. Please continue with the following instructions:

1. Install **Cosmovisor** (latest version):

	```bash
	go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
	```

2. After this, you must create the necessary **Cosmovisor** folders in your daemon home directory (`~/.persistenceCore`).
	```bash
	mkdir -p ~/.persistenceCore
	mkdir -p ~/.persistenceCore/cosmovisor
	mkdir -p ~/.persistenceCore/cosmovisor/genesis
	mkdir -p ~/.persistenceCore/cosmovisor/genesis/bin
	mkdir -p ~/.persistenceCore/cosmovisor/upgrades
	```

3. Copy the current persistenceCore binary into the cosmovisor/genesis folder and the folder (**ensure you replace `BINARY_VERSION` with the appropriate upgrade version**)

	```bash
	export BINARY_VERSION=vX.Y.Z # IMPORTANT: REPLACE THIS VERSION WITH CORRECT UPGRADE VERSION
	cp $GOPATH/bin/persistenceCore ~/.persistenceCore/cosmovisor/genesis/bin
	mkdir -p ~/.persistenceCore/cosmovisor/upgrades/$BINARY_VERSION/bin
	cp $GOPATH/bin/persistenceCore ~/.persistenceCore/cosmovisor/upgrades/$BINARY_VERSION/bin
	```

4. Set these environment variables. Copy and paste the following commands into your terminal.

	```bash
	echo "# Setup Cosmovisor" >> ~/.profile
	echo "export DAEMON_NAME=persistenceCore" >> ~/.profile
	echo "export DAEMON_HOME=$HOME/.persistenceCore" >> ~/.profile
	echo "export DAEMON_ALLOW_DOWNLOAD_BINARIES=false" >> ~/.profile
	echo "export DAEMON_LOG_BUFFER_SIZE=512" >> ~/.profile
	echo "export DAEMON_RESTART_AFTER_UPGRADE=true" >> ~/.profile
	echo "export UNSAFE_SKIP_BACKUP=true" >> ~/.profile
	source ~/.profile
	```

5. Now you can start **Cosmovisor**.
	```bash
	cosmovisor run start
	```

Now, with **Cosmovisor** running our Persistence test-core-1 Node, everything is set up correctly for when the next upgrade becomes available. Once an upgrade is available, please proceed to the following section **(Upgrade the Node)**.

#### Upgrade the Node using Cosmovisor
**1. Manual Option**   
As soon as a software upgrade proposal is passed, the node operators can prepare **Cosmovisor** to automatically upgrade their nodes when the chain upgrade block height is reached. Thus, node operators don't need to manually intervene after the block height is reached, upgrade the node software, and start the node again. In summary, **Cosmovisor** eliminates human intervention and human error factors during node upgrades.

To prepare **Cosmovisor** to upgrade your node, copy and paste the following commands in your terminal (**ensure you replace `BINARY_VERSION` with the appropriate upgrade version**)

```bash
export BINARY_VERSION=vX.Y.Z # IMPORTANT: REPLACE THIS VERSION WITH THE APPROPRIATE UPGRADE VERSION
mkdir -p ~/.persistenceCore/cosmovisor/upgrades/$BINARY_VERSION/bin
cd $HOME/persistenceCore
git pull
git checkout $BINARY_VERSION
make build
cp build/persistenceCore ~/.persistenceCore/cosmovisor/upgrades/$BINARY_VERSION/bin
```
Now, at the upgrade height, **Cosmovisor** will upgrade swap the binaries.

**2. Auto-download option**   
The above manual option still needs an upgrade version binary to be manually added under cosmovisor/upgrades/upgrade-name/bin directory. 
For clarity, refer below folder layout for daemon home directory:-

![alt text for screen readers](cosmo-visor-folder-layout.jpg)

However, for people who don't need such control and want an automated setup to download binaries on their node, there is an **auto-download** option.   
This might include scenarios like:-syncing a non-validating fullnode and/or performing a little maintenance.

**NOTE**: We advise to be cautious while opting for auto-download feature, because cosmovisor module doesn't verify in advance if an upgrade binary is available before cosmovisor restart. If there will be any issue with downloading a binary, the cosmovisor will stop and won't restart an App (which could lead to a daemon halt on the node). Therefore, it is every node operator's responsibility to analyze such risks and use cosmovisor as per requirement.
 
#### Steps to enable the Auto-Download feature
**Case A: When you want to activate the auto-download feature on your node**
1. Ensure to set environment variable **DAEMON_ALLOW_DOWNLOAD_BINARIES** to **true** (refer to step.4 in the section "Run the Node using Cosmovisor" of this page) before starting the cosmovisor process (step 5)

**Case B: When creating the governance proposal (skip if you're a node operator)**
1. Ensure to set environment variable **DAEMON_ALLOW_DOWNLOAD_BINARIES** to **true** 
2. Create a Github release for target version binary/tar for all required environments and calculate the checksum using sha256sum or sha512sum. The downloadable binary path with checksum can be drafted then as below:
    ```   
    "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0-linux-amd64?checksum=sha256:6d0c123e246a8b56ba534f70dd5dc72058b00fd5e5dde5ea40509ff51efc42e2"
    ```
3. Create a JSON file in format:- os/architecture -> binary URI map under the "binaries" key. Note that we can list multiple binaries for appropriate environments in this file.  
   For example:
    ```json
    {
      "binaries": {
        "linux/amd64": "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0-linux-amd64?checksum=sha256:6d0c123e246a8b56ba534f70dd5dc72058b00fd5e5dde5ea40509ff51efc42e2",
        "linux/arm64": "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0-linux-arm64?checksum=sha256:a0afbbe35eda3d5e52a7907bcae296415e84b3ff6c7da97429d91f324004a5ab"
      }
    }
    ```
   Host this JSON file(<any-upgrade-name>.JSON) to a target version Github Release or create a separate gist/webpage.    
   Let's say for example, we added it to Release downloads page like:- "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/v7_binaries.json"

4. To download the target binary during upgrade, we need to provide full path for above raw JSON file into upgrade-info parameter while submitting upgrade proposal from each of the node in the current running chain.
   For example:-
    ```shell
    persistenceCore tx gov submit-proposal software-upgrade $UPGRADE_NAME --yes --title "$UPGRADE_NAME" --description "$UPGRADE_NAME" \
        --upgrade-height $UPGRADE_HEIGHT --from val1 --chain-id $CHAIN_ID --deposit 100uxprt \
        --upgrade-info "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/raw/v7_binaries.json" \
        --fees 2000uxprt --gas auto --gas-adjustment 1.5 -b block -o json
    ```

### B. Upgrade by manually swapping the upgrade binary (without cosmovisor)

1. Wait for **persistenceCore** to reach the upgrade height.
2. Look for a panic message, followed by endless peer logs, then **stop the daemon**.
3. Run the following commands:

	```bash
	# ensure you replace `BINARY_VERSION` with the appropriate upgrade version
	cd $HOME/persistenceCore
	git pull
	git checkout BINARY_VERSION # replace with the binary version
	make build
	cp build/persistenceCore <destination-binary> # destination binary SHOULD be at "~/go/bin/persistenceCore"
	```
	
4. Start the **persistenceCore** daemon again, watch the upgrade happen, and then continue to hit blocks.

# Cosmovisor upgrades

## Using Cosmovisor

We highly recommend validators to use **Cosmovisor** to run their nodes. This will make low-downtime upgrades smoother, as validators don't have to manually upgrade binaries during the upgrade. Instead, they can pre-install new binaries, and **Cosmovisor** will automatically update them based on on-chain `SoftwareUpgrade` proposals.\
**Note**: However, all validators (including the ones using cosmovisor) should always be available during chain upgrades to resolve any potential issues that might occur.

In summary **Cosmovisor** does two things:

1. Run the Node
2. Upgrade the node _(with our manual pre-installation)_

For more information regarding **Cosmovisor** please visit https://docs.cosmos.network/v0.47/tooling/cosmovisor.

**Run the Node using Cosmovisor**

Before being able to update our nodes, **Cosmovisor** needs to be configured accordingly, so it can run our Persistence core-1 node. Please continue with the following instructions:

1.  Install **Cosmovisor** (latest version):

    ```bash
    go install cosmossdk.io/tools/cosmovisor/cmd/cosmovisor@latest
    ```
2.  After this, you must create the necessary **Cosmovisor** folders in your daemon home directory (`~/.persistenceCore`).

    ```bash
    mkdir -p ~/.persistenceCore
    mkdir -p ~/.persistenceCore/cosmovisor
    mkdir -p ~/.persistenceCore/cosmovisor/genesis
    mkdir -p ~/.persistenceCore/cosmovisor/genesis/bin
    mkdir -p ~/.persistenceCore/cosmovisor/upgrades
    ```
3.  Copy the current persistenceCore binary into the cosmovisor/genesis folder. **Ensure you replace `UPGRADE_NAME` with the appropriate upgrade-name.**\
    The upgrade-name variable is the lowercased name of the upgrade as specified in the upgrade module plan. Also, the upgrade name path should be preferably normalized to be lowercased **major** version release name. For instance, V7.1.0 can be normalized to v7, and its path would be upgrades/v7.

    ```bash
    export UPGRADE_NAME=vX #IMPORTANT: REPLACE THIS VERSION WITH CORRECT UPGRADE NAME e.g. v7
    cp $GOPATH/bin/persistenceCore ~/.persistenceCore/cosmovisor/genesis/bin
    mkdir -p ~/.persistenceCore/cosmovisor/upgrades/$UPGRADE_NAME/bin
    cp $GOPATH/bin/persistenceCore ~/.persistenceCore/cosmovisor/upgrades/$UPGRADE_NAME/bin
    ```
4.  Set these environment variables. Copy and paste the following commands into your terminal.

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
5.  Now you can start **Cosmovisor**.

    ```bash
    cosmovisor run start
    ```

Now, with **Cosmovisor** running our Persistence core-1 Node, everything is set up correctly for when the next upgrade becomes available. Once an upgrade is available, please proceed to the following section **(Upgrade the Node)**.

**Upgrade the Node using Cosmovisor**

**1. Manual Option**\
As soon as a software upgrade proposal is passed, the node operators can prepare **Cosmovisor** to automatically upgrade their nodes when the chain upgrade block height is reached. Thus, node operators don't need to manually intervene after the block height is reached, upgrade the node software, and start the node again. In summary, **Cosmovisor** eliminates human intervention and human error factors during node upgrades.

To prepare **Cosmovisor** to upgrade your node, copy and paste the following commands in your terminal (**ensure you replace `BINARY_VERSION` and `UPGRADE_NAME` with the appropriate values as specified above**)

```bash
export BINARY_VERSION=vX.Y.Z # IMPORTANT: REPLACE THIS VERSION WITH THE APPROPRIATE UPGRADE VERSION
export UPGRADE_NAME=vX #IMPORTANT: REPLACE THIS VERSION WITH CORRECT UPGRADE NAME e.g. v7
mkdir -p ~/.persistenceCore/cosmovisor/upgrades/$UPGRADE_NAME/bin
cd $HOME/persistenceCore
git pull
git checkout $BINARY_VERSION
make build
cp build/persistenceCore ~/.persistenceCore/cosmovisor/upgrades/$UPGRADE_NAME/bin
```

Now, at the upgrade height, **Cosmovisor** will upgrade swap the binaries.

**2. Auto-download option**\
The above manual option still needs an upgrade version binary to be manually added under cosmovisor/upgrades/upgrade-name/bin directory. For clarity, refer below folder layout for daemon home directory:-

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

However, for people who don't need such control and want an automated setup to download binaries on their node, there is an **auto-download** option. This might include scenarios like:-syncing a non-validating fullnode and/or performing a little maintenance.

**NOTE**: We advise to be cautious while opting for auto-download feature, because cosmovisor module doesn't verify in advance if an upgrade binary is available before cosmovisor restart. If there will be any issue with downloading a binary, the cosmovisor will stop and won't restart an App (which could lead to a daemon halt on the node). Therefore, it is every node operator's responsibility to analyze such risks and use cosmovisor as per requirement.

**Steps to enable the Auto-Download feature**

**Case A: When you want to activate the auto-download feature on your node**

1. Ensure to set environment variable **DAEMON\_ALLOW\_DOWNLOAD\_BINARIES** to **true** (refer to step.4 in the section "Run the Node using Cosmovisor" of this page) before starting the cosmovisor process (step 5)

**Case B: When creating the governance proposal (skip if you're a node operator)**

1. Ensure to set environment variable **DAEMON\_ALLOW\_DOWNLOAD\_BINARIES** to **true**
2.  Create a Github release for target version binary/tar for all required environments and calculate the checksum using sha256sum or sha512sum. The downloadable binary path with checksum can be drafted then as below:

    ```
    "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-amd64?checksum=sha256:6d0c123e246a8b56ba534f70dd5dc72058b00fd5e5dde5ea40509ff51efc42e2"
    ```
3.  Create a JSON file in format:- os/architecture -> binary URI map under the "binaries" key. Note that we can list multiple binaries for appropriate environments in this file.\
    For example:

    ```json
    {
      "binaries": {
        "linux/amd64": "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-amd64?checksum=sha256:6d0c123e246a8b56ba534f70dd5dc72058b00fd5e5dde5ea40509ff51efc42e2",
        "linux/arm64": "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-arm64?checksum=sha256:a0afbbe35eda3d5e52a7907bcae296415e84b3ff6c7da97429d91f324004a5ab"
      }
    }
    ```

    Host this JSON file(.JSON) to a target version Github Release or create a separate gist/webpage.\
    Let's say for example, we added it to Release downloads page like:- "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/v7\_binaries.json"
4.  To download the target binary during upgrade, we need to provide full path for above raw JSON file into upgrade-info parameter while submitting upgrade proposal from each of the node in the current running chain. For example:-

    ```shell
    persistenceCore tx gov submit-proposal software-upgrade $UPGRADE_NAME --yes --title "$UPGRADE_NAME" --description "$UPGRADE_NAME" \
        --upgrade-height $UPGRADE_HEIGHT --from val1 --chain-id $CHAIN_ID --deposit 100uxprt \
        --upgrade-info "https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/raw/v7_binaries.json" \
        --fees 2000uxprt --gas auto --gas-adjustment 1.5 -b block -o json
    ```

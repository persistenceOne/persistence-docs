# Oracle Price Feeder

The `x/oracle` requires that all validators vote on the price of assets which governance has decided to add. In order to vote on these prices, the persistenceOne team has built the [Oracle price feeder](https://github.com/persistenceOne/oracle-feeder).

## How to setup

1. First, install the oracle-feeder:

    - clone oracle-feeder: `git clone https://github.com/persistenceOne/orarcle-feeder`
    - install: `cd oracle-feeder && make install`

2. Setup account

    - It is recommended to use a separate delegated account for the price feeder instead of using the validator account
    - Once the key is setup, delegate the feeder account

        ```sh
        persistenceCore tx oracle delegate-feed-consent <validator-key> <feeder-account-address>
        ```

3. Modify example config

    - Copy the `price-feeder.example.toml`

        ```sh
        cp price-feeder.example.toml /usr/local/bin/price-feeder.toml
        ```

    - Update the `[account]` information with correct chain-id (`core-` for mainnet, `test-core-1` for testnet), address and validator address from your keyring.

        ```toml
        [acount]
        address = "persistence152nvc6f096v6n6tr5lg50xq22ak0chsr0ru7xc" # feeder address
        chain_id = "test-core-1"
        validator = "persistencevaloper1pkkayn066msg6kn33wnl5srhdt3tnu2v94kvz9"
        ```

4. In order to get your feeder address & validator address, you can run:

    ```sh
    persistenceCore keys show <feeder-key> -a
    persistenceCore keys show <validator-key> -a --bech=val
    ```

5. Create a [systemd](https://systemd.io/) service file

    ```sh
    sudo tee /etc/systemd/system/oracle-feeder.service > /dev/null <<EOF
    [Unit]
    Description=PersistenceOne Oracle Price Feeder
    After=online.target[Service]
    StartLimitIntervalSec=0
    StartLimitBurst=0

    [Service]
    Type=simple
    User=$USER
    WorkingDirectory=/usr/local/bin
    ExecStart=bash -c 'echo "\n" | oracle-feeder price-feeder.toml --log-level debug'
    Restart=on-failure
    RestartSec=5s
    LimitNOFILE=65535

    [Install]
    WantedBy=multi-user.target
    EOF
    ```

    Note: The price feeder hits a lot of endpoints to get prices for assets. Sometimes the websocket connections disconnect and cannot reconnect. If this is happening, set up the service file to restart the process after a few hours:

    ```sh
    Restart=always
    RuntimeMaxSec=14400s # 4h
    ```

6. Start your service

    ```sh
    sudo systemctl daemon-reload
    sudo systemctl enable oracle-feeder
    sudo systemctl start oracle-feeder
    ```

7. Please check to make sure your oracle feeder is running successfully

    ```sh
    sudo journalctl -u oracle-feeder.service -f
    ```

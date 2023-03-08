# Manual upgrades

## Upgrade Node by manually swapping the upgrade binary (without cosmovisor)

1. Wait for **persistenceCore** to reach the upgrade height.
2. Look for a panic message, followed by endless peer logs, then **stop the daemon**.
3.  Run the following commands:

    ```bash
    # ensure you replace `BINARY_VERSION` with the appropriate upgrade version
    cd $HOME/persistenceCore
    git pull
    git checkout BINARY_VERSION # replace with the binary version
    make build
    cp build/persistenceCore <destination-binary> # destination binary SHOULD be at "~/go/bin/persistenceCore"
    ```
4. Start the **persistenceCore** daemon again, watch the upgrade happen, and then continue to hit blocks.

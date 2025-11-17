# Running Nodes

A full node is a server running a chain's binary (its software) that fully validates transactions and blocks of a blockchain and keeps a complete record of all historic activity. A full node is distinct from a pruned node that processes only block headers and a small subset of transactions. Running a full node requires more resources than a pruned node.

Validators can decide to run either a full node or a pruned node, but they need to retain enough blocks to validate new blocks.

Of course, it is possible and encouraged for users to run full nodes even if they do not plan to be validators.

### Types of nodes

* **Endpoints:** publicly available endpoints are available for anyone to use. An endpoint's principal purpose is to allow users to query data, perform transactions, and other commands. Types of endpoints: RPC, REST, gRPC and WSS.
* **Snapshots:** nodes running the chain's software can save its state at a certain point in time. Snapshots assist other nodes in joining the network.
* **Archival Nodes:** these nodes save all the chain's data (transactions, addresses, etc.), thus are more resource-intensive and expensive to run. Archival nodes aid the retrieval of historical data.
* **State Sync:** an alternative to snapshots, state sync is a quicker way for nodes to join the network.
* **Seeds:** nodes can make their address book available to other nodes to aid with a node's network integration.
* **Peers:** every public node is identifiable by other nodes using its peer address.

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th data-hidden data-card-target data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Run a Local Node</strong></td><td><a href="setup.md">setup.md</a></td></tr><tr><td><strong>Run a Testnet Node</strong></td><td><a href="join-testnet.md">join-testnet.md</a></td></tr><tr><td><strong>Run a Mainnet Node</strong></td><td><a href="join-mainnet.md">join-mainnet.md</a></td></tr><tr><td><strong>Node Operations</strong></td><td><a href="node-operations/">node-operations</a></td></tr><tr><td><strong>Seed &#x26; Peers</strong></td><td><a href="seed-and-peers.md">seed-and-peers.md</a></td></tr></tbody></table>

# Node Operators - Onboarding

### Node Operator Onboarding Guide[¶](broken-reference) <a href="#node-operator-onboarding-guide" id="node-operator-onboarding-guide"></a>

Currently, only pSTAKE's whitelisted validators can be onboarded onto the active node operator's set. These are the steps for joining the pSTAKE’s validator set after getting whitelisted by the protocol:

1. Onboarding

This is an off-chain process and Node Operators need to contact the pSTAKE team for this. To be onboarded in the active set, node operators need to submit their Ethereum address to the pSTAKE team. After the addition of the address, Node Operators will be able to interact with all pSTAKE contracts made for node operators. Node Operators should ensure to submit all transactions using the same key submitted to the pSTAKE team and ensure to custody the private key safely at all times.

1. Validator Keys

This can further be divided into following steps:

* **Step 1: Key generation and submission**: There are two ways Node Operators can generate keys:
  * Using the pSTAKE key generation script:
    * Clone the [repository](https://github.com/persistenceOne/eth-validator-key-creation) locally.
    * Install all the requirements and follow the steps mentioned in [README.md](https://github.com/persistenceOne/eth-validator-key-creation#schedule-deposit-to-keysmanager-by-node-operator).
    * This script generates a key and deposits it to the beacon chain deposit contract with 1ETH. It also submits the key to the keysmanager contract with a signature, which will allow the pSTAKE protocol to deposit 31ETH into the beacon chain deposit contract.
  * Doing the same process manually:
    * Create a public-private keypair using [eth2-deposit-cli](https://github.com/ethereum/staking-deposit-cli).
    * Send a transaction to the beacon chain deposit contract (**0x00000000219ab540356cBB839Cbe05303d7705Fa**) with 1ETH on the mainnet network. Use the pSTAKE protocol withdrawal credential (**0x0100000000000000000000005945bfe76789c79f54C634f6f704d5400491C90a**) while making the transaction
    * Submit the key to the keysmanager contract with a signature to allow the pSTAKE protocol to make a deposit of 31ETH to the beacon chain deposit contract:
      * Keysmanager contract: 0xD90BA04ada98b08105Eab75899dbf9cb9f2910C2
      * Transaction: addValidator(pubkey,signature,address)
*   **Step 2: Key verification**: The verification process of the key works as follows:

    * The key that was submitted by the Node Operator to the beacon chain deposit contract is picked up by the beacon chain and is added to the beacon chain validator list.
    * The oracles then pick up the key from the beacon chain and verifies the withdrawal credentials set by the Node Operator. The oracles also verify that the signature submitted by the Node Operator matches the signature submitted to keysmanager contract for the right chain and the right amount.
    * After the verification is done, the oracles mark the validator key on the keysmanager contract, after which the subgraph will pick up this change of state.
    * The status in the subgraph will change from UNVERIFIED to VERIFIED
    * Node Operators can check the status of their keys on the pSTAKE [subgraph](https://thegraph.com/hosted-service/subgraph/rohitaudit/pstake). The query is mentioned below:

    validators(where: {publicKey: ""}) {\
    id\
    nodeOperator\
    status\
    publicKey\
    signature\
    }
* **Step 3: Refund and key activation**: In order to activate the key on the beacon chain and to get the 1ETH deposit back, the Node Operator needs to perform the following actions once his validator is VERIFIED and there is more than 32ETH available in the pSTAKE staking pool (=issuer contract) (to be monitored continuously):
  * Make a transaction to the issuer contract
    * Issuer contract: **0xB9599ecb958623614F94BcD9b03f9Ab161Eb05D0**
    * Transaction: depositToEth2(pubkey)
  * If the transaction is successful, i.e. the node operator is the first to submit this transaction, the node operator’s validator will get activated (31ETH submitted from the issuer contract) and the Node Operator will receive his 1ETH deposit back.
  * At this point the Node Operator should start his validator and connect it to the beacon chain, ensuring that the validator is up and running by the time the beacon chain picks up the transaction.

Instead of doing all the above steps you can just run the activate.py file in the [repository](https://github.com/persistenceOne/eth-validator-key-creation) mentioned above routinely every 6-10 hours after submitting the key. This script will perform all the actions necessary from your side.

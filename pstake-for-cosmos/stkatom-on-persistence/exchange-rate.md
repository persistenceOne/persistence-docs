# Exchange Rate

### stkATOM Exchange Rate[¶](broken-reference) <a href="#stkatom-exchange-rate" id="stkatom-exchange-rate"></a>

The primary functionality of pSTAKE is to enable delegators to move their delegations onto Cosmos chain, such that it is controlled by pSTAKE protocol, and in return, issue stkATOM tokens that represent that position. The stkATOM tokens constitute the user’s claim to their original native ATOM assets. stkATOM will be burnt when instantly redeemed or unstaked for ATOM.

A deposit account receives the transfer of delegations when a request to liquid stake is made by a user. After that, the blockchain mints and transfers the corresponding stkATOM into the user’s account depending on the prevailing exchange rate of stkATOM/ATOM.

When a request for unstaking is made, the tokens submitted are blocked from further usage and an unstaking request is made corresponding to your shares on Cosmos Chain with an elegantly designed token delegation strategy based on the weights assigned to the validators for the protocol.

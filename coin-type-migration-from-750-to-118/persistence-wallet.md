# Persistence Wallet

<table><thead><tr><th width="294.66666666666663">When was the wallet created?</th><th width="172">Default Coin-type</th><th>Migration Required?</th></tr></thead><tbody><tr><td>After 8 September 2022</td><td>118 </td><td>No 🎉</td></tr><tr><td>Before 8 Septemeber 2022</td><td>750</td><td>Yes</td></tr><tr><td>Don't remember</td><td>-</td><td><a href="persistence-wallet.md#1.-manual-migration">Complete step 1 &#x26; step 2</a></td></tr></tbody></table>

{% hint style="success" %}
Both coin-type wallet addresses are supported by keplr. Hence both of the addresses can be used simultaneously.
{% endhint %}

## Migration

{% hint style="info" %}
If you are looking for Persistence + Ledger wallet addresses, kindly refer to this [page](broken-reference).
{% endhint %}

_Note: Migration is only required if you are using 750 Coin-type wallet address._

### 1. Manual Migration

<details>

<summary>Step 1: Download Keystore File for your persistence wallet address</summary>

1. Visit Wallet (https://wallet.persistence.one)
2. From top right hand corner select account icon and download Keystore file

![](broken-reference)

</details>

<details>

<summary>Step 2: Login using Keystore file</summary>

1. Visit Wallet (https://wallet.persistence.one)
2. Click "Sign in" from top right corner
3. Select "Use KeyStore File"
4. Upload your keystore file and set a password.
5. Both the coin-type addresses will be displayed and then press "Login"
6. check if both the coin-types are visible in your account

![](broken-reference)

</details>

<details>

<summary>Step 3: Manually transfer funds from 118 to 750 coin-type address</summary>

1. Copy the new/118 coin-type wallet persistence address from dropdown as shown in step 2.
2. Go to old/750 coin-type wallet persistence address
3. Press "Send" and paste the new/118 coin-type wallet address. Select the full amount and hit "Send".&#x20;

Note: If you have multiple tokens in 750 coin-type wallet persistence address, you will have to repeat this step individually for all tokens.

**Do you have staked $XPRT in your wallet address?**

* **Immediate solution:** Unbond your XPRT and migrate to the newly created coin-type 118 wallet address. (21 days unbonding period)
* **Suggested Migration:** After the launch of the Liquid Staking Module by Iqlusion (Timeline not yet confirmed), the stake can be directly transferred to the new coin-type 118 wallet address without unbonding.

</details>

#### Tutorial:

{% embed url="https://www.youtube.com/watch?v=d78MfjOPf5I" %}

### 2. Automated Migration

{% hint style="warning" %}
Under Development
{% endhint %}

## FAQs

<details>

<summary>I can't see coin-types in my persistence wallet</summary>

To see both coin-type addresses in your persistence wallet, you need to login using Keystore. [Refer here](persistence-wallet.md#step-1-download-keystore-file-for-your-persistence-wallet-address) on how to download keystore file for your persistence wallet.&#x20;

</details>

<details>

<summary>Is there any limit to transfer my tokens?</summary>

No, there is no limit.

</details>

<details>

<summary>URL for Persistence Wallet</summary>

This is the correct URL: https://wallet.persistence.one

</details>

<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.&#x20;
2. Never share your seed/keystore with anyone.&#x20;
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Peristence community chat on Telegram](https://t.me/PersistenceOneChat) .&#x20;

</details>

# Keplr Wallet

### TLDR

This guide is for users who use [Keplr wallet](https://keplr.app/) & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

***

### Is migration for my wallet address needed?

<table><thead><tr><th width="294.66666666666663">When was the wallet created?</th><th width="172">Default Coin-type</th><th>Migration Required?</th></tr></thead><tbody><tr><td>After 7 October 2022</td><td>118 </td><td>No 🎉</td></tr><tr><td>Before 7 October 2022</td><td>750</td><td>Yes</td></tr><tr><td>Don't remember</td><td>-</td><td><a href="keplr-wallet.md#q1.-i-dont-remember-when-my-keplr-account-was-created.">Refer here</a></td></tr></tbody></table>

{% hint style="success" %}
Both coin-type wallet addresses are supported by keplr. Hence both of the addresses can be used simultaneously.
{% endhint %}

<details>

<summary>How to check wallet's coin-type</summary>







</details>



## Step 1: Check which coin-type you're using

<details>

<summary>Add your wallet again in keplr</summary>



<img src="../.gitbook/assets/Screenshot 2023-11-01 at 11.55.16 PM.png" alt="" data-size="original">

<img src="../.gitbook/assets/Screenshot 2023-11-01 at 11.55.25 PM.png" alt="" data-size="original">

![](<../.gitbook/assets/Screenshot 2023-11-01 at 11.55.34 PM.png>)

![](<../.gitbook/assets/Screenshot 2023-11-01 at 11.56.01 PM.png>)

Note: Name this wallet as "Wallet 2"

</details>

<details>

<summary>Select derivation path</summary>





You'll be given an option to select the coin-type

![](<../.gitbook/assets/Screenshot 2023-11-01 at 11.56.52 PM.png>)

</details>

{% hint style="success" %}
**Note:** If you didn't get the option to select your coin-type, that means that you are already on 118 coin-type & no migration is needed.
{% endhint %}

## Step 2: Make sure you have both the coin-types (750 & 118) wallet addresses added in keplr.&#x20;

In this documentation, we will be denoting <mark style="color:orange;">Wallet 1</mark> as the wallet with 750 coin-type wallet address and <mark style="color:green;">Wallet 2</mark> as the wallet with 118 coin-type wallet address.&#x20;

Hence in this process, we have to move tokens from <mark style="color:orange;">Wallet 1</mark> to <mark style="color:green;">Wallet 2</mark>.

## Step 3: Login to pWALLET with keplr & copy the wallet address&#x20;

* Select <mark style="color:orange;">Wallet 1</mark> from the Keplr Extention



*

## Migration

{% hint style="info" %}
If you are looking for Keplr + Ledger wallet addresses, kindly refer to this [page](broken-reference).
{% endhint %}

_Note: Migration is only required if you are using 750 Coin-type wallet address._

### 1. Manual Migration

<details>

<summary>Step 1: Add your wallet again in the Keplr extension. </summary>

* Go to account tab and add new account

![](broken-reference)

* Select "import existing account"

![](broken-reference)

* Add your seed & press next. Wallet will be added.

![](broken-reference)

* Select the newly added wallet from the "select account" section on keplr extention and you will get a popup to select 118/750 coin-type wallet address. Select 118 coin-type wallet address. \[[Can't see popup?](keplr-wallet.md#q2.-coin-type-selection-popup-is-not-visible-in-keplr-extention)]

![](broken-reference)



</details>

<details>

<summary>Step 2: Manually transfer funds from old wallet address to new wallet address.</summary>

In Keplr Extension:

1. Copy the new/118 coin-type wallet persistence address
2. Go to old/750 coin-type wallet persistence address
3. Press "Send" and paste the new/118 coin-type wallet address. Select the full amount and hit "Send".&#x20;

Note: If you have multiple tokens in 750 coin-type wallet persistence address, you will have to repeat this step individually for all tokens.

Do you have staked $XPRT in your wallet address?

* **Immediate solution:** Unbond your XPRT and migrate to the newly created coin-type 118 wallet address. (21 days unbonding period)
* **Suggested Migration:** After the launch of the Liquid Staking Module by Iqlusion (Timeline not yet confirmed), the stake can be directly transferred to the new coin-type 118 wallet address without unbonding.

</details>

#### Step-by-step tutorial:

<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.&#x20;
2. Never share your seed with anyone.&#x20;
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Peristence community chat on Telegram](https://t.me/PersistenceOneChat).&#x20;

</details>

### 2. Automated Migration

{% hint style="warning" %}
This process is unavailable at the moment.
{% endhint %}

## FAQs

<details>

<summary>Q1. What's the coin-type for my current wallet type?</summary>

In your keplr wallet extention

* Go to account tab and add new account

![](broken-reference)

* Select "import existing account"

![](broken-reference)

* Add your seed & press next. Wallet will be added.

![](broken-reference)

* Select the newly added wallet from the "select account" section on keplr extention and you will get a popup to select 118/750 coin-type wallet address. Select 118 coin-type wallet address. \[[Can't see popup?](keplr-wallet.md#q2.-coin-type-selection-popup-is-not-visible-in-keplr-extention)]

![](broken-reference)



</details>

<details>

<summary>Q2. Coin-type selection popup is not visible in Keplr Extension.</summary>

This means that, you already have 118 coin-type wallet address. Hence no migration is required.&#x20;

</details>

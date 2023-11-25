# Keplr Wallet

### TLDR

This guide is for users who use [Keplr wallet](https://keplr.app/) & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

***

### Is migration for my wallet address needed?

<table><thead><tr><th width="294.66666666666663">When was the wallet created?</th><th width="172">Default Coin-type</th><th>Migration Required?</th></tr></thead><tbody><tr><td>After 7 October 2022</td><td>118 </td><td>No 🎉</td></tr><tr><td>Before 7 October 2022</td><td>750</td><td>Yes</td></tr><tr><td>Don't remember</td><td>-</td><td><a href="keplr-wallet.md#step-1-check-which-coin-type-youre-using">Refer here</a></td></tr></tbody></table>

{% hint style="success" %}
Both coin-type wallet addresses are supported by keplr. Hence both of the addresses can be used simultaneously.
{% endhint %}

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

In this documentation, we will be denoting <mark style="color:orange;">Wallet 1</mark> as the wallet with **750 coin-type** wallet address and <mark style="color:green;">Wallet 2</mark> as the wallet with **118 coin-type** wallet address.&#x20;

Hence in this process, we have to move tokens from <mark style="color:orange;">Wallet 1</mark> to <mark style="color:green;">Wallet 2</mark>.

## Step 3: Login to pWALLET with keplr & copy the wallet address&#x20;

* Select <mark style="color:green;">Wallet 2</mark> from the Keplr Extention

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.46.25 AM.png" alt=""><figcaption></figcaption></figure>

* Sign in pWALLET using keplr (With <mark style="color:green;">Wallet 2</mark>)

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.32.41 AM.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.34.24 AM.png" alt=""><figcaption></figcaption></figure>

* Go to 'Receive' & copy your <mark style="color:green;">Wallet 2</mark> address

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.36.07 AM.png" alt=""><figcaption></figcaption></figure>

## Step 3: Sign into pWALLET with <mark style="color:orange;">Wallet 1</mark> & Migrate Tokens

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.47.54 AM.png" alt=""><figcaption></figcaption></figure>

**Migrating Staked Tokens**

A. Go to 'Staking' tab and select 'Delegated' from the menu.

{% hint style="info" %}
Skip this step if you don't have any staked tokens
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.48.26 AM.png" alt=""><figcaption></figcaption></figure>

B. Check if the validator where you stake/delegate your tokens have enough capacity (i.e Validator Bond) to migrate your tokens (using[ Smartstake](https://analytics.smartstake.io/persistence/valbonds) dashboard)

{% hint style="info" %}
Eg: As I delegate \~23 XPRT to smart stake validator, i need to check if smart stake validator has enough capacity to help facilitate migrate for my tokens. As in my case the validator has the capacity, we can move forward with the migation process.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.21.56 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**Note:** If your validator doesn't have enough capacity, ask your validator to increase it or redelegate your staked/delegated tokens to a validator which has enough capacity for your tokens.
{% endhint %}

C. Click on '**Actions**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.30.27 AM (1).png" alt=""><figcaption></figcaption></figure>

D. Click on '**Transfer Delegation**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.32.19 AM.png" alt=""><figcaption></figcaption></figure>

E. Enter the amount and your <mark style="color:green;">Wallet 2</mark> address which we copied

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.34.15 AM.png" alt=""><figcaption></figcaption></figure>

F. There will be 2 transactions, first to 'tokenise' your tokens & then to 'transfer' them to new address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.40.57 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Note: If the transaction fails due to gas issue, increase the gas to 750000. using the 'Advanced' button.

&#x20;![](<../.gitbook/assets/Screenshot 2023-11-02 at 12.56.03 AM.png>)
{% endhint %}



G. Your tokens are now transferred to the 118 coin-type wallet address from 750 coin-type wallet address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.41.47 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Repeat these steps again if you have staked with more than 1 validator.
{% endhint %}



### Migrate all liquid tokens in the wallet



A. Claim all the pending rewards from your wallet

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 1.01.42 AM.png" alt=""><figcaption></figcaption></figure>

B. Go to 'Wallet' page and select 'Send'&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.59.03 AM.png" alt=""><figcaption></figcaption></figure>

C. Send all the tokens to your new coin-type wallet address.



## Step 4: Sign into pWALLET with <mark style="color:green;">Wallet 2</mark>



A. Go to '**Staking**' tab, select '**Tokenized Shares**' & click on '**Redeem**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.51.33 AM.png" alt=""><figcaption></figcaption></figure>

B. Click on '**Redeem Shares**' & Redeem your tokens.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.53.59 AM.png" alt=""><figcaption></figcaption></figure>

C. Migration done, your staked/delegated tokens will now be visible in the 'Delegated' Section like before.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.59.20 AM.png" alt=""><figcaption></figcaption></figure>

***

## Step 5: Sit back and Relax! 🎉

The migration from 750 coin-type to 118 coin-type has been completed successfully.



## FAQs

<details>

<summary>Is there any limit to transfer my tokens?</summary>

No, there is no limit.&#x20;

</details>

<details>

<summary>URL for Persistence Wallet</summary>

This is the correct URL: https://wallet.persistence.one

</details>

<details>

<summary>I have provided liquidity on Dexter. Will that be transferred too?</summary>

No, this process does not transfer your liquidity. You need to first remove the bonded tokens on dexter, migrate using the above steps & then provide the liquidity again.

</details>

<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.&#x20;
2. Never share your seed/keystore with anyone.&#x20;
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Peristence community chat on Telegram](https://t.me/PersistenceOneChat).&#x20;

</details>

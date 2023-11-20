# Persistence Wallet

### TLDR

This guide is for users who have logged into **pWALLET** using Keystore or Mnemonic/Seed-Phrase & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.



## Step 1: Check which coin-type you're using

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 10.31.06 AM.png" alt=""><figcaption></figcaption></figure>

If you already have all your tokens on 118 coin-type wallet address then no migration is needed. However if you have funds in your 750 coin-type wallet address then you need to proceed with the migration (i.e move to [Step 2](persistence-wallet.md#step-2-migrate-all-the-available-tokens-in-your-wallet)).

***

## Step 2: Migrate all the available tokens in your wallet

{% hint style="info" %}
This step will migrate all the available tokens from 750 coin-type address to 118 coin-type address. If you have staked/delegated tokens in your wallet, we'll migrate them in the [_Step 3_](persistence-wallet.md#step-3-migrate-all-the-staked-delegated-tokens-in-your-wallet).
{% endhint %}

A. Claim all the pending staking rewards.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.08.05 AM.png" alt=""><figcaption></figcaption></figure>

B. Click on **'Migrate Tokens from 750 to 118'**

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 10.43.56 AM.png" alt=""><figcaption></figcaption></figure>

C. Hit '**Migrate**' button

{% hint style="info" %}
By default, all the available tokens and your 118 coin-type wallet address will be pre-filled
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.04.33 AM (2).png" alt=""><figcaption></figcaption></figure>

**Voila!** All of your available tokens are migrated. Now move to step 3, if you have any staked/Delegated Tokens.

***

## Step 3: Migrate all the staked/delegated tokens in your wallet



A. Go to '**Staking**' page and select '**Delegated**' from the sub-menu

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.16.39 AM.png" alt=""><figcaption></figcaption></figure>

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

E. Enter the amount and your 118 coin-type wallet address

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.34.15 AM.png" alt=""><figcaption></figcaption></figure>

F. There will be 2 transactions, first to 'tokenise' your tokens & then to 'transfer' them to new address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.40.57 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Note: If the transaction fails due to gas issue, increase the gas to 750000. using the 'Advanced' button.

&#x20;<img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.45.45 AM.png" alt="" data-size="original">
{% endhint %}



G. Your tokens are now transferred to the 118 coin-type wallet address from 750 coin-type wallet address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.41.47 AM.png" alt=""><figcaption></figcaption></figure>

H. Toggle to your 118 coin-type wallet address

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.49.51 AM.png" alt=""><figcaption></figcaption></figure>

I. Go to '**Staking**' tab, select '**Tokenized Shares**' & click on '**Redeem**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.51.33 AM.png" alt=""><figcaption></figcaption></figure>

J. Click on '**Redeem Shares**' & Redeem your tokens.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.53.59 AM.png" alt=""><figcaption></figcaption></figure>

K. Migration done, your staked/delegated tokens will now be visible in the 'Delegated' Section like before.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.59.20 AM.png" alt=""><figcaption></figcaption></figure>

***

## Step 4: Sit back and Relax! 🎉

The migration from 750 coin-type to 118 coin-type has been completed successfully.

***

## FAQs

<details>

<summary>I can't see coin-types in my persistence wallet</summary>

To see both coin-type addresses in your persistence wallet, you need to login using Keystore file.

</details>

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

<summary>Do i need to create a new wallet?</summary>

No, by default both the coin-type will be visible in your wallet

</details>

<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.&#x20;
2. Never share your seed/keystore with anyone.&#x20;
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Peristence community chat on Telegram](https://t.me/PersistenceOneChat) .&#x20;

</details>

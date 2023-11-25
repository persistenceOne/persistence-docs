# Ledger Hardware Wallet

### TLDR

This guide is for users who use Ledger using Persistence Ledger App & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

## How do you use your ledger?

<table><thead><tr><th align="center">Variation</th><th>Migration Required?</th><th align="center">750 Coin-type</th><th data-hidden align="center">118 Coin-type</th><th data-hidden align="center">Default</th></tr></thead><tbody><tr><td align="center">Keplr + Ledger</td><td>No 🎉</td><td align="center">Not Supported</td><td align="center">Supported</td><td align="center">118 Coin-type</td></tr><tr><td align="center">Persistence App + Ledger</td><td>Yes</td><td align="center">Supported</td><td align="center">Not Supported</td><td align="center">750 Coin-type</td></tr></tbody></table>

<details>

<summary>What do you mean by variation? </summary>

1. **Keplr (With Cosmos Ledger App) + Ledger**

Keplr by default only support 118 coin-type address derivation path for all the addresses generated through keplr since the beginning. Hence if you have always used keplr for your persistence address then you **don't** need wallet migration.&#x20;

2. **pWallet (With Persistence Ledger App) + Ledger**

pWALLET (When connected with Persistence Ledger App) by default only support 750 coin-type address derivation path for all the addresses generated through pWALLET since the beginning. Hence if you have always used pWALLET (with Persistence Ledger App) for your persistence address then you need coin-type  wallet migration.\
**Note:** As pWALLET only supports 750 coin-type derivation path, so in this migration you'll have to add your ledger wallet in keplr. Steps are mentioned in the next steps.

</details>

{% hint style="info" %}
**Still not sure which coin-type you're using?** This is the simplest method to determine:

If you login into pWALLET using Persistence ledger app, then you're on 750 coin-type wallet address.&#x20;

If you login into pWALLET using cosmos ledger app, then you're on 118 coin-type wallet address.
{% endhint %}

***

### **Pre-Requisite Checklist for migration:**

* [x] You're a ledger user
* [x] You use Persistence Ledger App to login into pWALLET
* [x] Your wallet needs a migration (Check this [section](ledger-hardware-wallet.md#how-do-you-use-your-ledger))
* [x] Using preferred browser (Google Chrome, Brave or Firefox)
* [x] You have [Keplr wallet extension](https://www.keplr.app/) installed

{% hint style="success" %}
**Note:** If you don't satisfy the Top 3 requirements in the above list then you don't need migration.
{% endhint %}

***

## Let's Start with the migration!

### Step 1: Add your 118 coin-type wallet address in keplr browser extension. &#x20;

In this step we will import your ledger into keplr so that you can access your 118 coin-type wallet address.&#x20;

A. Go to Keplr Wallet Extension in your browser

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 2.50.45 PM.png" alt=""><figcaption></figcaption></figure>

B. Connect Ledger Hardware Wallet

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 2.52.41 PM.png" alt=""><figcaption></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 2.55.17 PM.png" alt=""><figcaption></figcaption></figure>

C. Name the wallet as 'My 118 coin-type wallet' (Don't worry you can change your wallet name later too) using Cosmos App as recommended.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.00.46 PM.png" alt=""><figcaption></figcaption></figure>

D. Follow the onscreen instructions.

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.02.30 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**Don't have cosmos app installed on your ledger?**&#x20;

* Go to 'My ledger' tab on your Ledger Live app
* And search for 'Cosmos' and install it on your Ledger



<img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.09.01 PM.png" alt="" data-size="original">
{% endhint %}



E. Select 'Persistence' Chain and click on 'save'

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.11.25 PM.png" alt=""><figcaption></figcaption></figure>

F. Voila! your 118 coin-type persistence wallet address is imported in keplr.

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.12.56 PM.png" alt=""><figcaption></figcaption></figure>

### Step 2: Login into pWALLET using Keplr and copy your address



A. Click on 'Sign In'

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.23.58 PM.png" alt=""><figcaption></figcaption></figure>

B. Connect using 'Use Keplr'

{% hint style="info" %}
Make sure your Ledger wallet is selected in your keplr extention.&#x20;
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.31.24 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**Error while connecting using Keplr?** Make sure you've opened cosmos app on your ledger.&#x20;
{% endhint %}

C. go to 'Receive' sub-menu 'Wallet' tab and copy the address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.36.21 PM.png" alt=""><figcaption></figcaption></figure>

### Step 3: Sign out of this wallet and login using Persistence App

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.45.02 PM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**Getting error while connecting using Persistence Ledger?** Make sure you have opened Persistence App on your Ledger
{% endhint %}

### Step 4: Migrate your Staked XPRT Tokens

A. Go to 'Staking' tab and select 'Delegated' from the menu.

{% hint style="danger" %}
**Skip this step** if you don't have any staked tokens
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.48.26 AM.png" alt=""><figcaption></figcaption></figure>

B. Check if the validator where you stake/delegate your tokens have enough capacity (i.e Validator Bond) to migrate your tokens (using[ Smartstake](https://analytics.smartstake.io/persistence/valbonds) dashboard)

{% hint style="info" %}
Eg: As I delegate \~23 XPRT to smart stake validator, i need to check if smart stake validator has enough capacity to help facilitate migrate for my tokens. As in my case the validator has the capacity, we can move forward with the migration process.
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.21.56 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
**Note:** If your validator doesn't have enough capacity, ask your validator to increase it or re-delegate your staked/delegated tokens to a validator which has enough capacity for your tokens.
{% endhint %}

C. Click on '**Actions**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.30.27 AM (1).png" alt=""><figcaption></figcaption></figure>

D. Click on '**Transfer Delegation**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.32.19 AM.png" alt=""><figcaption></figcaption></figure>

E. Enter the amount and your wallet address which you copied in [Step 2](ledger-hardware-wallet.md#lets-start-with-the-migration).

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.34.15 AM.png" alt=""><figcaption></figcaption></figure>

F. There will be 2 transactions, first to 'tokenise' your tokens & then to 'transfer' them to new address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.40.57 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="warning" %}
Note: If the transaction fails due to gas issue, increase the gas to 750000. using the 'Advanced' button.

&#x20;![](<../.gitbook/assets/Screenshot 2023-11-02 at 12.56.03 AM.png>)
{% endhint %}

G. Your staked tokens are now transferred to the 118 coin-type wallet address from 750 coin-type wallet address.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.41.47 AM.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
Repeat these steps again if you have staked with more than 1 validator.
{% endhint %}

### Step 5: Migrate all liquid tokens

A. Claim all the pending rewards from your wallet

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 1.01.42 AM.png" alt=""><figcaption></figcaption></figure>

B. Go to 'Wallet' page and select 'Send'&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-11-02 at 12.59.03 AM.png" alt=""><figcaption></figcaption></figure>

C. Send all the tokens to your new coin-type wallet address which you copied.

### Step 6: Sign into pWallet back with Keplr app

{% hint style="info" %}
Make sure your Ledger wallet is selected in your keplr extention.&#x20;
{% endhint %}

<figure><img src="../.gitbook/assets/Screenshot 2023-11-25 at 3.31.24 PM.png" alt=""><figcaption></figcaption></figure>

A. Go to '**Staking**' tab, select '**Tokenized Shares**' & click on '**Redeem**'

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.51.33 AM.png" alt=""><figcaption></figcaption></figure>

B. Click on '**Redeem Shares**' & Redeem your tokens.

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.53.59 AM.png" alt=""><figcaption></figcaption></figure>

C. Migration done, your staked/delegated tokens will now be visible in the 'Delegated' Section like before.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2023-10-23 at 11.59.20 AM.png" alt=""><figcaption></figcaption></figure>

***

## Step 7: Sit back and Relax! 🎉

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
2. Never share your seed with anyone.&#x20;
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Peristence community chat on Telegram](https://t.me/PersistenceOneChat).&#x20;

</details>

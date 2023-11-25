# Ledger Hardware Wallet

{% hint style="warning" %}
We're revamping this doc. Kindly revisit this page by 11:59 UTC on 25th Nov 2023. \
For urgent queries feel free to contact us on our official channels.&#x20;
{% endhint %}

### TLDR

This guide is for users who use Ledger using Persistence Ledger App & want to migrate their 750 coin-type wallet address to 118 coin-type wallet address.

## How do you use your ledger?

<table><thead><tr><th width="159" align="center">Variation</th><th width="205" align="center">118 Coin-type</th><th align="center">750 Coin-type</th><th width="185">Migration Required?</th><th align="center">Default</th></tr></thead><tbody><tr><td align="center">Keplr + Ledger</td><td align="center">Supported</td><td align="center">Not Supported</td><td>No 🎉</td><td align="center">118 Coin-type</td></tr><tr><td align="center">Persistence App + Ledger</td><td align="center">Not Supported</td><td align="center">Supported</td><td>Yes</td><td align="center">750 Coin-type</td></tr></tbody></table>

<details>

<summary>What do you mean by variation? </summary>

1. Keplr + Ledger

Keplr by default only support 118 coin-type address derivation path for all the addresses generated through keplr since the beginning. Hence if you have always used keplr for your persistence address then you **don't** need wallet migration.&#x20;

2. Persistence App (pWallet) + Ledger

pWALLET by default only support 750 coin-type address derivation path for all the addresses generated through pWALLET since the beginning. Hence if you have always used keplr for your persistence address then you need wallet migration. \
**Note:** As pWALLET only supports 750 coin-type derivation path, so in this migration you'll have to add your ledger wallet in keplr. Steps are mentioned in the next steps.

</details>

{% hint style="info" %}
**Still not sure which coin-type you're using?** This is the simplest method to determine:

If you login into pWALLET using Persistence ledger app, then you're on 750 coin-type wallet address.&#x20;

If you login into pWALLET using cosmos ledger app, then you're on 118 coin-type wallet address.
{% endhint %}

***

### **Pre-Requisite Checklist:**

* [x] You're a ledger user
* [x] You use Persistence Ledger App to login into pWALLET
* [x] Your wallet needs a migration (Check this [section](ledger-hardware-wallet.md#how-do-you-use-your-ledger))
* [x] Using preferred browser (Google Chrome, Brave or Firefox)
* [x] You have [Keplr wallet extension](https://www.keplr.app/) installed

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

### Step 2: Login into pWALLET using cosmos Ledger app







<details>

<summary>⚠️Things to Remember</summary>

1. No one from the persistence team will contact you to help you migrate your tokens.&#x20;
2. Never share your seed with anyone.&#x20;
3. Always make sure that you are using the correct and SSL enabled URL.
4. The only way to contact persistence team is by messaging on the verified [Peristence community chat on Telegram](https://t.me/PersistenceOneChat).&#x20;

</details>

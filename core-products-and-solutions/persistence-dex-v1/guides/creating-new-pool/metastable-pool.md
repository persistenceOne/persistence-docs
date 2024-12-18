---
description: >-
  Best suited for liquid-staked assets such as stkATOM and interest-bearing
  tokens.
---

# 🌀 Metastable Pool

Metastable pool is suited for assets that follow an exchange rate with a base asset, like liquid-staked assets such as stkATOM and interest-bearing tokens. They fix a problem in Stableswap where it assumes a 1:1 ratio between assets, even when their values change. Metastable pools adjust to these changes, keeping trades accurate and helping those who provide liquidity to do so more effectively.

For an in-depth explanation of Metastable Pools by Persistence DEX, [click here](https://app.gitbook.com/o/RFufum3BHCKnxiBseM8n/s/9LsBCKFqnrfW4Kl6Y0k0/deep-dive/pools/metastable-pools).

**How to create Metastable Pool on Persistence DEX.**

* **Step 1:** Go to Pools page. [https://app.persistence.one/pools](https://app.persistence.one/pools)

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FiGuAS27i3I0DN0jZURCS%252Fimage.png%3Falt%3Dmedia%26token%3D7fde86bc-021a-4f63-95d3-0f54889bed25&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=8f2cd3b0b73fd59e7929f21a7b4141b152c756aa68ade4cc482ad8da29cc73fb" alt=""><figcaption></figcaption></figure>

* **Step 2:** Click "Create New Pool" button.

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FlpaUhLQLy6WySmiXMuzy%252Fimage.png%3Falt%3Dmedia%26token%3D77413c32-de89-46fd-b58c-b4de3013427d&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=49174f8b96d567af60dcbf854c3ac1449704b79fa1ac32974d673b2baeafff36" alt=""><figcaption></figcaption></figure>

* **Step 3:** Choose Pool Type - in this case, Metastable Pool is selected as the preferred pool type.

{% hint style="info" %}
You will need 250 XPRT to create the pool and 3500 XPRT as a proposal deposit for the governance proposal.
{% endhint %}

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FjrSJCDlcKIPyHAq0i6cm%252Fimage.png%3Falt%3Dmedia%26token%3D25ad86d5-dddd-4fd5-a3ee-c52c9bcdc6b5&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=e04948c1f814bbd5db462de35b58126331c980fbcb601641f2d1eb394b8dc0ae" alt=""><figcaption></figcaption></figure>

* **Step 4:** Select Token Pair for Metastable Pool.

{% hint style="info" %}
Minimum of 2 tokens will need to be selected in order to Create a New Pool.
{% endhint %}

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FhPi6jEV1bdk9qpefQgj5%252FScreenshot%25202023-12-20%2520at%252011.47.52%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D19b0d10a-fe11-425b-b128-6feb987bc967&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=7c1b922497f6d06f85b84230d4dab0983b24abaab98a4c978122db223e11866a" alt=""><figcaption></figcaption></figure>

* **Step 5:** Assign token weight and repeat until all tokens have been added; ensure weights add to 100%

{% hint style="info" %}
The default settings for Swap Fee, AMP Factor, and Max Spread Limit follow protocol recommendations but can be modified to align with your preferences.

Scaling factor adjustment: Kindly contact the Persistence DEX team on [discord](https://discord.persistence.one) in order to adjust the scaling factor
{% endhint %}

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FEx8xYg53ZAXuxqTA5yc1%252FScreenshot%25202023-12-20%2520at%252011.54.35%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3Dc920047f-cfb8-4f06-84dd-8e80827c600f&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=2a4d5e78f3c9c090c92a98750a3cbdf82af2dbb0fedbf935ea40ebb01c52f12a" alt=""><figcaption></figcaption></figure>

* _**\[Optional]**_**&#x20;Step 6:** Add Liquidity by entering a >0 amount of each token to add liquidity to the pool upon creation.

{% hint style="info" %}
If there's an insufficient balance for any assets, users can deposit those assets first and then proceed to add liquidity to the pool during its creation. Persistence DEX recommends bootstrapping the liquidity with a minimum of $1,000 in the ratio selected.
{% endhint %}

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FFLbGoK4eo4f5M24lFp6l%252FScreenshot%25202023-12-20%2520at%252011.58.08%25E2%2580%25AFAM.png%3Falt%3Dmedia%26token%3D134d0f63-6469-4b81-804b-f74452bce5d1&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=8a8e5275031034ef217e1f111574363f169e3b575dff4eedc141505e75d6fb0c" alt=""><figcaption></figcaption></figure>

* _**\[Optional]**_**&#x20;Step 7:** Set Pool Rewards Schedule by selecting reward token and amount, and rewards time period.

{% hint style="info" %}
Setting up the rewards schedule is optional and can be done post pool creation. To set a rewards schedule for the pool, click this link.

If there's an insufficient balance for any assets, users can deposit those assets first and then proceed to add liquidity to the pool during its creation.
{% endhint %}

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Ftx77rzt49Fb1n7QmSWUh%252FScreenshot%25202023-12-20%2520at%252012.03.02%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D4d6e6dfa-bfd1-421b-914b-8d24ec4e496c&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=888ee6e1e0a3cffb0bd022b3d6f8fd2e6fd1948157f0b18f0f09ece8688ca981" alt=""><figcaption></figcaption></figure>

* **Step 8:** Confirm Pool and Fee Summary Details

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252FeFHnQrf4nLE64eOaf3Vq%252FScreenshot%25202023-12-20%2520at%252012.15.12%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3D66949068-46e5-4755-b773-0d3193a7cb9a&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=19b418f064f5548a1260d99e2f58d3a8ddad4474840b4b1675eac9ecdf140bf9" alt=""><figcaption></figcaption></figure>

* **Step 9:** Create Proposal for setting up the Metastable Pool. Title and Description for the proposal are pre defined as per the pool details. Additional information, if necessary, can be included within the additional message text box.

{% hint style="info" %}
To create the proposal following Persistence Governance norms, a Proposal Deposit of 3,500 XPRT and Pool Creation Fee of 250 XPRT is required.
{% endhint %}

<figure><img src="https://docs.dexter.zone/~gitbook/image?url=https%3A%2F%2F2753824657-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F9LsBCKFqnrfW4Kl6Y0k0%252Fuploads%252Fedx0KqHLYmgzTyl5T4q5%252FScreenshot%25202023-12-20%2520at%252012.17.15%25E2%2580%25AFPM.png%3Falt%3Dmedia%26token%3Dcf47bdd7-cb64-43f6-aaba-9816231b4db3&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=32ffacbff81bf337fad87a3e1888c4e60dfb93b32b81f8de3cffd39bd55ceaa4" alt=""><figcaption></figcaption></figure>

* **Step 10:** Continue to approve the transaction with the connected wallet.

🥳 Congratulations! You have created a Metastable Pool with your preferred tokens, a confirmation message would be displayed in the bottom right.

Proposal is created and upon approval from the Persistence Governance, the pool will be created and accessible on the UI.

{% hint style="info" %}
If you need any additional support, please raise a ticket [on our Discord server](https://discord.persistence.one), and the Persistence DEX Team will be available to help.
{% endhint %}

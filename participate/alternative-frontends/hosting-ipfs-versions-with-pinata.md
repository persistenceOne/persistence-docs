---
description: >-
  Hosting a website/DApp frontend on IPFS grants several benefits, such as
  serverless hosting, potential resilience to DNS hijacks (together with
  IPNS/ENS), and high uptime.
---

# Hosting IPFS Versions with Pinata

This guide provides step-by-step instructions for community members or Validators to pin and host IPFS versions of the frontends for Persistence products on their respective domains. The example uses Pinata as the pinning service and Cloudflare for DNS management.

### 1. Configuring Pinata

#### 1.1 Obtain CID from Release Notes

From the release notes in the respective frontend GitHub repositories, find CIDv0 and CIDv1. If the repository is private, contact us for the latest CIDs. Example: For pWallet, retrieve CIDs from the [latest release notes](https://github.com/persistenceOne/persistenceWallet/releases).

#### 1.2 Pinning on Pinata

1. Go to [Pinata](https://app.pinata.cloud/pinmanager) and click on "Pin by CID."

<figure><img src="../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

2. Enter CIDv0 in the IPFS CID field and use the release name and version in the name field.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

3. After successful pinning, navigate to the Gateways Tab.
4. Add a custom domain to the gateway (e.g., ipfs.\<your\_validator\_domain>.\<top\_level\_domain>).

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
**Note:** A paid plan (Picnic plan) on Pinata will be required.
{% endhint %}

#### 1.3 Configure DNS on Pinata

1. Click on Domain Info and note the Pinata domain that will be hosted under your domain provider.

<figure><img src="../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

### 2. Configuring DNS Provider (e.g., Cloudflare)

#### 2.1 Set Up Domain URLs

Host the latest hashes for Persistence products under your domain, such as:

* _https://ipfs.\<your\_validator\_domain>.\<top\_level\_domain>/pwallet_
* _https://ipfs.\<your\_validator\_domain>.\<top\_level\_domain>/pstake_
* _https://ipfs.\<your\_validator\_domain>.\<top\_level\_domain>/dexter_

Example: [https://ipfs.kitkat.zone/pwallet](https://ipfs.kitkat.zone/pwallet), [https://ipfs.kitkat.zone/pstake](https://ipfs.kitkat.zone/pstake), [https://ipfs.kitkat.zone/dexter](https://ipfs.kitkat.zone/dexter)

#### 2.2 Create CNAME Record

1. Create a CNAME record pointing to the custom domain created in Pinata (as per step 1.3).
   * Example: _ipfs.\<your\_validator\_domain>.\<top\_level\_domain>_

#### 2.3 Configure Transform Rules on Cloudflare

1. Use a transform rule to configure a constant URL per product under your hosted domain.
2.  Example: For Cloudflare, add a rule in the Rules section:

    ```plaintext
    (starts_with(http.request.full_uri, "https://ipfs.<your_validator_domain>.<top_level_domain>/pwallet")
    ```

    This rule redirects users to the latest pinned deployment for pWallet.

#### 2.4 Note

* Whenever a new app version is released, pin the latest CIDs and update transform rules.
* Release notes on GitHub will be updated with respective CIDs, ensuring users access the latest app release.
* Automate the process by triggering a CI process for pinning CIDs and linking them to your domains when a new release is available.

### 3. Latest Hashes

{% hint style="success" %}
**Last Updated**: 1 May, 2024
{% endhint %}

#### pWALLET ([https://wallet.persistence.one/](https://wallet.persistence.one/))

* CIDv0: QmbGeud9uMjUQH1makvoJngoSwofHZzRJUrz5xush1xxsF
* CIDv1: bafybeigaehknfid4v6rtugaf7qh7kdibhglvpxl4kttb5hq7jeutjbetgy
* Public Gateways:
  * [CF-IPFS](https://bafybeigaehknfid4v6rtugaf7qh7kdibhglvpxl4kttb5hq7jeutjbetgy.ipfs.cf-ipfs.com/)
  * [DWeb Link](https://bafybeigaehknfid4v6rtugaf7qh7kdibhglvpxl4kttb5hq7jeutjbetgy.ipfs.dweb.link/)

{% hint style="success" %}
**Last Updated**: 28 May, 2024
{% endhint %}

#### pSTAKE ([https://app.pstake.finance/](https://app.pstake.finance/))

* CIDv0: QmUbzAhEppB5vJknKJiSTidtqair8TMxhQLva6sQzwF5Cq
* CIDv1: bafybeic5cpk5yoyor64oar5nyd5uhkg5nvt7bfo6vzkovjncdo7o7mypfy
* Public Gateways:
  * [CF-IPFS](https://bafybeic5cpk5yoyor64oar5nyd5uhkg5nvt7bfo6vzkovjncdo7o7mypfy.ipfs.cf-ipfs.com/)
  * [DWeb Link](https://bafybeic5cpk5yoyor64oar5nyd5uhkg5nvt7bfo6vzkovjncdo7o7mypfy.ipfs.dweb.link/)

{% hint style="success" %}
**Last Updated**: 4 June, 2024
{% endhint %}

#### Dexter ([https://app.dexter.zone/](https://app.dexter.zone/))

* CIDv0: QmXPVirjD73FGbnC1CwLCGM4Upxq35DafhDonA6HN4Huyp
* CIDv1: bafybeiegopbvs3sfovnyknev55j7wjxfbjsrnuqt7ffnzw7idixca3dtp4
* Public Gateways:
  * [CF-IPFS](https://bafybeiegopbvs3sfovnyknev55j7wjxfbjsrnuqt7ffnzw7idixca3dtp4.ipfs.cf-ipfs.com/)
  * [DWeb Link](https://bafybeiegopbvs3sfovnyknev55j7wjxfbjsrnuqt7ffnzw7idixca3dtp4.ipfs.dweb.link/)

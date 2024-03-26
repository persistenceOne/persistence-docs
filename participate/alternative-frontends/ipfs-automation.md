# IPFS Automation

This guide has instructions to set up workflow which will run automatically to pin the latest hashes and create/update the transform rules set in Cloudflare whenever new version releases will be published across all apps.

### Releases:

* _**pWallet**_ - [https://github.com/persistenceOne/persistenceWallet](https://github.com/persistenceOne/persistenceWallet)
* _**pStake**_ - [https://github.com/persistenceOne/pstake-frontend-releases/releases](https://github.com/persistenceOne/pstake-frontend-releases/releases)
* _**Dexter**_ - [https://github.com/dexter-zone/dexter-frontend-releases/releases](https://github.com/dexter-zone/dexter-frontend-releases/releases)

***

### Workflow setup

#### **Step 1: Clone the repository -** [**https://github.com/kitkatfund/ipfs-auto-deploy**](https://github.com/kitkatfund/ipfs-auto-deploy)&#x20;

#### **Step 2:** Install the dependencies with [`npm install`](#user-content-fn-1)[^1]

#### Step 3: Copy the _.env.sample_ file and rename it to _.env_&#x20;

1. Set the correct value for \`**MONGO\_URI**\`. You can use any MongoDB instance, including one inside a self-hosted container. If you don't have a MongoDB instance, you can use the free tier of \[[MongoDB Atlas](https://www.mongodb.com/atlas/database)] as shown in the image below. Copy the URI marked by the arrow:

<figure><img src="https://lh7-us.googleusercontent.com/a36eUV6IdvcgNSPBiKygMxe-2tnnjWDyBsGlSR3iY7N57tFAznzSurDv8bHnaKTr8pAF7B3k6h7OQreJ9g95PN_EdzrpvUP75Lm827VPNIQRvfKYDeq2JO_WQrTR64lgwE3zUXUNA1sCTNrZRI3tld8" alt="" width="563"><figcaption></figcaption></figure>

2. [Obtain your PINATA\_JWT](https://app.pinata.cloud/developers/api-keys) Token and set it in the .env file. Make sure to have the pinByHash and unpin permission enabled.
3. [Obtain your GITHUB\_AUTH\_TOKEN](https://github.com/settings/tokens?type=beta) and set it in the .env file. No permissions are required if only fetching releases from public repositories.
4. [Obtain your CLOUDFLARE\_API\_TOKEN](https://dash.cloudflare.com/profile/api-tokens) and set it in the .env file. Make sure to have the Zone.Transform Rules permissions for the API Token as shown in the image below.
   1. Account -> Account Rulesets -> Read&#x20;
   2. Zone -> Transform Rules -> Read
   3. Zone -> Transform Rules -> Edit

<figure><img src="../../.gitbook/assets/Screenshot 2024-03-26 at 2.39.14 PM.png" alt=""><figcaption></figcaption></figure>

#### Step 4: [Create a Telegram Bot](https://core.telegram.org/bots#how-do-i-create-a-bot) for deployment notifications.

1. Set the _TELEGRAM\_BOT\_TOKEN_ in the `.env` file
2. Ensure to assign Group Admin Rights and Channel Admin Rights to the created bot using BotFather
3. Create a new group, add your new bot to it, make it the group admin. Find out the chat ID of the group by checking [https://web.telegram.org/a/](https://web.telegram.org/a/) and selecting the group. The chat ID will be in the URL, it usually starts with -100 for groups that have bot admins. Set the _TELEGRAM\_CHAT\_ID_ in the .env file.

#### Step 5: [Create a new Cloudflare Transform Rule](https://developers.cloudflare.com/rules/transform/url-rewrite/create-dashboard/) for each of the apps you want to pin.

{% hint style="info" %}
#### Ignore this step if you already have transform rules setup for the IPFS apps.&#x20;
{% endhint %}

The rules can have any values for now as our application will fix them for us. We just need to do this for the Rule ID to be available in the next step.

#### Step 6: Copy the `src/utils/config.sample.ts` file and rename it to `src/utils/config.ts`

1. Add the _**appUUID**, **transformedURL**, **transformedURL**_** inside **_**cloudflareRuleExpression**_, _**cloudflareZoneId**, **cloudflareRulesetId**_ and _**cloudflareRuleId**_ for each of the apps. You can obtain the _**cloudflareZoneId**_ by following the instructions in the [Cloudflare documentation](https://developers.cloudflare.com/fundamentals/setup/find-account-and-zone-ids/). \
   \
   The **cloudflareRulesetId** and **cloudflareRuleId** can be obtained by following the instructions on [this page](https://developers.cloudflare.com/ruleset-engine/rulesets-api/view/).\

2. Get your rulesetId querying the below URL and search for the object with phase: http\_request\_transform and copy that rulesetId. This becomes your cloudflareRulesetId.

`curl https://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets \ --header "Authorization: Bearer <API_TOKEN>"`

3. Now use this **cloudflareRulesetId** to query the below URL and get the respective **cloudflareRuleId** for individual transform rules and update it in `src/utils/config.ts`

`curlhttps://api.cloudflare.com/client/v4/zones/{zone_id}/rulesets`\
`/{ruleset_id} \ --header "Authorization: Bearer <API_TOKEN>"`

#### Step 7: Please modify the appUUID, transformedURL, transformedURL inside cloudflareRuleExpression, cloudflareZoneId, cloudflareRulesetId and cloudflareRuleId as mentioned above and depending on your config.

<figure><img src="https://lh7-us.googleusercontent.com/HSeKn-O1mHK6HHZUXnqkl2UUbNLlrBDF9YzkDMGAyqh3Nicwqtqmu0N-wv3Ef5SffaoesRhZBJ6j5TScL8xzSrJT3QZ3FmMMHvdff6bC3Ce-nrVWyQpeKwn4dMqq5jYEhsjGcNCYtahbKAtdhAUYnuk" alt="" width="563"><figcaption><p>Example for <strong><code>src/utils/config.ts</code></strong></p></figcaption></figure>

#### Step 8: Deploy with a method of your choice, just like any backend application, Dockerfile is included.

[^1]: 

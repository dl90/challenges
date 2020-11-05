# Mailchimp Foundations

* CRM: manage customer relationships, collect audience data

---

## Organize

### tags

* recommended to use tags and segments on master audience, unless they are distinct (B2B vs B2C)
* top 5 tags shown on audience dashboard
* tags: labels based on what you know about the customer
  * campaigns can target by tags
  * automate campaigns based on/trigger by tags
  * identify source of new contact (specific campaign landing page)

### groups

categories that the contact selects themselves, by interest or preference

* only subscribed contacts can add groups, but unsubscribed contacts will keep their group designation
* create audience group category 'Students': Freshmen, Sophomore, Junior, Senior
* on sign-up form or update profile form, or assign manually
* send new campaign to ask audience to choose their group

### segments

helps filter/group contacts for personalize, relevant campaigns

broken down to **behavior** (interaction) and **traits** (characteristics)

* define segments widely
* use multiple channels (email, ads, landing page)

#### advanced segmentation

* unlimited conditions (basic max 5 conditions)
* can combine with any/all logic (or/and condition)
* ignores blank fields (null)
* not available to automated campaigns

```text
speak directly to your London subscribers
who attended a conference in the past year and
have made 1 or more purchases in the past 6 months;
offering them a truly personalized message.
```

---

## Personalize

### audience dashboard

* recent growth: shows audience growth and source in the last 30 days (and subscribers/non-subscribers)
* tags: 5 most commonly used tags with the number of contacts under each tag
* lifetime value, purchase likelihood
  * needs history of transactions to be enabled
  * based on individual customer purchase history, norm trends, and predictive modeling
* email marketing engagement: % of subscribed contacts, often, sometimes, rarely
* top locations: mailchimp sign-up/landing page/email campaigns collect location data

### contact profiles

* detailed info about the contact, predicted demographics, engagement level, activity feed, purchase history, etc
* mailchimp offers integration with third parties (e-commerce, event, social) to gather more data

### merge tags

* replaces tags with customers info for personalized emails etc
* can set default value if info is missing
* conditional merge tags

### analytics

* descriptive: see whats happening in the campaign
* diagnostic: why this happened (A/B, multivariate testing)
* predictive: forecast based on previous data (customer lifetime value, purchase likelihood, predicted demographics)
* prescriptive: recommendations to optimize (product recommendations, send time optimization)

### predictive demographics

* address finder: matches emails with address from mailchimp's database, used in postcard campaign, may be limited in countries affected by GDPR
* predictive demographics: infer age/gender based on mailchimp data from around the world

---

## Market

* multi channel: email, ads, landing pages, post cards

### email

* identify audience (segments, groups, tags, analytics)
* establish reason (nurture, promote, re-engage) but consider frequency
* craft message based on audience expectations

#### best practices

* target content: focus message, concise, hierarchy structured
* call to action: clear, set expectations (what audience expects), test and iterate
* imagery: branding assets (on-brand assets), image sizing

#### deliverability

ISP can throttle sending rate if it detects a certain quota of bounces

* hard bounce: email doesn't exist or is blocked from delivery, auto cleared from audience
* soft bounce: email full, server down, email too large

#### compliance

* GDPR: European, contacts understand what data is being collected and how its used
* CAN-SPAM: $11,000 per offence
* CASL: Canadian

### social

* centralizes posting to facebook, twitter, instagram and viewing reports
* social cards can be customized (campaign url appearance when shared on social media)

### digital ads

* audience: segments
* budget: audience size and budget
* ads may be rejected by facebook/instagram/twitter depending their internal review, but can be edited/resubmitted
* retargeting ads: targets users who visited the site to revisit/purchase
  * uses cookies to display add when they are on another site

### postcards

* can be sent to contacts even if you don't have their address info through address finder
* types: 1 time, reoccurring (1, 3, 6 months), abandon cart
* lookalike audience: people similar to your existing contacts but not on list

### landing pages

* mailchimp offers 3 types: product promo, grow audience, accepting payment
* can add tags to leads generated from landing pages

### automation

* post-send action: automated action after sending an email
* can base automation on user actions **in app** (create custom automation's using [API](https://mailchimp.com/developer/guides/marketing-api-conventions/))
* choosing in app events:
  * what info do you need for marketing (segments, location, age, device)
  * which key events do you want to track/trigger
  * what measurable parameters are important (10% of all users...)
* automation branches: segmenting automation flow based on events
* automation reports can be used to analyze and adjust

### content studio

* 1MB images
* can link with instagram/product page to fetch images

---

## Optimize

### reports

```text
mail open rates:

mailchimp loads a tiny, invisible image into each email, then count how often the image is loaded. Occasionally, this can lead to the email not registering as opened—like if a subscriber’s email client has images turned off. However, in a case like that, we can still track opens if that subscriber clicks on a link inside your campaign.
```

* reports can be shared
* email reports
  * regular: statistics
  * automation: statistics bout series subscribers
  * comparative: cross campaign
* landing page reports
* social post reports: Facebook and Instagram
* digital ad reports: Google, Facebook/Instagram ads
* comparative reports allow for snapshots to capture statics at particular time across all campaigns

### smart recommendations

* tips Mailchimp offers: lookalike audience finder, send time optimization

### A/B multivariate testing

* A/B: assess a particular variable
* multivariate: bigger picture of whats working/not
* A/B strategy:
  * analyze existing data, identify
  * hypothesize improvements
  * test and analyze test data
* common indicators of success:
  * open rate (2h)
  * click rate (1h)
  * revenue (12h)
* increase accuracy:
  * larger audience
  * use comparative reports
  * minimize variables
  * allow appropriate time
  * set relevant metrics
* instances to consider testing
  * audience growth
  * business changes
  * audience engagement changes
* segment audience based on test results to provide more preferred/customized marketing

### customer lifetime value, purchase likelihood

* makes predictions based on pas customer purchase data (predictive analytics)
* need online store to be connected and purchase volume before data is available
* categorized: 'low', 'moderate', 'high', note: new customers within 30 days are labeled 'new'
* determining variables:
  * how long the contact has been a customer
  * time between first and most recent purchase
  * time since last purchase
  * frequency of purchases
  * amount spend (CLV only)
* can use CLV and purchase likelihood with Mailchimp's lookalike audience finder

### send time optimization, lookalike audience finder, product recommendations

* prescriptive analytics: right people, right products, right time
* Mailchimp evaluates best send time for your audience based on how they interacted with email campaigns from other Mailchimp users
* only need 75 contacts in a segment to use lookalike audience finder
* use segments from CLV and purchase likelihood from clean lists to generate bets lookalike audiences
* can see the top 5 recommended products to an audience on their profile
* to preview product recommendations, enable live merge tags while in preview mode
* include product recommendations block in abandon cart emails (or use it in all emails)
* product recommendations requirements:
  * 10 store products
  * 50 purchase customers
  * 500 orders last year

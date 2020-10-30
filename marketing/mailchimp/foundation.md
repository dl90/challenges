# mailchimp foundations

* CRM: manage customer relationships, collect audience data

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

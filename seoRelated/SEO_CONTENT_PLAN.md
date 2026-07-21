# SmartWhip.org.uk SEO Content and Page Plan

## Objective

Increase qualified organic clicks by fixing conflicting technical SEO signals and creating useful pages for the search intents already producing impressions in Google Search Console.

The strongest opportunities in the current query export are:

| Keyword cluster | Impressions | Clicks | CTR |
|---|---:|---:|---:|
| Product type: canister, tank, cylinder | 3,232 | 68 | 2.10% |
| Informational: “What is SmartWhip?” | 1,859 | 3 | 0.16% |
| Wholesale, bulk, pallet and crate | 1,688 | 59 | 3.50% |
| 2kg SmartWhip | 1,190 | 18 | 1.51% |
| Local and delivery searches | 844 | 79 | 9.36% |

Source: `Queries.csv` in the project workspace.

## 1. Fix Technical SEO Before Publishing New Pages

Complete these changes first. Otherwise, Google may assign the SEO value of new pages to the wrong domain.

- Change every canonical from `https://smart-whip.shop/...` to the exact corresponding `https://www.smartwhip.org.uk/...` URL.
- Change every `og:url` to the exact `https://www.smartwhip.org.uk/...` URL.
- Use one self-referencing canonical on every indexable page.
- Change the robots sitemap declaration to:

```text
Sitemap: https://www.smartwhip.org.uk/sitemap.xml
```

- Generate every sitemap URL using `https://www.smartwhip.org.uk`, including `www`.
- Permanently redirect all non-`www` URLs to `www` using HTTP 301 or 308, not temporary 307.
- Permanently redirect HTTP URLs to their HTTPS `www` equivalents.
- Ensure every indexable page:
  - Returns HTTP 200.
  - Has a unique title.
  - Has one clear H1.
  - Has a unique meta description.
  - Has a self-referencing canonical.
  - Is internally linked.
  - Is included in the XML sitemap.
- After deployment, submit the corrected sitemap in Google Search Console (to me done by me).
- Request indexing for the homepage and the five priority pages(to me done by me).

Reference: [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/canonicalization).

## 2. Recommended Website Architecture

Use one authoritative page for each distinct search intent.

```text
/
├── /smartwhip-canisters
├── /smartwhip-2kg
├── /smartwhip-wholesale
├── /guides/what-is-smartwhip
├── /delivery
├── /brands/fastgas
├── /brands/cream-deluxe
└── /towns/[genuine-service-location]
```

Do not create separate pages for “SmartWhip tank,” “SmartWhip cylinder,” “SmartWhip bottle” and “SmartWhip canister.” They represent the same search intent and should be served by one strong page.

## 3. Homepage Rewrite

### Target keywords

- smartwhip
- smart whip
- smart whips
- smartwhip UK
- smartwhips UK
- buy smartwhip

### Metadata

**Title**

```text
SmartWhip UK | 640g & 2kg Culinary Cream Chargers
```

**H1**

```text
SmartWhip Cream Chargers in the UK
```

**Meta description**

```text
Shop genuine SmartWhip 640g and 2kg culinary cream chargers in the UK. View current prices, wholesale options, delivery coverage and product information.
```

Only mention delivery times, prices, availability or guarantees when they are accurate and can be maintained which in this case is under 25 minutes for most deliveries.

### Homepage content structure

#### Opening paragraph

Write 70–100 words that:

- Explain exactly what the business sells.
- State that products are intended for legitimate culinary and catering applications.
- Mention the 640g and 2kg options.
- Link to the canisters and wholesale pages.

#### Shop by size

- Add a 640g product card.
- Add a 2kg product card.
- Show actual price and availability.
- Link each card to its proper product page.

#### SmartWhip for professional catering

- Explain legitimate culinary applications.
- Describe product benefits supported by manufacturer documentation.
- Avoid vague claims about power, purity or superiority.

#### Wholesale cases and pallets

- Summarise case, crate and pallet availability.
- Bulk
- Link to `/smartwhip-wholesale`.

#### UK delivery coverage

- Explain how dispatch and delivery work. (orders are made on whatsapp,email,telegram, after the order is completed it si then delivered)
- Link to `/delivery`.
- Most deliveries within 25 minutes across the entire UK.

#### Buying information

Include:

- Payment methods Usualy Paypal(buyers protection),Revolut,Crypto.
- Delivery charges(Free delivery for most locations).
- Returns information(Vlaid returns and refunds under 48 hours).
- Business identity and contact details.

#### Frequently asked questions

- What SmartWhip sizes are available?
- Do you sell individual cylinders and cases?
- Where do you deliver?
- Is wholesale pricing available?
- What equipment is required? (non becase nozzles are already included in the order)

#### Educational link

Add a prominent link using wording such as:

```text
New to the product? Read our guide: What is SmartWhip?
```

## 4. Create `/guides/what-is-smartwhip`

This is the largest content opportunity. Informational searches produced approximately 1,859 impressions but only three clicks.

### Target keywords

**Primary keywords**

- what is SmartWhip
- what is a SmartWhip
- what is Smart Whip

**Secondary keywords**

- what are SmartWhips
- what is in SmartWhip
- SmartWhip meaning
- what is SmartWhip used for
- SmartWhip sizes
- how SmartWhip works
- When taken directly how does it make one High?

### Metadata

**Title**

```text
What Is SmartWhip? Culinary Uses, Sizes & Safety Guide
```

**H1**

```text
What Is SmartWhip?
```

**Meta description**

```text
Learn what SmartWhip is, its legitimate culinary uses, available cylinder sizes, required equipment, storage guidance and important UK safety information.
```

### Content length

Aim for approximately 1,000–1,500 useful words. Do not add filler solely to reach a word count.

### Opening answer

Answer the question immediately in 40–60 words. Suggested starting point:

> SmartWhip is a brand of large-capacity nitrous oxide cylinders designed for legitimate culinary applications, including use with compatible cream-whipping equipment. Cylinders are available in different capacities, including 640g and 2kg options, for professional kitchens, caterers and appropriate domestic culinary use.

Verify all product details against genuine manufacturer documentation before publication.

### Required sections

```text
H2: What is SmartWhip used for?
H2: What is inside a SmartWhip cylinder?
H2: What SmartWhip sizes are available?
H2: 640g vs 2kg SmartWhip
H2: What equipment is required?
H2: How should cylinders be stored?
H2: Responsible and lawful use in the UK
H2: Frequently asked questions
```

The page should:

- Explain legitimate culinary use clearly.
- Include an original 640g-versus-2kg comparison table.
- Explain that compatibility depends on the regulator and equipment specification.
- Include manufacturer-approved storage, transport and disposal guidance.
- Link to `/smartwhip-canisters` and `/smartwhip-2kg`.
- Cite the manufacturer’s product documentation or safety data sheet.
- include how recreational inhalation or unsafe uses of smartwhip and what is causes.

Also target “SmartWhip balloons” or recreational-inhalation keywords. And thenin the page state UK guidience on such.

Reference: [GOV.UK nitrous oxide guidance](https://www.gov.uk/government/publications/nitrous-oxide-ban/nitrous-oxide-ban-guidance).

## 5. Create `/smartwhip-canisters`

This page should own the canister, tank, cylinder and bottle keyword variations.

### Target keywords

**Primary keywords**

- SmartWhip canister
- SmartWhip canisters
- Smart Whip canisters

**Secondary keywords**

- SmartWhip tank
- SmartWhip cylinder
- SmartWhip bottle
- SmartWhip gas canister
- large SmartWhip canister
- SmartWhip canisters UK

### Metadata

**Title**

```text
SmartWhip Canisters UK | 640g & 2kg Culinary N2O
```

**H1**

```text
SmartWhip Canisters: 640g and 2kg Options
```

**Meta description**

```text
Compare genuine SmartWhip 640g and 2kg culinary N2O canisters. Check current UK prices, stock, equipment compatibility, delivery and wholesale options.
```

### Required sections

```text
H2: Available SmartWhip canister sizes
H2: Compare 640g and 2kg cylinders
H2: What is included with your order?
H2: Equipment and regulator compatibility
H2: Product specifications and certification
H2: Current prices and availability
H2: Delivery and collection
H2: Wholesale cases and pallets
H2: Storage and safety information
H2: Frequently asked questions
```

### Required page information

- Original product photographs.
- Actual dimensions and weight.
- Manufacturer and model identifiers.
- What is and is not included.
- Accurate stock status(In stock).
- Individual and case prices.
- Regulator and equipment requirements.
- Verified purity and certification information.
- Delivery charges and realistic timeframes.
- Links to the 2kg, wholesale and delivery pages.
- For recreational Use how many ballons a single can usualy fills 

Do not repeat “SmartWhip canister” unnaturally. Use normal alternatives such as “cylinder,” “product,” “size” and “option.”

## 6. Create `/smartwhip-2kg`

### Target keywords

**Primary keywords**

- 2kg SmartWhip
- 2kg Smart Whip
- SmartWhip 2kg

**Secondary keywords**

- 2kg SmartWhips
- 2kg culinary cream charger
- SmartWhip 2kg UK
- buy 2kg SmartWhip
- 2kg SmartWhip wholesale

### Metadata

**Title**

```text
2kg SmartWhip Culinary Cream Charger | UK Delivery
```

**H1**

```text
2kg SmartWhip Culinary Cream Charger
```

**Meta description**

```text
View the 2kg SmartWhip cylinder, including current price, availability, specifications, compatible equipment, UK delivery and wholesale purchasing options.
```

### Required sections

```text
H2: 2kg SmartWhip product overview
H2: Who is the 2kg option suitable for?
H2: Product specifications
H2: Required equipment and compatibility
H2: 2kg versus 640g SmartWhip
H2: Price, stock and purchasing options
H2: Delivery information
H2: Storage, handling and disposal
H2: Frequently asked questions
```

### Required page information

- Exact 2kg specifications.
- Appropriate commercial kitchen and catering use cases.
- Verified compatibility information.
- Everything included with the order.
- Single-unit, case and wholesale availability.
- A useful comparison against the 640g option.
- Original product photography.
- Accurate safety information.

Do not invent serving counts, yields or output capacity. Publish them only when supported by manufacturer specifications or documented testing.

## 7. Create `/smartwhip-wholesale`

### Target keywords

**Primary keywords**

- SmartWhip wholesale
- SmartWhip wholesale UK
- wholesale SmartWhip

**Secondary keywords**

- SmartWhip bulk
- SmartWhip pallet
- SmartWhip crates
- SmartWhip cases
- bulk SmartWhip UK
- SmartWhip wholesale pallets

### Metadata

**Title**

```text
SmartWhip Wholesale UK | Cases, Crates & Pallets
```

**H1**

```text
SmartWhip Wholesale Cases and Pallets
```

**Meta description**

```text
Request UK wholesale pricing for SmartWhip cases, crates and pallets. View quantities, product sizes, delivery coverage, lead times and business ordering information.
```

### Required sections

```text
H2: SmartWhip wholesale products
H2: Case, crate and pallet quantities
H2: Wholesale price tiers
H2: Minimum order quantities
H2: UK delivery and lead times
H2: Business verification and responsible supply
H2: Invoices, VAT and payment
H2: How to request a wholesale quote
H2: Frequently asked questions
```

### Required commercial information

- Units per case (6x).
- Cases per pallet(84x).
- Minimum order quantity(2x).
- Genuine price tiers, where stable.
- Whether prices include VAT.
- Delivery regions and charges.
- Normal lead times.
- Current stock availability.
- Required buyer verification.
- Returns and damaged-goods process.
- Telephone, email and legal business identity.

The page should provide useful information before asking the visitor to contact the company. Do not make the only page action an immediate WhatsApp or Telegram redirect.

## 8. Create `/delivery`

### Target keywords

- SmartWhip delivery
- SmartWhip delivery UK
- SmartWhip near me
- local SmartWhip delivery
- SmartWhip London
- SmartWhip Manchester
- SmartWhip Birmingham
- do this for 20 uk towns

### Metadata

**Title**

```text
SmartWhip Delivery Areas | UK Coverage & Times
```

**H1**

```text
SmartWhip UK Delivery Coverage
```

**Meta description**

```text
Check SmartWhip delivery coverage, dispatch times, charges and ordering cutoffs for local courier, same-day and national UK delivery services.
```

### Required content

- Explain national and local delivery separately.
- Publish actual dispatch days and cutoff times.
- Publish delivery prices or explain how they are calculated.
- State realistic delivery ranges.
- List genuine postcodes or regions served.
- Explain collection arrangements, if available.
- Explain age, identity or business-verification requirements.
- Explain the failed-delivery process.
- Explain whether tracking is available.
- Link to genuine city pages.

usualy under 25mins  “UK delivery in 25 minutes.” Clearly distinguish:

- Local courier delivery.
- Same-day delivery.
- Next-day national shipping.

## 9. Town and City Page Policy

Do not create hundreds of pages with the same text and only a different city name. Google identifies pages targeting many cities with substantially similar content as potential doorway abuse.

Reference: [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

Keep a city page only when the business genuinely provides a distinct local service there.

### Priority local targets

Based on the available query and page data, review these locations first:

- London
- Manchester
- Birmingham
- Nottingham
- Glasgow
- Liverpool
- Bristol
- Islington
- Bournville
- St Helens

### Required structure for every retained city page

```text
H1: SmartWhip Delivery in [City]
H2: Products available in [City]
H2: Delivery areas and postcodes
H2: Ordering cutoff times
H2: Delivery fees
H2: Same-day and scheduled delivery
H2: Collection information
H2: Local ordering questions
```

### Required local information

- Postcodes genuinely served.
- Accurate service hours.
- Real delivery fees and timeframes.
- Whether the service uses a local location or an external courier.
- City-specific stock or availability information.
- City-specific customer-service details where applicable.
- Links to the delivery, canisters and 2kg pages.

## 10. Optional Brand Pages

Create these pages 

```text
/brands/fastgas
/brands/cream-deluxe
```

Every brand page should include:

- Models and sizes actually available.
- Current price and stock.
- Manufacturer specifications.
- Compatible equipment.
- Delivery options.
- Original product photography.
- A factual comparison with SmartWhip where useful.
- Safety and storage documentation.


## 11. Correct Existing Wording and Claims

correct current errors and questionable claims, including:

- “Crake, Flake.”
- “Smartwhip c.”
- Broken footer text such as “SmartWh NOTTINGHAM HUB.”
- “Medical quality.”
- “UK’s #1 supplier.”
- “TUV Certified.
- “24/7 availability.”
- “Local hub” and “local team.”

Retain a claim only when it is accurate, consistently true and supported by evidence.

## 12. Trust and Business Information

Add or improve the following pages:

- About Us.
- Contact Us.
- Delivery Policy.
- Returns and Refunds Policy.
- Terms and Conditions.
- Privacy Policy.
- Responsible Sale and Lawful Use Policy.
- Product Safety and Storage Guidance.

Clearly publish:

- Legal business name (parent company ApexWhips url ApexWhips.com).
- Customer-service email. (apexsmartwhips@gmail.com)
- Telephone number.(Whatsappurl)
- Normal operating hours.(24/7)
- Payment and refund process.
- Responsible-sale verification process.

Do not create fictional staff profiles, addresses, certifications or testimonials.

## 13. Internal-Linking Plan

Google uses navigation and internal links to understand page relationships and relative importance.

Reference: [Google ecommerce site-structure guidance](https://developers.google.com/search/docs/specialty/ecommerce/help-google-understand-your-ecommerce-site-structure).

Add the following links:

- Homepage → canisters, 2kg, wholesale, guide and delivery.
- What-is-SmartWhip guide → canisters and 2kg.
- Canisters page → 2kg, wholesale and delivery.
- 2kg page → canisters, wholesale and delivery.
- Wholesale page → canisters and delivery.
- Delivery page → genuine city pages.
- Every retained city page → canisters, 2kg and delivery.
- FastGas and Cream Deluxe pages → relevant products and delivery.

Use descriptive anchor text such as:

- “compare SmartWhip canister sizes”
- “view the 2kg SmartWhip”
- “request wholesale SmartWhip pricing”
- “check UK delivery coverage”

Avoid repeatedly using vague anchor text such as “click here.”

## 14. Structured Data

Implement:

- `Organization` and `WebSite` on the homepage.
- `Product` and `Offer` on individual product pages.
- `BreadcrumbList` on pages below the homepage.
- `ItemList` on product and category listings.
- `LocalBusiness` only for genuine customer-facing business locations.

Product structured data should contain:

- Correct product name.
- Original product image.
- SKU or GTIN where available.
- GBP currency.
- Current price.
- Real availability.
- Accurate item condition.
- Genuine customer ratings only.

Reference: [Google ecommerce SEO guidance](https://developers.google.com/search/docs/specialty/ecommerce).

Do not fabricate ratings, reviews, locations, stock, pricing or business details.

## 15. Keyword Placement Rules

For every page:

- Put the primary keyword naturally in the title.
- Put the primary keyword in the H1.
- Mention it naturally within the opening 100 words.
- Use the keyword or a close variation in one relevant H2.
- Use descriptive image alt text only when the image genuinely depicts the subject.
- Include secondary keywords naturally where relevant.
- Do not use a fixed keyword-density target.
- Do not repeat multiple spelling variants in the same sentence.
- Do not place blocks of city names or keywords in the footer.
- Do not hide keywords in CSS, images or off-screen elements.

use Words such as:

```text
Buy SmartWhip Smart Whip canisters where needed
```

Write primarily for a customer who needs clear, accurate product and delivery information.

## 16. Content Quality Checklist

Before publishing any page, confirm that it:

- Answers a distinct search intent.
- Provides information not already duplicated elsewhere.
- Uses accurate product specifications.
- Contains no spelling or grammar errors.
- Contains no unsupported superiority or certification claims.
- Includes useful original photographs where appropriate.
- Clearly identifies the seller.
- Explains price, stock and delivery accurately.
- Links to related pages naturally.
- Has a unique title, description and H1.
- Uses the correct `www.smartwhip.org.uk` canonical.
- Appears in the XML sitemap.
- Works well on mobile and desktop.


## 17. Recommended Implementation Order

1. Correct canonicals, sitemap, robots.txt and redirects.
2. Rewrite the homepage.
3. Publish `/smartwhip-canisters`.
4. Publish `/guides/what-is-smartwhip`.
5. Publish `/smartwhip-2kg`.
6. Publish `/smartwhip-wholesale`.
7. Publish `/delivery`.
8. Improve or consolidate existing city pages.
9. Add FastGas and Cream Deluxe pages if genuinely stocked (which they are).
10. Add structured data and verify it with Google’s testing tools.
11. Submit the corrected sitemap in Search Console(manualy done by me).
12. Request indexing for the priority pages(manualy done by me).
13. Monitor query-to-page performance for at least 28 days before making major additional changes(manualy done by me).

## 18. Search Console Monitoring

Track each page separately(manualy done by me).

| Page | Queries to monitor |
|---|---|
| Homepage | smartwhip, smart whip, smartwhip UK, buy smartwhip |
| `/guides/what-is-smartwhip` | what is SmartWhip, what is a SmartWhip, SmartWhip meaning |
| `/smartwhip-canisters` | SmartWhip canister, canisters, tank, cylinder |
| `/smartwhip-2kg` | 2kg SmartWhip, SmartWhip 2kg, 2kg Smart Whip |
| `/smartwhip-wholesale` | SmartWhip wholesale, bulk, pallet, crate, case |
| `/delivery` | SmartWhip delivery, SmartWhip near me, local delivery |

For each page, review:

- Impressions.
- Clicks.
- CTR.
- Average position.
- Queries assigned to the page.
- Competing internal pages ranking for the same query.
- Mobile versus desktop performance.

If two internal pages repeatedly rank for the same intent, consolidate their content or strengthen the intended primary page instead of creating another page.

Changes done
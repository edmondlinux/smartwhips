---
name: SmartWhip SEO architecture
description: Key decisions and constraints for the SmartWhip.org.uk SEO build — canonicals, page structure, forbidden claims, contact/pricing facts.
---

## Canonical base URL
Always `https://www.smartwhip.org.uk` (with www). Never `smart-whip.shop`, `jeowhips.com`, `smartwhip.org.uk.shop`, or bare `smartwhip.org.uk`.

## Forbidden claims / content that must NEVER appear
- Drug references: "Flake", "Cocaine", "Crake" — remove from all copy and OG descriptions
- "TUV Certified" — not a real certification for this product
- "UK's #1", "Medical quality", "Medical grade" — unverifiable claims
- Fake `aggregateRating` or `review` structured data with invented reviewer names
- "Local team" / "local hub" language implying a physical local presence
- "GoldWhip" — not a brand we stock
- "ISO {townData.iso2} Standard" stat — nonsense, was using ISO country code as a fake cert
- `process.env.BASE_URL` for base URL in metadata — hardcode `https://www.smartwhip.org.uk` directly

## Pricing facts
- 640g single: £30
- 640g case (6×): £130 (~£21.67/unit)
- 2kg: POA (price on application)
- Min order: 2 units
- Case: 6 units
- Pallet: 84 cases (504 cylinders)

## Contact / business
- Email: apexsmartwhips@gmail.com
- Parent company: ApexWhips (apexwhips.com)
- Ordering: WhatsApp, Telegram, email (no checkout)
- Payment: PayPal, Revolut, Crypto
- Delivery: free most UK, ~25 min typical
- Returns: 48 hours
- Operating: 24/7

## Page architecture
- `app/page.tsx` — server wrapper exporting metadata, renders `app/_components/HomePageClient.tsx`
- `app/towns/[town]/page.tsx` — dynamic town pages, now fully cleaned
- All new pages follow the pattern: server component with metadata export + breadcrumb + product JSON-LD

**Why:** The original codebase mixed wrong base URLs, drug references and fake structured data across multiple files. Future edits must not re-introduce any of the forbidden claims above.

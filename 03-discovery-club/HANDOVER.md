# Kindergarten website handover

This is a private bilingual development preview. It is not ready to accept parent inquiries or launch publicly until the school supplies its real details.

## Updating content
- `app/content.ts`: English/Arabic school name, location, ages, hours, languages, phone, email, WhatsApp (international digits only), map link and FAQ policies.
- `app/website.tsx`: paired English/Arabic page copy, illustrative program cards, daily routine, team/facility placeholders, fees and review empty state. Edit both language strings together. No CMS is connected.
- `public/images/`: locally served, compressed development photos. Replace these with photographs authorized for school website use; update image captions and alt text in `app/website.tsx` together.
- `app/globals.css`: shared colors, typography, layout and mobile/RTL rules.

## Admissions setup
`app/api/inquiry/route.ts` validates basic input and deliberately returns 503 with saved:false. It saves no data and sends no email. Connect this route to a school-owned durable database or verified email service; add server validation for lengths, contact format, dates, rate limiting and retention rules. Only return saved:true after a confirmed durable save or verified delivery. Then remove the form’s not-connected notice. A requested date must remain pending until staff confirm it. Do not request child records here.

## Before public launch
Replace every bracketed detail and unconfirmed policy. Supply actual programs/age cutoffs, approach, leadership/teachers, fees in EGP, inclusion/extras, documents, contact details, pickup/supervision/hygiene/food/allergy/update practices. Only add transport, extended hours, trials, staff ratios, qualifications and accreditations when confirmed. Reviews remain empty until genuine permissioned reviews and sources are supplied. No invented ratings are present.

Replace stock photos; remove preview notices only after content approval. Set approved public metadata, canonical/language alternatives, truthful school structured data and remove the noindex setting in app/layout.tsx only at public launch. Confirm Arabic copy with the school. Multiple branches are not configured because none were supplied.

## Existing domain
Provide the exact owned domain and desired public audience. Attach the domain to this Site, then copy the exact DNS verification/routing records provided by Sites into the domain registrar’s DNS panel. Keep existing mail/MX records. Verify domain status and HTTPS before switching public links. DNS values must come from the domain attachment result; do not guess an A record or CNAME. No custom domain has been connected in this preview.

## Image provenance
Development-only stock imagery under the Pexels license (https://www.pexels.com/license/):
- Pragyan Bezbaruah, https://www.pexels.com/photo/hands-of-drawing-child-1725151/
- Mikhail Nilov, https://www.pexels.com/photo/educational-toys-on-shelves-8923987/
Images do not represent the school or endorsements.

## Verification performed
Production build passed. Browser checked desktop Arabic RTL with loaded images and no horizontal overflow; English and Arabic mobile layouts at 390px; mobile menu and language-preserving navigation; all seven page routes; gallery next-image control; WhatsApp and map missing-configuration feedback; required visit fields; and an attempted synthetic inquiry returning an explicit not-sent error. No real parent data was used or stored. Phone/email and actual message delivery cannot be tested until real contacts and a destination are connected.

# Design 02: Bright Days
This is an independent Site and repository. Original Design 01 was read and copied only, never edited, committed, or deployed during this build.

## Design and motion
New bright green/yellow/coral direction, centered photographic hero, earlier quick facts, completely restyled responsive layouts, and a two-row automatically moving gallery on the homepage.
`app/moving-gallery.tsx` contains the six editable image entries and bilingual captions. CSS transform animations move one track left over 80 seconds and one right over 88 seconds. Duplicate groups use identical widths for a continuous loop. Pause/Play is explicit; hovering a photo lane pauses that lane. IntersectionObserver and page visibility stop motion offscreen/in hidden tabs. System reduced-motion preference removes animation and shows a static grid without cloned photos. No animation dependency was added. New photo assets are WebP; all six photos total under 500 KB. Below-fold imagery is lazy-loaded.

## Additional image provenance
Pexels license applies (https://www.pexels.com/license/). These are illustrative development images, not the kindergarten's campus or endorsements.
- Vlada Karpovich: https://www.pexels.com/photo/girl-in-brown-apron-doing-rainbow-painting-7025567/
- Nasirun Khan: https://www.pexels.com/photo/children-using-watering-cans-16850898/
- Marta Wave: https://www.pexels.com/photo/focused-black-child-studying-colorful-pictures-in-book-at-home-6437813/
- Anastasia Shuraeva: https://www.pexels.com/es-es/foto/nina-libertad-negro-creatividad-6966373/

Design 02 checks: desktop homepage and gallery inspected; both animation directions and pause/resume verified in-browser; English/Arabic mobile at 390px outer width (375px content) had zero horizontal overflow; mobile menu opened and visit route loaded; a synthetic form attempt returned the explicit not-sent state. Reduced-motion fallback was verified in source, not emulated in the browser. Source/build check plus an original-repository clean-status check confirmed Design 01 remains at its original revision.

## Parent feedback and Google rating
`app/reviews-content.ts` owns the new feature data. Add genuine approved testimonials with bilingual quotes, consented portraits, optional real rating, date and source. The private preview displays three clearly labeled template cards with abstract profile icons and unrated outline stars. Set `preview:false` before public launch to exclude these templates.
The hero Google badge and Google panel share one config. No Google API is connected. Set the verified profileUrl, rating, count, checkedOn, and verified=true only after checking the school's real Google profile. Without those values it shows “Rating pending” and links to the explanation on the Reviews page. It does not display the reference's 5.0 as fact. A connected badge links to the real external profile; the rating is manually maintained, not automatically refreshed.

## Design 03: The Discovery Club
This is a separate project; earlier designs are preserved. The new design uses cobalt, sunshine yellow, coral and lilac, a photo collage, numbered navigation and an invitation footer.

The bilingual parent activity in app/visit-playground.tsx has three choices and tailored visit questions. It is not a child assessment and does not store or send answers. Optional WebMCP prepare_visit_questions uses the same state and strict validation. This browser does not support modelContext, so automated WebMCP calls could not be tested. Manual activity completion and reset were checked successfully.

Verified the desktop layout, English and Arabic mobile layouts at 375px content width without horizontal overflow, and Arabic mobile navigation. The previous form integration limitations remain: inquiries are not saved or delivered, and the API returns an explicit error until connected. Replace all school placeholders and illustrative photographs before public launch. Google ratings and testimonials need verified content.

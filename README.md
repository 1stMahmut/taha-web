# Mr Classy — demo website

Static demo site for [@mr.classy.perfume](https://www.instagram.com/mr.classy.perfume), a Lebanese perfume outlet selling original perfumes and testers with delivery all over Lebanon.

**Design direction:** Tenebrism (spotlit bottles on black) + Filigree (fine gold ornament, taken from the gold logo) + Luxury Typography (Cormorant Garamond and Cinzel capitals).

- English-first with an Arabic (RTL) toggle, remembered per browser
- Filterable collection: for him, for her, niche, gift sets
- Quick view with the notes pyramid, a Full bottle / Tester choice and an "Ask the price on WhatsApp" button with the perfume and format pre-filled
- "Bottle or tester?" section that explains the outlet model
- Three-question scent finder that suggests three bottles
- Ordering steps, delivery, WhatsApp and Instagram (customer feedback) links

## Run
Open `index.html` in a browser — no build step.

## Notes
- WhatsApp goes to the shop's own number (`WHATSAPP_NUMBER` in `app.js`), from its Instagram bio
- Bottle images in `img/*.svg` are clean studio-style illustrations of the products in the shop's posts; swap in real product photos (same file names, 4:5) when available
- No prices are shown — customers ask on WhatsApp, as on Instagram
- Product descriptions are placeholder copy; check the scent notes and the stock list with the shop before launch

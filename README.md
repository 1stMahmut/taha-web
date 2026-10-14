# Fuzzie Plushie — demo website

Static demo site for [@fuzzie_plushie](https://www.instagram.com/fuzzie_plushie) (Mar Elias, Beirut) and [@fuzzieplushie.uae](https://www.instagram.com/fuzzieplushie.uae).

**Design direction:** Kawaii (pastels, rounded shapes, cheerful) + Anthropomorphic (Fuzzie the llama guides visitors) + Bento Box (modular tiles for a mixed catalogue). Brand teal and grape come from the logo.

- English-first with an Arabic (RTL) toggle, remembered per browser
- Bento grid of categories that filter the shop
- **Name studio:** design a personalized bunny or teddy (fur, name, thread, ribbon/sweater) with a live preview, then send the design on WhatsApp
- Filterable shop; every item has an "Ask on WhatsApp" button with the item name pre-filled
- How ordering works, Beirut and UAE visit cards

## Run
Open `index.html` in a browser — no build step.

## Notes
- WhatsApp goes to the shop's own number (`WHATSAPP_NUMBER` in `app.js`), taken from its posts
- Photos in `img/` are cropped from Instagram screenshots; swap in originals for sharper images
- Product descriptions are placeholder copy written in the brand's voice

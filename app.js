// Fuzzie Plushie — demo
// Main order line, taken from the shop's own posts (country code, no "+").
const WHATSAPP_NUMBER = "96178874095";

const STRINGS = {
  en: {
    pageTitle: "Fuzzie Plushie · Beirut",
    toggle: "ع",
    toggleLabel: "التبديل إلى العربية",
    "nav.inside": "What's inside",
    "nav.studio": "Personalize",
    "nav.shop": "Shop",
    "nav.visit": "Visit",
    "cta.order": "Order",
    "hero.badge": "Beirut · UAE · New drops weekly",
    "hero.title": "Squeeze-worthy finds,<br><mark>hug-sized</mark> happiness.",
    "hero.lead": "Viral plushies, Jellycat bunnies, squishies and name-embroidered teddies — hand-picked by the Fuzzie team in Beirut.",
    "hero.cta1": "Shop the fuzz",
    "hero.cta2": "Personalize one ✨",
    "hero.tag": "Viral this week 🐷",
    "hero.bubble": "Sup! I'm Fuzzie 😎 Welcome to the softest corner of Beirut.",
    "stat.1": "fuzzie friends",
    "stat.2": "drops shared",
    "stat.3": "homes: Beirut & UAE",
    "tk.1": "Restocked!!!",
    "tk.2": "Viral this week",
    "tk.3": "Names on ears",
    "tk.4": "Squish o'clock",
    "tk.5": "To infinity & beyond",
    "bento.eyebrow": "What's inside",
    "bento.title": "Pick your kind of soft.",
    "b1.t": "Make it theirs",
    "b1.p": "Their name, stitched on a bunny ear or a teddy sweater.",
    "b1.cta": "Personalize",
    "b2.t": "Viral this week",
    "b2.p": "The running pig everyone's asking about.",
    "b3.t": "Jellycat bunnies",
    "b3.p": "Restocked!!! Cream, honey & grey.",
    "b4.t": "Squish o'clock",
    "b4.p": "Butter, buns & Needoh — stress, squished.",
    "b5.t": "Toy Story 5",
    "b5.p": "Lotso is here. To infinity and beyond! 🚀",
    "b6.p": "fuzzie friends on Instagram",
    "studio.eyebrow": "The name studio",
    "studio.title": "Type a name. We stitch the love.",
    "studio.lead": "Design it here, send it to us on WhatsApp, and we'll embroider it for you.",
    "guide.studio": "Type a name. Watch the magic stitch itself ✨",
    "st.plush": "1. Pick a plushie",
    "st.bunny": "🐰 Bunny",
    "st.teddy": "🧸 Teddy",
    "st.fur": "2. Fur colour",
    "st.name": "3. Their name",
    "st.namePh": "e.g. Lea",
    "st.thread": "4. Thread colour",
    "st.ribbon": "5. Ribbon colour",
    "st.sweater": "5. Sweater colour",
    "st.cta": "Send my design on WhatsApp",
    "st.note": "The preview is illustrated — your real plushie will be even fluffier.",
    "st.defaultName": "Lea",
    "c.cream": "Cream", "c.honey": "Honey", "c.grey": "Grey", "c.blush": "Blush",
    "c.grape": "Grape", "c.rose": "Rose", "c.navy": "Navy", "c.white": "White",
    "c.pink": "Pink", "c.lilac": "Lilac", "c.sky": "Sky", "c.teal": "Teal",
    "shop.eyebrow": "The shelves",
    "shop.title": "Fresh off the shelves.",
    "guide.shop": "Psst… the pig sells out fast. Just saying 🐷",
    "f.all": "All",
    "f.viral": "🔥 Viral",
    "f.personal": "✨ Personalized",
    "f.plush": "🧸 Bunnies & bears",
    "f.squish": "🧈 Squishies",
    "f.disney": "🚀 Disney",
    "product.cta": "Ask on WhatsApp",
    "how.eyebrow": "Ordering is easy",
    "how.title": "Spot it. Message us. Hug it.",
    "how.1t": "Spot it",
    "how.1": "Find your fuzz here or on our Instagram.",
    "how.2t": "Message us",
    "how.2": "Tap WhatsApp — the item's name is already in the message.",
    "how.3t": "Hug it",
    "how.3": "Pick it up in-store or ask us about delivery.",
    "visit.eyebrow": "Come say hi",
    "visit.title": "Two homes, one llama.",
    "visit.b.t": "Beirut, Lebanon",
    "visit.b.p": "Mar Elias — shelves stacked floor to ceiling with fuzz.",
    "visit.u.t": "United Arab Emirates",
    "visit.u.p": "Our UAE family has its own page — same fuzz, same love.",
    "guide.visit": "I'm the one in sunglasses. You can't miss me 😎",
    "footer.note": "© 2026 Fuzzie Plushie — demo website",
    "alt.pig": "Pink plush pig with a strawberry on its ear",
    "alt.bee": "White teddy in a yellow bee hoodie",
    "alt.honey": "Honey bunny with a name embroidered on its ear",
    "alt.llama": "Fuzzie the llama in sunglasses",
    "alt.store": "Pastel teddy bears on the shop shelves",
    "alt.trio": "Three Jellycat bunnies in cream, honey and grey",
    "wa.general": "Hi Fuzzie! 👋 I'd like to order something.",
    "wa.piece": "Hi Fuzzie! 👋 Is this available? → ",
    "wa.studio": (d) =>
      `Hi Fuzzie! ✨ I'd like a personalized ${d.plush}:\n• Name: ${d.name}\n• Fur: ${d.fur}\n• Thread: ${d.thread}\n• ${d.accentLabel}: ${d.accent}`,
    "plush.bunny": "bunny 🐰",
    "plush.teddy": "teddy 🧸",
    "accent.ribbon": "Ribbon",
    "accent.sweater": "Sweater",
    "st.surprise": "🎲 Surprise me",
    names: ["Lea", "Youssef", "Maya", "Karim", "Sara", "Jad"],
    "product.hint": "Tap to peek 👀",
    "qv.guide": "Stock moves fast — message us to check it's still on the shelf!",
    "qv.cta": "Ask about this one on WhatsApp",
    "visit.delivery": "Ask us about delivery across Lebanon",
    "visit.maps": "Open in Maps",
    "visit.u.perk": "Same viral drops and Jellycat bunnies, closer to you",
    "visit.u.order": "DM the UAE page to order there",
  },
  ar: {
    pageTitle: "فَزّي بلاشي · بيروت",
    toggle: "EN",
    toggleLabel: "Switch to English",
    "nav.inside": "شو في عنّا",
    "nav.studio": "طرّز اسمك",
    "nav.shop": "المتجر",
    "nav.visit": "زورونا",
    "cta.order": "اطلب",
    "hero.badge": "بيروت · الإمارات · جديد كل أسبوع",
    "hero.title": "ألعاب تنضغط من حلاوتها،<br>وسعادة <mark>بحجم حضن</mark>.",
    "hero.lead": "دمى ترند، أرانب جيليكات، سكويشي ودباديب مطرّزة بالأسماء — مختارة بحب من فريق فَزّي في بيروت.",
    "hero.cta1": "تسوّق الآن",
    "hero.cta2": "طرّز اسمًا ✨",
    "hero.tag": "ترند هالأسبوع 🐷",
    "hero.bubble": "هاي! أنا فَزّي 😎 أهلًا بك في أنعم زاوية ببيروت.",
    "stat.1": "صديق على إنستغرام",
    "stat.2": "منشور وقطعة",
    "stat.3": "فرعان: بيروت والإمارات",
    "tk.1": "رجع للمخزون!!!",
    "tk.2": "ترند هالأسبوع",
    "tk.3": "أسماء على الأذنين",
    "tk.4": "وقت السكويشي",
    "tk.5": "إلى ما لا نهاية",
    "bento.eyebrow": "شو في عنّا",
    "bento.title": "اختر نوع النعومة اللي بتحبه.",
    "b1.t": "خلّيها باسمه",
    "b1.p": "اسم من تحب، مطرّز على أذن أرنب أو كنزة دبدوب.",
    "b1.cta": "طرّز الآن",
    "b2.t": "ترند هالأسبوع",
    "b2.p": "الخنزير اللي الكل عم يسأل عنه.",
    "b3.t": "أرانب جيليكات",
    "b3.p": "رجعت!!! كريمي، عسلي ورمادي.",
    "b4.t": "وقت السكويشي",
    "b4.p": "زبدة، بان ونيدو — اضغط وارتاح.",
    "b5.t": "توي ستوري 5",
    "b5.p": "لوتسو وصل! إلى ما لا نهاية وما بعدها 🚀",
    "b6.p": "صديق على إنستغرام",
    "studio.eyebrow": "استوديو الأسماء",
    "studio.title": "اكتب الاسم، ونحن نطرّز الحب.",
    "studio.lead": "صمّمها هنا، ابعثها لنا على واتساب، ونحن نطرّزها لك.",
    "guide.studio": "اكتب اسمًا، وشوف السحر عم يطرّز حاله ✨",
    "st.plush": "١. اختر الدمية",
    "st.bunny": "🐰 أرنب",
    "st.teddy": "🧸 دبدوب",
    "st.fur": "٢. لون الفرو",
    "st.name": "٣. الاسم",
    "st.namePh": "مثلًا: لين",
    "st.thread": "٤. لون الخيط",
    "st.ribbon": "٥. لون الشريطة",
    "st.sweater": "٥. لون الكنزة",
    "st.cta": "ابعث تصميمي على واتساب",
    "st.note": "المعاينة رسم توضيحي — الدمية الحقيقية أنعم بكثير.",
    "st.defaultName": "لين",
    "c.cream": "كريمي", "c.honey": "عسلي", "c.grey": "رمادي", "c.blush": "وردي فاتح",
    "c.grape": "بنفسجي", "c.rose": "زهري", "c.navy": "كحلي", "c.white": "أبيض",
    "c.pink": "وردي", "c.lilac": "ليلكي", "c.sky": "سماوي", "c.teal": "تركوازي",
    "shop.eyebrow": "الرفوف",
    "shop.title": "طازة عن الرفوف.",
    "guide.shop": "بس بيني وبينك… الخنزير بيخلص بسرعة 🐷",
    "f.all": "الكل",
    "f.viral": "🔥 ترند",
    "f.personal": "✨ بالأسماء",
    "f.plush": "🧸 أرانب ودباديب",
    "f.squish": "🧈 سكويشي",
    "f.disney": "🚀 ديزني",
    "product.cta": "اسأل على واتساب",
    "how.eyebrow": "الطلب سهل",
    "how.title": "شوفها. راسلنا. احضنها.",
    "how.1t": "شوفها",
    "how.1": "لاقي قطعتك هنا أو على إنستغرام.",
    "how.2t": "راسلنا",
    "how.2": "اضغط واتساب — اسم القطعة مكتوب بالرسالة.",
    "how.3t": "احضنها",
    "how.3": "استلمها من المحل أو اسألنا عن التوصيل.",
    "visit.eyebrow": "مرّوا سلّموا",
    "visit.title": "بيتان، ولاما واحد.",
    "visit.b.t": "بيروت، لبنان",
    "visit.b.p": "مار الياس — رفوف مليانة نعومة من الأرض للسقف.",
    "visit.u.t": "الإمارات العربية المتحدة",
    "visit.u.p": "عيلتنا بالإمارات إلها صفحتها — نفس النعومة، نفس الحب.",
    "guide.visit": "أنا اللي لابس نظارات شمس. ما فيك تضيّعني 😎",
    "footer.note": "© 2026 فَزّي بلاشي — موقع تجريبي",
    "alt.pig": "خنزير وردي ناعم مع فراولة على أذنه",
    "alt.bee": "دبدوب أبيض بقبعة نحلة صفراء",
    "alt.honey": "أرنب عسلي باسم مطرّز على أذنه",
    "alt.llama": "فَزّي اللاما بنظارات شمس",
    "alt.store": "دباديب بألوان الباستيل على رفوف المحل",
    "alt.trio": "ثلاثة أرانب جيليكات بالكريمي والعسلي والرمادي",
    "wa.general": "مرحبا فَزّي! 👋 بدي اطلب شي.",
    "wa.piece": "مرحبا فَزّي! 👋 هالقطعة متوفرة؟ ← ",
    "wa.studio": (d) =>
      `مرحبا فَزّي! ✨ بدي ${d.plush} مطرّز بالاسم:\n• الاسم: ${d.name}\n• الفرو: ${d.fur}\n• الخيط: ${d.thread}\n• ${d.accentLabel}: ${d.accent}`,
    "plush.bunny": "أرنب 🐰",
    "plush.teddy": "دبدوب 🧸",
    "accent.ribbon": "الشريطة",
    "accent.sweater": "الكنزة",
    "st.surprise": "🎲 فاجئني",
    names: ["لين", "يوسف", "مايا", "كريم", "سارة", "جاد"],
    "product.hint": "اضغط لتشوف 👀",
    "qv.guide": "البضاعة بتخلص بسرعة — راسلنا لنتأكد إنها بعدها على الرف!",
    "qv.cta": "اسأل عنها على واتساب",
    "visit.delivery": "اسألنا عن التوصيل لكل لبنان",
    "visit.maps": "افتح بالخريطة",
    "visit.u.perk": "نفس الترندات وأرانب جيليكات، أقرب لعندك",
    "visit.u.order": "راسل صفحة الإمارات للطلب من هناك",
  },
};

// tag: hot | new | name | disney | (none)
const PRODUCTS = [
  { img: "viral-pig", cats: ["viral", "plush"], tag: "hot",
    en: ["Viral Running Pig", "Viral 🔥", "The one everyone's asking about. Yes, it's that soft.",
      "The pig that took over everyone's feed. Super-soft pink fur, a tiny strawberry on one ear, and legs that dangle just right for running videos."],
    ar: ["الخنزير الترند", "ترند 🔥", "الخنزير اللي الكل عم يسأل عنه. إيه، هيك ناعم.",
      "الخنزير اللي غزا كل الصفحات. فرو وردي ناعم كتير، فراولة صغيرة على أذنه، وإجرين بيتمرجحوا مزبوط لفيديوهات الركض."] },
  { img: "bee-teddy", cats: ["viral", "plush"], tag: "hot",
    en: ["Bee Teddy", "Viral 🐝", "A white teddy in a fuzzy bee hoodie. Impossible to resist.",
      "A snow-white teddy dressed for spring in a fuzzy bee hoodie with little pom-pom antennae. Gift-ready and cuddle-approved."],
    ar: ["دبدوب النحلة", "ترند 🐝", "دبدوب أبيض بقبعة نحلة صفراء. مين بيقاوم؟",
      "دبدوب أبيض متل التلج، لابس قبعة نحلة ناعمة مع قرون صغيرة. جاهز للهدية ومضمون للحضن."] },
  { img: "jellycat-trio", cats: ["plush"], tag: "new",
    en: ["Jellycat Bunny", "Restocked!!!", "Cream, honey and grey — back on the shelves.",
      "The bunny everyone wants, back in cream, honey and grey. Floppy ears, silky fur — they go fast, so message us early."],
    ar: ["أرنب جيليكات", "رجع!!!", "كريمي، عسلي ورمادي — رجعوا على الرفوف.",
      "الأرنب اللي الكل بدو ياه، رجع بالكريمي والعسلي والرمادي. أذنين مرخيين وفرو حريري — بيخلصوا بسرعة، راسلنا بكير."] },
  { img: "grey-bunny", cats: ["personal", "plush"], tag: "name",
    en: ["Name Bunny — Grey", "Personalized ✨", "A name stitched on the ear, pink ribbons on top.",
      "A grey bunny with a name embroidered on the ear and pink satin ribbons. Design yours in the name studio above."],
    ar: ["أرنب الاسم — رمادي", "بالاسم ✨", "اسم مطرّز على الأذن وشرائط وردية.",
      "أرنب رمادي باسم مطرّز على أذنه وشرائط ساتان وردية. صمّم تبعك باستوديو الأسماء فوق."] },
  { img: "honey-bunny", cats: ["personal", "plush"], tag: "name",
    en: ["Name Bunny — Honey", "Personalized ✨", "Honey fur and a name in purple thread.",
      "Honey fur, a lilac ribbon and a name stitched in purple thread — the gift that makes people cry (happy tears)."],
    ar: ["أرنب الاسم — عسلي", "بالاسم ✨", "فرو عسلي واسم بخيط بنفسجي.",
      "فرو عسلي، شريطة ليلكية واسم بخيط بنفسجي — هدية بتبكّي (دموع فرح)."] },
  { img: "name-teddy", cats: ["personal", "plush"], tag: "name",
    en: ["Name Sweater Teddy", "Personalized ✨", "A tiny knitted sweater with their name on it.",
      "A classic curly teddy in a tiny knitted sweater with their name across the chest. Perfect for newborns and birthdays."],
    ar: ["دبدوب الكنزة بالاسم", "بالاسم ✨", "كنزة صغيرة محبوكة عليها اسم من تحب.",
      "دبدوب كلاسيكي بفرو مجعّد وكنزة صغيرة عليها الاسم. مثالي للمواليد وأعياد الميلاد."] },
  { img: "pastel-teddies", cats: ["plush"], tag: "new",
    en: ["Pastel Teddy Bears", "New colours", "Yellow, white, peach or sky — pick your colour.",
      "Soft teddies in yellow, white, peach and sky blue. Pick one — or the whole rainbow."],
    ar: ["دباديب الباستيل", "ألوان جديدة", "أصفر، أبيض، خوخي أو سماوي — اختر لونك.",
      "دباديب ناعمة بالأصفر والأبيض والخوخي والسماوي. اختار واحد — أو كل قوس قزح."] },
  { img: "lotso", cats: ["disney", "plush"], tag: "disney",
    en: ["Lotso — Toy Story 5", "Disney · Pixar", "Lotso is here. To infinity and beyond! 🚀",
      "Lotso from Disney·Pixar's Toy Story 5. Strawberry-pink, extra fluffy, and (we promise) much nicer than in the movie."],
    ar: ["لوتسو — توي ستوري 5", "ديزني · بيكسار", "لوتسو وصل! إلى ما لا نهاية وما بعدها 🚀",
      "لوتسو من توي ستوري 5 من ديزني وبيكسار. وردي بلون الفراولة، منفوش كتير، و(منوعدك) ألطف بكتير من الفيلم."] },
  { img: "butter-squishy", cats: ["squish", "viral"], tag: "hot",
    en: ["Butter Squishy", "Squishy 🧈", "Looks exactly like butter. Squish only — do not spread.",
      "Looks like a real stick of salted butter, squishes like a dream. The internet's favourite stress toy."],
    ar: ["سكويشي الزبدة", "سكويشي 🧈", "شكله زبدة تمامًا… بس للضغط، مش للخبز.",
      "شكله متل قالب زبدة حقيقي، وبينضغط متل الحلم. لعبة التوتر المفضلة على الإنترنت."] },
  { img: "bun-squishy", cats: ["squish"], tag: "new",
    en: ["Mystery Bun Squishy", "Mystery 🎁", "Which colour will you get? Open it and see.",
      "A bamboo steamer full of mystery squishy buns. Which colour will you get? Some are rare 👀"],
    ar: ["سكويشي البان المفاجأة", "مفاجأة 🎁", "أي لون رح يطلعلك؟ افتحه وشوف.",
      "سلة بخار فيها بان سكويشي مفاجأة. أي لون رح يطلعلك؟ في ألوان نادرة 👀"] },
  { img: "cat-pillow", cats: ["plush"], tag: "",
    en: ["Long Cat Pillow", "Cuddle size", "An extra-long cat for hugs and naps.",
      "An extra-long cat pillow for naps, movie nights and holding on to. Orange & white or black & white."],
    ar: ["مخدة القطة الطويلة", "حجم حضن", "قطة طويلة كتير للحضن والقيلولة.",
      "مخدة قطة طويلة كتير للقيلولة وسهرات الأفلام والحضن. برتقالي وأبيض أو أسود وأبيض."] },
];

const FUR = { cream: "#f4e8d8", honey: "#ddb07a", grey: "#c9c8d1", blush: "#f5c6d2" };
const THREAD = { grape: "#5b2c83", rose: "#e0559a", navy: "#2b3a67", white: "#ffffff" };
const ACCENT = { pink: "#f4a6c0", lilac: "#b9a3e8", sky: "#7fb8f0", teal: "#34bfb0" };

let lang = "en";
let filter = "all";

const t = (key) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// ---------- Shop ----------
function renderProducts() {
  const grid = document.getElementById("products");
  const items = visibleProducts();
  grid.innerHTML = items
    .map((p) => {
      const [name, tag, desc] = p[lang];
      return `
        <article class="product">
          <button type="button" class="product-media" data-open="${p.img}" data-hint="${t("product.hint")}" aria-label="${name}">
            <img src="img/${p.img}.jpg" alt="${name}" loading="lazy" />
            <span class="product-tag ${p.tag}">${tag}</span>
          </button>
          <div class="product-body">
            <h3>${name}</h3>
            <p>${desc}</p>
            <a class="product-cta" href="${waLink(t("wa.piece") + name)}" target="_blank" rel="noopener">
              <svg aria-hidden="true"><use href="#wa"/></svg>${t("product.cta")}
            </a>
          </div>
        </article>`;
    })
    .join("");
}

const visibleProducts = () =>
  PRODUCTS.filter((p) => filter === "all" || p.cats.includes(filter));

// ---------- Quick view ----------
const qv = document.getElementById("quickview");
let qvIndex = 0;

function fillQuickView() {
  const list = visibleProducts();
  const p = list[qvIndex];
  const [name, tag, , story] = p[lang];
  const img = document.getElementById("qvImg");
  img.src = `img/${p.img}.jpg`;
  img.alt = name;
  const tagEl = document.getElementById("qvTag");
  tagEl.textContent = tag;
  tagEl.className = `product-tag ${p.tag}`;
  document.getElementById("qvName").textContent = name;
  document.getElementById("qvStory").textContent = story;
  document.getElementById("qvCount").textContent = `${qvIndex + 1} / ${list.length}`;
  document.getElementById("qvWa").href = waLink(t("wa.piece") + name);
}

function openQuickView(imgKey) {
  qvIndex = Math.max(0, visibleProducts().findIndex((p) => p.img === imgKey));
  fillQuickView();
  if (typeof qv.showModal === "function") qv.showModal();
  else qv.setAttribute("open", "");
  document.body.classList.add("qv-open");
}

function stepQuickView(dir) {
  const n = visibleProducts().length;
  qvIndex = (qvIndex + dir + n) % n;
  fillQuickView();
}

function setupQuickView() {
  document.getElementById("products").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openQuickView(btn.dataset.open);
  });
  document.getElementById("qvClose").addEventListener("click", () => qv.close());
  document.getElementById("qvPrev").addEventListener("click", () => stepQuickView(-1));
  document.getElementById("qvNext").addEventListener("click", () => stepQuickView(1));
  qv.addEventListener("click", (e) => {
    if (e.target === qv) qv.close();
  });
  qv.addEventListener("close", () => document.body.classList.remove("qv-open"));
  qv.addEventListener("keydown", (e) => {
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") stepQuickView(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") stepQuickView(rtl ? 1 : -1);
  });
}

function setFilter(next) {
  filter = next;
  document.querySelectorAll(".chip").forEach((c) => {
    const on = c.dataset.filter === next;
    c.classList.toggle("is-active", on);
    c.setAttribute("aria-pressed", String(on));
  });
  renderProducts();
}

// ---------- Name studio ----------
const form = document.getElementById("studioForm");
const nameInput = document.getElementById("nameInput");
let nameTouched = false;

function studioState() {
  const data = new FormData(form);
  return {
    plush: data.get("plush"),
    fur: data.get("fur"),
    thread: data.get("thread"),
    accent: data.get("accent"),
    name: nameInput.value.trim() || t("st.defaultName"),
  };
}

function fitText(el, name, maxWidth, maxSize) {
  // Arabic calligraphy renders smaller than the Latin script font.
  if (/[\u0600-\u06FF]/.test(name)) maxSize = Math.round(maxSize * 1.45);
  let size = maxSize;
  el.textContent = name;
  el.setAttribute("font-size", size);
  try {
    while (el.getComputedTextLength() > maxWidth && size > 12) {
      size -= 1;
      el.setAttribute("font-size", size);
    }
  } catch (e) {
    el.setAttribute("font-size", Math.max(14, Math.min(maxSize, (maxWidth / name.length) * 1.7)));
  }
}

function updateStudio() {
  const s = studioState();
  const svg = document.getElementById("plushSvg");
  svg.style.setProperty("--fur", FUR[s.fur]);
  svg.style.setProperty("--thread", THREAD[s.thread]);
  svg.style.setProperty("--accent", ACCENT[s.accent]);

  const isBunny = s.plush === "bunny";
  document.getElementById("bunny").style.display = isBunny ? "" : "none";
  document.getElementById("teddy").style.display = isBunny ? "none" : "";

  const textEl = document.getElementById(isBunny ? "bunnyName" : "teddyName");
  fitText(textEl, s.name, isBunny ? 150 : 160, isBunny ? 34 : 40);
  textEl.classList.remove("pop-in");
  void textEl.getBoundingClientRect();
  textEl.classList.add("pop-in");

  document.getElementById("nameCount").textContent = `${nameInput.value.length}/12`;

  const legend = document.getElementById("accentLegend");
  legend.dataset.i18n = isBunny ? "st.ribbon" : "st.sweater";
  legend.textContent = t(legend.dataset.i18n);

  const msg = STRINGS[lang]["wa.studio"]({
    plush: t(`plush.${s.plush}`),
    name: s.name,
    fur: t(`c.${s.fur}`),
    thread: t(`c.${s.thread}`),
    accent: t(`c.${s.accent}`),
    accentLabel: t(isBunny ? "accent.ribbon" : "accent.sweater"),
  });
  document.getElementById("studioOrder").href = waLink(msg);
}

function bounce() {
  const svg = document.getElementById("plushSvg");
  svg.classList.remove("bounce");
  void svg.getBoundingClientRect();
  svg.classList.add("bounce");
}

function renderNameChips() {
  document.getElementById("nameChips").innerHTML = t("names")
    .map((n) => `<button type="button" class="name-chip">${n}</button>`)
    .join("");
}

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function surprise() {
  ["plush", "fur", "thread", "accent"].forEach((group) => {
    const options = [...form.querySelectorAll(`input[name="${group}"]`)];
    let choice = pick(options);
    // keep white thread off very light fur so the name stays readable
    if (group === "thread" && ["cream", "blush"].includes(new FormData(form).get("fur"))) {
      choice = pick(options.filter((o) => o.value !== "white"));
    }
    choice.checked = true;
  });
  nameInput.value = pick(t("names"));
  nameTouched = true;
  updateStudio();
  bounce();
}

function setupStudio() {
  form.addEventListener("change", () => {
    updateStudio();
    bounce();
  });
  nameInput.addEventListener("input", () => {
    nameTouched = true;
    updateStudio();
    bounce();
  });
  document.getElementById("nameChips").addEventListener("click", (e) => {
    const chip = e.target.closest(".name-chip");
    if (!chip) return;
    nameInput.value = chip.textContent;
    nameTouched = true;
    updateStudio();
    bounce();
  });
  document.getElementById("surpriseBtn").addEventListener("click", surprise);
  form.addEventListener("submit", (e) => e.preventDefault());
}

// ---------- Language ----------
function applyLang(next) {
  lang = next;
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPh);
  });
  document.querySelectorAll("[data-wa-general]").forEach((el) => {
    el.href = waLink(t("wa.general"));
    el.target = "_blank";
    el.rel = "noopener";
  });

  if (!nameTouched) nameInput.value = t("st.defaultName");

  const toggle = document.getElementById("langToggle");
  toggle.textContent = t("toggle");
  toggle.setAttribute("aria-label", t("toggleLabel"));

  renderProducts();
  renderNameChips();
  updateStudio();
  if (qv.open) fillQuickView();
  try {
    localStorage.setItem("fuzzie-lang", lang);
  } catch (e) {}
}

// ---------- Misc ----------
function setupFilters() {
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });
  document.querySelectorAll("[data-jump]").forEach((tile) => {
    tile.addEventListener("click", () => {
      setFilter(tile.dataset.jump);
      document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function setupMenu() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    })
  );
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

document.documentElement.classList.remove("no-js");

let saved = "en";
try {
  saved = localStorage.getItem("fuzzie-lang") || "en";
} catch (e) {}

setupStudio();
applyLang(saved === "ar" ? "ar" : "en");
setupFilters();
setupQuickView();
setupMenu();
setupReveal();

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "en" ? "ar" : "en");
});

// Re-fit the name once the embroidery fonts have loaded.
if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateStudio);

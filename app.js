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
  },
};

// tag: hot | new | name | disney | (none)
const PRODUCTS = [
  { img: "viral-pig", cats: ["viral", "plush"], tag: "hot",
    en: ["Viral Running Pig", "Viral 🔥", "The one everyone's asking about. Yes, it's that soft."],
    ar: ["الخنزير الترند", "ترند 🔥", "الخنزير اللي الكل عم يسأل عنه. إيه، هيك ناعم."] },
  { img: "bee-teddy", cats: ["viral", "plush"], tag: "hot",
    en: ["Bee Teddy", "Viral 🐝", "A white teddy in a fuzzy bee hoodie. Impossible to resist."],
    ar: ["دبدوب النحلة", "ترند 🐝", "دبدوب أبيض بقبعة نحلة صفراء. مين بيقاوم؟"] },
  { img: "jellycat-trio", cats: ["plush"], tag: "new",
    en: ["Jellycat Bunny", "Restocked!!!", "Cream, honey and grey — back on the shelves."],
    ar: ["أرنب جيليكات", "رجع!!!", "كريمي، عسلي ورمادي — رجعوا على الرفوف."] },
  { img: "grey-bunny", cats: ["personal", "plush"], tag: "name",
    en: ["Name Bunny — Grey", "Personalized ✨", "A name stitched on the ear, pink ribbons on top."],
    ar: ["أرنب الاسم — رمادي", "بالاسم ✨", "اسم مطرّز على الأذن وشرائط وردية."] },
  { img: "honey-bunny", cats: ["personal", "plush"], tag: "name",
    en: ["Name Bunny — Honey", "Personalized ✨", "Honey fur and a name in purple thread."],
    ar: ["أرنب الاسم — عسلي", "بالاسم ✨", "فرو عسلي واسم بخيط بنفسجي."] },
  { img: "name-teddy", cats: ["personal", "plush"], tag: "name",
    en: ["Name Sweater Teddy", "Personalized ✨", "A tiny knitted sweater with their name on it."],
    ar: ["دبدوب الكنزة بالاسم", "بالاسم ✨", "كنزة صغيرة محبوكة عليها اسم من تحب."] },
  { img: "pastel-teddies", cats: ["plush"], tag: "new",
    en: ["Pastel Teddy Bears", "New colours", "Yellow, white, peach or sky — pick your colour."],
    ar: ["دباديب الباستيل", "ألوان جديدة", "أصفر، أبيض، خوخي أو سماوي — اختر لونك."] },
  { img: "lotso", cats: ["disney", "plush"], tag: "disney",
    en: ["Lotso — Toy Story 5", "Disney · Pixar", "Lotso is here. To infinity and beyond! 🚀"],
    ar: ["لوتسو — توي ستوري 5", "ديزني · بيكسار", "لوتسو وصل! إلى ما لا نهاية وما بعدها 🚀"] },
  { img: "butter-squishy", cats: ["squish", "viral"], tag: "hot",
    en: ["Butter Squishy", "Squishy 🧈", "Looks exactly like butter. Squish only — do not spread."],
    ar: ["سكويشي الزبدة", "سكويشي 🧈", "شكله زبدة تمامًا… بس للضغط، مش للخبز."] },
  { img: "bun-squishy", cats: ["squish"], tag: "new",
    en: ["Mystery Bun Squishy", "Mystery 🎁", "Which colour will you get? Open it and see."],
    ar: ["سكويشي البان المفاجأة", "مفاجأة 🎁", "أي لون رح يطلعلك؟ افتحه وشوف."] },
  { img: "cat-pillow", cats: ["plush"], tag: "",
    en: ["Long Cat Pillow", "Cuddle size", "An extra-long cat for hugs and naps."],
    ar: ["مخدة القطة الطويلة", "حجم حضن", "قطة طويلة كتير للحضن والقيلولة."] },
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
  const items = PRODUCTS.filter((p) => filter === "all" || p.cats.includes(filter));
  grid.innerHTML = items
    .map((p) => {
      const [name, tag, desc] = p[lang];
      return `
        <article class="product">
          <div class="product-media">
            <img src="img/${p.img}.jpg" alt="${name}" loading="lazy" />
            <span class="product-tag ${p.tag}">${tag}</span>
          </div>
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

function setupStudio() {
  form.addEventListener("change", updateStudio);
  nameInput.addEventListener("input", () => {
    nameTouched = true;
    updateStudio();
  });
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
  updateStudio();
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
setupMenu();
setupReveal();

document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "en" ? "ar" : "en");
});

// Re-fit the name once the embroidery fonts have loaded.
if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateStudio);

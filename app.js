// Mr Classy — demo
// Order line from the shop's Instagram bio (wa.me/71184134), with Lebanon's country code.
const WHATSAPP_NUMBER = "96171184134";

const STRINGS = {
  en: {
    pageTitle: "Mr Classy · Original Perfumes",
    toggle: "ع",
    toggleLabel: "التبديل إلى العربية",
    "brand.sub": "Perfume outlet",
    "nav.collection": "Collection",
    "nav.testers": "Bottle or tester",
    "nav.finder": "Scent finder",
    "nav.delivery": "Delivery",
    "cta.order": "Order",
    "hero.eyebrow": "Original perfumes & testers · Lebanon",
    "hero.title": "The signature scent,<br><em>without the boutique price.</em>",
    "hero.lead": "Mr Classy is a perfume outlet: authentic designer and niche fragrances — full bottles and testers — hand-checked and delivered anywhere in Lebanon.",
    "hero.cta1": "Explore the collection",
    "hero.cta2": "Find my scent",
    "hero.featured": "Featured",
    "hero.alt": "Emporio Armani Stronger With You Absolutely",
    "trust.1": "100% original",
    "trust.2": "Outlet prices",
    "trust.3": "All over Lebanon",
    "col.eyebrow": "The collection",
    "col.title": "On the shelf this season",
    "col.lead": "Tap any bottle for its notes, then ask for the bottle or tester price on WhatsApp.",
    "f.all": "All",
    "f.him": "For him",
    "f.her": "For her",
    "f.niche": "Niche",
    "f.sets": "Gift sets",
    "badge.niche": "Niche",
    "badge.set": "Gift set",
    "product.hint": "View notes",
    "product.cta": "Ask the price",
    "tt.eyebrow": "The outlet secret",
    "tt.title": "Bottle or tester?",
    "tt.lead": "Same original juice, two ways to buy it.",
    "tt.b.k": "For gifting",
    "tt.b.t": "Full bottle",
    "tt.b.1": "Sealed in its original retail box",
    "tt.b.2": "Cap, cellophane and full presentation",
    "tt.b.3": "Ready to wrap and give",
    "tt.or": "or",
    "tt.t.k": "For wearing",
    "tt.t.t": "Tester",
    "tt.t.1": "The same original perfume, same size",
    "tt.t.2": "Plain box, sometimes without a cap",
    "tt.t.3": "Noticeably lower price",
    "tt.note": "Not sure which one? Tell us who it's for and we'll suggest the better deal.",
    "fd.eyebrow": "Scent finder",
    "fd.title": "Three questions, three bottles.",
    "fd.q1": "Who is it for?",
    "fd.him": "Him",
    "fd.her": "Her",
    "fd.any": "Either",
    "fd.q2": "Which mood?",
    "fd.q3": "When will they wear it?",
    "fd.day": "Day & office",
    "fd.night": "Evenings out",
    "fd.rank": ["Best match", "Also try", "Wildcard"],
    "fam.sweet": "Sweet & warm",
    "fam.floral": "Floral",
    "fam.fresh": "Fresh & clean",
    "fam.woody": "Woody & oud",
    "dl.eyebrow": "Ordering",
    "dl.title": "From our shelf to your door.",
    "dl.1t": "Choose",
    "dl.1": "Pick a scent here or on our Instagram.",
    "dl.2t": "Message",
    "dl.2": "Tap WhatsApp — the perfume and format are already written for you.",
    "dl.3t": "Receive",
    "dl.3": "We confirm the price and deliver anywhere in Lebanon.",
    "dl.k": "Delivery available all over Lebanon",
    "dl.wa": "Chat on WhatsApp",
    "dl.ig": "Customer feedback",
    "foot.line": "Original perfumes and testers · Outlet prices · Lebanon",
    "foot.fine": "Demo website. Bottle images are illustrations; brand names belong to their owners.",
    "qv.format": "I'd like the price for",
    "qv.bottle": "Full bottle",
    "qv.tester": "Tester",
    "qv.cta": "Ask the price on WhatsApp",
    "qv.noNotes": "Ask us on WhatsApp for the full scent profile.",
    "notes.top": "Top",
    "notes.heart": "Heart",
    "notes.base": "Base",
    "wa.general": "Hi Mr Classy! I'd like to ask about your perfumes.",
    "wa.price": (name, format) => `Hi Mr Classy! What's the price of ${name}${format ? ` (${format})` : ""}?`,
  },
  ar: {
    pageTitle: "مستر كلاسي · عطور أصلية",
    toggle: "EN",
    toggleLabel: "Switch to English",
    "brand.sub": "أوتلت عطور",
    "nav.collection": "التشكيلة",
    "nav.testers": "علبة أو تستر",
    "nav.finder": "اختر عطرك",
    "nav.delivery": "التوصيل",
    "cta.order": "اطلب",
    "hero.eyebrow": "عطور أصلية وتسترات · لبنان",
    "hero.title": "عطرك المميّز،<br><em>بلا أسعار البوتيك.</em>",
    "hero.lead": "مستر كلاسي أوتلت عطور: عطور عالمية ونيش أصلية — علب كاملة وتسترات — نفحصها بأنفسنا ونوصلها لكل لبنان.",
    "hero.cta1": "تصفّح التشكيلة",
    "hero.cta2": "ساعدني أختار",
    "hero.featured": "مختار",
    "hero.alt": "إمبوريو أرماني سترونغر ويذ يو أبسولوتلي",
    "trust.1": "أصلي ١٠٠٪",
    "trust.2": "أسعار أوتلت",
    "trust.3": "توصيل لكل لبنان",
    "col.eyebrow": "التشكيلة",
    "col.title": "على رفوفنا هذا الموسم",
    "col.lead": "اضغط على أي عطر لترى نوتاته، ثم اسأل عن سعر العلبة أو التستر على واتساب.",
    "f.all": "الكل",
    "f.him": "له",
    "f.her": "لها",
    "f.niche": "نيش",
    "f.sets": "هدايا",
    "badge.niche": "نيش",
    "badge.set": "طقم هدية",
    "product.hint": "النوتات",
    "product.cta": "اسأل عن السعر",
    "tt.eyebrow": "سرّ الأوتلت",
    "tt.title": "علبة أو تستر؟",
    "tt.lead": "نفس العطر الأصلي، بطريقتين.",
    "tt.b.k": "للهدية",
    "tt.b.t": "علبة كاملة",
    "tt.b.1": "مختومة بعلبتها الأصلية",
    "tt.b.2": "مع الغطاء والتغليف الكامل",
    "tt.b.3": "جاهزة للتغليف والإهداء",
    "tt.or": "أو",
    "tt.t.k": "للاستعمال",
    "tt.t.t": "تستر",
    "tt.t.1": "نفس العطر الأصلي وبنفس الحجم",
    "tt.t.2": "علبة بسيطة، وأحياناً بلا غطاء",
    "tt.t.3": "سعر أقل بشكل واضح",
    "tt.note": "محتار؟ قل لنا لمن العطر ونقترح عليك الخيار الأوفر.",
    "fd.eyebrow": "اختر عطرك",
    "fd.title": "ثلاثة أسئلة، ثلاثة عطور.",
    "fd.q1": "لمن العطر؟",
    "fd.him": "له",
    "fd.her": "لها",
    "fd.any": "الاثنان",
    "fd.q2": "أي طابع؟",
    "fd.q3": "متى سيستعمله؟",
    "fd.day": "النهار والعمل",
    "fd.night": "السهرات",
    "fd.rank": ["الأنسب", "جرّب أيضاً", "مفاجأة"],
    "fam.sweet": "دافئ وحلو",
    "fam.floral": "زهري",
    "fam.fresh": "منعش ونظيف",
    "fam.woody": "خشبي وعود",
    "dl.eyebrow": "الطلب",
    "dl.title": "من رفّنا إلى باب بيتك.",
    "dl.1t": "اختر",
    "dl.1": "اختر عطرك من هنا أو من إنستغرام.",
    "dl.2t": "راسلنا",
    "dl.2": "اضغط واتساب — اسم العطر ونوعه مكتوبان مسبقاً.",
    "dl.3t": "استلم",
    "dl.3": "نؤكد لك السعر ونوصل لكل المناطق اللبنانية.",
    "dl.k": "توصيل لكل لبنان",
    "dl.wa": "راسلنا على واتساب",
    "dl.ig": "آراء الزبائن",
    "foot.line": "عطور أصلية وتسترات · أسعار أوتلت · لبنان",
    "foot.fine": "موقع تجريبي. صور العطور رسوم توضيحية، والعلامات التجارية لأصحابها.",
    "qv.format": "أريد سعر",
    "qv.bottle": "العلبة الكاملة",
    "qv.tester": "التستر",
    "qv.cta": "اسأل عن السعر على واتساب",
    "qv.noNotes": "اسألنا على واتساب عن تفاصيل العطر.",
    "notes.top": "الافتتاح",
    "notes.heart": "القلب",
    "notes.base": "القاعدة",
    "wa.general": "مرحبا مستر كلاسي! بدي اسأل عن العطور.",
    "wa.price": (name, format) => `مرحبا مستر كلاسي! قديش سعر ${name}${format ? ` (${format})` : ""}؟`,
  },
};

const NOTE_AR = {
  "pink pepper": "فلفل وردي", juniper: "عرعر", mandarin: "يوسفي", toffee: "توفي", cinnamon: "قرفة",
  lavender: "خزامى", vanilla: "فانيليا", "tonka bean": "حبوب التونكا", amber: "عنبر", suede: "شامواه",
  rum: "روم", bergamot: "برغموت", cedar: "أرز", patchouli: "باتشولي", "black currant": "كشمش أسود",
  "orange blossom": "زهر البرتقال", jasmine: "ياسمين", musk: "مسك", ambergris: "عنبر رمادي",
  cardamom: "هيل", iris: "سوسن", woods: "أخشاب", mint: "نعناع", benzoin: "جاوي", honey: "عسل",
  tobacco: "تبغ", peony: "فاوانيا", rose: "ورد", "white musk": "مسك أبيض", grapefruit: "جريب فروت",
  ginger: "زنجبيل", ambrox: "أمبروكس",
};

// Notes follow the houses' published pyramids; items without one show "ask us".
// family/when/who feed the scent finder.
const PRODUCTS = [
  {
    id: "swy-intensely", brand: "Emporio Armani", name: "Stronger With You Intensely",
    line: { en: "Eau de Parfum · for him", ar: "أو دو بارفان · رجالي" },
    desc: { en: "Toffee and cinnamon wrapped in vanilla — the cosy, crowd-pleasing compliment magnet.", ar: "توفي وقرفة مع فانيليا — دافئ ومحبوب ويجذب المديح." },
    cats: ["him"], who: "him", family: "sweet", when: "night",
    notes: { top: ["pink pepper", "juniper", "mandarin"], heart: ["toffee", "cinnamon", "lavender"], base: ["vanilla", "tonka bean", "amber", "suede"] },
  },
  {
    id: "swy-absolutely", brand: "Emporio Armani", name: "Stronger With You Absolutely",
    line: { en: "Parfum · for him", ar: "بارفان · رجالي" },
    desc: { en: "The darker, boozier sibling: rum and vanilla with a smooth woody finish.", ar: "الأخ الأغمق: روم وفانيليا مع لمسة خشبية ناعمة." },
    cats: ["him"], who: "him", family: "sweet", when: "night",
    notes: { top: ["rum", "bergamot"], heart: ["lavender"], base: ["vanilla", "patchouli", "cedar"] },
  },
  {
    id: "le-male-elixir", brand: "Jean Paul Gaultier", name: "Le Male Elixir",
    line: { en: "Parfum · for him", ar: "بارفان · رجالي" },
    desc: { en: "Honey, tobacco and tonka in the golden torso — rich, sweet and long-lasting.", ar: "عسل وتبغ وتونكا في الزجاجة الذهبية — غني وحلو ويدوم طويلاً." },
    cats: ["him"], who: "him", family: "sweet", when: "night",
    notes: { top: ["lavender", "mint"], heart: ["vanilla", "benzoin"], base: ["honey", "tonka bean", "tobacco"] },
  },
  {
    id: "le-male-parfum", brand: "Jean Paul Gaultier", name: "Le Male Le Parfum",
    line: { en: "Eau de Parfum Intense · for him", ar: "أو دو بارفان إنتنس · رجالي" },
    desc: { en: "Cardamom, iris and vanilla — the classic Le Male, dressed for the evening.", ar: "هيل وسوسن وفانيليا — لو مال الكلاسيكي بنسخة مسائية." },
    cats: ["him"], who: "him", family: "sweet", when: "day",
    notes: { top: ["cardamom"], heart: ["lavender", "iris"], base: ["vanilla", "woods"] },
  },
  {
    id: "tygar", brand: "Bvlgari", name: "Le Gemme Tygar",
    line: { en: "Eau de Parfum · for him", ar: "أو دو بارفان · رجالي" },
    desc: { en: "Sparkling grapefruit over a clean ambery wood — bright, sharp and unmistakably niche.", ar: "جريب فروت لامع فوق خشب عنبري نظيف — منعش وحاد ونيش بامتياز." },
    cats: ["him", "niche"], who: "him", family: "fresh", when: "day", niche: true,
    notes: { top: ["grapefruit"], heart: ["ginger"], base: ["ambrox", "woods"] },
  },
  {
    id: "libre", brand: "Yves Saint Laurent", name: "Libre",
    line: { en: "Eau de Parfum · for her", ar: "أو دو بارفان · نسائي" },
    desc: { en: "Lavender meets orange blossom on a warm vanilla base — free, elegant, everyday.", ar: "خزامى وزهر البرتقال على قاعدة فانيليا دافئة — أنيق ويومي." },
    cats: ["her"], who: "her", family: "floral", when: "day",
    notes: { top: ["lavender", "mandarin", "black currant"], heart: ["orange blossom", "jasmine"], base: ["vanilla", "musk", "cedar", "ambergris"] },
  },
  {
    id: "libre-intense", brand: "Yves Saint Laurent", name: "Libre Intense",
    line: { en: "Eau de Parfum Intense · for her", ar: "أو دو بارفان إنتنس · نسائي" },
    desc: { en: "Libre turned up for the night: deeper orange blossom, richer vanilla and amber.", ar: "ليبر بنسخة السهرة: زهر برتقال أعمق وفانيليا وعنبر أغنى." },
    cats: ["her"], who: "her", family: "floral", when: "night",
    notes: { top: ["lavender", "mandarin", "bergamot"], heart: ["orange blossom", "jasmine"], base: ["vanilla", "tonka bean", "amber"] },
  },
  {
    id: "miss-dior", brand: "Dior", name: "Miss Dior Blooming Bouquet",
    line: { en: "Eau de Toilette · for her", ar: "أو دو تواليت · نسائي" },
    desc: { en: "A soft, fresh bouquet of peony and rose — light enough for every day.", ar: "باقة ناعمة ومنعشة من الفاوانيا والورد — خفيفة لكل يوم." },
    cats: ["her"], who: "her", family: "floral", when: "day",
    notes: { top: ["bergamot"], heart: ["peony", "rose"], base: ["white musk"] },
  },
  {
    id: "clive-xxi", brand: "Clive Christian", name: "XXI Art Deco Blonde Amber",
    line: { en: "Perfume · unisex", ar: "بيرفيوم · للجنسين" },
    desc: { en: "From the crown-capped house: a golden, glowing amber made for statement evenings.", ar: "من دار التاج: عنبر ذهبي متوهّج لسهرات لا تُنسى." },
    cats: ["niche"], who: "any", family: "woody", when: "night", niche: true,
  },
  {
    id: "tubereuse-astrale", brand: "Maison Crivelli", name: "Tubéreuse Astrale",
    line: { en: "Extrait de Parfum · unisex", ar: "إكستريه دو بارفان · للجنسين" },
    desc: { en: "A bold, creamy tuberose with a twist — for those who want to be remembered.", ar: "مسك الروم كريمي وجريء — لمن يريد أن يُتذكّر." },
    cats: ["niche", "her"], who: "any", family: "floral", when: "night", niche: true,
  },
  {
    id: "ibraq", brand: "Ibraq", name: "Ibraq Collection",
    line: { en: "Eau de Parfum · unisex", ar: "أو دو بارفان · للجنسين" },
    desc: { en: "Calligraphy-wrapped bottles from the house of Ibraq — ask us which shades are in.", ar: "زجاجات مزيّنة بالخط العربي من دار إبراق — اسألنا عن المتوفّر." },
    cats: ["niche"], who: "any", family: "woody", when: "night", niche: true,
  },
  {
    id: "set-dior-minis", brand: "Dior", name: "Miniatures Collection",
    line: { en: "Gift set · 7 miniatures", ar: "طقم هدية · ٧ عطور صغيرة" },
    desc: { en: "A tasting flight of Dior scents in one white box — the perfect gift for a perfume lover.", ar: "مجموعة عطور ديور الصغيرة في علبة واحدة — هدية مثالية لعاشق العطور." },
    cats: ["sets", "her"], who: "any", family: "floral", when: "day", set: true,
  },
  {
    id: "set-miss-dior", brand: "Dior", name: "Miss Dior Coffret",
    line: { en: "Gift set · for her", ar: "طقم هدية · نسائي" },
    desc: { en: "Miss Dior in three pieces, boxed in gold and ready to give.", ar: "ميس ديور بثلاث قطع، في علبة ذهبية جاهزة للإهداء." },
    cats: ["sets", "her"], who: "her", family: "floral", when: "day", set: true,
  },
  {
    id: "set-chloe", brand: "Chloé", name: "Chloé Gift Set",
    line: { en: "Gift set · for her", ar: "طقم هدية · نسائي" },
    desc: { en: "The signature rose of Chloé with travel sizes — a gift that looks as good as it smells.", ar: "وردة كلوي الشهيرة مع أحجام للسفر — هدية جميلة شكلاً ورائحة." },
    cats: ["sets", "her"], who: "her", family: "floral", when: "day", set: true,
  },
  {
    id: "set-ibraq", brand: "Ibraq", name: "Discovery Set",
    line: { en: "Gift set · unisex", ar: "طقم هدية · للجنسين" },
    desc: { en: "Try the Ibraq line before you commit to a full bottle.", ar: "جرّب عطور إبراق قبل أن تختار العلبة الكاملة." },
    cats: ["sets", "niche"], who: "any", family: "woody", when: "night", set: true, niche: true,
  },
];

let lang = "en";
let filter = "all";
let qvList = PRODUCTS;
let qvIndex = 0;

const t = (key) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
const fullName = (p) => `${p.brand} ${p.name}`;
const noteName = (n) => (lang === "ar" ? NOTE_AR[n] ?? n : n);

// ---------- Collection ----------
const visibleProducts = () => PRODUCTS.filter((p) => filter === "all" || p.cats.includes(filter));

function renderProducts() {
  const grid = document.getElementById("products");
  grid.innerHTML = visibleProducts()
    .map((p, i) => {
      const badge = p.set ? t("badge.set") : p.niche ? t("badge.niche") : "";
      return `
        <article class="product" style="animation-delay:${i * 40}ms">
          <button type="button" class="product-media" data-open="${p.id}" data-hint="${t("product.hint")}" aria-label="${fullName(p)}">
            <img src="img/${p.id}.svg" alt="${fullName(p)}" loading="lazy" width="600" height="750" />
            ${badge ? `<span class="product-badge">${badge}</span>` : ""}
          </button>
          <div class="product-body">
            <p class="product-brand">${p.brand}</p>
            <h3>${p.name}</h3>
            <p class="product-line">${p.line[lang]}</p>
            <a class="product-cta" href="${waLink(STRINGS[lang]["wa.price"](fullName(p)))}" target="_blank" rel="noopener">
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

// ---------- Quick view ----------
const qv = document.getElementById("quickview");

function quickViewMessage(p) {
  const format = document.querySelector('input[name="format"]:checked').value;
  return STRINGS[lang]["wa.price"](fullName(p), p.set ? "" : t(`qv.${format}`));
}

function fillQuickView() {
  const p = qvList[qvIndex];
  const img = document.getElementById("qvImg");
  img.src = `img/${p.id}.svg`;
  img.alt = fullName(p);
  document.getElementById("qvBrand").textContent = p.brand;
  document.getElementById("qvName").textContent = p.name;
  document.getElementById("qvLine").textContent = p.line[lang];
  document.getElementById("qvDesc").textContent = p.desc[lang];

  const notes = document.getElementById("qvNotes");
  if (p.notes) {
    notes.innerHTML = `<dl>${["top", "heart", "base"]
      .map((tier) => `<div><dt>${t(`notes.${tier}`)}</dt><dd>${p.notes[tier].map(noteName).join(" · ")}</dd></div>`)
      .join("")}</dl>`;
  } else {
    notes.innerHTML = `<p class="no-notes">${t("qv.noNotes")}</p>`;
  }

  document.getElementById("qvFormat").hidden = Boolean(p.set);
  document.getElementById("qvWa").href = waLink(quickViewMessage(p));
  document.getElementById("qvCount").textContent = `${qvIndex + 1} / ${qvList.length}`;
}

function openQuickView(id, list) {
  qvList = list;
  qvIndex = Math.max(0, list.findIndex((p) => p.id === id));
  document.querySelector('input[name="format"][value="bottle"]').checked = true;
  fillQuickView();
  if (typeof qv.showModal === "function") qv.showModal();
  else qv.setAttribute("open", "");
}

function stepQuickView(dir) {
  const n = qvList.length;
  qvIndex = (qvIndex + dir + n) % n;
  fillQuickView();
}

function setupQuickView() {
  document.getElementById("products").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openQuickView(btn.dataset.open, visibleProducts());
  });
  document.getElementById("finderResults").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open]");
    if (btn) openQuickView(btn.dataset.open, finderMatches());
  });
  document.getElementById("qvClose").addEventListener("click", () => qv.close());
  document.getElementById("qvPrev").addEventListener("click", () => stepQuickView(-1));
  document.getElementById("qvNext").addEventListener("click", () => stepQuickView(1));
  document.getElementById("qvFormat").addEventListener("change", () => {
    document.getElementById("qvWa").href = waLink(quickViewMessage(qvList[qvIndex]));
  });
  qv.addEventListener("click", (e) => {
    if (e.target === qv) qv.close();
  });
  qv.addEventListener("keydown", (e) => {
    const rtl = document.documentElement.dir === "rtl";
    if (e.key === "ArrowRight") stepQuickView(rtl ? -1 : 1);
    if (e.key === "ArrowLeft") stepQuickView(rtl ? 1 : -1);
  });
}

// ---------- Scent finder ----------
const finderForm = document.getElementById("finderForm");

function finderMatches() {
  const a = Object.fromEntries(new FormData(finderForm));
  const score = (p) =>
    (a.who === "any" || p.who === a.who ? 4 : p.who === "any" ? 2 : -6) +
    (p.family === a.family ? 5 : 0) +
    (p.when === a.when ? 2 : 0) -
    (p.set ? 1 : 0);
  return PRODUCTS.map((p, i) => ({ p, s: score(p), i }))
    .sort((x, y) => y.s - x.s || x.i - y.i)
    .slice(0, 3)
    .map((x) => x.p);
}

function renderFinder() {
  const ranks = t("fd.rank");
  document.getElementById("finderResults").innerHTML = finderMatches()
    .map(
      (p, i) => `
        <button type="button" class="match" data-open="${p.id}" style="animation-delay:${i * 90}ms">
          <img src="img/${p.id}.svg" alt="" width="600" height="750" />
          <span>
            <p class="rank">${ranks[i]}</p>
            <h3>${p.name}</h3>
            <p>${p.brand} · ${t(`fam.${p.family}`)}</p>
          </span>
        </button>`
    )
    .join("");
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
  document.querySelectorAll("[data-wa-general]").forEach((el) => {
    el.href = waLink(t("wa.general"));
    el.target = "_blank";
    el.rel = "noopener";
  });

  const toggle = document.getElementById("langToggle");
  toggle.textContent = t("toggle");
  toggle.setAttribute("aria-label", t("toggleLabel"));

  renderProducts();
  renderFinder();
  if (qv.open) fillQuickView();
  try {
    localStorage.setItem("mrclassy-lang", lang);
  } catch (e) {}
}

// ---------- Misc ----------
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
  saved = localStorage.getItem("mrclassy-lang") || "en";
} catch (e) {}

applyLang(saved === "ar" ? "ar" : "en");
setupQuickView();
setupMenu();
setupReveal();

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => setFilter(chip.dataset.filter));
});
finderForm.addEventListener("change", renderFinder);
document.getElementById("langToggle").addEventListener("click", () => {
  applyLang(lang === "en" ? "ar" : "en");
});

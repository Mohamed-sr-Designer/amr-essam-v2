/* Default site content. The dashboard overrides this; this file is the fallback. */
window.AE_DEFAULT = {
  version: 1,
  settings: {
    whatsapp: "201066784167",
    waMessage: { en: "Hi Amr, I'd like to talk about scaling my ads.", ar: "أهلًا عمرو، عايز أتكلم معاك عن سكيل إعلاناتي." },
    waPopup: { en: "Hi 👋 Got a question about your ads? Message me directly.", ar: "أهلًا 👋 عندك سؤال عن إعلاناتك؟ كلمني على طول." },
    waDelay: 6,
    instagram: "https://www.instagram.com/_amr_essam_/",
    linkedin: "https://www.linkedin.com/in/amr-essam-472282201/",
    sections: { clients: true, campaign: true, cases: true, industries: true, method: true, reels: true },
    meeting: {
      enabled: true,
      defaultMode: "book",
      duration: 30,
      workDays: [6, 0, 1, 2, 3, 4],
      start: "11:00",
      end: "20:00",
      daysAhead: 7,
      noticeHours: 2,
      bookingUrl: "",
      title: { en: "Book a free 30-minute call", ar: "احجز مكالمة مجانية 30 دقيقة" },
      hint: { en: "Pick a time that works. Cairo time.", ar: "اختار المعاد اللي يناسبك. بتوقيت القاهرة." }
    }
  },
  clients: {
    title: { en: "Brands I've Scaled", ar: "براندات اشتغلت معاها" },
    speed: 30,
    items: [
      { name: "Brand 01", logo: "" }, { name: "Brand 02", logo: "" }, { name: "Brand 03", logo: "" }, { name: "Brand 04", logo: "" },
      { name: "Brand 05", logo: "" }, { name: "Brand 06", logo: "" }, { name: "Brand 07", logo: "" }, { name: "Brand 08", logo: "" }
    ]
  },
  hero: {
    badge: { en: "Senior Performance Marketer · Paid social, Email & SMS", ar: "Senior Performance Marketer · إعلانات، إيميل وSMS" },
    title: { en: "I Help Brands Turn Ad Spend Into Revenue.", ar: "بساعد البراندات تحوّل الصرف الإعلاني لمبيعات." },
    sub1: { en: "I'm Amr Essam, a media buyer focused on one thing: measurable results from every pound you put into Meta and TikTok.", ar: "أنا عمرو عصام، ميديا باير مركّز على حاجة واحدة: نتيجة تتقاس من كل جنيه بتحطه في Meta وTikTok." },
    sub2: { en: "Data-driven structure, sharp audience targeting, relentless creative testing and daily optimization. Likes are nice. Purchases pay.", ar: "هيكلة مبنية على الداتا، استهداف دقيق، اختبار كريتيف مستمر وتحسين يومي. اللايكات حلوة، بس المبيعات هي اللي بتدفع." },
    cta: { en: "Start scaling", ar: "ابدأ السكيل" }
  },
  services: [
    { color: "blue", icon: "meta", title: { en: "Meta Ads", ar: "إعلانات Meta" }, desc: { en: "Facebook + Instagram, built for purchases", ar: "فيسبوك وإنستجرام، مبنية على المبيعات" } },
    { color: "gray", icon: "tiktok", title: { en: "TikTok Ads", ar: "إعلانات TikTok" }, desc: { en: "Native creative, spark ads, fast hooks", ar: "كريتيف نيتيف، Spark Ads وهوكس سريعة" } },
    { color: "yellow", icon: "snap", title: { en: "Snapchat Ads", ar: "إعلانات Snapchat" }, desc: { en: "Story ads and lenses for Gen Z buyers", ar: "ستوري آدز وعدسات لجمهور Gen Z" } },
    { color: "mint", icon: "email", mw: true, title: { en: "Email Marketing", ar: "الإيميل ماركتنج" }, desc: { en: "Flows, abandoned carts, win-back campaigns", ar: "فلوز، سلات متروكة، وحملات استرجاع العملاء" } },
    { color: "orange", icon: "sms", mw: true, title: { en: "SMS Campaigns", ar: "حملات SMS" }, desc: { en: "Offers and reminders that land in seconds", ar: "عروض وتذكيرات بتوصل في ثواني" } },
    { color: "lilac", icon: "target", title: { en: "Audience targeting", ar: "استهداف الجمهور" }, desc: { en: "Lookalikes, stacks, retargeting windows", ar: "Lookalikes وريتارجتنج متفصل على الفانل" } },
    { color: "pink", icon: "test", title: { en: "Creative testing", ar: "اختبار الكريتيف" }, desc: { en: "Structured rounds, kill rules, scale winners", ar: "جولات منظمة، قواعد إيقاف، وسكيل للكسبان" } },
    { color: "blue", icon: "track", title: { en: "Tracking & optimization", ar: "التراكينج والتحسين" }, desc: { en: "Pixel, CAPI and daily budget moves", ar: "Pixel وCAPI ونقل ميزانية يومي" } }
  ],
  stats: [
    { value: "2.21M", label: { en: "EGP revenue from one campaign", ar: "جنيه مبيعات من حملة واحدة" } },
    { value: "9.92x", label: { en: "Average ROAS at 223K spend", ar: "متوسط ROAS على صرف 223 ألف" } },
    { value: "1,878", label: { en: "Purchases tracked", ar: "عملية شراء متتبَّعة" } },
    { value: "24.16x", label: { en: "Best ad ROAS", ar: "أعلى ROAS لإعلان" } }
  ],
  campaign: {
    title: { en: "The Campaign That Did 2.2 Million.", ar: "الحملة اللي عملت 2.2 مليون." },
    lede: { en: "One e-commerce campaign, the real rows from Ads Manager, sorted by spend. The more budget it took, the more it returned.", ar: "حملة واحدة لمتجر إلكتروني، الصفوف الحقيقية من Ads Manager مرتبة بالصرف. كل ما الميزانية زادت، العائد زاد." },
    windows: [
      {
        name: { en: "Full run", ar: "الحملة كاملة" },
        proof: "assets/proof/p6.jpg",
        total: { spend: 223263.81, purchases: 1878, value: 2214017.88, roas: 9.92, cpp: 118.88 },
        rows: [
          { spend: 73408.12, purchases: 720, value: 860816.37, roas: 11.73, cpp: 101.96 },
          { spend: 4059.21, purchases: 30, value: 51929.00, roas: 12.79, cpp: 135.31 },
          { spend: 3753.29, purchases: 46, value: 90672.98, roas: 24.16, cpp: 81.59 },
          { spend: 3212.78, purchases: 93, value: 37619.25, roas: 11.71, cpp: 34.55 },
          { spend: 1209.03, purchases: 7, value: 16158.00, roas: 13.36, cpp: 172.72 }
        ]
      },
      {
        name: { en: "Oct 26 to Nov 10, 2026", ar: "26 أكتوبر إلى 10 نوفمبر 2026" },
        proof: "assets/proof/p5.jpg",
        total: { spend: 104861.56, purchases: 986, value: 1082912.50, roas: 10.33, cpp: 106.35 },
        rows: [
          { spend: 34875.63, purchases: 294, value: 357125.96, roas: 10.24, cpp: 118.62 },
          { spend: 3212.78, purchases: 92, value: 35490.25, roas: 11.05, cpp: 34.92 },
          { spend: 1598.81, purchases: 10, value: 20488.00, roas: 12.81, cpp: 159.88 },
          { spend: 1346.14, purchases: 11, value: 20967.00, roas: 15.58, cpp: 122.38 },
          { spend: 1209.03, purchases: 6, value: 14078.00, roas: 11.64, cpp: 201.51 }
        ]
      }
    ]
  },
  cases: [
    { visible: true, rank: 2214017, img: "assets/proof/p6.jpg", tag: { en: "E-commerce · Meta Ads · Scale", ar: "متجر إلكتروني · Meta Ads · سكيل" },
      title: { en: "EGP 223K spent, EGP 2.21M back", ar: "صرف 223 ألف، رجع 2.21 مليون" },
      body: { en: "One campaign scaled past 220K in spend while holding a 9.92x average ROAS. The lead ad set alone took 73K and returned 860K across 720 purchases.", ar: "حملة واحدة اتعمل لها سكيل لأكتر من 220 ألف صرف وحافظت على متوسط ROAS 9.92x. أكبر مجموعة لوحدها صرفت 73 ألف ورجّعت 860 ألف من 720 عملية شراء." },
      stats: [ { v: "2.21M", l: { en: "Revenue, EGP", ar: "مبيعات، ج.م" } }, { v: "9.92x", l: { en: "Avg ROAS", ar: "متوسط ROAS" } }, { v: "1,878", l: { en: "Purchases", ar: "عملية شراء" } } ] },
    { visible: true, rank: 1082912, img: "assets/proof/p5.jpg", tag: { en: "E-commerce · 16-day sprint", ar: "متجر إلكتروني · 16 يوم" },
      title: { en: "EGP 1.08M in 16 days", ar: "1.08 مليون في 16 يوم" },
      body: { en: "Oct 26 to Nov 10: 104.8K spent, 986 purchases and a 10.33x average ROAS. One ad set hit 15.58x while the main one carried 357K in sales.", ar: "من 26 أكتوبر لـ 10 نوفمبر: صرف 104.8 ألف، 986 عملية شراء ومتوسط ROAS 10.33x. مجموعة وصلت 15.58x والمجموعة الأساسية شالت 357 ألف مبيعات." },
      stats: [ { v: "1.08M", l: { en: "Revenue, EGP", ar: "مبيعات، ج.م" } }, { v: "10.33x", l: { en: "Avg ROAS", ar: "متوسط ROAS" } }, { v: "986", l: { en: "Purchases", ar: "عملية شراء" } } ] },
    { visible: true, rank: 631449, img: "assets/proof/p4.jpg", tag: { en: "E-commerce · Single day", ar: "متجر إلكتروني · يوم واحد" },
      title: { en: "EGP 631K in gross sales in one day", ar: "631 ألف جنيه مبيعات في يوم واحد" },
      body: { en: "642 orders in a single day at a 2.52% conversion rate, with 50+ orders still waiting to ship by night.", ar: "642 أوردر في يوم واحد بمعدل تحويل 2.52%، وأكتر من 50 أوردر مستني الشحن آخر اليوم." },
      stats: [ { v: "631K", l: { en: "Gross sales, EGP", ar: "مبيعات، ج.م" } }, { v: "642", l: { en: "Orders", ar: "أوردر" } }, { v: "2.52%", l: { en: "Conversion", ar: "تحويل" } } ] },
    { visible: true, rank: 137897, img: "assets/proof/p2.jpg", tag: { en: "Shopify · Growth", ar: "Shopify · نمو" },
      title: { en: "Gross sales up 361%", ar: "المبيعات زادت 361%" },
      body: { en: "Sep 1 to Oct 17 closed at EGP 137,897 in total sales against the previous period. Orders tripled.", ar: "من 1 سبتمبر لـ 17 أكتوبر قفل على 137,897 ج.م إجمالي مبيعات مقارنة بالفترة اللي قبلها. الأوردرات اتضاعفت 3 مرات." },
      stats: [ { v: "+361%", l: { en: "Gross sales", ar: "المبيعات" } }, { v: "+200%", l: { en: "Orders", ar: "الأوردرات" } }, { v: "137.9K", l: { en: "Total, EGP", ar: "الإجمالي، ج.م" } } ] },
    { visible: true, rank: 94960, img: "assets/proof/p3.jpg", tag: { en: "E-commerce · Meta Ads", ar: "متجر إلكتروني · Meta Ads" },
      title: { en: "11.75x blended ROAS in 30 days", ar: "ROAS إجمالي 11.75x في 30 يوم" },
      body: { en: "EGP 8,081 spent, EGP 94,960 in purchases. Three ad sets above 7x, the best at 12.97x.", ar: "صرف 8,081 ج.م، مشتريات 94,960 ج.م. ثلاث مجموعات فوق 7x وأفضلهم 12.97x." },
      stats: [ { v: "11.75x", l: { en: "Blended ROAS", ar: "ROAS إجمالي" } }, { v: "12.97x", l: { en: "Top ad set", ar: "أعلى مجموعة" } }, { v: "94.9K", l: { en: "Revenue, EGP", ar: "مبيعات، ج.م" } } ] }
  ],
  industries: [
    { t: { en: "E-commerce", ar: "التجارة الإلكترونية" }, k: { en: "ROAS · AOV · repeat purchase", ar: "ROAS · متوسط الأوردر · تكرار الشراء" } },
    { t: { en: "Real estate", ar: "العقارات" }, k: { en: "Qualified leads · cost per lead", ar: "ليدز مؤهلة · تكلفة الليد" } },
    { t: { en: "Clinics & healthcare", ar: "العيادات والرعاية الصحية" }, k: { en: "Booked appointments", ar: "حجوزات فعلية" } },
    { t: { en: "Automotive", ar: "السيارات" }, k: { en: "Test drives · showroom visits", ar: "تيست درايف · زيارات المعرض" } },
    { t: { en: "Growth businesses", ar: "أي بيزنس عايز يكبر" }, k: { en: "Whatever moves your P&L", ar: "أي رقم بيحرّك أرباحك" } }
  ],
  method: [
    { t: { en: "Audit", ar: "مراجعة" }, p: { en: "Tracking, account history, offer and margins. Find the leaks first.", ar: "التراكينج، تاريخ الحساب، العرض والهوامش. نلاقي التسريب الأول." } },
    { t: { en: "Structure", ar: "هيكلة" }, p: { en: "One goal per campaign, clean naming, budgets you can read.", ar: "هدف واحد لكل حملة، تسميات واضحة، ميزانيات تتقري." } },
    { t: { en: "Test", ar: "اختبار" }, p: { en: "Audiences and creatives in controlled rounds with kill rules.", ar: "جماهير وكريتيف على جولات محكومة بقواعد إيقاف." } },
    { t: { en: "Scale", ar: "سكيل" }, p: { en: "Budget follows proof. Winners get room, CPMs stay watched.", ar: "الميزانية بتمشي ورا الإثبات. الكسبان ياخد مساحة." } },
    { t: { en: "Report", ar: "تقرير" }, p: { en: "Weekly numbers in plain language and the next move.", ar: "أرقام أسبوعية بلغة بسيطة والخطوة الجاية." } }
  ],
  reels: [
    { id: "r03", visible: true }, { id: "r04", visible: true }, { id: "r02", visible: true }, { id: "r06", visible: true }, { id: "r09", visible: true },
    { id: "r01", visible: true }, { id: "r05", visible: true }, { id: "r07", visible: true }, { id: "r08", visible: true }, { id: "r10", visible: true }
  ],
  form: {
    title: { en: "Let's Talk About Scaling Your Business", ar: "يلا نتكلم عن سكيل البيزنس بتاعك" },
    lede: { en: "Five quick taps. I reply on WhatsApp within 24 hours with an honest first read on your ads.", ar: "خمس خطوات سريعة. هرد عليك على واتساب خلال 24 ساعة بقراءة صريحة لإعلاناتك." },
    steps: [
      { key: "industry", type: "choice", q: { en: "What do you sell?", ar: "بتبيع إيه؟" },
        options: [ { en: "E-commerce", ar: "تجارة إلكترونية" }, { en: "Real estate", ar: "عقارات" }, { en: "Clinic / healthcare", ar: "عيادة / رعاية صحية" }, { en: "Automotive", ar: "سيارات" }, { en: "Something else", ar: "حاجة تانية" } ] },
      { key: "platforms", type: "multi", q: { en: "Where do you advertise now?", ar: "بتعلن فين دلوقتي؟" },
        options: [ { en: "Meta", ar: "Meta" }, { en: "TikTok", ar: "TikTok" }, { en: "Snapchat", ar: "Snapchat" }, { en: "All of it", ar: "كلهم" } ] },
      { key: "budget", type: "choice", q: { en: "Monthly ad budget?", ar: "ميزانيتك الإعلانية في الشهر؟" },
        options: [ { en: "Under 25K EGP", ar: "أقل من 25 ألف" }, { en: "25K to 75K EGP", ar: "من 25 لـ 75 ألف" }, { en: "75K to 200K EGP", ar: "من 75 لـ 200 ألف" }, { en: "200K+ EGP", ar: "أكتر من 200 ألف" } ] },
      { key: "goal", type: "choice", q: { en: "What matters most right now?", ar: "إيه أهم حاجة دلوقتي؟" },
        options: [ { en: "More sales", ar: "مبيعات أكتر" }, { en: "Better ROAS", ar: "ROAS أحسن" }, { en: "Qualified leads", ar: "ليدز مؤهلة" }, { en: "Launching a brand", ar: "إطلاق براند" } ] }
    ],
    thanks: { en: "Got it. Amr will message you on WhatsApp within 24 hours.", ar: "تمام. عمرو هيكلمك على واتساب خلال 24 ساعة." }
  }
};

window.APP_CONFIG = {
  meta: {
    mode: "live",
    leadId: "new-era-apps",
    demoExpiresAt: "",
    contactName: "Eric",
    contactEmail: "rankbotaiapp@gmail.com"
  },

  business: {
    name: "New Era Apps",
    tagline: "Custom Apps for Local Businesses — Live in Minutes",
    phone: "",
    email: "rankbotaiapp@gmail.com",
    logo: "axiommaster3.webp"
  },

  branding: {
    primary: "#6D28D9",
    accent: "#22D3EE",
    theme: "galaxy",
    neon: { on: true, color: "match", width: 3 }
  },

  modules: {
    hero: true,
    axiomIntro: true,
    services: true,
    about: true,
    contact: true,
    bookingForm: true,
    nav: true,
    stats: true,
    hours: false,
    reviews: false,
    gallery: false,
    faq: true,
    bannerStrips: false
  },

  content: {
    hero: {
      banner: "",
      headline: "Your Business Deserves Its Own App",
      subtext: "New Era Apps builds custom mobile apps for local businesses — booking, your own AI receptionist, and a home-screen app your customers actually use. Live in minutes, not months.",
      buttons: [
        { label: "See Pricing", icon: "tag", link: "#services" },
        { label: "Get Started", icon: "rocket", link: "#book" }
      ]
    },

    stats: [
      { icon: "smartphone", value: "Minutes", label: "To Launch" },
      { icon: "clock", value: "24/7", label: "AI Receptionist" },
      { icon: "map-pin", value: "Local", label: "Southern Oregon" }
    ],

    axiomIntro: {
      heading: "Meet AXIOM — Working For You Right Now",
      subtext: "This exact AI receptionist comes with every app I build. It answers your customers, books appointments, and captures every lead 24/7 — even while you sleep. You're talking to it right now.",
      points: [
        { icon: "clock", text: "Answers customers 24/7, even after hours" },
        { icon: "calendar-check", text: "Books appointments automatically" },
        { icon: "bell", text: "Sends every lead straight to your phone" },
        { icon: "trending-up", text: "Turns missed calls into real revenue" }
      ]
    },

    services: [
      { name: "Quick Book Mini App", price: "$25", icon: "zap", desc: "A simple booking app for your business, live fast. Perfect starting point." },
      { name: "Starter", price: "$150", icon: "smartphone", desc: "Full app — your branding, services, booking form, and the AXIOM AI receptionist." },
      { name: "Standard", price: "$500", icon: "layout", desc: "Everything in Starter plus more modules, custom content, and priority build. $250 deposit to start." },
      { name: "Pro", price: "$1,500+", icon: "crown", desc: "A fully custom 2-week build, done with you, top to bottom. $750 deposit to start." },
      { name: "Monthly Care Plan", price: "$49/mo", icon: "shield", desc: "Unlimited edits, hosting, updates, and support. Text me anytime — changes go live same day." }
    ],

    about: {
      heading: "About New Era Apps",
      body: "New Era Apps is a Southern Oregon business building custom, mobile-first apps for local shops, food trucks, barbers, and service businesses. Every app comes with AXIOM, a 24/7 AI receptionist that books customers and captures leads. Built fast, built to scale, built by someone local who actually answers the phone."
    },

    faq: [
      { q: "How fast can my app be live?", a: "A Starter app can be live the same day. Bigger custom builds take up to two weeks." },
      { q: "Do I have to be techy?", a: "Not at all. You never touch the code — I build it and run it. You just get the customers." },
      { q: "What if I need to change prices or add items?", a: "With the Monthly Care Plan, text me anytime and I'll have it updated same day. No charge." },
      { q: "What's the AI receptionist?", a: "AXIOM answers your customers' questions and books them 24/7 — even when you're closed. It comes built into every app." },
      { q: "Is there a free trial?", a: "Yes — try it, and if it doesn't bring you more customers, you don't keep it. No risk to see what it does for your business." }
    ],

    nav: [
      { label: "Pricing", icon: "tag", link: "#services" },
      { label: "Start", icon: "rocket", link: "#book" },
      { label: "Contact", icon: "map-pin", link: "#contact" }
    ]
  },

  forms: {
    endpoint: "https://formspree.io/f/xykrkdky"
  },

  orb: {
    on: true,
    label: "AXIOM",
    teaser: {
      delay: 2500,
      messages: [
        "👋 I'm AXIOM — the receptionist that comes with your app",
        "💬 Ask me about pricing or how it works",
        "🚀 Want your own app? Tap to start",
        "📲 This is a real working app — add it to your phone"
      ]
    }
  },

  reception: {
    greeting: "Hey! I'm AXIOM — the AI receptionist that comes built into every app New Era Apps makes. Want to know pricing, how fast your app can launch, or how I'd work for your business?",
    quickButtons: [
      { label: "💰 See pricing", text: "What does it cost to get an app?" },
      { label: "⚡ How fast can I launch?", text: "How fast can my app be live?" },
      { label: "🤖 What do you do?", text: "What does the AI receptionist do?" },
      { label: "🚀 I want one", text: "I'm interested in getting an app for my business." }
    ],
    bookingNotify: "https://formspree.io/f/xykrkdky",
    knowledge: {
      persona: "You are AXIOM, the AI receptionist and sales assistant for New Era Apps, a Southern Oregon company that builds custom mobile apps for local businesses. Be warm, confident, and helpful — you are talking to business owners who might want an app. Explain the tiers: Quick Book Mini App $25, Starter $150 (full app with booking and AI receptionist), Standard $500 ($250 deposit), Pro $1,500+ custom 2-week build ($750 deposit), and Monthly Care Plan $49/mo (unlimited edits and support). Emphasize apps can launch same-day, owners never touch code, and every app includes a 24/7 AI receptionist. If someone is interested, collect their name, business name, and phone number and let them know Eric will reach out. Never invent features or prices beyond these.",
      address: "Southern Oregon (Gold Hill / Grants Pass area)",
      phone: "",
      ordering: "Contact to get started — Starter apps can launch same day"
    }
  }
};

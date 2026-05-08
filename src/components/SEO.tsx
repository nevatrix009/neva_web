// components/SEO.tsx
//
// ╔══════════════════════════════════════════════════════════════════╗
// ║  NEVATRIX — MASTER SEO COMPONENT  (v2 — April 2026)            ║
// ║  Single source of truth for all page SEO + JSON-LD schemas     ║
// ║  Keywords researched from: SVAPPS, Krify, Webcrics,            ║
// ║  GodDigitalMarketing, Splintzer, Kakatiya Solutions            ║
// ╚══════════════════════════════════════════════════════════════════╝
//
// ┌─────────────────────────────────────────────────────────────────┐
// │ HOW TO USE                                                      │
// │                                                                 │
// │ Homepage:                                                       │
// │   <SEO includeFaq={true} includeRating={true} />               │
// │                                                                 │
// │ Service pages:                                                  │
// │   <SEO page="web-development" includeBreadcrumb={true} />      │
// │   <SEO page="digital-marketing" includeBreadcrumb={true}       │
// │        includeFaq={true} />                                     │
// │   <SEO page="full-stack" includeBreadcrumb={true} />           │
// │   <SEO page="mobile-app" includeBreadcrumb={true} />           │
// │   <SEO page="ecommerce" includeBreadcrumb={true}               │
// │        includeFaq={true} />                                     │
// │   <SEO page="ai-solutions" includeBreadcrumb={true}            │
// │        includeFaq={true} />                                     │
// │                                                                 │
// │ Other pages:                                                    │
// │   <SEO page="about" />                                         │
// │   <SEO page="contact" />                                       │
// │   <SEO page="blog" />                                          │
// │   <SEO noindex={true} />   ← /careers, /thank-you             │
// └─────────────────────────────────────────────────────────────────┘

import Head from "next/head";

// ─────────────────────────────────────────────────────────────────
// COMPANY CONSTANTS
// ─────────────────────────────────────────────────────────────────
const COMPANY = {
    name: "Nevatrix",
    legalName: "Nevatrix Technologies Pvt. Ltd.",
    url: "https://nevatrix.com",
    logo: "https://nevatrix.com/Nevatrix_logo.png",
    email: "info@nevatrix.com",
    phone: "+91-9989183654",
    whatsapp: "919989183654",
    foundingYear: "2012",
    description:
        "Nevatrix is an AI-driven web development and digital marketing company in Warangal, Telangana offering website design, ecommerce development, mobile app development, full stack development and SEO services.",
    sameAs: [
        "https://www.linkedin.com/company/nevatrix",
        "https://www.facebook.com/nevatrix",
        "https://www.instagram.com/nevatrix",
        "https://twitter.com/nevatrix",
        // "https://g.co/kgs/YOUR_GOOGLE_BUSINESS_ID",  ← add after creating/verifying GBP
    ],
    address: {
        street: "Kazipet",
        city: "Warangal",
        state: "Telangana",
        postal: "506004",
        country: "IN",
    },
    geo: { lat: "17.9689", lng: "79.5941" },
};

// ─────────────────────────────────────────────────────────────────
// PAGE SEO DATA
// Keywords researched from top-ranking competitors in Warangal.
// Pattern: local exact-match → "near me" → best/top prefix →
//          nearby cities → tech-specific → hire intent → India-level
// Competitor gaps addressed: SVAPPS (influencer, affiliate, email
// marketing), Kakatiya Solutions (enterprise software, ERP, CRM)
// ─────────────────────────────────────────────────────────────────
const PAGE_DATA: Record<
    string,
    {
        title: string;
        description: string;
        keywords: string;
        url: string;
        service: string;
        breadcrumb?: { name: string; url: string }[];
        hasLayoutMetadata?: boolean;
    }
> = {

    // ── Web Development ─────────────────────────────────────────
    // Competitors: SVAPPS (#1), Webcrics, Splintzer
    // SVAPPS ranks for: "web designers near me", "best website design
    // in warangal", "website designing in hanamkonda"
    // Gap added: "web design agency", "wordpress development", "website
    // redesign", "website revamp", "landing page design warangal"
    "web-development": {
        title: "Best Web Development Company in Warangal | Nevatrix",
        description:
            "Nevatrix is a web development company in Warangal offering custom websites, responsive design and SEO-friendly web solutions for businesses and startups.",
        keywords:
            "web development company in warangal, website design warangal, web developers warangal, web design company telangana, website development india, responsive website design warangal, custom web development services",
        url: "https://nevatrix.com/services/web-development",
        service: "Website Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Web Development", url: "https://nevatrix.com/services/web-development" },
        ],
        hasLayoutMetadata: false,
    },

    // ── Digital Marketing ────────────────────────────────────────
    // Competitors: SVAPPS (#1 Warangal + Hyderabad), GodDigital, Webcrics
    // SVAPPS ranks for: "top digital marketing agency near me",
    // "digital marketing agency in warangal", "seo company warangal"
    // Gap added: influencer marketing, affiliate marketing, email marketing,
    // mobile marketing, video marketing, ORM, whatsapp marketing
    "digital-marketing": {
        title: "Digital Marketing Agency in Warangal & Telangana | SEO, Google Ads | Nevatrix",
        description:
            "Nevatrix is a top-rated digital marketing agency in Warangal, Telangana. We offer SEO, Google Ads, social media marketing, lead generation and content marketing services for businesses across Telangana and India. Get a free audit today.",
        keywords:
            "digital marketing agency in warangal, digital marketing company warangal, seo services warangal, google ads agency warangal, social media marketing warangal, digital marketing company telangana, local seo warangal, lead generation services warangal, digital marketing services in warangal, best digital marketing agency warangal, seo company telangana, digital marketing agency hyderabad, digital marketing services india, online marketing company warangal, seo agency india, ppc agency warangal, content marketing warangal, whatsapp marketing warangal, influencer marketing telangana, email marketing services india",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Digital Marketing", url: "https://nevatrix.com/services/digital-marketing" },
        ],
        hasLayoutMetadata: false,
    },

    // ── Full Stack ───────────────────────────────────────────────
    // Competitors: SVAPPS, Webcrics, Krify
    // Key gap: nobody in Warangal targets "mern stack", "nextjs",
    // "saas development" locally — easy ranking opportunity
    // Gap added: CRM development, ERP development, enterprise software
    "full-stack": {
        title: "Custom Software Development Company in Warangal | Nevatrix",
        description:
            "Nevatrix is a custom software development company in Warangal building scalable web applications, SaaS platforms and business software solutions for startups and enterprises across India.",
        keywords:
            "software development company in warangal, custom software development india, web application development warangal, saas development company india, software developers warangal",
        url: "https://nevatrix.com/services/full-stack",
        service: "Full Stack Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Full Stack Development", url: "https://nevatrix.com/services/full-stack" },
        ],
        hasLayoutMetadata: false,
    },

    // ── Mobile App ───────────────────────────────────────────────
    // Competitors: Krify (#1 Warangal), GodDigitalMarketing, Sulekha
    // Krify ranks for: "mobile app development company in warangal",
    // "flutter app development warangal", "react native development"
    // Gap added: PWA development, hybrid app, wearable app, IoT apps
    "mobile-app": {
        title: "Mobile App Development Company in Warangal | Nevatrix",
        description:
            "Nevatrix is the best mobile app development company in Warangal, Telangana building Android and iOS apps using React Native and Flutter. We build startup MVPs, ecommerce apps and on-demand apps for businesses across Warangal, Hanamkonda, Telangana, India, USA and Canada.",
        keywords:
            "mobile app development company in warangal, app development warangal, android app development warangal, ios app development warangal, mobile app developers warangal, mobile app development telangana, mobile app development india",
        url: "https://nevatrix.com/services/mobile-app",
        service: "Mobile App Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Mobile App Development", url: "https://nevatrix.com/services/mobile-app" },
        ],
        hasLayoutMetadata: false,
    },

    // ── Ecommerce ────────────────────────────────────────────────
    // Expanded from thin keyword set. Added: dropshipping, B2B ecommerce,
    // payment gateway, inventory management, multi-vendor marketplace
    "ecommerce": {
        title: "Ecommerce Website Development in Warangal | Nevatrix",
        description:
            "Build your online store with Nevatrix — a professional ecommerce website development company in Warangal. We build Shopify, WooCommerce and custom ecommerce platforms with payment gateway integration, inventory management and mobile-first design. Serving businesses across Telangana and India.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana, online store development warangal, ecommerce company warangal, ecommerce development india, ecommerce website design telangana",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Ecommerce Development", url: "https://nevatrix.com/services/ecommerce" },
        ],
        hasLayoutMetadata: false,
    },

    // ── AI Solutions ─────────────────────────────────────────────
    // Competitors: Appinventiv, LeewayHertz, RaftLabs (India), Simform
    // Gap: Nobody in Warangal targets "ai software development company"
    // or "ai automation services" locally — major ranking opportunity.
    // Gap added: RAG, LLM fine-tuning, AI agents, AI chatbot WhatsApp
    "ai-solutions": {
        title: "AI Software Development Company in Warangal | Nevatrix",
        description:
            "Nevatrix is a leading AI software development company in Warangal, India. We build AI-powered web apps, chatbots, business process automation, predictive analytics, LLM integrations and generative AI solutions for startups and enterprises across Telangana, India, USA and Canada.",
        keywords:
            "ai software development company in warangal, ai solutions warangal, ai development company warangal, ai automation services warangal, ai software development india, artificial intelligence services telangana, machine learning development india",
        url: "https://nevatrix.com/services/ai-solutions",
        service: "AI Software Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "AI Solutions", url: "https://nevatrix.com/services/ai-solutions" },
        ],
        hasLayoutMetadata: false,
    },

    // ── About ────────────────────────────────────────────────────
    "about": {
        title: "About Nevatrix | IT Company in Warangal, Telangana",
        description:
            "Learn about Nevatrix Technologies — an AI-driven web development and digital marketing company in Warangal, Telangana helping startups and businesses grow with modern digital solutions since 2012.",
        keywords:
            "about nevatrix, nevatrix technologies warangal, nevatrix technologies pvt ltd, it company warangal, software company warangal, best it company warangal, tech company telangana, web development company warangal, top software company warangal, digital solutions company warangal, it services company hanamkonda, technology company telangana, nevatrix team, nevatrix history, nevatrix warangal, who is nevatrix",
        url: "https://nevatrix.com/about",
        service: "About Nevatrix",
        hasLayoutMetadata: false,
    },

    // ── Contact ──────────────────────────────────────────────────
    "contact": {
        title: "Contact Nevatrix | Free Web Development Quote — Warangal",
        description:
            "Contact Nevatrix Technologies in Warangal for web development, SEO, mobile app development and digital marketing services. Get a free project consultation and quote today. Call +91 99891 83654.",
        keywords:
            "contact nevatrix, nevatrix warangal contact, web development quote warangal, hire web developers warangal, it services contact warangal, free website quote warangal, nevatrix phone number, nevatrix address warangal, nevatrix email, get free quote website warangal, web development consultation warangal, digital marketing consultation warangal, hire seo expert warangal",
        url: "https://nevatrix.com/contact",
        service: "Contact Nevatrix",
        hasLayoutMetadata: false,
    },

    // ── Careers ──────────────────────────────────────────────────
    "careers": {
        title: "Careers at Nevatrix | Tech Jobs in Warangal, Telangana",
        description:
            "Join Nevatrix Technologies in Warangal, Telangana. We are hiring web developers, React developers, digital marketing executives and mobile app developers. Build your career at one of Telangana's fastest-growing IT companies.",
        keywords:
            "careers at nevatrix, jobs in warangal, web developer jobs warangal, react developer jobs telangana, digital marketing jobs warangal, it jobs warangal, software developer jobs warangal, mobile app developer jobs telangana, frontend developer jobs warangal, tech jobs telangana, nevatrix hiring, nevatrix careers",
        url: "https://nevatrix.com/careers",
        service: "Careers at Nevatrix",
        hasLayoutMetadata: false,
    },

    // ── Blog ─────────────────────────────────────────────────────
    "blog": {
        title: "Nevatrix Blog | Web Development & Digital Marketing Tips",
        description:
            "Read the Nevatrix blog for expert tips on web development, SEO, digital marketing, mobile app development and AI solutions. Helping businesses in Warangal, Telangana and across India grow online.",
        keywords:
            "nevatrix blog, web development tips warangal, seo tips india, digital marketing blog india, mobile app development blog, ai solutions blog india, website development guide warangal, seo guide telangana, digital marketing tips warangal, tech blog warangal",
        url: "https://nevatrix.com/blog",
        service: "Nevatrix Blog",
        hasLayoutMetadata: false,
    },
};

// ─────────────────────────────────────────────────────────────────
// HOMEPAGE DEFAULTS
// ─────────────────────────────────────────────────────────────────
const DEFAULT_SEO = {
    title: "Web Development & Digital Marketing Company in Warangal | Nevatrix",

    description:
        "Nevatrix is a leading web development and digital marketing company in Warangal, Telangana. We build custom websites, web apps and mobile apps, and deliver SEO, Google Ads and social media marketing for startups and businesses across India.",

    keywords:
        "web development company warangal, digital marketing agency warangal, software development company in warangal, website design warangal, web developers warangal, seo company warangal, software company telangana, web development india, digital marketing india, it company warangal telangana",

    url: "https://nevatrix.com",

    service: "Web Development & Digital Marketing",
    hasLayoutMetadata: false,
};

// ─────────────────────────────────────────────────────────────────
// PER-SERVICE FAQ — unique FAQ per service page avoids duplicate
// content penalties. Each set targets that service's search intent.
// ─────────────────────────────────────────────────────────────────
const SERVICE_FAQ: Record<string, { question: string; answer: string }[]> = {
    "web-development": [
        { question: "Which is the best web development company in Warangal?", answer: "Nevatrix is the top-rated web development company in Warangal, Telangana, delivering custom websites, ecommerce platforms and web applications since 2012. We use modern frameworks like React and Next.js to build fast, SEO-friendly websites that rank on Google." },
        { question: "How much does a website cost in Warangal?", answer: "Website development cost in Warangal starts from ₹8,000 for a basic business website. A professional website with custom design costs ₹15,000–₹40,000 and a full ecommerce or web application ranges from ₹40,000 to ₹2,00,000+. Contact Nevatrix for a free quote tailored to your requirements." },
        { question: "How long does it take to build a website?", answer: "Nevatrix typically delivers a standard business website in 7–14 working days. Ecommerce stores take 3–4 weeks and custom web applications take 4–8 weeks depending on features. We provide a detailed project timeline before starting work." },
        { question: "Does Nevatrix build mobile-friendly websites?", answer: "Yes, every website Nevatrix builds is fully responsive and mobile-optimised. We test on all major devices and screen sizes. Mobile-first design is our default approach as over 70% of users in India browse on smartphones." },
        { question: "Does Nevatrix offer website maintenance after launch?", answer: "Yes. Nevatrix provides ongoing website maintenance packages including security updates, content updates, performance monitoring and bug fixes to keep your website running smoothly after launch." },
        { question: "Can Nevatrix redesign my existing website?", answer: "Yes. Nevatrix specialises in website redesigns and revamps. We analyse your current website's performance, identify conversion blockers and rebuild it with modern design, faster load times and better SEO — while preserving your existing rankings." },
        { question: "Does Nevatrix build WordPress websites?", answer: "Yes. We build custom WordPress websites, WooCommerce stores and WordPress-based web applications. We also build with React, Next.js and custom full-stack frameworks depending on what suits your business best." },
    ],
    "digital-marketing": [
        { question: "Which is the best digital marketing agency in Warangal?", answer: "Nevatrix is a leading digital marketing agency in Warangal, Telangana offering SEO, Google Ads, social media marketing, email marketing and lead generation. We have helped 100+ businesses grow their online presence and generate measurable results since 2012." },
        { question: "How much does digital marketing cost in Warangal?", answer: "Digital marketing packages at Nevatrix start from ₹5,000/month for basic SEO and social media. Google Ads management starts from ₹8,000/month (excluding ad spend). Full-service digital marketing packages range from ₹15,000–₹50,000/month. Contact us for a custom quote." },
        { question: "How long does SEO take to show results?", answer: "SEO typically shows initial results within 3–4 months and significant ranking improvements within 6–12 months. Local SEO for Warangal businesses can show results faster — sometimes within 4–8 weeks — especially with Google Business Profile optimisation." },
        { question: "Does Nevatrix manage Google Ads campaigns?", answer: "Yes. Nevatrix provides complete Google Ads management including search ads, display ads, shopping ads and YouTube ads. We focus on maximising your return on ad spend (ROAS) with data-driven targeting, keyword research and continuous optimisation." },
        { question: "Does Nevatrix offer social media marketing in Warangal?", answer: "Yes. We manage Instagram, Facebook, LinkedIn and YouTube marketing for businesses in Warangal. Our services include content creation, paid ads, influencer campaigns and community management — all tailored to your target audience and industry." },
        { question: "What is local SEO and does Nevatrix offer it?", answer: "Local SEO helps your business appear in Google Maps and local search results for customers in Warangal and surrounding areas. Nevatrix provides complete local SEO including Google Business Profile optimisation, local citations, review management and location-targeted keyword strategies." },
        { question: "Can Nevatrix help with WhatsApp marketing?", answer: "Yes. Nevatrix sets up and manages WhatsApp Business API campaigns for customer engagement, lead nurturing and broadcast messaging. WhatsApp marketing achieves open rates of 90%+ making it one of the most effective channels for Indian businesses." },
    ],
    "full-stack": [
        { question: "What full stack technologies does Nevatrix use?", answer: "Nevatrix builds full stack applications using React and Next.js (frontend), Node.js and Express (backend), MongoDB, PostgreSQL and MySQL (databases), and deploys on AWS, Vercel and Docker. We follow TypeScript-first development for maintainable, scalable codebases." },
        { question: "Can Nevatrix build a SaaS application?", answer: "Yes. Nevatrix has experience building multi-tenant SaaS platforms with subscription billing, user management, analytics dashboards and API integrations. We handle the full product lifecycle from MVP to scale." },
        { question: "Does Nevatrix build CRM and ERP systems?", answer: "Yes. Nevatrix develops custom CRM systems, ERP platforms and enterprise management software tailored to your business processes — far more flexible and cost-effective than off-the-shelf solutions like Salesforce or SAP." },
        { question: "How long does it take to build a web application?", answer: "A simple MVP web application can be built in 4–6 weeks. A full-featured SaaS platform or enterprise web application typically takes 3–6 months. Nevatrix follows agile development with 2-week sprints and regular demos to keep you involved throughout." },
        { question: "Does Nevatrix provide API development and integration?", answer: "Yes. We design and build RESTful APIs and GraphQL APIs, and integrate third-party APIs including payment gateways, CRMs, ERPs, social platforms, shipping providers and analytics tools." },
        { question: "Can I hire dedicated full stack developers from Nevatrix?", answer: "Yes. Nevatrix offers dedicated developer hire models — hire a full stack developer, React developer or Node.js developer on a monthly basis to work exclusively on your project at competitive Indian development rates." },
    ],
    "mobile-app": [
        { question: "What is the cost of mobile app development in India?", answer: "Mobile app development cost in India ranges from ₹50,000–₹2,00,000 for a simple app, ₹2,00,000–₹8,00,000 for a mid-complexity app and ₹8,00,000+ for a feature-rich enterprise app. Nevatrix provides a detailed cost breakdown before starting. Contact us for a free estimate." },
        { question: "Does Nevatrix build both Android and iOS apps?", answer: "Yes. Nevatrix builds cross-platform mobile apps using React Native and Flutter, which run natively on both Android and iOS from a single codebase — reducing development time and cost by up to 40% compared to building separate native apps." },
        { question: "How long does it take to build a mobile app?", answer: "A simple mobile app MVP takes 6–10 weeks. A feature-rich app with backend, admin panel and third-party integrations takes 3–6 months. Nevatrix provides a phased delivery timeline with milestones so you can launch faster with a lean MVP." },
        { question: "Does Nevatrix develop on-demand apps like food delivery or taxi apps?", answer: "Yes. Nevatrix has experience building on-demand service apps including food delivery, grocery delivery, home services, ride-booking and e-commerce apps with real-time tracking, push notifications and payment gateway integration." },
        { question: "Will my app be published on the App Store and Google Play?", answer: "Yes. Nevatrix handles the complete app store submission process for both Google Play Store and Apple App Store including store listing optimisation, screenshots, descriptions and compliance with store guidelines." },
        { question: "Does Nevatrix offer app maintenance after launch?", answer: "Yes. We provide post-launch support including OS version updates, bug fixes, performance monitoring and feature additions to keep your app current and highly rated on the app stores." },
    ],
    "ecommerce": [
        { question: "Which is the best ecommerce development company in Warangal?", answer: "Nevatrix is a leading ecommerce website development company in Warangal building Shopify, WooCommerce and custom ecommerce platforms. We have built online stores for retailers, manufacturers and service businesses across Telangana and India." },
        { question: "Should I choose Shopify, WooCommerce or a custom store?", answer: "Shopify is best for businesses that want a quick, low-maintenance store. WooCommerce suits businesses already on WordPress. A custom ecommerce platform is ideal when you need unique workflows, large catalogues or deep third-party integrations. Nevatrix advises the best fit for your specific needs and budget." },
        { question: "Does Nevatrix integrate payment gateways?", answer: "Yes. We integrate all major Indian and international payment gateways including Razorpay, PayU, CCAvenue, Stripe and PayPal. We also set up UPI, net banking and EMI payment options to maximise checkout conversions." },
        { question: "How much does an ecommerce website cost in India?", answer: "A basic Shopify or WooCommerce store starts from ₹20,000. A custom ecommerce platform with full inventory management, multi-vendor support and analytics ranges from ₹60,000–₹3,00,000+. Contact Nevatrix for a free, itemised quote." },
        { question: "Does Nevatrix provide ecommerce SEO?", answer: "Yes. Every ecommerce store Nevatrix builds is optimised for search engines from day one — including product schema, fast page speeds, keyword-rich category pages, canonical tags and structured data to help your products rank on Google." },
        { question: "Can Nevatrix build a multi-vendor marketplace?", answer: "Yes. Nevatrix builds multi-vendor marketplace platforms similar to Amazon or Flipkart where multiple sellers can list products, manage inventory and receive payouts — with a commission-based revenue model for the platform owner." },
    ],
    "ai-solutions": [
        { question: "What AI services does Nevatrix offer?", answer: "Nevatrix offers custom AI application development, AI chatbots and virtual assistants, business process automation, LLM integrations (GPT-4, Claude, Gemini), RAG (Retrieval-Augmented Generation) systems, predictive analytics, computer vision and AI-powered web and mobile apps." },
        { question: "How can AI help my small business in Warangal?", answer: "AI can help your Warangal business by automating repetitive tasks, providing 24/7 customer support through chatbots, generating leads automatically, analysing customer data for insights and personalising marketing — all reducing costs while increasing revenue." },
        { question: "Does Nevatrix build WhatsApp AI chatbots?", answer: "Yes. Nevatrix builds AI-powered WhatsApp chatbots using the WhatsApp Business API and LLMs like GPT-4. These bots handle customer queries, qualify leads, take orders and send automated follow-ups — working 24/7 without human intervention." },
        { question: "What is RAG and does Nevatrix build RAG applications?", answer: "RAG (Retrieval-Augmented Generation) is a technique where an AI model answers questions using your own business documents, knowledge base or database — rather than general internet knowledge. Nevatrix builds custom RAG applications for customer support, internal knowledge management and document Q&A." },
        { question: "How much does custom AI development cost in India?", answer: "A simple AI chatbot or automation script starts from ₹30,000. A full AI-powered web application with LLM integration, vector database and custom training starts from ₹1,50,000. Enterprise AI platforms are priced on scope. Contact Nevatrix for a free discovery call and estimate." },
        { question: "Does Nevatrix do LLM fine-tuning?", answer: "Yes. Nevatrix provides LLM fine-tuning services using your business data to create specialised AI models that understand your industry terminology, products and customer language — delivering far more accurate responses than generic models." },
        { question: "Can AI replace my customer support team?", answer: "AI can handle 60–80% of routine customer queries automatically — answering FAQs, tracking orders, booking appointments and qualifying leads — while escalating complex issues to human agents. This reduces support costs significantly while improving response times to under 1 second." },
    ],
};

// ─────────────────────────────────────────────────────────────────
// HOMEPAGE FAQ — rich accordion results in Google Search
// 12 FAQs covering all services, local SEO, pricing, global reach
// ─────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
    {
        question: "Which is the best web development company in Warangal?",
        answer:
            "Nevatrix is a leading web development company in Warangal, Telangana, offering custom website design, full stack development, ecommerce solutions and AI-powered digital marketing services since 2012. We have delivered 100+ websites for clients across Warangal, Hanamkonda, Khammam and across India.",
    },
    {
        question: "Does Nevatrix offer SEO services in Warangal?",
        answer:
            "Yes, Nevatrix provides professional SEO and digital marketing services in Warangal including local SEO, Google Ads management, social media marketing, influencer marketing, email marketing and lead generation for local businesses across Warangal, Hanamkonda, Khammam and Telangana.",
    },
    {
        question: "Can Nevatrix build an ecommerce website?",
        answer:
            "Yes. Nevatrix develops Shopify, WooCommerce and custom ecommerce platforms with payment gateway integration (Razorpay, Stripe), inventory management, mobile-first design and ecommerce SEO for businesses of all sizes in Warangal and across India.",
    },
    {
        question: "Does Nevatrix develop mobile apps?",
        answer:
            "Yes. Nevatrix builds Android and iOS mobile applications for startups and established businesses using React Native and Flutter. We build startup MVPs, ecommerce apps, on-demand apps and AI-powered apps with 40% faster delivery using AI-accelerated development.",
    },
    {
        question: "What is the cost of website development in Warangal?",
        answer:
            "Website development cost in Warangal depends on the type — a basic business website starts from ₹8,000 while a full ecommerce or web application can range from ₹25,000 to ₹2,00,000+. Contact Nevatrix for a free, no-obligation quote.",
    },
    {
        question: "Does Nevatrix work with clients outside India?",
        answer:
            "Yes, Nevatrix provides remote web development and digital marketing services to clients in the USA, Canada, UK and other countries. We have successfully delivered 100+ projects for remote clients globally since 2012.",
    },
    {
        question: "What services does Nevatrix offer?",
        answer:
            "Nevatrix offers website design and development, full stack development (React, Next.js, Node.js, MERN), mobile app development (React Native, Flutter), ecommerce development (Shopify, WooCommerce), AI software solutions, SEO, Google Ads, social media marketing and influencer marketing.",
    },
    {
        question: "Does Nevatrix offer AI software development services?",
        answer:
            "Yes. Nevatrix is an AI software development company in Warangal offering custom AI-powered applications, chatbots, WhatsApp AI bots, business process automation, predictive analytics, LLM integrations, RAG systems and generative AI solutions for startups and enterprises.",
    },
    {
        question: "Can Nevatrix build a chatbot for my business?",
        answer:
            "Yes. Nevatrix builds custom AI chatbots and conversational assistants using GPT-4, Claude and open-source LLMs — integrated with your website, WhatsApp or CRM to handle customer queries, lead qualification and 24/7 customer support.",
    },
    {
        question: "How long does it take to build a website in Warangal?",
        answer:
            "A standard business website by Nevatrix typically takes 7–14 days. Ecommerce stores take 3–4 weeks and custom web applications take 4–8 weeks depending on features and complexity. We guarantee on-time delivery for every project.",
    },
    {
        question: "Does Nevatrix provide digital marketing services in Hanamkonda?",
        answer:
            "Yes. Nevatrix provides complete digital marketing services in Hanamkonda including SEO, Google Ads, social media marketing, content marketing and lead generation campaigns for businesses in Hanamkonda, Warangal and across Telangana.",
    },
    {
        question: "What makes Nevatrix different from other IT companies in Warangal?",
        answer:
            "Nevatrix combines over 12 years of software development expertise with AI-first development practices. We offer end-to-end services from website design to mobile apps to AI automation — all under one roof — with transparent pricing, on-time delivery and measurable results.",
    },
];

// ─────────────────────────────────────────────────────────────────
// AGGREGATE RATING — shows star ratings in Google results
// Only use on homepage via includeRating={true}
// ⚠️  Update reviewCount with real Google review count
// ─────────────────────────────────────────────────────────────────
const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nevatrix.com/#business",
    name: "Nevatrix",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "38",   // ← Replace with real number from Google Business
        bestRating: "5",
        worstRating: "1",
    },
};

// ─────────────────────────────────────────────────────────────────
// PROPS
// ─────────────────────────────────────────────────────────────────
type SEOProps = {
    page?: string;
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    includeFaq?: boolean;        // renders FAQ JSON-LD schema
    includeRating?: boolean;     // renders AggregateRating schema (homepage only)
    includeBreadcrumb?: boolean; // renders BreadcrumbList schema (service pages)
    noindex?: boolean;           // /careers, /thank-you etc.
};

// ─────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function SEO({
    page,
    title,
    description,
    keywords,
    url,
    image,
    includeFaq = false,
    includeRating = false,
    includeBreadcrumb = false,
    noindex = false,
}: SEOProps) {
    const baseData = (page && PAGE_DATA[page]) || DEFAULT_SEO;
    const skipHeadTags = baseData.hasLayoutMetadata === true;

    const data = {
        title:       title       || baseData.title,
        description: description || baseData.description,
        keywords:    keywords    || baseData.keywords,
        url:         url         || baseData.url,
        service:     baseData.service,
        image:       image       || "https://nevatrix.com/Nevatrix_logo.png",
    };

    // ── Organization Schema ────────────────────────────────────────
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://nevatrix.com/#organization",
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        description: COMPANY.description,
        url: COMPANY.url,
        logo: { "@type": "ImageObject", url: COMPANY.logo, width: 300, height: 60 },
        foundingDate: COMPANY.foundingYear,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        sameAs: COMPANY.sameAs,
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: COMPANY.phone,
                contactType: "customer service",
                areaServed: ["IN", "US", "CA", "GB"],
                availableLanguage: ["English", "Telugu", "Hindi"],
            },
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Services",
            itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecommerce Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Software Development" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Stack Development" } },
            ],
        },
    };

    // ── Local Business Schema ──────────────────────────────────────
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://nevatrix.com/#business",
        name: COMPANY.name,
        description: COMPANY.description,
        image: COMPANY.logo,
        url: COMPANY.url,
        telephone: COMPANY.phone,
        email: COMPANY.email,
        foundingDate: COMPANY.foundingYear,
        address: {
            "@type": "PostalAddress",
            streetAddress: COMPANY.address.street,
            addressLocality: COMPANY.address.city,
            addressRegion: COMPANY.address.state,
            postalCode: COMPANY.address.postal,
            addressCountry: COMPANY.address.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: COMPANY.geo.lat,
            longitude: COMPANY.geo.lng,
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "20:00",
            },
        ],
        serviceArea: [
            { "@type": "City", name: "Warangal" },
            { "@type": "City", name: "Hanamkonda" },
            { "@type": "City", name: "Kazipet" },
            { "@type": "City", name: "Khammam" },
            { "@type": "City", name: "Nizamabad" },
            { "@type": "City", name: "Karimnagar" },
            { "@type": "State", name: "Telangana" },
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
        ],
        areaServed: ["India", "United States", "Canada", "United Kingdom"],
        priceRange: "₹₹",
        hasMap: "https://maps.google.com/?q=Nevatrix+Warangal+Telangana",
        sameAs: COMPANY.sameAs,
        knowsAbout: [
            "Web Development",
            "Digital Marketing",
            "Search Engine Optimisation",
            "Mobile App Development",
            "Ecommerce Development",
            "AI Software Development",
            "Full Stack Development",
            "React.js",
            "Next.js",
            "Node.js",
            "MERN Stack",
            "Flutter",
            "React Native",
            "Shopify",
            "WooCommerce",
        ],
    };

    // ── Service Schema ─────────────────────────────────────────────
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.service,
        url: data.url,
        description: data.description,
        keywords: data.keywords,
        provider: {
            "@type": "Organization",
            "@id": "https://nevatrix.com/#organization",
            name: COMPANY.name,
            url: COMPANY.url,
        },
        areaServed: [
            { "@type": "City", name: "Warangal" },
            { "@type": "City", name: "Hanamkonda" },
            { "@type": "State", name: "Telangana" },
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
        ],
    };

    // ── WebSite Schema ─────────────────────────────────────────────
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://nevatrix.com/#website",
        name: COMPANY.name,
        url: COMPANY.url,
        inLanguage: "en-IN",
        publisher: {
            "@type": "Organization",
            "@id": "https://nevatrix.com/#organization",
        },
    };

    // ── FAQ Schema — use per-service FAQ if available, else homepage FAQ ──
    const faqItems = (page && SERVICE_FAQ[page]) ? SERVICE_FAQ[page] : FAQ_ITEMS;
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
    };

    // ── BreadcrumbList Schema ──────────────────────────────────────
    const breadcrumbData = (page && PAGE_DATA[page]?.breadcrumb) || null;
    const breadcrumbSchema = breadcrumbData
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbData.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url,
            })),
        }
        : null;

    return (
        <Head>
            {/*
        skipHeadTags = true for pages with layout.tsx (web-development,
        digital-marketing, full-stack, mobile-app).
        Those pages get <title>/<meta> from layout.tsx to avoid duplicates.
        We still render JSON-LD schemas below for all pages.
      */}
            {!skipHeadTags && (
                <>
                    {/* ── Primary Tags ── */}
                    <title>{data.title}</title>
                    <meta name="description" content={data.description} />
                    <meta name="keywords" content={data.keywords} />
                    <meta name="author" content="Nevatrix Technologies Pvt. Ltd." />
                    <meta name="copyright" content="Nevatrix Technologies Pvt. Ltd." />
                    <meta name="language" content="English" />
                    <meta name="revisit-after" content="7 days" />
                    <meta name="rating" content="general" />

                    {/* ── Robots ── */}
                    {noindex ? (
                        <meta name="robots" content="noindex, nofollow" />
                    ) : (
                        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                    )}

                    {/* ── Canonical ── */}
                    <link rel="canonical" href={data.url} />

                    {/* ── Geo Targeting ── */}
                    <meta name="geo.region" content="IN-TG" />
                    <meta name="geo.placename" content="Warangal, Telangana, India" />
                    <meta name="geo.position" content={`${COMPANY.geo.lat};${COMPANY.geo.lng}`} />
                    <meta name="ICBM" content={`${COMPANY.geo.lat}, ${COMPANY.geo.lng}`} />

                    {/* ── Open Graph ── */}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={data.title} />
                    <meta property="og:description" content={data.description} />
                    <meta property="og:url" content={data.url} />
                    <meta property="og:site_name" content="Nevatrix" />
                    <meta property="og:image" content={data.image} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:image:alt" content="Nevatrix - Web Development & Digital Marketing Company in Warangal, Telangana" />
                    <meta property="og:locale" content="en_IN" />

                    {/* ── Twitter / X ── */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={data.title} />
                    <meta name="twitter:description" content={data.description} />
                    <meta name="twitter:image" content={data.image} />
                    <meta name="twitter:site" content="@nevatrix" />
                    <meta name="twitter:creator" content="@nevatrix" />

                    {/* ── Mobile / PWA ── */}
                    <meta name="theme-color" content="#0f172a" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Nevatrix" />
                </>
            )}

            {/* ── JSON-LD Schemas — rendered on ALL pages ── */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

            {includeFaq && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            )}
            {includeRating && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
            )}
            {includeBreadcrumb && breadcrumbSchema && (
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            )}
        </Head>
    );
}

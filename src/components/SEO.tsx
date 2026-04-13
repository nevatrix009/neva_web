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
        // "https://www.facebook.com/nevatrix",
        // "https://www.instagram.com/nevatrix",
        // "https://twitter.com/nevatrix",
        // "https://g.co/kgs/YOUR_GOOGLE_BUSINESS_ID",  ← add after creating GBP
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
        title: "Web Development Company in Warangal | Best Website Design & Development - Nevatrix",
        description:
            "Nevatrix is the best web development company in Warangal, Telangana. We build custom websites, responsive business websites and SEO-friendly web solutions for startups and enterprises. Serving Warangal, Hanamkonda, Khammam and across India.",
        keywords:
            "web development company in warangal, web design company in warangal, website design company warangal, web designers in warangal, web developers in warangal, website development warangal, web designers near me, website designers near me, web design near me, best web development company in warangal, best website design in warangal, top web development company warangal, best web designers warangal, web design agency warangal, website redesign warangal, website revamp warangal, landing page design warangal, web development company hanamkonda, website design hanamkonda, web developers hanamkonda, website designing in hanamkonda, web development company khammam, website design nizamabad, web development karimnagar, wordpress website development warangal, react website development warangal, nextjs web development india, responsive website design warangal, seo friendly website development warangal, affordable website development warangal, low cost website design warangal, website development cost warangal, web development company telangana, professional website design telangana, custom website development india, website development company near me, best web development company near me",
        url: "https://nevatrix.com/services/web-development",
        service: "Website Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Services", url: "https://nevatrix.com/services/web-development" },
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
        title: "Digital Marketing Agency in Warangal | Best SEO & Google Ads Company - Nevatrix",
        description:
            "Nevatrix is the best digital marketing agency in Warangal, Telangana. We offer SEO, Google Ads, social media marketing, influencer marketing, email marketing and lead generation for businesses across Warangal, Hanamkonda, Hyderabad and India.",
        keywords:
            "digital marketing agency in warangal, digital marketing company warangal, seo company in warangal, seo services warangal, seo agency warangal, digital marketing agency near me, top digital marketing agency near me, seo company near me warangal, best digital marketing agency warangal, best seo company in warangal, top digital marketing company warangal, google ads agency warangal, google ads management warangal, ppc agency warangal, social media marketing warangal, social media marketing agency warangal, facebook ads agency warangal, instagram marketing warangal, influencer marketing warangal, affiliate marketing services warangal, email marketing warangal, email marketing campaigns india, whatsapp marketing warangal, video marketing warangal, online reputation management warangal, orm services warangal, mobile marketing services india, local seo warangal, local seo services warangal, lead generation services warangal, content marketing warangal, digital marketing agency hanamkonda, seo services hanamkonda, digital marketing company khammam, seo agency nizamabad, digital marketing karimnagar, digital marketing agency hyderabad, seo company hyderabad, digital marketing agency telangana, digital marketing services india, affordable seo services india, result driven digital marketing warangal, ai driven digital marketing india",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Services", url: "https://nevatrix.com/services/digital-marketing" },
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
        title: "Full Stack Development Company in Warangal | MERN Stack, React & Node.js - Nevatrix",
        description:
            "Nevatrix is a full stack web development company in Warangal, India building React, Next.js, Node.js and MERN stack web applications, SaaS platforms and enterprise software for startups and businesses across India, USA and Canada. Hire expert full stack developers today.",
        keywords:
            "full stack development company warangal, full stack developers warangal, web application development warangal, software development company warangal, it company warangal, full stack developers near me, web app developers near me warangal, mern stack development company india, mern stack developers india, react development company india, nextjs development company india, nodejs development company india, react developers india, nodejs developers india, typescript developers india, saas development company india, saas application development india, web application development company india, custom web application development india, crm development company india, erp development company india, enterprise software development india, startup web development india, mvp development company india, hire full stack developers india, hire react developers india, hire nodejs developers india, hire mern stack developers india, software development company telangana, full stack development telangana, web application development telangana, affordable full stack development india, offshore web development india, custom software development warangal, bespoke software development telangana",
        url: "https://nevatrix.com/services/full-stack",
        service: "Full Stack Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Services", url: "https://nevatrix.com/services/full-stack" },
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
        title: "Mobile App Development Company in Warangal | Android & iOS Apps - Nevatrix",
        description:
            "Nevatrix is the best mobile app development company in Warangal, Telangana building Android and iOS apps using React Native and Flutter. We build startup MVPs, ecommerce apps and on-demand apps for businesses across Warangal, Hanamkonda, Telangana, India, USA and Canada.",
        keywords:
            "mobile app development company in warangal, mobile app development warangal, android app development warangal, ios app development warangal, app development company warangal, mobile app developers warangal, mobile app developers near me, app development company near me warangal, best mobile app development company warangal, top app developers warangal, best android app developers warangal, react native development company india, react native app development warangal, flutter app development company india, flutter app development warangal, android app development company india, ios app development company india, cross platform app development india, pwa development company india, progressive web app development india, hybrid app development india, kotlin app development india, ecommerce app development india, on demand app development india, food delivery app development india, startup app development india, mvp app development india, business app development india, mobile app development company hanamkonda, app developers hanamkonda, mobile app development khammam, hire app developers india, hire react native developers india, hire flutter developers india, mobile app development company india, mobile app development company telangana, affordable app development india, app development cost india, app development company near me",
        url: "https://nevatrix.com/services/mobile-app",
        service: "Mobile App Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Services", url: "https://nevatrix.com/services/mobile-app" },
            { name: "Mobile App Development", url: "https://nevatrix.com/services/mobile-app" },
        ],
        hasLayoutMetadata: false,
    },

    // ── Ecommerce ────────────────────────────────────────────────
    // Expanded from thin keyword set. Added: dropshipping, B2B ecommerce,
    // payment gateway, inventory management, multi-vendor marketplace
    "ecommerce": {
        title: "Ecommerce Website Development in Warangal | Shopify, WooCommerce & Custom Stores - Nevatrix",
        description:
            "Build your online store with Nevatrix — a professional ecommerce website development company in Warangal. We build Shopify, WooCommerce and custom ecommerce platforms with payment gateway integration, inventory management and mobile-first design. Serving businesses across Telangana and India.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana, online store development warangal, ecommerce development india, build online store warangal, ecommerce website design telangana, shopify store design india, ecommerce solutions warangal, best ecommerce company warangal, ecommerce development hanamkonda, shopify development india, woocommerce developers india, custom ecommerce development india, ecommerce website development telangana, payment gateway integration india, razorpay integration india, stripe payment integration india, multi vendor marketplace development india, b2b ecommerce development india, dropshipping website development india, inventory management system india, ecommerce seo services india, online store optimization india, ecommerce mobile app india, ecommerce website cost india, affordable ecommerce development warangal, ecommerce development company near me, shopify experts warangal, woocommerce experts india",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Services", url: "https://nevatrix.com/services/ecommerce" },
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
        title: "AI Software Development Company in Warangal | AI Solutions & Automation - Nevatrix",
        description:
            "Nevatrix is a leading AI software development company in Warangal, India. We build AI-powered web apps, chatbots, business process automation, predictive analytics, LLM integrations and generative AI solutions for startups and enterprises across Telangana, India, USA and Canada.",
        keywords:
            "ai software development company warangal, ai solutions warangal, ai development company warangal, artificial intelligence services warangal, ai software company telangana, ai development telangana, ai company warangal, ai automation warangal, machine learning development warangal, ai development company india, ai software development company india, artificial intelligence development india, machine learning company india, ai solutions for business india, custom ai development india, chatbot development india, chatbot development warangal, whatsapp chatbot development india, ai chatbot for business india, business automation ai india, ai web application development india, generative ai development india, llm development company india, llm fine tuning india, rag development company india, retrieval augmented generation india, ai agents development india, openai integration india, gpt integration services india, ai integration services india, predictive analytics company india, computer vision development india, nlp development company india, ai automation services india, ai powered software development india, ai app development company india, hire ai developers india, hire machine learning engineers india, ai development company usa, ai software company usa, offshore ai development company, ai development services telangana, intelligent software solutions india, ai mvp development india, startup ai development india, affordable ai development india, ai development cost india",
        url: "https://nevatrix.com/services/ai-solutions",
        service: "AI Software Development",
        breadcrumb: [
            { name: "Home", url: "https://nevatrix.com" },
            { name: "Services", url: "https://nevatrix.com/services/ai-solutions" },
            { name: "AI Solutions", url: "https://nevatrix.com/services/ai-solutions" },
        ],
        hasLayoutMetadata: false,
    },

    // ── About ────────────────────────────────────────────────────
    "about": {
        title: "About Nevatrix | Web Development & Digital Marketing Company in Warangal",
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
        title: "Contact Nevatrix | Web Development & SEO Company in Warangal - Free Quote",
        description:
            "Contact Nevatrix Technologies in Warangal for web development, SEO, mobile app development and digital marketing services. Get a free project consultation and quote today. Call +91 99891 83654.",
        keywords:
            "contact nevatrix, nevatrix warangal contact, web development quote warangal, hire web developers warangal, it services contact warangal, free website quote warangal, nevatrix phone number, nevatrix address warangal, nevatrix email, get free quote website warangal, web development consultation warangal, digital marketing consultation warangal, hire seo expert warangal",
        url: "https://nevatrix.com/contact",
        service: "Contact Nevatrix",
        hasLayoutMetadata: false,
    },

    // ── Blog ─────────────────────────────────────────────────────
    "blog": {
        title: "Blog | Web Development, SEO & Digital Marketing Tips - Nevatrix Warangal",
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
        "Nevatrix is a leading web development and digital marketing company in Warangal, Telangana. We offer website design, ecommerce development, mobile apps, AI solutions and SEO services. Serving Warangal, Hanamkonda, Khammam, Nizamabad and remote clients across India, USA & Canada.",
    keywords:
        "web development company in warangal, digital marketing agency warangal, seo services warangal, website designers warangal, website development hanamkonda, web design company warangal, ecommerce development warangal, mobile app development telangana, ai software development india, web developers warangal, best it company warangal, software company warangal, web development khammam, website development nizamabad, it company warangal, full stack development india, react developers india, digital marketing telangana, affordable web development warangal, offshore web development india, web designers near me warangal, best web development company warangal, top it company warangal, best digital marketing company warangal, influencer marketing warangal, email marketing warangal, app development company warangal, website development company near me warangal, it company hanamkonda",
    url: "https://nevatrix.com",
    service: "Web Development & Digital Marketing",
    hasLayoutMetadata: false,
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
        image:       image       || "https://nevatrix.com/og-image.jpg",
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
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://nevatrix.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    // ── FAQ Schema ─────────────────────────────────────────────────
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
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
                    {/* <meta name="twitter:site" content="@nevatrix" /> */}

                    {/* ── Mobile / PWA ── */}
                    <meta name="theme-color" content="#0f172a" />
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

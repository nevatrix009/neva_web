// components/SEO.tsx
//
// ╔══════════════════════════════════════════════════════════════╗
// ║  NEVATRIX — MASTER SEO COMPONENT                            ║
// ║  Single source of truth for all page SEO + JSON-LD schemas  ║
// ║  Keywords researched from: SVAPPS, Krify, Webcrics,         ║
// ║  GodDigitalMarketing, Splintzer                             ║
// ╚══════════════════════════════════════════════════════════════╝
//
// ┌─────────────────────────────────────────────────────────────┐
// │ HOW TO USE                                                  │
// │                                                             │
// │ Homepage:                                                   │
// │   <SEO includeFaq={true} includeRating={true} />            │
// │                                                             │
// │ Service pages (these use "use client" + layout.tsx):        │
// │   <SEO page="web-development" />                            │
// │   <SEO page="digital-marketing" />                          │
// │   <SEO page="full-stack" />                                 │
// │   <SEO page="mobile-app" />                                 │
// │   <SEO page="ecommerce" includeFaq={true} />                │
// │   <SEO page="ai-solutions" includeFaq={true} />             │
// │                                                             │
// │ Other pages:                                                │
// │   <SEO page="about" />                                      │
// │   <SEO page="contact" />                                    │
// │   <SEO noindex={true} />   ← /careers, /thank-you          │
// │                                                             │
// │ NOTE: Pages with layout.tsx (web-dev, digital-marketing,    │
// │ full-stack, mobile-app) get metadata from layout.tsx AND    │
// │ JSON-LD schemas from <SEO page="..."> — both are needed.    │
// │ <SEO> on these pages ONLY renders <script> JSON-LD tags,    │
// │ NOT <title>/<meta> tags (those come from layout.tsx).       │
// └─────────────────────────────────────────────────────────────┘

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
// ─────────────────────────────────────────────────────────────────
const PAGE_DATA: Record<
    string,
    {
        title: string;
        description: string;
        keywords: string;
        url: string;
        service: string;
        hasLayoutMetadata?: boolean; // true = page uses layout.tsx, skip <Head> meta tags
    }
> = {

    // ── Web Development ─────────────────────────────────────────
    // Competitors: SVAPPS (#1), Webcrics, Splintzer
    // SVAPPS ranks for: "web designers near me", "best website design
    // in warangal", "website designing in hanamkonda"
    "web-development": {
        title: "Web Development Company in Warangal | Best Website Design & Development - Nevatrix",
        description:
            "Nevatrix is the best web development company in Warangal, Telangana. We build custom websites, responsive business websites and SEO-friendly web solutions for startups and enterprises. Serving Warangal, Hanamkonda, Khammam and across India.",
        keywords:
            "web development company in warangal, web design company in warangal, website design company warangal, web designers in warangal, web developers in warangal, website development warangal, web designers near me, website designers near me, web design near me, best web development company in warangal, best website design in warangal, top web development company warangal, best web designers warangal, web development company hanamkonda, website design hanamkonda, web developers hanamkonda, website designing in hanamkonda, web development company khammam, website design nizamabad, web development karimnagar, wordpress website development warangal, react website development warangal, nextjs web development india, responsive website design warangal, seo friendly website development warangal, affordable website development warangal, low cost website design warangal, website development cost warangal, web development company telangana, professional website design telangana, custom website development india",
        url: "https://nevatrix.com/services/web-development",
        service: "Website Development",
        hasLayoutMetadata: false,
    },

    // ── Digital Marketing ────────────────────────────────────────
    // Competitors: SVAPPS (#1 Warangal + Hyderabad), GodDigital, Webcrics
    // SVAPPS ranks for: "top digital marketing agency near me",
    // "digital marketing agency in warangal", "seo company warangal"
    "digital-marketing": {
        title: "Digital Marketing Agency in Warangal | Best SEO & Google Ads Company - Nevatrix",
        description:
            "Nevatrix is the best digital marketing agency in Warangal, Telangana. We offer SEO, Google Ads, social media marketing, lead generation and content marketing for businesses across Warangal, Hanamkonda, Hyderabad and India.",
        keywords:
            "digital marketing agency in warangal, digital marketing company warangal, seo company in warangal, seo services warangal, seo agency warangal, digital marketing agency near me, top digital marketing agency near me, seo company near me warangal, best digital marketing agency warangal, best seo company in warangal, top digital marketing company warangal, google ads agency warangal, google ads management warangal, ppc agency warangal, social media marketing warangal, social media marketing agency warangal, facebook ads agency warangal, instagram marketing warangal, local seo warangal, local seo services warangal, lead generation services warangal, content marketing warangal, email marketing warangal, digital marketing agency hanamkonda, seo services hanamkonda, digital marketing company khammam, seo agency nizamabad, digital marketing karimnagar, digital marketing agency hyderabad, seo company hyderabad, digital marketing agency telangana, digital marketing services india, affordable seo services india",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
        hasLayoutMetadata: false,
    },

    // ── Full Stack ───────────────────────────────────────────────
    // Competitors: SVAPPS, Webcrics, Krify
    // Key gap: nobody in Warangal targets "mern stack", "nextjs",
    // "saas development" locally — easy ranking opportunity
    "full-stack": {
        title: "Full Stack Development Company | MERN Stack, React & Next.js Developers - Nevatrix",
        description:
            "Nevatrix is a full stack web development company in Warangal, India building React, Next.js, Node.js and MERN stack web applications and SaaS platforms for startups and businesses across India, USA and Canada. Hire expert full stack developers today.",
        keywords:
            "full stack development company warangal, full stack developers warangal, web application development warangal, software development company warangal, it company warangal, full stack developers near me, web app developers near me warangal, mern stack development company india, mern stack developers india, react development company india, nextjs development company india, nodejs development company india, react developers india, nodejs developers india, typescript developers india, saas development company india, saas application development india, web application development company india, custom web application development india, startup web development india, mvp development company india, hire full stack developers india, hire react developers india, hire nodejs developers india, hire mern stack developers india, software development company telangana, full stack development telangana, web application development telangana, affordable full stack development india, offshore web development india",
        url: "https://nevatrix.com/services/full-stack",
        service: "Full Stack Development",
        hasLayoutMetadata: false,
    },

    // ── Mobile App ───────────────────────────────────────────────
    // Competitors: Krify (#1 Warangal), GodDigitalMarketing, Sulekha
    // Krify ranks for: "mobile app development company in warangal",
    // "flutter app development warangal", "react native development"
    "mobile-app": {
        title: "Mobile App Development Company in Warangal | Android & iOS Apps - Nevatrix",
        description:
            "Nevatrix is the best mobile app development company in Warangal, Telangana building Android and iOS apps using React Native and Flutter. Serving startups and businesses across Warangal, Hanamkonda, Telangana, India, USA and Canada.",
        keywords:
            "mobile app development company in warangal, mobile app development warangal, android app development warangal, ios app development warangal, app development company warangal, mobile app developers warangal, mobile app developers near me, app development company near me warangal, best mobile app development company warangal, top app developers warangal, best android app developers warangal, react native development company india, react native app development warangal, flutter app development company india, flutter app development warangal, android app development company india, ios app development company india, cross platform app development india, kotlin app development india, ecommerce app development india, on demand app development india, food delivery app development india, startup app development india, mvp app development india, business app development india, mobile app development company hanamkonda, app developers hanamkonda, mobile app development khammam, hire app developers india, hire react native developers india, hire flutter developers india, mobile app development company india, mobile app development company telangana, affordable app development india, app development cost india",
        url: "https://nevatrix.com/services/mobile-app",
        service: "Mobile App Development",
        hasLayoutMetadata: false,
    },

    // ── Ecommerce ────────────────────────────────────────────────
    "ecommerce": {
        title: "Ecommerce Website Development in Warangal | Shopify & WooCommerce - Nevatrix",
        description:
            "Build your online store with Nevatrix — a professional ecommerce website development company in Warangal. We build Shopify, WooCommerce and custom ecommerce platforms for businesses across Telangana and India.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana, online store development warangal, ecommerce development india, build online store warangal, ecommerce website design telangana, shopify store design india, ecommerce solutions warangal, best ecommerce company warangal, ecommerce development hanamkonda, shopify development india, woocommerce developers india, custom ecommerce development india, ecommerce website development telangana",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Development",
        hasLayoutMetadata: false,
    },

    // ── About ────────────────────────────────────────────────────
    "about": {
        title: "About Nevatrix | Web Development & Digital Marketing Company in Warangal",
        description:
            "Learn about Nevatrix Technologies — an AI-driven web development and digital marketing company in Warangal, Telangana helping businesses grow with modern digital solutions since 2012.",
        keywords:
            "about nevatrix, nevatrix technologies warangal, it company warangal, software company warangal, best it company warangal, tech company telangana, nevatrix technologies pvt ltd, web development company warangal about",
        url: "https://nevatrix.com/about",
        service: "About Nevatrix",
        hasLayoutMetadata: false,
    },

    // ── Contact ──────────────────────────────────────────────────
    "contact": {
        title: "Contact Nevatrix | Web Development & SEO Company in Warangal - Free Quote",
        description:
            "Contact Nevatrix Technologies in Warangal for web development, SEO, mobile app development and digital marketing services. Get a free project consultation today.",
        keywords:
            "contact nevatrix, nevatrix warangal contact, web development quote warangal, hire web developers warangal, it services contact warangal, free website quote warangal, nevatrix phone number, nevatrix address warangal",
        url: "https://nevatrix.com/contact",
        service: "Contact Nevatrix",
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
        "web development company in warangal, digital marketing agency warangal, seo services warangal, website designers warangal, website development hanamkonda, web design company warangal, ecommerce development warangal, mobile app development telangana, ai software development india, web developers warangal, best it company warangal, software company warangal, web development khammam, website development nizamabad, it company warangal, full stack development india, react developers india, digital marketing telangana, affordable web development warangal, offshore web development india, web designers near me warangal, best web development company warangal, top it company warangal",
    url: "https://nevatrix.com",
    service: "Web Development & Digital Marketing",
    hasLayoutMetadata: false,
};

// ─────────────────────────────────────────────────────────────────
// HOMEPAGE FAQ — rich accordion results in Google Search
// Service pages have their own inline FAQs in page.tsx
// ─────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
    {
        question: "Which is the best web development company in Warangal?",
        answer:
            "Nevatrix is a leading web development company in Warangal, Telangana, offering custom website design, full stack development, ecommerce solutions and AI-powered digital marketing services since 2012.",
    },
    {
        question: "Does Nevatrix offer SEO services in Warangal?",
        answer:
            "Yes, Nevatrix provides professional SEO and digital marketing services in Warangal including local SEO, Google Ads management, social media marketing and lead generation for local businesses.",
    },
    {
        question: "Can Nevatrix build an ecommerce website?",
        answer:
            "Yes. Nevatrix develops Shopify, WooCommerce and custom ecommerce platforms for businesses of all sizes in Warangal and across India.",
    },
    {
        question: "Does Nevatrix develop mobile apps?",
        answer:
            "Yes. Nevatrix builds Android and iOS mobile applications for startups and established businesses using React Native and Flutter for cross-platform apps with high performance.",
    },
    {
        question: "What is the cost of website development in Warangal?",
        answer:
            "Website development cost in Warangal depends on the type — a basic business website starts from ₹8,000 while a full ecommerce or web application can range from ₹25,000 to ₹2,00,000+. Contact Nevatrix for a free quote.",
    },
    {
        question: "Does Nevatrix work with clients outside India?",
        answer:
            "Yes, Nevatrix provides remote web development and digital marketing services to clients in the USA, Canada, UK and other countries.",
    },
    {
        question: "What services does Nevatrix offer?",
        answer:
            "Nevatrix offers website design and development, full stack development, mobile app development, ecommerce development, AI software solutions, SEO, Google Ads and social media marketing services.",
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
        reviewCount: "38",   // ← Replace with real number
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
    includeFaq?: boolean;     // renders FAQ JSON-LD schema
    includeRating?: boolean;  // renders AggregateRating schema (homepage only)
    noindex?: boolean;        // /careers, /thank-you etc.
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
                    <meta property="og:image:alt" content="Nevatrix - Web Development & Digital Marketing Company in Warangal" />
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
        </Head>
    );
}
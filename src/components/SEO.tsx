import Head from "next/head";

/* ============================================================
   NEVATRIX — SEO COMPONENT
   Optimized for Google ranking in Warangal, Telangana & India
   Last updated: 2026
   ============================================================ */

/* ---------- COMPANY INFO ---------- */
const COMPANY = {
    name: "Nevatrix",
    legalName: "Nevatrix Technologies Pvt. Ltd.",
    url: "https://nevatrix.com",
    logo: "https://nevatrix.com/Nevatrix_logo.png",
    email: "info@nevatrix.com",
    phone: "+91-9989183654",
    foundingYear: "2012",
    description:
        "Nevatrix is a web development and AI digital marketing company in Warangal, Telangana offering website design, ecommerce development, mobile app development, full stack development and SEO services.",
    // ✅ Add all social profiles — improves E-E-A-T signals significantly
    sameAs: [
        "https://www.linkedin.com/company/nevatrix",
        "https://www.facebook.com/nevatrix",
        "https://www.instagram.com/nevatrix",
        "https://twitter.com/nevatrix",
        // ↓ Replace with your actual Google Business Profile URL
        // "https://g.co/kgs/YOUR_GOOGLE_BUSINESS_ID",
    ],
    address: {
        // ✅ IMPORTANT: Replace with your exact registered street address
        street: "Kazipet",
        city: "Warangal",
        state: "Telangana",
        postal: "506004",
        country: "IN",
    },
    // ✅ Warangal city center coordinates
    geo: {
        lat: "17.9689",
        lng: "79.5941",
    },
};

/* ---------- SERVICE PAGE SEO ---------- */
// Each service has its own title, description, keywords & URL
// Usage: <SEO page="web-development" />

const SEO_DATA: Record<
    string,
    {
        title: string;
        description: string;
        keywords: string;
        url: string;
        service: string;
        serviceType: string;
    }
> = {
    /* ── Web Development ── */
    "web-development": {
        title:
            "Web Development Company in Warangal | Website Design & Development - Nevatrix",
        description:
            "Nevatrix is a top web development company in Warangal offering custom website design, responsive web development, WordPress, and SEO-friendly business websites for small businesses and startups in Telangana.",
        keywords:
            "web development company in warangal, website design company warangal, website development warangal, web designers warangal, website developers warangal, best web development company warangal, website design hanamkonda, web development telangana, affordable website development warangal, professional website design warangal",
        url: "https://nevatrix.com/services/web-development",
        service: "Website Development",
        serviceType: "WebDesign",
    },

    /* ── Digital Marketing ── */
    "digital-marketing": {
        title:
            "SEO & Digital Marketing Agency in Warangal | Google Ads & Lead Generation - Nevatrix",
        description:
            "Nevatrix is a result-driven digital marketing and SEO agency in Warangal, Telangana. We offer local SEO, Google Ads, social media marketing, content marketing and lead generation services for businesses.",
        keywords:
            "digital marketing agency warangal, seo services warangal, seo company warangal, google ads agency warangal, local seo warangal, social media marketing warangal, digital marketing services warangal, best seo company warangal, online marketing warangal, ppc services warangal, lead generation warangal, digital marketing telangana",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
        serviceType: "MarketingAgency",
    },

    /* ── Ecommerce ── */
    ecommerce: {
        title:
            "Ecommerce Website Development in Warangal | Shopify & WooCommerce - Nevatrix",
        description:
            "Build your online store with Nevatrix — a professional ecommerce website development company in Warangal. We develop Shopify, WooCommerce, and custom ecommerce platforms for businesses across Telangana and India.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana, online store development warangal, ecommerce development india, build online store warangal, ecommerce website design telangana, shopify store design india, ecommerce solutions warangal",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Development",
        serviceType: "WebDesign",
    },

    /* ── Mobile App ── */
    "mobile-app": {
        title:
            "Mobile App Development Company in Warangal, Telangana - Android & iOS - Nevatrix",
        description:
            "Nevatrix is a mobile app development company in Warangal building high-performance Android and iOS applications for startups and enterprises across Telangana and India.",
        keywords:
            "mobile app development warangal, android app development warangal, ios app development telangana, app development company warangal, mobile application development india, app developers warangal, react native app development india, flutter app development telangana, mobile app development company telangana",
        url: "https://nevatrix.com/services/mobile-app",
        service: "Mobile App Development",
        serviceType: "SoftwareApplication",
    },

    /* ── Full Stack ── */
    "full-stack": {
        title:
            "Full Stack Web Development Company | React, Next.js & MERN Stack - Nevatrix",
        description:
            "Hire expert full stack developers from Nevatrix for React, Next.js, Node.js, and MERN stack web application and SaaS platform development. Serving businesses across India, USA and Canada.",
        keywords:
            "full stack development company india, mern stack developers india, nextjs development company india, react development company, hire full stack developers india, nodejs development india, full stack web development warangal, saas development company india, react developers india, web application development india",
        url: "https://nevatrix.com/services/full-stack",
        service: "Full Stack Development",
        serviceType: "WebDesign",
    },

    /* ── AI Software ── */
    "ai-solutions": {
        title:
            "AI Software Development Company in Warangal, India | AI-Powered Solutions - Nevatrix",
        description:
            "Nevatrix offers AI software development and intelligent automation solutions in Warangal. We build AI-powered web apps, chatbots, data analytics platforms, and custom AI tools for modern businesses.",
        keywords:
            "ai software development company india, ai development company warangal, artificial intelligence solutions telangana, ai-powered web development india, machine learning development india, ai chatbot development india, ai automation services india, intelligent software solutions warangal, ai development company telangana",
        url: "https://nevatrix.com/services/ai-solutions",
        service: "AI Software Development",
        serviceType: "SoftwareApplication",
    },

    /* ── About Page ── */
    about: {
        title:
            "About Nevatrix | Web Development & Digital Marketing Company in Warangal",
        description:
            "Learn about Nevatrix Technologies — a web development and AI digital marketing company based in Warangal, Telangana, helping businesses grow with modern digital solutions since 2012.",
        keywords:
            "about nevatrix, nevatrix technologies warangal, it company warangal, software company warangal, best it company warangal, tech company telangana, nevatrix technologies pvt ltd",
        url: "https://nevatrix.com/about",
        service: "About Nevatrix",
        serviceType: "ProfessionalService",
    },

    /* ── Contact Page ── */
    contact: {
        title:
            "Contact Nevatrix | Web Development & SEO Company in Warangal - Get a Free Quote",
        description:
            "Contact Nevatrix Technologies in Warangal for web development, SEO, mobile app development, and digital marketing services. Get a free project consultation today.",
        keywords:
            "contact nevatrix, nevatrix warangal contact, web development quote warangal, hire web developers warangal, it services contact warangal, free website quote warangal",
        url: "https://nevatrix.com/contact",
        service: "Contact Nevatrix",
        serviceType: "ProfessionalService",
    },
};

/* ---------- HOMEPAGE SEO ---------- */
const DEFAULT_SEO = {
    title:
        "Web Development & Digital Marketing Company in Warangal | Nevatrix",
    description:
        "Nevatrix is a leading web development and digital marketing company in Warangal, Telangana. We offer website design, ecommerce development, mobile apps, AI solutions and SEO services. Serving Warangal, Hanamkonda, Khammam, Nizamabad and remote clients across India, USA & Canada.",
    keywords:
        "web development company in warangal, digital marketing agency warangal, seo services warangal, website designers warangal, website development hanamkonda, web design company warangal, ecommerce development warangal, mobile app development telangana, ai software development india, web developers warangal, best it company warangal, software company warangal, web development khammam, website development nizamabad, it company warangal, full stack development india, react developers india, digital marketing telangana, affordable web development warangal, offshore web development india",
    url: "https://nevatrix.com",
    service: "Web Development & Digital Marketing",
    serviceType: "ProfessionalService",
};

/* ---------- FAQ SCHEMA ---------- */
// ✅ These appear as rich accordion results in Google Search
// Add more Q&As targeting high-volume "People Also Ask" queries
const FAQ_ITEMS = [
    {
        question: "Which is the best web development company in Warangal?",
        answer:
            "Nevatrix is a leading web development company in Warangal, Telangana, offering custom website design, full stack development, ecommerce solutions, and AI-powered digital marketing services since 2012.",
    },
    {
        question: "Does Nevatrix offer SEO services in Warangal?",
        answer:
            "Yes, Nevatrix provides professional SEO and digital marketing services in Warangal including local SEO, Google Ads management, social media marketing, and lead generation for local businesses.",
    },
    {
        question: "Can Nevatrix build an ecommerce website?",
        answer:
            "Yes. Nevatrix develops Shopify, WooCommerce, and custom ecommerce platforms for businesses of all sizes in Warangal and across India.",
    },
    {
        question: "Does Nevatrix develop mobile apps?",
        answer:
            "Yes. Nevatrix builds Android and iOS mobile applications for startups and established businesses. We use React Native and Flutter to deliver cross-platform apps with high performance.",
    },
    {
        question: "What is the cost of website development in Warangal?",
        answer:
            "Website development cost in Warangal depends on the type — a basic business website starts from ₹8,000 while a full ecommerce or web application can range from ₹25,000 to ₹2,00,000+. Contact Nevatrix for a free quote.",
    },
    {
        question: "Does Nevatrix work with clients outside India?",
        answer:
            "Yes, Nevatrix provides remote web development and digital marketing services to clients in the USA, Canada, UK, and other countries.",
    },
    {
        question: "What services does Nevatrix offer?",
        answer:
            "Nevatrix offers website design and development, full stack development, mobile app development, ecommerce development, AI software solutions, SEO, Google Ads, and social media marketing services.",
    },
];

/* ---------- REVIEW SCHEMA ---------- */
// ✅ Aggregate ratings improve CTR in search results
// Replace with real review data from Google Business / testimonials
const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://nevatrix.com/#business",
    name: "Nevatrix",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "38",   // ← Update with your real review count
        bestRating: "5",
        worstRating: "1",
    },
};

/* ---------- PROPS ---------- */
type SEOProps = {
    page?: string;
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    includeFaq?: boolean;        // Pass true on homepage & service pages
    includeRating?: boolean;     // Pass true on homepage
    noindex?: boolean;           // Pass true on /thank-you, /careers etc.
};

/* ============================================================
   MAIN SEO COMPONENT
   ============================================================ */
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
    const baseData =
        (page && SEO_DATA[page as keyof typeof SEO_DATA]) || DEFAULT_SEO;

    const data = {
        ...baseData,
        title: title || baseData.title,
        description: description || baseData.description,
        keywords: keywords || baseData.keywords,
        url: url || baseData.url,
        // ✅ Replace /og-image.jpg with an actual 1200x630px branded image
        image: image || "https://nevatrix.com/og-image.jpg",
    };

    /* ── Organization Schema ── */
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://nevatrix.com/#organization",
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        description: COMPANY.description,
        url: COMPANY.url,
        logo: {
            "@type": "ImageObject",
            url: COMPANY.logo,
            width: 300,
            height: 60,
        },
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
        // ✅ List all services under the org — helps Google understand full scope
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

    /* ── Local Business Schema ── */
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
                dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
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
            { "@type": "State", name: "Telangana" },
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
        ],
        areaServed: ["India", "United States", "Canada", "United Kingdom"],
        priceRange: "₹₹",
        // ✅ Replace with your actual Google Maps business URL
        hasMap: "https://maps.google.com/?q=Nevatrix+Warangal+Telangana",
        sameAs: COMPANY.sameAs,
    };

    /* ── Service Schema ── */
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data.service,
        name: data.service,
        url: data.url,
        description: data.description,
        provider: {
            "@type": "Organization",
            "@id": "https://nevatrix.com/#organization",
            name: COMPANY.name,
            url: COMPANY.url,
        },
        areaServed: [
            { "@type": "City", name: "Warangal" },
            { "@type": "State", name: "Telangana" },
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
        ],
    };

    /* ── WebSite Schema ── */
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
        // ✅ Enables Sitelinks Search Box in Google results (if eligible)
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate: "https://nevatrix.com/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    };

    /* ── FAQ Schema ── */
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    };

    /* ── Breadcrumb Schema ── */
    // Only rendered on service/inner pages, not on homepage
    const breadcrumbSchema = page
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://nevatrix.com",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://nevatrix.com/services",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: data.service,
                    item: data.url,
                },
            ],
        }
        : null;

    return (
        <Head>
            {/* ══ Primary SEO Tags ══ */}
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="author" content="Nevatrix Technologies Pvt. Ltd." />
            <meta name="copyright" content="Nevatrix Technologies Pvt. Ltd." />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="rating" content="general" />

            {/* ══ Robots ══ */}
            {noindex ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />
            )}

            {/* ══ Canonical URL ══ */}
            {/* ✅ Prevents duplicate content penalties */}
            <link rel="canonical" href={data.url} />

            {/* ══ Geo Targeting ══ */}
            {/* ✅ Helps Google associate site with Warangal geography */}
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Warangal, Telangana, India" />
            <meta name="geo.position" content={`${COMPANY.geo.lat};${COMPANY.geo.lng}`} />
            <meta name="ICBM" content={`${COMPANY.geo.lat}, ${COMPANY.geo.lng}`} />

            {/* ══ Open Graph (Facebook, LinkedIn, WhatsApp previews) ══ */}
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

            {/* ══ Twitter / X Card ══ */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:image" content={data.image} />
            {/* ✅ Uncomment once Twitter account is live */}
            {/* <meta name="twitter:site" content="@nevatrix" /> */}
            {/* <meta name="twitter:creator" content="@nevatrix" /> */}

            {/* ══ Mobile & PWA ══ */}
            <meta name="theme-color" content="#0f172a" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Nevatrix" />

            {/* ══ Structured Data — Organization ══ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* ══ Structured Data — Local Business ══ */}
            {/* ✅ Critical for Google Maps & "near me" searches */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* ══ Structured Data — Service ══ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* ══ Structured Data — WebSite ══ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />

            {/* ══ Structured Data — Breadcrumbs (service pages only) ══ */}
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}

            {/* ══ Structured Data — FAQ (pass includeFaq={true}) ══ */}
            {includeFaq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            {/* ══ Structured Data — Aggregate Rating (pass includeRating={true}) ══ */}
            {/* ✅ Shows star ratings in Google results — increases CTR by ~20–30% */}
            {includeRating && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(aggregateRatingSchema),
                    }}
                />
            )}
        </Head>
    );
}

/* ============================================================
   USAGE EXAMPLES
   ============================================================

   Homepage:
     <SEO includeFaq={true} includeRating={true} />

   Web Development page:
     <SEO page="web-development" includeFaq={true} />

   Digital Marketing page:
     <SEO page="digital-marketing" includeFaq={true} />

   Ecommerce page:
     <SEO page="ecommerce" />

   Mobile App page:
     <SEO page="mobile-app" />

   Full Stack page:
     <SEO page="full-stack" />

   AI Solutions page:
     <SEO page="ai-solutions" />

   About page:
     <SEO page="about" />

   Contact page:
     <SEO page="contact" />

   Thank You / No-index page:
     <SEO noindex={true} title="Thank You" />

   Custom override:
     <SEO
       title="Custom Title"
       description="Custom description"
       url="https://nevatrix.com/custom-page"
     />

   ============================================================ */

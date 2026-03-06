import Head from "next/head";

/* ---------- COMPANY INFO ---------- */
const COMPANY = {
    name: "Nevatrix",
    legalName: "Nevatrix Technologies Pvt. Ltd.",
    url: "https://nevatrix.com",
    logo: "https://nevatrix.com/Nevatrix_logo.png",
    email: "info@nevatrix.com",
    phone: "+91 9989183654",
    foundingYear: "2012",
    // ✅ FIX: Add all social profiles to boost E-E-A-T signals
    sameAs: [
        "https://www.linkedin.com/company/nevatrix",
        // Add these once created:
        // "https://www.facebook.com/nevatrix",
        // "https://www.instagram.com/nevatrix",
        // "https://g.co/kgs/YOUR_GOOGLE_BUSINESS_ID",  ← Add Google Business Profile URL
    ],
    address: {
        // ✅ FIX: Use a real street address for better local ranking
        street: "Kazipet", // ← Replace with actual address
        city: "Warangal",
        state: "Telangana",
        postal: "506002",
        country: "IN",
    },
};

/* ---------- SERVICE PAGE SEO ---------- */
const SEO_DATA = {
    // ✅ FIX: "web-development" now points to its own correct URL
    "web-development": {
        title: "Web Development Company in Warangal | Website Designers - Nevatrix",
        description:
            "Nevatrix is a professional web development company in Warangal offering custom website design, responsive development and SEO optimized business websites.",
        keywords:
            "web development company warangal, website designers warangal, website development hanamkonda, web developers near me warangal",
        url: "https://nevatrix.com/services/web-development", // ✅ FIXED (was pointing to /full-stack)
        service: "Website Development",
        serviceType: "WebDesign",
    },

    "digital-marketing": {
        title: "SEO & Digital Marketing Agency in Warangal - Nevatrix",
        description:
            "Digital marketing and SEO services in Warangal including local SEO, Google Ads management and lead generation for businesses.",
        keywords:
            "seo services warangal, digital marketing agency warangal, google ads agency warangal, local seo warangal",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
        serviceType: "MarketingAgency",
    },

    ecommerce: {
        title: "Ecommerce Website Development in Warangal | Shopify & WooCommerce - Nevatrix",
        description:
            "Professional ecommerce website development company in Warangal building Shopify and WooCommerce online stores.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Development",
        serviceType: "WebDesign",
    },

    "mobile-app": {
        title: "Mobile App Development Company in Telangana - Nevatrix",
        description:
            "Android and iOS mobile app development services for startups and businesses with scalable architecture.",
        keywords:
            "mobile app development telangana, android app developers warangal, ios app development india",
        url: "https://nevatrix.com/services/mobile-app",
        service: "Mobile App Development",
        serviceType: "SoftwareApplication",
    },

    "full-stack": {
        title: "Full Stack & Next.js Development Company - Nevatrix",
        description:
            "Hire MERN stack, React and Next.js developers for scalable web applications and SaaS platforms.",
        keywords:
            "mern stack developers india, nextjs development company india, react development company",
        url: "https://nevatrix.com/services/full-stack",
        service: "Full Stack Development",
        serviceType: "WebDesign",
    },
};

/* ---------- HOMEPAGE SEO ---------- */
const DEFAULT_SEO = {
    // ✅ FIX: More click-worthy title (action-oriented)
    title: "Web Development & Digital Marketing Company in Warangal | Nevatrix",
    description:
        "Nevatrix is a web development and digital marketing company in Warangal, Telangana. We offer website design, ecommerce, mobile apps, AI solutions and SEO services. Serving Warangal, Hanamkonda, Khammam, Nizamabad and remote clients in USA & Canada.",
    // ✅ FIX: Removed typo "Nevatrtix", cleaned up, added high-value keywords
    keywords:
        "Nevatrix, web development company in Warangal, digital marketing agency Warangal, SEO services Warangal, website designers Warangal, website development Hanamkonda, web design company Warangal, ecommerce development Warangal, mobile app development Telangana, AI software development India, web developers Warangal, best IT company Warangal, software company Warangal, web development Khammam, website development Nizamabad, offshore web development India",
    url: "https://nevatrix.com",
    service: "Digital Agency Services",
    serviceType: "ProfessionalService",
};

/* ---------- FAQ SCHEMA DATA ---------- */
// ✅ NEW: FAQPage schema gives rich accordion results on Google
const FAQ_ITEMS = [
    {
        question: "Which is the best web development company in Warangal?",
        answer:
            "Nevatrix is a leading web development company in Warangal, Telangana, offering custom website design, full stack development, ecommerce solutions, and AI-powered digital marketing services.",
    },
    {
        question: "Does Nevatrix offer SEO services in Warangal?",
        answer:
            "Yes, Nevatrix provides professional SEO and digital marketing services in Warangal, including local SEO, Google Ads, social media marketing, and lead generation for businesses.",
    },
    {
        question: "Can Nevatrix build an ecommerce website?",
        answer:
            "Yes. Nevatrix develops Shopify, WooCommerce, and custom ecommerce platforms for businesses of all sizes in Warangal and across India.",
    },
    {
        question: "Does Nevatrix work with clients outside India?",
        answer:
            "Yes, Nevatrix provides remote web development and digital marketing services to clients in the USA, Canada, and other countries.",
    },
];

/* ---------- PROPS ---------- */
type SEOProps = {
    page?: string;
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    includeFaq?: boolean; // ✅ NEW: toggle FAQ schema per page
};

export default function SEO({
                                page,
                                title,
                                description,
                                keywords,
                                url,
                                image,
                                includeFaq = false,
                            }: SEOProps) {
    const baseData =
        (page && SEO_DATA[page as keyof typeof SEO_DATA]) || DEFAULT_SEO;

    const data = {
        ...baseData,
        title: title || baseData.title,
        description: description || baseData.description,
        keywords: keywords || baseData.keywords,
        url: url || baseData.url,
        image: image || "https://nevatrix.com/og-image.jpg",
    };

    /* ---------- ORGANIZATION SCHEMA ---------- */
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://nevatrix.com/#organization",
        name: COMPANY.name,
        legalName: COMPANY.legalName,
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
                areaServed: ["IN", "US", "CA"],
                availableLanguage: ["English", "Telugu"],
            },
        ],
    };

    /* ---------- LOCAL BUSINESS SCHEMA ---------- */
    // ✅ FIX: Using "LocalBusiness" as base type + specific type for better Google Maps signals
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": "https://nevatrix.com/#business",
        name: COMPANY.name,
        image: COMPANY.logo,
        url: COMPANY.url,
        telephone: COMPANY.phone,
        email: COMPANY.email,
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
            latitude: "17.9689",
            longitude: "79.5941",
        },
        // ✅ FIX: Structured hours (Google prefers this over plain string)
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
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
        ],
        areaServed: ["India", "United States", "Canada"],
        priceRange: "₹₹",
        hasMap: "https://maps.google.com/?q=Nevatrix+Warangal", // ← Replace with real Google Maps link
        sameAs: COMPANY.sameAs,
    };

    /* ---------- SERVICE SCHEMA ---------- */
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
            { "@type": "Country", name: "India" },
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
        ],
    };

    /* ---------- WEBSITE SCHEMA ---------- */
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

    /* ---------- FAQ SCHEMA ---------- */
    // ✅ NEW: Renders as rich accordion result on Google
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

    /* ---------- BREADCRUMB SCHEMA ---------- */
    // ✅ NEW: Helps Google show breadcrumbs in search results for service pages
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
            {/* ── Primary SEO ── */}
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="author" content="Nevatrix Technologies Pvt. Ltd." />

            {/* ── Geo Targeting ── */}
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Warangal, Telangana, India" />
            <meta name="geo.position" content="17.9689;79.5941" />
            <meta name="ICBM" content="17.9689,79.5941" />

            {/* ── Canonical ── */}
            <link rel="canonical" href={data.url} />

            {/* ── Robots ── */}
            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />

            {/* ── Open Graph ── */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={data.url} />
            <meta property="og:site_name" content="Nevatrix" />
            <meta property="og:image" content={data.image} />
            <meta property="og:image:width" content="1200" />   {/* ✅ NEW */}
            <meta property="og:image:height" content="630" />   {/* ✅ NEW */}
            <meta property="og:locale" content="en_IN" />       {/* ✅ NEW: geo signal */}

            {/* ── Twitter Card ── */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:image" content={data.image} />
            {/* ✅ NEW: Add once you have a Twitter account */}
            {/* <meta name="twitter:site" content="@nevatrix" /> */}

            {/* ── Structured Data ── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />

            {/* ✅ NEW: Breadcrumb for service pages */}
            {breadcrumbSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                />
            )}

            {/* ✅ NEW: FAQ schema (pass includeFaq={true} on homepage or service pages) */}
            {includeFaq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
        </Head>
    );
}
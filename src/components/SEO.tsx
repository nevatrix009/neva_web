import Head from "next/head";

/* ---------- COMPANY INFO ---------- */
const COMPANY = {
    name: "Nevatrix",
    url: "https://nevatrix.com",
    logo: "https://nevatrix.com/Nevatrix_logo.png",
    email: "info@nevatrix.com",
    phone: "+91 9989183654",
    sameAs: ["https://www.linkedin.com/company/nevatrix"],
    address: {
        street: "Warangal",
        city: "Warangal",
        state: "Telangana",
        postal: "506002",
        country: "IN",
    },
};

/* ---------- SERVICE PAGE SEO ---------- */
const SEO_DATA = {
    "web-development": {
        title: "Web Development Company in Warangal | Website Designers - Nevatrix",
        description:
            "Nevatrix is a professional web development company in Warangal offering custom website design, responsive development and SEO optimized business websites.",
        keywords:
            "web development company warangal, website designers warangal, website development hanamkonda, web developers near me warangal",
        url: "https://nevatrix.com/services/full-stack",
        service: "Website Development",
    },

    "digital-marketing": {
        title: "SEO & Digital Marketing Agency in Warangal - Nevatrix",
        description:
            "Digital marketing and SEO services in Warangal including local SEO, Google Ads management and lead generation for businesses.",
        keywords:
            "seo services warangal, digital marketing agency warangal, google ads agency warangal, local seo warangal",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
    },

    ecommerce: {
        title: "Ecommerce Website Development in Warangal | Shopify & WooCommerce - Nevatrix",
        description:
            "Professional ecommerce website development company in Warangal building Shopify and WooCommerce online stores.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Development",
    },

    "mobile-app": {
        title: "Mobile App Development Company in Telangana - Nevatrix",
        description:
            "Android and iOS mobile app development services for startups and businesses with scalable architecture.",
        keywords:
            "mobile app development telangana, android app developers warangal, ios app development india",
        url: "https://nevatrix.com/services/mobile-app",
        service: "Mobile App Development",
    },

    "full-stack": {
        title: "Full Stack & Next.js Development Company - Nevatrix",
        description:
            "Hire MERN stack, React and Next.js developers for scalable web applications and SaaS platforms.",
        keywords:
            "mern stack developers india, nextjs development company india, react development company",
        url: "https://nevatrix.com/services/full-stack",
        service: "Full Stack Development",
    },
};

/* ---------- HOMEPAGE SEO ---------- */
const DEFAULT_SEO = {
    title: "Web Development Company in Warangal | Website Designers - Nevatrix",
    description:
        "Nevatrix is a web development company in Warangal providing website design, ecommerce development and SEO services. We serve businesses in Warangal, Hanamkonda, Khammam and Nizamabad and also offer remote web development services for clients in the USA and Canada.",
    keywords:
        "Nevatrtix, web development company in warangal, Best AI Digital Marketing Companies in Warangal, SEO Services in Warangal, Best Digital Marketing Training in Warangal, website designers in warangal, website development warangal, web designers warangal, website designing companies in Warangal, web development khammam, website development nizamabad, hire web developers india, offshore web development company india",
    url: "https://nevatrix.com",
    service: "Website Development Services",
};

/* ---------- PROPS ---------- */
type SEOProps = {
    page?: string;
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
};

export default function SEO({
                                page,
                                title,
                                description,
                                keywords,
                                url,
                                image,
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
        url: COMPANY.url,
        logo: COMPANY.logo,
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
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://nevatrix.com/#business",
        name: COMPANY.name,
        image: COMPANY.logo,
        url: COMPANY.url,
        telephone: COMPANY.phone,
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
        openingHours: "Mo-Sa 09:00-20:00",
    };

    /* ---------- SERVICE SCHEMA ---------- */
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data.service,
        provider: {
            "@type": "Organization",
            name: COMPANY.name,
            url: COMPANY.url,
        },
        areaServed: ["India", "United States", "Canada"],
    };

    /* ---------- WEBSITE SCHEMA (AI SEO) ---------- */
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: COMPANY.name,
        url: COMPANY.url,
        inLanguage: "en",
        potentialAction: {
            "@type": "SearchAction",
            target: "https://nevatrix.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <Head>
            {/* Primary SEO */}
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="author" content="Nevatrix" />

            {/* Geo Targeting */}
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Warangal, Telangana, India" />
            <meta name="geo.position" content="17.9689;79.5941" />
            <meta name="ICBM" content="17.9689,79.5941" />

            {/* Canonical */}
            <link rel="canonical" href={data.url} />

            {/* Robots */}
            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={data.url} />
            <meta property="og:site_name" content="Nevatrix" />
            <meta property="og:image" content={data.image} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:image" content={data.image} />

            {/* Structured Data */}
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
        </Head>
    );
}

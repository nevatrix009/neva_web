import Head from "next/head";

/* ---------- COMPANY INFO ---------- */
const COMPANY = {
    name: "Nevatrix",
    url: "https://nevatrix.com",
    logo: "https://nevatrix.com/logo.png",
    email: "info@nevatrix.com",
    phone: "+91 9989183654",
    address: {
        street: "Warangal",
        city: "Warangal",
        state: "Telangana",
        postal: "506002",
        country: "IN",
    },
};

/* ---------- SEO DATA (SERVICE PAGES) ---------- */
const SEO_DATA = {
    "digital-marketing": {
        title: "Digital Marketing Agency in Warangal | SEO & Google Ads - Nevatrix",
        description:
            "Nevatrix is a leading digital marketing agency in Warangal providing SEO services, Google Ads management and social media marketing to generate leads and increase sales.",
        keywords:
            "digital marketing agency warangal, seo services warangal, google ads agency warangal, social media marketing company telangana, local seo services warangal",
        url: "https://nevatrix.com/services/digital-marketing",
        service: "Digital Marketing Services",
    },

    ecommerce: {
        title: "Ecommerce Website Development Company in Warangal - Nevatrix",
        description:
            "Professional ecommerce website development company in Warangal offering Shopify, WooCommerce and custom online store solutions.",
        keywords:
            "ecommerce website development warangal, shopify developers warangal, woocommerce development telangana, online store development india",
        url: "https://nevatrix.com/services/ecommerce",
        service: "Ecommerce Website Development",
    },

    "web-development": {
        title: "Web Development Company in Warangal | Website Designers - Nevatrix",
        description:
            "Nevatrix is a professional web development company in Warangal offering custom website development, responsive design and SEO optimized websites.",
        keywords:
            "web development company warangal, website designers warangal, website development hanamkonda, web developers near me warangal",
        url: "https://nevatrix.com/services/web-development",
        service: "Website Development",
    },

    "mobile-app": {
        title: "Mobile App Development Company in Telangana - Nevatrix",
        description:
            "Mobile app development company creating Android and iOS applications with modern UI and scalable architecture.",
        keywords:
            "mobile app development company telangana, android app developers warangal, ios app development india",
        url: "https://nevatrix.com/services/mobile-app-development",
        service: "Mobile App Development",
    },

    "full-stack": {
        title: "Full Stack & Next.js Development Company - Nevatrix",
        description:
            "Hire full stack developers for MERN stack, React and Next.js scalable web applications and SaaS platforms.",
        keywords:
            "mern stack developers india, nextjs development company, react development company warangal, full stack developers india",
        url: "https://nevatrix.com/services/full-stack-development",
        service: "Full Stack Development",
    },
};

/* ---------- DEFAULT (HOMEPAGE) ---------- */
const DEFAULT_SEO = {
    title: "Nevatrix | Web Development & Digital Marketing Company in Warangal",
    description:
        "Nevatrix is a web development and digital marketing company in Warangal providing website design, SEO, ecommerce and software development services.",
    keywords:
        "web development company warangal, digital marketing agency warangal, website designers hanamkonda, seo services nizamabad, software company khammam",
    url: "https://nevatrix.com",
    service: "Software & Digital Services",
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

    /* Select page SEO or default */
    const baseData =
        (page && SEO_DATA[page as keyof typeof SEO_DATA]) || DEFAULT_SEO;

    /* Allow manual overrides */
    const data = {
        ...baseData,
        title: title || baseData.title,
        description: description || baseData.description,
        keywords: keywords || baseData.keywords,
        url: url || baseData.url,
        image: image || "https://nevatrix.com/og-image.jpg",
    };

    /* ---------- SCHEMA: ORGANIZATION ---------- */
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: COMPANY.name,
        url: COMPANY.url,
        logo: COMPANY.logo,
        email: COMPANY.email,
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: COMPANY.phone,
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Telugu"],
            },
        ],
    };

    /* ---------- SCHEMA: LOCAL BUSINESS ---------- */
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: COMPANY.name,
        image: COMPANY.logo,
        "@id": COMPANY.url,
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
        areaServed: ["Warangal", "Hanamkonda", "Nizamabad", "Khammam"],
    };

    /* ---------- SCHEMA: SERVICE ---------- */
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data.service,
        provider: {
            "@type": "Organization",
            name: COMPANY.name,
            url: COMPANY.url,
        },
        areaServed: "India",
    };

    /* ---------- SCHEMA: WEBSITE (AI SEO) ---------- */
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: COMPANY.name,
        url: COMPANY.url,
        potentialAction: {
            "@type": "SearchAction",
            target: `${COMPANY.url}/search?q={search_term_string}`,
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

            {/* GEO Targeting */}
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Warangal, Telangana, India" />
            <meta name="geo.position" content="17.9689;79.5941" />
            <meta name="ICBM" content="17.9689,79.5941" />

            {/* Canonical */}
            <link rel="canonical" href={data.url} />

            {/* Robots (AI + Google Crawlers) */}
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

            {/* JSON-LD SCHEMA */}
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
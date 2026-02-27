import Head from "next/head";

/* ---------- COMPANY INFO ---------- */
const COMPANY = {
    name: "Nevatrix",
    url: "https://nevatrix.com",
    logo: "https://nevatrix.com/Nevatrix_logo.png",
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

/* ---------- HOMEPAGE DEFAULT SEO (VERY IMPORTANT) ---------- */
const DEFAULT_SEO = {
    title: "Web Development & Digital Marketing Company in Warangal | Nevatrix",
    description:
        "Nevatrix is a leading web development and digital marketing company in Warangal providing website design, SEO services, Google Ads, ecommerce development and software solutions for businesses in Telangana.",
    keywords:
        "web development company warangal, digital marketing agency warangal, seo services warangal, website designers warangal, ecommerce developers warangal, google ads agency warangal",
    url: "https://nevatrix.com",
    service: "Web Development & Digital Marketing",
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

    /* ---------- ORGANIZATION ---------- */
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

    /* ---------- LOCAL BUSINESS ---------- */
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
        areaServed: ["Warangal", "Hanamkonda", "Kazipet", "Telangana"],
    };

    /* ---------- PROFESSIONAL SERVICE (MOST IMPORTANT) ---------- */
    const professionalServiceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: COMPANY.name,
        image: COMPANY.logo,
        "@id": COMPANY.url,
        url: COMPANY.url,
        telephone: COMPANY.phone,
        priceRange: "₹₹",
        address: {
            "@type": "PostalAddress",
            streetAddress: COMPANY.address.street,
            addressLocality: COMPANY.address.city,
            addressRegion: COMPANY.address.state,
            postalCode: COMPANY.address.postal,
            addressCountry: COMPANY.address.country,
        },
        openingHours: "Mo-Sa 09:00-20:00",
    };

    /* ---------- SERVICE ---------- */
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

    return (
        <Head>
            {/* PRIMARY SEO */}
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
            <meta name="keywords" content={data.keywords} />
            <meta name="author" content="Nevatrix" />

            {/* GEO */}
            <meta name="geo.region" content="IN-TG" />
            <meta name="geo.placename" content="Warangal, Telangana, India" />
            <meta name="geo.position" content="17.9689;79.5941" />
            <meta name="ICBM" content="17.9689,79.5941" />

            {/* CANONICAL */}
            <link rel="canonical" href={data.url} />

            {/* ROBOTS */}
            <meta
                name="robots"
                content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />

            {/* OPEN GRAPH */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={data.title} />
            <meta property="og:description" content={data.description} />
            <meta property="og:url" content={data.url} />
            <meta property="og:site_name" content="Nevatrix" />
            <meta property="og:image" content={data.image} />

            {/* TWITTER */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={data.title} />
            <meta name="twitter:description" content={data.description} />
            <meta name="twitter:image" content={data.image} />

            {/* SCHEMA */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        </Head>
    );
}
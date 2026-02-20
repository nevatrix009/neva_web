import type { Metadata } from "next";

const baseUrl = "https://nevatrix.com";

export type PageSEO =
    | "digital-marketing"
    | "ecommerce"
    | "mobile-app-development"
    | "full-stack-development";

export const SEO_DATA: Record<PageSEO, Metadata> = {
    "digital-marketing": {
        title: "Digital Marketing Agency in India | SEO, Google Ads & Social Media - Nevatrix",
        description:
            "Nevatrix is a professional digital marketing agency offering SEO, Google Ads and social media marketing services to increase website traffic, leads and sales.",
        keywords: [
            "digital marketing agency",
            "seo services company",
            "google ads agency",
            "social media marketing company",
            "lead generation services",
        ],
        openGraph: {
            title: "Digital Marketing Services - Nevatrix",
            description:
                "Grow your business online with Nevatrix digital marketing services.",
            url: `${baseUrl}/services/digital-marketing`,
            siteName: "Nevatrix",
            images: [
                {
                    url: "/digital-marketing.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Nevatrix Digital Marketing Services",
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: "Digital Marketing Agency - Nevatrix",
            description:
                "Increase traffic, leads and sales using SEO and paid marketing.",
            images: ["/digital-marketing.jpg"],
        },
        alternates: {
            canonical: `${baseUrl}/services/digital-marketing`,
        },
    },

    ecommerce: {
        title: "Ecommerce Website Development Company | Shopify & WooCommerce - Nevatrix",
        description:
            "Nevatrix develops ecommerce websites using Shopify, WooCommerce and custom platforms with payment and shipping integration.",
        keywords: [
            "ecommerce website development",
            "shopify development company",
            "woocommerce developers",
            "online store development",
        ],
        alternates: {
            canonical: `${baseUrl}/services/ecommerce`,
        },
    },

    "mobile-app-development": {
        title: "Mobile App Development Company | Android & iOS Apps - Nevatrix",
        description:
            "Nevatrix builds Android and iOS mobile applications for startups and businesses including ecommerce apps and on-demand service apps.",
        keywords: [
            "mobile app development company",
            "android app developers",
            "ios app development",
            "cross platform mobile apps",
        ],
        alternates: {
            canonical: `${baseUrl}/services/mobile-app-development`,
        },
    },

    "full-stack-development": {
        title: "Full Stack Development Company | Web Application Developers - Nevatrix",
        description:
            "Nevatrix provides full stack web development including frontend, backend APIs and scalable databases.",
        keywords: [
            "full stack development company",
            "web application development",
            "saas development company",
            "custom software development",
        ],
        alternates: {
            canonical: `${baseUrl}/services/full-stack-development`,
        },
    },

};

export function getPageSEO(page: PageSEO): Metadata {
    return SEO_DATA[page];
}
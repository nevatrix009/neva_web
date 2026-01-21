import Head from "next/head";

type SEOProps = {
    title: string;
    description: string;
    keywords?: string;
};

export default function SEO({
                                title,
                                description,
                                keywords,
                            }: SEOProps) {
    return (
        <Head>
            {/* Primary SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />

            {/* Keywords */}
            <meta
                name="keywords"
                content={
                    keywords ??
                    "web development company, AI solutions company, UI UX design agency, digital marketing agency, software development services"
                }
            />

            {/* Technical SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />

            {/* Open Graph (Social SEO) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />

            {/* Basic indexing */}
            <meta name="robots" content="index, follow" />
        </Head>
    );
}

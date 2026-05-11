import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import blogPosts, { BlogPost, BlogSection } from "@/data/blogPosts";
import { ArrowRight, Clock, Tag, CalendarDays, ChevronDown } from "lucide-react";

/* ── locale-safe date formatter (avoids SSR/client mismatch) ── */
const MONTHS_LONG = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function formatDate(iso: string) {
    const [y, m, d] = iso.split("-");
    return `${parseInt(d)} ${MONTHS_LONG[parseInt(m) - 1]} ${y}`;
}

/* ── category accent colours ── */
const CATEGORY_COLOR: Record<string, string> = {
    "Web Development":        "#0891B2",
    "Digital Marketing":      "#2563EB",
    "Mobile App Development": "#059669",
    "AI Solutions":           "#7C3AED",
};

// ─────────────────────────────────────────────────────────────────
// STATIC GENERATION
// ─────────────────────────────────────────────────────────────────
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: blogPosts.map((p) => ({ params: { slug: p.slug } })),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params?.slug) || null;
    return { props: { post } };
};

// ─────────────────────────────────────────────────────────────────
// CONTENT RENDERER
// ─────────────────────────────────────────────────────────────────
function renderSection(section: BlogSection, idx: number, accent: string) {
    switch (section.type) {
        case "h2":
            return (
                <h2 key={idx} className="text-2xl font-bold mt-10 mb-4" style={{ color: "#0F172A", fontFamily: "'Sora', sans-serif" }}>
                    {section.text}
                </h2>
            );
        case "h3":
            return (
                <h3 key={idx} className="text-xl font-semibold mt-7 mb-3" style={{ color: "#1E293B", fontFamily: "'Sora', sans-serif" }}>
                    {section.text}
                </h3>
            );
        case "p":
            return (
                <p key={idx} className="text-slate-600 leading-relaxed mb-5">
                    {section.text}
                </p>
            );
        case "ul":
            return (
                <ul key={idx} className="space-y-2 mb-5 text-slate-600 pl-0">
                    {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                            {item}
                        </li>
                    ))}
                </ul>
            );
        case "ol":
            return (
                <ol key={idx} className="space-y-2 mb-5 text-slate-600">
                    {section.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <span className="shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                                style={{ background: accent }}>{i + 1}</span>
                            {item}
                        </li>
                    ))}
                </ol>
            );
        case "cta":
            return (
                <div key={idx} className="my-8 text-center">
                    <Link
                        href={section.ctaHref || "/contact"}
                        className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-xl transition hover:-translate-y-0.5"
                        style={{ background: accent }}
                    >
                        {section.ctaLabel || "Contact Us"} <ArrowRight size={15} />
                    </Link>
                </div>
            );
        default:
            return null;
    }
}

// ─────────────────────────────────────────────────────────────────
// FAQ ACCORDION
// ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a, accent }: { q: string; a: string; accent: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-slate-100 last:border-0">
            <button
                className="w-full text-left py-4 flex justify-between items-start gap-4 font-semibold text-slate-800 transition"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                style={{ fontFamily: "'Mulish', sans-serif" }}
            >
                <span>{q}</span>
                <ChevronDown
                    size={18}
                    className="shrink-0 mt-0.5 transition-transform duration-300"
                    style={{ color: accent, transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                />
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
            >
                <p className="pb-4 text-slate-500 leading-relaxed text-sm">{a}</p>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────
export default function BlogPostPage({ post }: { post: BlogPost | null }) {
    if (!post) return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <p className="text-slate-500 text-lg">Post not found.</p>
        </div>
    );

    const accent = CATEGORY_COLOR[post.category] || "#2563EB";
    const canonicalUrl = `https://nevatrix.com/blog/${post.slug}`;

    // Page title: keep under 65 chars — strip subtitle after " — "
    const rawTitle = post.title.includes(" — ")
        ? post.title.split(" — ")[0].trim()
        : post.title.length > 52
        ? post.title.substring(0, 52).trim()
        : post.title;
    const pageTitle = `${rawTitle} | Nevatrix`;
    const ogImage = "https://nevatrix.com/Nevatrix_logo.png";

    // ── Article JSON-LD ──
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        keywords: post.keywords,
        url: canonicalUrl,
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Organization",
            name: "Nevatrix Technologies Pvt. Ltd.",
            url: "https://nevatrix.com",
        },
        publisher: {
            "@type": "Organization",
            name: "Nevatrix",
            logo: { "@type": "ImageObject", url: "https://nevatrix.com/Nevatrix_logo.png" },
        },
        image: {
            "@type": "ImageObject",
            url: ogImage,
            width: 300,
            height: 60,
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    };

    // ── FAQ JSON-LD ──
    const faqSchema = post.faq
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
        }
        : null;

    // ── BreadcrumbList ──
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://nevatrix.com" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://nevatrix.com/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
        ],
    };

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={post.metaDescription} />
                <meta name="keywords" content={post.keywords} />
                <meta name="author" content="Nevatrix Technologies Pvt. Ltd." />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:site_name" content="Nevatrix" />
                <meta property="og:image" content={ogImage} />
                <meta property="og:locale" content="en_IN" />
                <meta property="article:published_time" content={post.date} />
                <meta property="article:author" content="Nevatrix Technologies Pvt. Ltd." />
                <meta property="article:section" content={post.category} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.metaDescription} />
                <meta name="twitter:image" content={ogImage} />

                {/* JSON-LD */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                {faqSchema && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
                )}
            </Head>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');
                .post-page { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .post-page h1, .post-page h2, .post-page h3 { font-family: 'Sora', sans-serif; }

                /* hero */
                .post-hero-bg {
                    background:
                        radial-gradient(ellipse 60% 50% at 15% 60%, rgba(37,99,235,.22) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 55% at 85% 45%, rgba(8,145,178,.18) 0%, transparent 55%),
                        #061020;
                }
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .post-grid {
                    background-image:
                        linear-gradient(rgba(37,99,235,.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37,99,235,.06) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 12s linear infinite;
                }
                @keyframes fadeUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .5s .1s ease both;}
                .fu2{animation:fadeUp .5s .25s ease both;}
                .fu3{animation:fadeUp .5s .4s ease both;}

                /* cta section */
                .post-cta-bg {
                    background:
                        radial-gradient(ellipse 60% 50% at 15% 60%, rgba(37,99,235,.18) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 55% at 85% 45%, rgba(8,145,178,.14) 0%, transparent 55%),
                        #061020;
                }
                .cta-btn-main { transition: transform .2s ease, box-shadow .2s ease; }
                .cta-btn-main:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(37,99,235,.38); }

                /* related links */
                .rel-link { transition: border-color .2s ease, color .2s ease, background .2s ease; }
            `}</style>

            <div className="post-page">

                {/* ── HERO ── */}
                <section className="relative overflow-hidden post-hero-bg py-16">
                    <div className="absolute inset-0 post-grid opacity-50" />

                    <div className="relative z-10 max-w-4xl mx-auto px-6">

                        {/* Breadcrumb */}
                        <nav aria-label="Breadcrumb" className="fu1 flex items-center gap-2 text-xs text-slate-400 mb-8 flex-wrap">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            <span>/</span>
                            <Link href="/blog" className="hover:text-white transition">Blog</Link>
                            <span>/</span>
                            <span className="text-slate-300 truncate max-w-xs">{post.title}</span>
                        </nav>

                        {/* Category + meta */}
                        <div className="fu2 flex flex-wrap items-center gap-3 mb-5">
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                                style={{ background: accent + "25", color: accent }}>
                                <Tag size={9} /> {post.category}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                                <Clock size={11} /> {post.readTime}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                                <CalendarDays size={11} />
                                {formatDate(post.date)}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="fu3 text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                            {post.title}
                        </h1>

                        {/* Accent underline */}
                        <div className="h-[3px] w-32 rounded-full mb-6"
                            style={{ background: `linear-gradient(90deg,${accent},${accent}60)` }} />

                        {/* Author */}
                        <p className="text-slate-400 text-sm">
                            By <strong className="text-slate-200">{post.author}</strong>
                        </p>
                    </div>
                </section>

                {/* ── ARTICLE ── */}
                <article className="max-w-4xl mx-auto px-6 py-14">

                    {/* Content */}
                    <div>
                        {post.content.map((section, idx) => renderSection(section, idx, accent))}
                    </div>

                    {/* Internal Links */}
                    {post.internalLinks && post.internalLinks.length > 0 && (
                        <div className="mt-12 p-6 rounded-2xl border" style={{ background: accent + "08", borderColor: accent + "25" }}>
                            <h3 className="font-bold text-slate-700 mb-4 text-xs uppercase tracking-widest"
                                style={{ fontFamily: "'Sora', sans-serif" }}>
                                Related Services
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {post.internalLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="rel-link text-sm font-semibold px-4 py-2 rounded-lg border bg-white"
                                        style={{ color: accent, borderColor: accent + "30" }}
                                    >
                                        {link.text} →
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section */}
                    {post.faq && post.faq.length > 0 && (
                        <section className="mt-14">
                            <h2 className="text-2xl font-extrabold text-slate-900 mb-6"
                                style={{ fontFamily: "'Sora', sans-serif" }}>
                                Frequently Asked Questions
                            </h2>
                            <div className="border border-slate-100 rounded-2xl overflow-hidden bg-white px-6 shadow-sm">
                                {post.faq.map((item, idx) => (
                                    <FaqItem key={idx} q={item.q} a={item.a} accent={accent} />
                                ))}
                            </div>
                        </section>
                    )}
                </article>

                {/* ── BOTTOM CTA ── */}
                <section className="relative py-20 overflow-hidden post-cta-bg">
                    <div className="absolute inset-0 post-grid opacity-40" />
                    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight"
                            style={{ fontFamily: "'Sora', sans-serif" }}>
                            Ready to Grow Your Business?
                        </h2>
                        <p className="text-slate-300 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Contact Nevatrix — the leading web development and digital marketing company
                            in Warangal — for a free consultation and quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="cta-btn-main inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                                style={{ background: accent }}
                            >
                                Get a Free Quote <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl border transition hover:bg-white/10"
                                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}
                            >
                                Read More Articles
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

import { useState } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import SEO from "@/components/SEO";
import blogPosts, { BlogPost } from "@/data/blogPosts";
import { ArrowRight, Clock, Tag, CalendarDays, Search } from "lucide-react";

/* ── locale-safe date formatter (avoids SSR/client mismatch) ── */
const MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
function formatDate(iso: string) {
    const [y, m, d] = iso.split("-");
    return `${parseInt(d)} ${MONTHS_SHORT[parseInt(m) - 1]} ${y}`;
}

/* ── category accent colours ── */
const CATEGORY_COLOR: Record<string, string> = {
    "Web Development":        "#0891B2",
    "Digital Marketing":      "#2563EB",
    "Mobile App Development": "#059669",
    "AI Solutions":           "#7C3AED",
};

const ALL = "All";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
    const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))];
    const [active, setActive] = useState(ALL);
    const [query,  setQuery]  = useState("");

    const filtered = posts.filter((p) => {
        const matchCat = active === ALL || p.category === active;
        const matchQ   = query === "" ||
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.excerpt.toLowerCase().includes(query.toLowerCase());
        return matchCat && matchQ;
    });

    return (
        <>
            <SEO page="blog" />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Mulish:wght@300;400;500;600&display=swap');

                .blog-page { font-family: 'Mulish', sans-serif; color: #0F172A; }
                .blog-page h1, .blog-page h2, .blog-page h3 { font-family: 'Sora', sans-serif; }

                /* hero mesh */
                .blog-hero-bg {
                    background:
                        radial-gradient(ellipse 60% 50% at 15% 60%, rgba(37,99,235,.22) 0%, transparent 60%),
                        radial-gradient(ellipse 50% 55% at 85% 45%, rgba(8,145,178,.18) 0%, transparent 55%),
                        #061020;
                }

                /* moving grid */
                @keyframes gridScroll { from{background-position:0 0;} to{background-position:48px 48px;} }
                .blog-grid {
                    background-image:
                        linear-gradient(rgba(37,99,235,.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(37,99,235,.06) 1px, transparent 1px);
                    background-size: 48px 48px;
                    animation: gridScroll 12s linear infinite;
                }

                /* hero text */
                @keyframes fadeUp { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }
                .fu1{animation:fadeUp .55s .10s ease both;}
                .fu2{animation:fadeUp .55s .25s ease both;}
                .fu3{animation:fadeUp .55s .40s ease both;}
                @keyframes lineSlide{from{transform:scaleX(0);}to{transform:scaleX(1);}}
                .ls{animation:lineSlide .8s .55s ease both;transform-origin:left;}

                /* orbs */
                @keyframes orbA{0%,100%{transform:translate(0,0);}50%{transform:translate(18px,-14px);}}
                @keyframes orbB{0%,100%{transform:translate(0,0);}50%{transform:translate(-14px,18px);}}
                .boa{animation:orbA 12s ease-in-out infinite;}
                .bob{animation:orbB 15s ease-in-out infinite;}

                /* card */
                .blog-card {
                    transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
                    border: 1px solid #E2E8F0;
                }
                .blog-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 20px 48px -12px rgba(15,23,42,.13);
                }

                /* category pill */
                .cat-pill {
                    transition: background .2s ease, color .2s ease, border-color .2s ease;
                    cursor: pointer;
                }

                /* search */
                .blog-search:focus { outline: none; border-color: #2563EB; box-shadow: 0 0 0 3px rgba(37,99,235,.15); }

                /* read-more underline */
                .read-more { position: relative; display: inline-flex; align-items: center; gap: 4px; }
                .read-more::after {
                    content: ''; position: absolute; bottom: -2px; left: 0;
                    height: 1.5px; width: 0; border-radius: 2px;
                    transition: width .3s ease;
                }
                .blog-card:hover .read-more::after { width: 100%; }

                /* cta button */
                .cta-btn { transition: transform .2s ease, box-shadow .2s ease; }
                .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(37,99,235,.38); }
            `}</style>

            <div className="blog-page">

                {/* ══ HERO ══ */}
                <section className="relative min-h-[400px] flex items-center overflow-hidden blog-hero-bg">
                    <div className="absolute inset-0 blog-grid opacity-55" />
                    <div className="boa absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(37,99,235,.22),transparent 65%)" }} />
                    <div className="bob absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.18),transparent 65%)" }} />

                    <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 w-full text-center">
                        <div className="fu1 inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-bold tracking-widest uppercase"
                            style={{ borderColor: "rgba(37,99,235,.35)", background: "rgba(37,99,235,.12)", color: "#93C5FD" }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                            Nevatrix Blog
                        </div>

                        <h1 className="fu2 text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                            Web Development, SEO &amp;<br />
                            <span style={{ color: "#60A5FA" }}>Digital Marketing Insights</span>
                        </h1>

                        <div className="ls h-[3px] w-48 rounded-full mx-auto mb-6"
                            style={{ background: "linear-gradient(90deg,#2563EB,#0891B2)" }} />

                        <p className="fu3 text-slate-300 text-base leading-relaxed max-w-2xl mx-auto">
                            Expert guides for businesses in Warangal, Telangana and across India —
                            covering website design, SEO, mobile apps, ecommerce and AI solutions.
                        </p>
                    </div>
                </section>

                {/* ══ FILTER BAR ══ */}
                <section className="sticky top-[96px] z-30 bg-white border-b border-slate-100 shadow-sm py-4 px-6">
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                        {/* Category pills */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => {
                                const isActive = active === cat;
                                const accent = cat === ALL ? "#2563EB" : (CATEGORY_COLOR[cat] || "#2563EB");
                                return (
                                    <button
                                        key={cat}
                                        onClick={() => setActive(cat)}
                                        className="cat-pill text-xs font-semibold px-4 py-1.5 rounded-full border"
                                        style={isActive
                                            ? { background: accent, color: "#fff", borderColor: accent }
                                            : { background: accent + "0F", color: accent, borderColor: accent + "30" }
                                        }
                                    >
                                        {cat}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-64">
                            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search articles…"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="blog-search w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-slate-200 bg-slate-50 text-slate-700 placeholder-slate-400"
                            />
                        </div>
                    </div>
                </section>

                {/* ══ POSTS GRID ══ */}
                <section className="py-20 px-6" style={{ background: "linear-gradient(to bottom, #F8FAFC, #ffffff)" }}>
                    <div className="max-w-6xl mx-auto">

                        {filtered.length === 0 ? (
                            <div className="text-center py-20 text-slate-400">
                                <p className="text-lg font-medium">No articles found.</p>
                                <button onClick={() => { setActive(ALL); setQuery(""); }}
                                    className="mt-4 text-sm text-blue-600 hover:underline">
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {filtered.map((post) => {
                                    const accent = CATEGORY_COLOR[post.category] || "#2563EB";
                                    return (
                                        <article key={post.slug} className="blog-card rounded-2xl bg-white overflow-hidden flex flex-col">

                                            {/* Colour top bar */}
                                            <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg,${accent},${accent}70)` }} />

                                            <div className="p-8 flex flex-col flex-1">

                                                {/* Meta row */}
                                                <div className="flex items-center gap-3 mb-5 flex-wrap">
                                                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                                                        style={{ background: accent + "15", color: accent }}>
                                                        <Tag size={9} /> {post.category}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                                                        <Clock size={11} /> {post.readTime}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1 text-xs text-slate-400 ml-auto">
                                                        <CalendarDays size={11} />
                                                        {formatDate(post.date)}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                                                    <Link href={`/blog/${post.slug}`}
                                                        className="hover:underline decoration-2"
                                                        style={{ textDecorationColor: accent }}>
                                                        {post.title}
                                                    </Link>
                                                </h2>

                                                {/* Excerpt */}
                                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
                                                    {post.excerpt}
                                                </p>

                                                {/* Author + CTA */}
                                                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                                                    <span className="text-xs text-slate-400 font-medium">{post.author}</span>
                                                    <Link href={`/blog/${post.slug}`}
                                                        className="read-more text-sm font-semibold"
                                                        style={{ color: accent }}>
                                                        Read Article <ArrowRight size={13} />
                                                        <span className="absolute bottom-[-2px] left-0 h-[1.5px] rounded w-0 transition-all"
                                                            style={{ background: accent }} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>

                {/* ══ CTA ══ */}
                <section className="relative py-24 overflow-hidden blog-hero-bg">
                    <div className="absolute inset-0 blog-grid opacity-45" />
                    <div className="boa absolute -top-16 -left-16 w-[340px] h-[340px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(37,99,235,.22),transparent 60%)" }} />
                    <div className="bob absolute -bottom-16 -right-16 w-[360px] h-[360px] rounded-full blur-3xl pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(8,145,178,.18),transparent 60%)" }} />

                    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                            Need a Website or Digital Marketing<br />for Your Warangal Business?
                        </h2>
                        <p className="text-slate-300 text-base mb-10 max-w-xl mx-auto leading-relaxed">
                            Nevatrix is the leading web development and SEO company in Warangal, Telangana.
                            Get a free consultation and quote today.
                        </p>
                        <Link href="/contact"
                            className="cta-btn inline-flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-xl shadow-lg"
                            style={{ background: "#2563EB" }}>
                            Get a Free Quote <ArrowRight size={16} />
                        </Link>
                    </div>
                </section>

            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
    return { props: { posts } };
};

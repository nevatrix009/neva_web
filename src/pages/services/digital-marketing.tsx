import Image from "next/image";
import type { Metadata } from "next";
import SEO from "@/components/SEO";
import {
  Search,
  BarChart3,
  Target,
  Megaphone,
  LineChart,
  Users,
  CheckCircle,
  Globe,
  PhoneCall,
  TrendingUp,
  IndianRupee,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ================= PAGE ================= */
export default function DigitalMarketingPage() {

  /* ----- FIXED TYPED ARRAY (solves TS2345 error) ----- */
  const services: [string, LucideIcon, string][] = [
    ["Search Engine Optimization (SEO)", Search, "bg-blue-50 text-blue-600"],
    ["Google Ads (PPC Advertising)", Target, "bg-indigo-50 text-indigo-600"],
    ["Social Media Marketing", Users, "bg-purple-50 text-purple-600"],
    ["Content Marketing", Megaphone, "bg-emerald-50 text-emerald-600"],
    ["Analytics & Reporting", BarChart3, "bg-orange-50 text-orange-600"],
    ["Lead Generation Campaigns", LineChart, "bg-pink-50 text-pink-600"],
  ];

  return (
    <>
        <SEO page="digital-marketing" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[460px] flex items-center justify-center overflow-hidden text-center text-white">

        <div className="absolute inset-0">
          <Image
            src="/digital-marketing.jpg"
            alt="Digital marketing services by Nevatrix"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-blue-900/30 to-purple-900/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Grow Your Business With Digital Marketing
          </h1>

          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">
            We help businesses increase website traffic, generate quality leads,
            and boost sales using SEO, Google Ads and social media marketing strategies.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-indigo-50 -z-10"/>

        <div className="text-center mb-20">
          <h2 className="text-3xl font-semibold text-slate-800 mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-slate-600">
            Complete online marketing solutions to grow your business online.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map(([title, Icon, style], i) => (
            <div
              key={i}
              className="group rounded-3xl p-[1px] bg-gradient-to-br from-slate-100 to-white hover:-translate-y-4 hover:shadow-2xl transition"
            >
              <div className="bg-white/90 rounded-3xl p-8 h-full border border-slate-100">

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${style} group-hover:scale-110 transition`}>
                  <Icon size={28}/>
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {title}
                </h3>

                <p className="text-slate-600 text-sm">
                  Strategy-driven campaigns focused on measurable growth and ROI.
                </p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESULTS ================= */}
      <section className="relative py-32 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-20" />
        <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10"/>
        <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full -z-10"/>

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              What You Get From Our Marketing
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our campaigns are focused on measurable business growth, not vanity metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              {title:"More Website Traffic",desc:"Bring targeted visitors actively searching for your services.",color:"bg-blue-50 border-blue-100 text-blue-600",icon:Globe},
              {title:"More Leads & Enquiries",desc:"Turn visitors into real customers through optimized funnels.",color:"bg-indigo-50 border-indigo-100 text-indigo-600",icon:PhoneCall},
              {title:"Higher Google Rankings",desc:"Rank your business on Google search results for important keywords.",color:"bg-emerald-50 border-emerald-100 text-emerald-600",icon:TrendingUp},
              {title:"Increased Sales",desc:"Generate consistent revenue using conversion-focused marketing.",color:"bg-purple-50 border-purple-100 text-purple-600",icon:IndianRupee},
            ].map((item,i)=>(
              <div key={i} className={`group rounded-3xl p-8 border ${item.color} hover:-translate-y-3 hover:shadow-2xl transition duration-300 bg-white/70 backdrop-blur-xl`}>
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center border ${item.color} group-hover:scale-110 transition`}>
                  <item.icon size={26}/>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                <div className="mt-6 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full group-hover:w-full transition-all duration-300"/>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* ================= MARKETING PROCESS ================= */}
        <section className="relative py-32 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50 -z-20" />

            <div className="absolute -top-24 left-[-120px] w-[420px] h-[420px] bg-blue-200/30 blur-3xl rounded-full -z-10"/>
            <div className="absolute -bottom-24 right-[-120px] w-[420px] h-[420px] bg-indigo-200/30 blur-3xl rounded-full -z-10"/>

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-24">
                    <h2 className="text-3xl font-semibold text-slate-800 mb-4">
                        Our Marketing Process
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A structured growth strategy designed to bring real business results — not just impressions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {[
                        {
                            title:"Business Analysis",
                            desc:"We study your business, competitors and target customers before starting marketing.",
                            color:"bg-blue-50 border-blue-100 text-blue-600",
                            icon:Search
                        },
                        {
                            title:"Strategy Planning",
                            desc:"We create SEO, Ads and content strategy based on data and market research.",
                            color:"bg-indigo-50 border-indigo-100 text-indigo-600",
                            icon:Target
                        },
                        {
                            title:"Campaign Execution",
                            desc:"We run SEO optimization, Google Ads and social media marketing campaigns.",
                            color:"bg-emerald-50 border-emerald-100 text-emerald-600",
                            icon:Megaphone
                        },
                        {
                            title:"Reporting & Optimization",
                            desc:"We track results, improve campaigns and continuously increase performance.",
                            color:"bg-purple-50 border-purple-100 text-purple-600",
                            icon:LineChart
                        },
                    ].map((step,i)=>(
                        <div key={i} className="group relative">
                            <div className={`rounded-3xl border ${step.color} bg-white/80 backdrop-blur-xl p-8 hover:-translate-y-4 hover:shadow-2xl transition duration-300`}>
                                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center border ${step.color} group-hover:scale-110 transition`}>
                                    <step.icon size={26}/>
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center text-white bg-gradient-to-r from-indigo-600 to-blue-600">
        <h2 className="text-3xl font-semibold mb-4">Ready to Grow Your Business?</h2>
        <p className="mb-6 text-blue-100">Get a free digital marketing strategy and consultation.</p>
        <a href="mailto:contact@nevatrix.com" className="bg-white text-black px-8 py-3 rounded-xl font-medium hover:scale-105 transition inline-flex items-center gap-2 shadow-lg">
          <CheckCircle size={18}/> Request Free Consultation
        </a>
      </section>
    </>
  );
}

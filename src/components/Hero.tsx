export default function HeroRotatingBanner() {
    return (
        <section
            className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
            style={{
                backgroundImage: "url('/banner.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative px-6 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                    Building intelligent digital solutions
                    <br />
                    for modern{" "}
                    <span className="rotating-words bg-gradient-to-r from-pink-400 via-orange-300 to-sky-400">
                        <span>Businesses</span>
                        <span>Companies</span>
                        <span>Startups</span>
                        <span>Enterprises</span>
                    </span>
                </h1>

                <p className="mt-8 text-lg text-white/80">
                    Web • AI • UI/UX • Digital Marketing
                </p>
            </div>
        </section>
    );
}

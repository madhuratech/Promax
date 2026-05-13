import { FaArrowRight, FaStar } from "react-icons/fa";
import Hero from "../../assets/Logo/Hero.png"
export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white text-black">

            {/* BACKGROUND */}
            <div className="absolute inset-0">

                {/* MAIN IMAGE */}
                <img
                    src={Hero}
                    alt="Luxury Car"
                    className="h-full w-full object-cover scale-105"
                />

                {/* DARK OVERLAY */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}

                {/* LEFT GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-transparent"></div>

                {/* ORANGE GLOW */}
                {/* <div className="absolute top-20 right-20 h-96 w-96 rounded-full bg-[#EF993A]/20 blur-[140px]"></div> */}

                {/* EXTRA BLUR */}
                {/* <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-300/20 blur-[120px]"></div> */}
            </div>

            {/* HERO CONTENT */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 md:px-16">

                <div className="max-w-3xl">

                    {/* BADGE */}
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-xl">
                        <FaStar className="text-[#EF993A]" />
                        Premium Automotive Accessories
                    </div>

                    {/* HEADING */}
                    <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
                        Trusted Experts
                        <span className="text-[#EF993A]"> In Car  </span>
                        Accessories
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-200">
                        We deliver premium automotive upgrades including Android players, audio systems, 
                        ambient lighting, reverse cameras, detailing, and professional customization services 
                        for every car enthusiast.
                    </p>

                    {/* BUTTON */}
                    <div className="flex flex-wrap items-center gap-5">

                        <button
                            onClick={() => {
                                const section = document.getElementById("products");
                                section?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group flex items-center gap-3 bg-[#EF993A] px-8 py-4 font-semibold text-white shadow-2xl transition duration-300 hover:bg-[#db8726] hover:scale-105"
                        >
                            Explore Products

                            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
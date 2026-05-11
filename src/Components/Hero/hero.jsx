import { FaArrowRight, FaStar } from "react-icons/fa";
// import logo from "../../assets/logo.png";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-white text-black overflow-hidden ">

            {/* PREMIUM BACKGROUND LAYOUT */}
            <div className="absolute inset-0 overflow-hidden">

                {/* MAIN BG IMAGE */}
                <img
                    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover scale-105"
                />

                {/* WHITE OVERLAY */}
                <div className="absolute inset-0 bg-white/10"></div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/30"></div>

                {/* ORANGE GLOW */}
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#EF993A]/20 blur-[140px] rounded-full"></div>

                {/* EXTRA BLUR SHAPE */}
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/30 blur-[120px] rounded-full"></div>

            </div>

            {/* NAVBAR */}
           

            {/* HERO CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-20">

                <div className="grid md:grid-cols-2 items-center gap-14">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-xl border border-gray-200 shadow-md px-5 py-2 rounded-full text-sm text-gray-700 mb-7">
                            <FaStar className="text-[#EF993A]" />
                            Premium Automotive Accessories
                        </div>

                        {/* HEADING */}
                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">

                            Upgrade Your

                            <span className="text-[#EF993A]">
                                {" "}Driving{" "}
                            </span>

                            Experience
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-10">
                            Discover premium car accessories crafted for performance,
                            comfort, and luxury. Upgrade your vehicle with stylish
                            automotive essentials designed for every journey.
                        </p>

                        {/* BUTTON GROUP */}
                        <div className="flex flex-wrap items-center gap-5 mb-14">

                            {/* PRIMARY BUTTON */}
                            <button className="group bg-[#EF993A] hover:bg-[#db8726] text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 shadow-xl transition duration-300">

                                Explore Products

                                <FaArrowRight className="group-hover:translate-x-1 transition" />
                            </button>


                        </div>



                    </div>

                    {/* RIGHT IMAGE SECTION */}
                    <div className="relative">

                        {/* MAIN IMAGE */}
                        <div className="relative rounded-[35px] overflow-hidden shadow-2xl">

                            <img
                                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop"
                                alt="Car"
                                className="w-full h-[650px] object-cover"
                            />

                            {/* IMAGE OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                        </div>



                        {/* SMALL FLOATING GLASS CARD */}
                        <div className="absolute -bottom-8 left-10 bg-white shadow-2xl border border-gray-200 rounded-3xl px-6 py-5 flex items-center gap-5">

                            <div className="w-14 h-14 rounded-2xl bg-[#EF993A]/10 flex items-center justify-center">
                                <FaStar className="text-[#EF993A] text-xl" />
                            </div>

                            <div>
                                <h4 className="font-bold text-lg">
                                    Premium Quality
                                </h4>

                                <p className="text-gray-500 text-sm">
                                    Trusted by thousands
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail } from "react-icons/md";

const ContactHero = () => {
    return (
        <section className="relative bg-[#0B0B0B] text-white overflow-hidden">

            {/* BACKGROUND EFFECTS */}
            <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#EF993A]/20 blur-[140px] rounded-full"></div>

            <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#EF993A]/10 blur-[140px] rounded-full"></div>

            {/* GRID LINES */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]"></div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24 lg:py-32">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 border border-[#EF993A]/30 bg-[#EF993A]/10 px-5 py-2 rounded-full text-sm text-[#EF993A] font-medium tracking-wide mb-7">
                            PREMIUM CAR ACCESSORIES
                        </div>

                        {/* HEADING */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                            Contact
                            <span className="block text-[#EF993A]">
                                PROMAX
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="mt-7 text-gray-400 text-lg leading-relaxed max-w-2xl">
                            Upgrade your driving experience with premium car
                            audio systems, Android players, ambient lighting,
                            seat covers, detailing, and expert installation
                            services from PROMAX Car Accessories.
                        </p>

                        {/* ACTION BUTTONS */}
                        <div className="flex flex-wrap gap-5 mt-10">

                            <a
                                href="tel:+919003680296"
                                className="group flex items-center gap-3 bg-[#EF993A] hover:bg-[#ffaa4d] transition-all duration-300 px-7 py-4 rounded-xl text-black font-semibold shadow-[0_10px_30px_rgba(239,153,58,0.25)]"
                            >
                                <FaPhoneAlt className="group-hover:rotate-12 transition duration-300" />
                                Call Now
                            </a>

                            <a
                                href="https://wa.me/919003680296"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 border border-[#2a2a2a] hover:border-[#EF993A] hover:bg-[#151515] transition-all duration-300 px-7 py-4 rounded-xl font-medium"
                            >
                                <FaWhatsapp className="text-[#EF993A]" />
                                WhatsApp Us
                            </a>

                        </div>

                        {/* STATS */}
                        <div className="flex flex-wrap gap-10 mt-14">

                            <div>
                                <h3 className="text-3xl font-bold text-[#EF993A]">
                                    500+
                                </h3>
                                <p className="text-gray-400 mt-2">
                                    Happy Customers
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#EF993A]">
                                    5+
                                </h3>
                                <p className="text-gray-400 mt-2">
                                    Years Experience
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-[#EF993A]">
                                    100%
                                </h3>
                                <p className="text-gray-400 mt-2">
                                    Genuine Products
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT CONTACT CARD */}
                    <div className="relative">

                        {/* OUTER GLOW */}
                        <div className="absolute inset-0 bg-[#EF993A]/10 blur-3xl rounded-[40px]"></div>

                        <div className="relative bg-[#121212]/90 backdrop-blur-xl border border-[#2b2b2b] rounded-[32px] p-8 md:p-10 shadow-2xl">

                            {/* CARD TOP */}
                            <div className="mb-10">
                                <h2 className="text-3xl font-bold">
                                    Get In Touch
                                </h2>

                                <p className="text-gray-400 mt-3 leading-relaxed">
                                    We’re here to help you choose the perfect
                                    accessories and audio setup for your car.
                                </p>
                            </div>

                            {/* CONTACT ITEMS */}
                            <div className="space-y-7">

                                {/* LOCATION */}
                                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-[#1f1f1f] hover:border-[#EF993A]/40 hover:bg-[#171717] transition-all duration-300">

                                    <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#EF993A]/10 flex items-center justify-center text-[#EF993A] text-2xl">
                                        <MdLocationOn />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            Store Location
                                        </h4>

                                        <p className="text-gray-400 mt-1 leading-relaxed">
                                            PROMAX Car Accessories,
                                            Coimbatore, Tamil Nadu
                                        </p>
                                    </div>
                                </div>

                                {/* PHONE */}
                                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-[#1f1f1f] hover:border-[#EF993A]/40 hover:bg-[#171717] transition-all duration-300">

                                    <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#EF993A]/10 flex items-center justify-center text-[#EF993A] text-xl">
                                        <FaPhoneAlt />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            Phone Number
                                        </h4>

                                        <p className="text-gray-400 mt-1">
                                            +91 9003680296
                                        </p>
                                    </div>
                                </div>

                                {/* EMAIL */}
                                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-[#1f1f1f] hover:border-[#EF993A]/40 hover:bg-[#171717] transition-all duration-300">

                                    <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#EF993A]/10 flex items-center justify-center text-[#EF993A] text-2xl">
                                        <MdEmail />
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold">
                                            Email Address
                                        </h4>

                                        <p className="text-gray-400 mt-1">
                                            info@promaxcaraccessories.com
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactHero;
import about from "../../assets-avif/WhyChoose/About.avif"

function AboutSection() {
    return (
        <section
            className="relative bg-[#f8f8f8] py-16 md:py-20 lg:py-24 overflow-hidden"
            id="about"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

                    {/* LEFT IMAGE SECTION */}
                    <div className="relative flex justify-center lg:justify-start">

                        {/* Background Accent */}
                        <div className="absolute left-0 top-10 w-20 h-20 md:w-28 md:h-28 bg-[#EF993A]/20 rounded-sm"></div>

                        <div className="absolute right-2 bottom-6 md:right-8 md:bottom-10 w-16 h-16 md:w-24 md:h-24 bg-[#EF993A]/30 rounded-sm"></div>

                        {/* Main Image */}
                        <div className="relative z-10 w-full max-w-[500px]">

                            <img
                                src={about}
                                alt="PROMAX Car Accessories"
                                loading="lazy"
                                className="w-full h-[350px] sm:h-[450px] md:h-[520px] object-cover shadow-2xl rounded-lg"
                            />

                            {/* Floating Card */}
                            <div className="
                                relative
                                lg:absolute
                                lg:-right-12
                                lg:top-10
                                mt-6
                                lg:mt-0
                                bg-white
                                shadow-2xl
                                p-5 sm:p-6 md:p-8
                                w-full
                                sm:max-w-sm
                            ">
                                <p className="text-[#EF993A] uppercase tracking-[3px] text-xs sm:text-sm font-semibold mb-3">
                                    Who We Are
                                </p>

                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
                                    Passion Driven Car <br />
                                    Customization Experts
                                </h2>

                                <div className="w-16 h-1 bg-[#EF993A] mb-5"></div>

                                <p className="text-gray-600 text-sm leading-7">
                                    We provide premium automotive accessories, advanced
                                    entertainment systems, interior customization, detailing services, 
                                    and car audio system in Coimbatore designed for comfort, style, and performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="text-center lg:text-left">

                        <p className="text-[#EF993A] uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-4">
                            About Us
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Trusted Experts in Premium  <br className="hidden sm:block" />
                            Car Customization Solutions
                        </h2>

                        <div className="w-20 sm:w-24 h-1 bg-[#EF993A] mb-8 mx-auto lg:mx-0"></div>

                        <p className="text-gray-600 leading-7 sm:leading-8 mb-6 text-sm sm:text-base">
                            We are the trusted destination for premium car accessories in Coimbatore and
                            professional car customization services. We specialize in high-quality speaker 
                            installations, Android infotainment systems, seat covers, floor mats, reverse cameras,
                            ambient lighting, sun control films, and complete interior enhancements.
                        </p>

                        <p className="text-gray-600 leading-7 sm:leading-8 mb-10 text-sm sm:text-base">
                            Our experienced team delivers customized audio tuning and installation solutions 
                            using leading international brands including Alpine, Pioneer, Sony, JBL, Kenwood, 
                            Focal, Morel, DD Audio, and other premium automotive audio products.
                        </p>

                        {/* FEATURES */}
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">

                            <div className="bg-white p-5 sm:p-6 shadow-lg border-l-4 border-[#EF993A] text-left">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                                    Premium Products
                                </h3>

                                <p className="text-gray-600 text-sm leading-6">
                                    We offer reliable automotive accessories from leading global audio and customization brands.
                                </p>
                            </div>

                            <div className="bg-white p-5 sm:p-6 shadow-lg border-l-4 border-[#EF993A] text-left">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                                    Expert Installation
                                </h3>

                                <p className="text-gray-600 text-sm leading-6">
                                    Professional fitting solutions delivered with precision, quality, and attention to every detail.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutSection
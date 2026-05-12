import about from "../../assets/WhyChoose/About.jpg"

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
                                    About PROMAX <br />
                                    Car Accessories
                                </h2>

                                <div className="w-16 h-1 bg-[#EF993A] mb-5"></div>

                                <p className="text-gray-600 text-sm leading-7">
                                    Premium car accessories, advanced audio systems,
                                    branded speakers, seat covers, reverse cameras,
                                    floor mats, and complete interior upgrades designed
                                    for comfort, style, and performance.
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
                            Trusted Experts in <br className="hidden sm:block" />
                            Car Audio & Accessories
                        </h2>

                        <div className="w-20 sm:w-24 h-1 bg-[#EF993A] mb-8 mx-auto lg:mx-0"></div>

                        <p className="text-gray-600 leading-7 sm:leading-8 mb-6 text-sm sm:text-base">
                            PROMAX Car Accessories is a trusted destination for
                            premium car accessories, advanced car audio systems,
                            and professional installation services in Tamil Nadu.
                            We specialize in branded speaker systems, customized
                            audio setups, seat covers, floor mats, reverse cameras,
                            sun control films, and complete car interior upgrades.
                        </p>

                        <p className="text-gray-600 leading-7 sm:leading-8 mb-10 text-sm sm:text-base">
                            Our expert team provides high-quality 2-way and 3-way
                            audio tuning solutions using top international brands
                            like Alpine, Morel, Pioneer, Sony, JBL, Kenwood,
                            DD Audio, Focal, Cadence, and more.
                        </p>

                        {/* FEATURES */}
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">

                            <div className="bg-white p-5 sm:p-6 shadow-lg border-l-4 border-[#EF993A] text-left">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                                    Premium Brands
                                </h3>

                                <p className="text-gray-600 text-sm leading-6">
                                    We work with trusted international audio and accessory brands.
                                </p>
                            </div>

                            <div className="bg-white p-5 sm:p-6 shadow-lg border-l-4 border-[#EF993A] text-left">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                                    Professional Installation
                                </h3>

                                <p className="text-gray-600 text-sm leading-6">
                                    Expert fitting services for a clean and perfect finish.
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
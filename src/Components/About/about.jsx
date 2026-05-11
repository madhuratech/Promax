import about from "../../assets/WhyChoose/About.jpg"

function AboutSection() {
    return (
        <div>
            <section className="relative bg-[#f8f8f8] py-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE DESIGN */}
                        <div className="relative flex justify-center lg:justify-start">

                            {/* Background Accent Boxes */}
                            <div className="absolute -left-6 top-12 w-28 h-28 bg-[#EF993A]/20 rounded-sm"></div>
                            <div className="absolute right-8 bottom-10 w-24 h-24 bg-[#EF993A]/30 rounded-sm"></div>

                            {/* Main Image */}
                            <div className="relative z-10">
                                <img
                                    src={about}
                                    alt="PROMAX Car Accessories"
                                    className="w-[420px] h-[500px] object-cover shadow-2xl"
                                />

                                {/* Floating Card */}
                                <div className="absolute -right-10 top-10 bg-white shadow-2xl p-8 max-w-sm">
                                    <p className="text-[#EF993A] uppercase tracking-[4px] text-sm font-semibold mb-3">
                                        Who We Are
                                    </p>

                                    <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
                                        About PROMAX <br /> Car Accessories
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
                        <div>
                            <p className="text-[#EF993A] uppercase tracking-[5px] text-sm font-semibold mb-4">
                                About Us
                            </p>

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Trusted Experts in <br />
                                Car Audio & Accessories
                            </h2>

                            <div className="w-24 h-1 bg-[#EF993A] mb-8"></div>

                            <p className="text-gray-600 leading-8 mb-6">
                                PROMAX Car Accessories is a trusted destination for
                                premium car accessories, advanced car audio systems,
                                and professional installation services in Tamil Nadu.
                                We specialize in branded speaker systems, customized
                                audio setups, seat covers, floor mats, reverse cameras,
                                sun control films, and complete car interior upgrades.
                            </p>

                            <p className="text-gray-600 leading-8 mb-10">
                                Our expert team provides high-quality 2-way and 3-way
                                audio tuning solutions using top international brands
                                like Alpine, Morel, Pioneer, Sony, JBL, Kenwood,
                                DD Audio, Focal, Cadence, and more.
                            </p>

                            {/* FEATURES */}
                            <div className="grid sm:grid-cols-2 gap-6">

                                <div className="bg-white p-6 shadow-lg border-l-4 border-[#EF993A]">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                        Premium Brands
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-6">
                                        We work with trusted international audio and accessory brands.
                                    </p>
                                </div>

                                <div className="bg-white p-6 shadow-lg border-l-4 border-[#EF993A]">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
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
        </div>
    )
}

export default AboutSection
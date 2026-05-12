const MapSection = () => {
    return (
        <section className="bg-white py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        <p className="text-[#EF993A] font-semibold uppercase tracking-[3px] mb-4">
                            Our Location
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-6">
                            Upgrade Your Ride with PROMAX
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            Explore premium car accessories, entertainment systems, 
                            lighting upgrades, detailing, and expert installations 
                            enhancing comfort, style, and performance.
                        </p>

                        {/* INFO CARDS */}
                        <div className="space-y-6">

                            <div className="border-l-4 border-[#EF993A] pl-5">
                                <h4 className="text-xl font-semibold text-[#111111] mb-2">
                                    Showroom Address
                                </h4>

                                <p className="text-gray-600 leading-relaxed">
                                    PROMAX Car Accessories <br />
                                    Coimbatore, Tamil Nadu
                                </p>
                            </div>

                            <div className="border-l-4 border-[#EF993A] pl-5">
                                <h4 className="text-xl font-semibold text-[#111111] mb-2">
                                    Working Hours
                                </h4>

                                <p className="text-gray-600">
                                    Monday - Saturday : 9:00 AM - 8:00 PM
                                </p>
                            </div>

                        </div>

                        {/* BUTTON */}
                        {/* GET DIRECTIONS BUTTON */}
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Promax+Car+Accessories+Coimbatore"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-10 bg-[#EF993A] hover:bg-[#d98626] transition duration-300 text-black font-semibold px-8 py-4 shadow-lg"
                        >
                            Get Directions
                        </a>

                    </div>

                    {/* RIGHT MAP */}
                    <div className="overflow-hidden shadow-2xl border border-gray-200 h-[500px]">

                        <iframe
                            title="PROMAX Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.790105309812!2d76.97691617405764!3d11.015960489147766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596672b08333%3A0x99910ec578431553!2sPromax%20car%20accessories!5e1!3m2!1sen!2sau!4v1778310850241!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default MapSection;
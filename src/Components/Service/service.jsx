import TwoWayAudio from "../../assets/Service/TwoWayAudio.jpg";
import ThreeWayAudio from "../../assets/Service/ThreeWayAudio.jpg";
import AudioInstallation from "../../assets/Service/AudioInstallation.jpg";

function ServiceSection() {
    return (
        <section className="relative bg-[#0F0F0F] py-24 px-6 md:px-12 overflow-hidden" id="services">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#EF993A]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#EF993A]/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="inline-flex items-center gap-2 px-5 py-2 border border-[#EF993A]/30 bg-[#EF993A]/10 text-[#EF993A] text-sm font-semibold tracking-[2px] uppercase mb-6">
                        Our Expertise
                    </span>

                    <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                        Professional Car Audio <br />
                        <span className="text-[#EF993A]">
                            Installation Services
                        </span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                        PROMAX provides expert car audio installation and tuning
                        services for all types of vehicles. Our technicians ensure
                        clean wiring, premium sound output, and professional
                        finishing for every setup.
                    </p>

                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* CARD 1 */}
                    <div
                        className="group relative bg-[#181818] overflow-hidden border border-white/5 hover:border-[#EF993A]/40 transition-all duration-500 will-change-transform hover:shadow-[0_0_40px_rgba(239,153,58,0.12)]"
                        style={{ transform: "translateZ(0)" }}
                    >

                        {/* Image */}
                        <div className="relative h-[260px] overflow-hidden">

                            <img
                                src={TwoWayAudio}
                                alt="2 Way Audio Setup"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent"></div>

                            {/* Number */}
                            <div className="absolute top-5 left-5">

                                <span className="w-14 h-14 bg-[#EF993A] flex items-center justify-center text-white font-black text-lg shadow-2xl">
                                    01
                                </span>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="p-8">

                            <h3 className="text-2xl font-black text-white mb-4 transition-colors duration-300 group-hover:text-[#EF993A]">
                                2-Way Audio Setup
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                                Balanced audio setup with component speakers and
                                optimized sound clarity for smooth everyday driving
                                and enhanced in-car entertainment.
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">

                                <span className="text-[#EF993A] font-semibold">
                                    Premium Sound
                                </span>
{/* 
                                <button className="w-12 h-12 border border-[#EF993A]/30 flex items-center justify-center text-[#EF993A] bg-[#EF993A]/10 transition-all duration-300 hover:bg-[#EF993A] hover:text-white">
                                    →
                                </button> */}

                            </div>

                        </div>

                    </div>

                    {/* CARD 2 */}
                    <div
                        className="group relative bg-[#181818] overflow-hidden border border-white/5 hover:border-[#EF993A]/40 transition-all duration-500 will-change-transform hover:shadow-[0_0_40px_rgba(239,153,58,0.12)]"
                        style={{ transform: "translateZ(0)" }}
                    >

                        {/* Image */}
                        <div className="relative h-[260px] overflow-hidden">

                            <img
                                src={ThreeWayAudio}
                                alt="3 Way Audio Setup"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent"></div>

                            {/* Number */}
                            <div className="absolute top-5 left-5">

                                <span className="w-14 h-14 bg-[#EF993A] flex items-center justify-center text-white font-black text-lg shadow-2xl">
                                    02
                                </span>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="p-8">

                            <h3 className="text-2xl font-black text-white mb-4 transition-colors duration-300 group-hover:text-[#EF993A]">
                                3-Way Audio Setup
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                                Advanced premium sound staging with dedicated
                                tweeters, mid-range, and bass response for immersive
                                audiophile-level performance.
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">

                                <span className="text-[#EF993A] font-semibold">
                                    Advanced Audio
                                </span>

                                {/* <button className="w-12 h-12 border border-[#EF993A]/30 flex items-center justify-center text-[#EF993A] bg-[#EF993A]/10 transition-all duration-300 hover:bg-[#EF993A] hover:text-white">
                                    →
                                </button> */}

                            </div>

                        </div>

                    </div>

                    {/* CARD 3 */}
                    <div
                        className="group relative bg-[#181818] overflow-hidden border border-white/5 hover:border-[#EF993A]/40 transition-all duration-500 will-change-transform hover:shadow-[0_0_40px_rgba(239,153,58,0.12)]"
                        style={{ transform: "translateZ(0)" }}
                    >

                        {/* Image */}
                        <div className="relative h-[260px] overflow-hidden">

                            <img
                                src={AudioInstallation}
                                alt="Complete Audio Installation"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent"></div>

                            {/* Number */}
                            <div className="absolute top-5 left-5">

                                <span className="w-14 h-14 bg-[#EF993A] flex items-center justify-center text-white font-black text-lg shadow-2xl">
                                    03
                                </span>

                            </div>

                        </div>

                        {/* Content */}
                        <div className="p-8">

                            <h3 className="text-2xl font-black text-white mb-4 transition-colors duration-300 group-hover:text-[#EF993A]">
                                Complete Audio Installation
                            </h3>

                            <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                                Professional amplifier installation, DSP tuning,
                                subwoofer setup, speaker upgrades, and customized
                                sound systems for premium output.
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">

                                <span className="text-[#EF993A] font-semibold">
                                    Full Installation
                                </span>

                                {/* <button className="w-12 h-12 border border-[#EF993A]/30 flex items-center justify-center text-[#EF993A] bg-[#EF993A]/10 transition-all duration-300 hover:bg-[#EF993A] hover:text-white">
                                    →
                                </button> */}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ServiceSection;
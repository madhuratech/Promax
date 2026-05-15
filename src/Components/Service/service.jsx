import TwoWayAudio from "../../assets-avif/Service/TwoWayAudio.avif";
import ThreeWayAudio from "../../assets-avif/Service/ThreeWayAudio.avif";
import AudioInstallation from "../../assets-avif/Service/AudioInstallation.avif";

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
                        Advanced Car Audio  <br />
                        <span className="text-[#EF993A]">
                            Customization Solutions
                        </span>
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                        PROMAX delivers premium automotive audio customization services with 
                        expert tuning, precision wiring, clean installations, and enhanced 
                        sound solutions designed for superior driving experiences.

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
                                loading="lazy"
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
                                Premium speaker systems with balanced sound tuning designed for
                                smooth music clarity and enhanced everyday driving entertainment experiences.
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">

                                <span className="text-[#EF993A] font-semibold">
                                    Premium Audio
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
                                loading="lazy"
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
                                Advanced sound staging with dedicated tweeters, mid-range speakers, 
                                and deep bass performance for immersive in-car audio experiences.
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">

                                <span className="text-[#EF993A] font-semibold">
                                    Advanced Sound
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
                                loading="lazy"
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
                                Professional amplifier fitting, DSP tuning, subwoofer installation,
                                 speaker upgrades, and customized audio solutions for premium sound performance.
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-white/10">

                                <span className="text-[#EF993A] font-semibold">
                                    Expert Installation
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
import {
  ShieldCheck,
  Wrench,
  Sparkles,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";

import Promax from "../../assets-avif/WhyChoose/Promax.avif";

function Whychoose() {
  return (
    <section className="relative bg-black overflow-hidden py-16 lg:py-24 text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,153,58,0.18),transparent_35%)]"></div>

      <div className="absolute bottom-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-[#EF993A]/10 blur-[120px] "></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 lg:mb-16">

          {/* Left */}
          <div className="max-w-3xl">

            <p className="uppercase tracking-[3px] lg:tracking-[4px] text-[#EF993A] text-xs sm:text-sm font-semibold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Why Customers Choose <br />
              <span className="text-[#EF993A]">PROMAX</span>
            </h2>

          </div>

          {/* Right */}
          <p className="text-gray-400 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed">
            From advanced car audio systems to precision installation and premium finishing, PROMAX provides 
            a complete automotive enhancement experience with modern technology and customer-focused service.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-white/10  p-6 sm:p-8 overflow-hidden hover:border-[#EF993A]/40 transition duration-500">

              {/* <div className="absolute top-0 right-0 w-40 lg:w-52 h-40 lg:h-52 bg-[#EF993A]/10 blur-[90px] "></div> */}

              <div className="relative z-10">

                <div className="w-14 h-14 lg:w-16 lg:h-16  bg-[#EF993A] flex items-center justify-center mb-6 shadow-lg shadow-[#EF993A]/30">
                  <Headphones className="text-black w-7 h-7 lg:w-8 lg:h-8" />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold mb-4 leading-snug">
                  Superior Sound Performance
                </h3>

                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  We specialize in delivering premium installation quality, crystal-clear
                  sound output, and reliable after-sales support for every customer.
                </p>

                {/* Stats */}
                <div className="mt-8 flex items-center gap-6">

                  <div>
                    <h4 className="text-2xl lg:text-3xl font-black text-[#EF993A]">
                      5000+
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Installations
                    </p>
                  </div>

                  <div className="w-px h-10 lg:h-12 bg-white/10"></div>

                  <div>
                    <h4 className="text-2xl lg:text-3xl font-black text-[#EF993A]">
                      10+
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Years Experience
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">

              {/* Card 1 */}
              <div className="bg-[#111] border border-white/10 p-5 lg:p-6 hover:border-[#EF993A]/40 transition duration-300">

                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Wrench className="text-[#EF993A] w-6 h-6 lg:w-7 lg:h-7" />
                </div>

                <h4 className="text-base lg:text-lg font-bold mb-2">
                  Professional Technical Assistance
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Experienced technicians offering expert setup, troubleshooting, and complete audio diagnostics.
                </p>

              </div>

              {/* Card 2 */}
              <div className="bg-[#111] border border-white/10 p-5 lg:p-6 hover:border-[#EF993A]/40 transition duration-300">

                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <Sparkles className="text-[#EF993A] w-6 h-6 lg:w-7 lg:h-7" />
                </div>

                <h4 className="text-base lg:text-lg font-bold mb-2">
                  Personalized Audio Calibration
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Custom sound tuning crafted for a balanced and immersive 
                  in-car listening experience
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 relative">

            <div className="relative min-h-[500px] lg:min-h-[650px]  overflow-hidden border border-white/10 bg-gradient-to-br from-[#111] to-black">

              {/* Glow */}
              {/* <div className="absolute top-0 left-0 w-56 lg:w-72 h-56 lg:h-72 bg-[#EF993A]/20 blur-[120px] "></div> */}

              {/* Floating Cards */}
              <div className="relative lg:absolute lg:top-10 lg:left-10 z-20 space-y-4 p-5 lg:p-0">

                {/* Card */}
                <div className="bg-black/70 backdrop-blur-xl border border-white/10 px-5 py-5 w-full lg:w-[260px] hover:border-[#EF993A]/40 transition duration-300">

                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 lg:w-12 lg:h-12 bg-[#EF993A] flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-black w-5 h-5 lg:w-6 lg:h-6" />
                    </div>

                    <div>
                      <h4 className="font-bold text-base lg:text-lg mb-1">
                        High-Quality Imported Products
                      </h4>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        Trusted international brands designed for outstanding performance.
                      </p>
                    </div>

                  </div>

                </div>

                {/* Card */}
                <div className="bg-black/70 backdrop-blur-xl border border-white/10  px-5 py-5 w-full lg:w-[260px] hover:border-[#EF993A]/40 transition duration-300">

                  <div className="flex items-start gap-4">

                    <div className="w-11 h-11 lg:w-12 lg:h-12 bg-[#EF993A] flex items-center justify-center shrink-0">
                      <BadgeDollarSign className="text-black w-5 h-5 lg:w-6 lg:h-6" />
                    </div>

                    <div>
                      <h4 className="font-bold text-base lg:text-lg mb-1">
                        Competitive Pricing
                      </h4>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        Premium automotive products and services offered at affordable market prices.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

              {/* Car Image */}
              <img
                src={Promax}
                alt="PROMAX Car Audio"
                loading="lazy"
                className="
                  w-full
                  max-w-[500px]
                  lg:max-w-[720px]
                  object-contain
                  z-10
                  relative
                  lg:absolute
                  lg:bottom-0
                  lg:right-0
                  mx-auto
                  mt-6
                  lg:mt-0
                "
              />

              {/* Bottom Features */}
              <div className="relative lg:absolute lg:bottom-8 lg:left-8 lg:right-8 z-20 grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 lg:p-0 mt-4 lg:mt-0">

                {[
                  "Latest Audio Technology",
                  "Professional Installation",
                  "Clean Wiring & Finishing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-black/60 backdrop-blur-xl border border-white/10  px-5 py-4 text-center hover:border-[#EF993A]/40 transition duration-300"
                  >
                    <p className="text-sm font-medium text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Whychoose;
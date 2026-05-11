import {
  ShieldCheck,
  Wrench,
  Sparkles,
  BadgeDollarSign,
  Headphones,
} from "lucide-react";
import Promax from "../../assets/WhyChoose/Promax.png";

function Whychoose() {
  return (
    <div>
      <section className="relative bg-black overflow-hidden py-24 text-white">

        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(239,153,58,0.18),transparent_35%)]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF993A]/10 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

          {/* TOP HEADING */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">

            <div className="max-w-3xl">
              <p className="uppercase tracking-[4px] text-[#EF993A] text-sm font-semibold mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Why Customers Trust <br />
                <span className="text-[#EF993A]">PROMAX</span>
              </h2>
            </div>

            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              From premium audio systems to expert installation and clean finishing,
              PROMAX delivers a complete automotive upgrade experience with advanced
              technology and customer-first service.
            </p>
          </div>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">

            {/* LEFT SIDE */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Large Card */}
              <div className="relative bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-white/10 rounded-[35px] p-8 overflow-hidden group hover:border-[#EF993A]/40 transition duration-500">

                <div className="absolute top-0 right-0 w-52 h-52 bg-[#EF993A]/10 blur-[90px] rounded-full"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#EF993A] flex items-center justify-center mb-6 shadow-lg shadow-[#EF993A]/30">
                    <Headphones className="text-black w-8 h-8" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    Customer Satisfaction Guaranteed
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    We focus on delivering premium installation quality, superior
                    sound performance, and exceptional after-sales support for every customer.
                  </p>

                  <div className="mt-8 flex items-center gap-6">
                    <div>
                      <h4 className="text-3xl font-black text-[#EF993A]">5000+</h4>
                      <p className="text-sm text-gray-500">Installations</p>
                    </div>

                    <div className="w-px h-12 bg-white/10"></div>

                    <div>
                      <h4 className="text-3xl font-black text-[#EF993A]">10+</h4>
                      <p className="text-sm text-gray-500">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Mini Cards */}
              <div className="grid sm:grid-cols-2 gap-6">

                <div className="bg-[#111] border border-white/10 rounded-[28px] p-6 hover:border-[#EF993A]/40 transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <Wrench className="text-[#EF993A] w-7 h-7" />
                  </div>

                  <h4 className="text-lg font-bold mb-2">
                    Expert Technical Support
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Skilled technicians with professional setup and diagnostics.
                  </p>
                </div>

                <div className="bg-[#111] border border-white/10 rounded-[28px] p-6 hover:border-[#EF993A]/40 transition duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                    <Sparkles className="text-[#EF993A] w-7 h-7" />
                  </div>

                  <h4 className="text-lg font-bold mb-2">
                    Customized Audio Tuning
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Balanced sound tuning designed for immersive listening experience.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-7 relative">

              <div className="relative h-full min-h-[650px] rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-[#111] to-black">

                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#EF993A]/20 blur-[120px] rounded-full"></div>

                {/* Car Image */}
                <img
                  src={Promax}
                  alt="PROMAX Car Audio"
                  className="absolute bottom-0 right-0 w-full max-w-[700px] object-contain z-10"
                />

                {/* Floating Feature Cards */}
                <div className="absolute top-10 left-10 z-20 space-y-5">

                  <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 w-[260px] hover:border-[#EF993A]/40 transition duration-300">
                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-xl bg-[#EF993A] flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-black w-6 h-6" />
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Premium Imported Brands
                        </h4>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          Trusted international brands with high-quality performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-5 w-[260px] hover:border-[#EF993A]/40 transition duration-300">
                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-xl bg-[#EF993A] flex items-center justify-center shrink-0">
                        <BadgeDollarSign className="text-black w-6 h-6" />
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-1">
                          Affordable Pricing
                        </h4>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          Premium products and services at competitive pricing.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Features */}
                <div className="absolute bottom-8 left-8 right-8 z-20 grid sm:grid-cols-3 gap-4">

                  {[
                    "Latest Audio Technology",
                    "Professional Installation",
                    "Clean Wiring & Finishing",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-center hover:border-[#EF993A]/40 transition duration-300"
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
    </div>
  );
}

export default Whychoose;
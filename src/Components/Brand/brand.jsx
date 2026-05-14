import {
  Speaker,
  ShieldCheck,
  Sparkles,
  AudioWaveform,
  BadgeCheck,
} from "lucide-react";

import Alpine from "../../assets/AudioBrands/Alpine.svg";
import Morel from "../../assets/AudioBrands/Morel.png";
import Audison from "../../assets/AudioBrands/Audison.jpeg";
import Steg from "../../assets/AudioBrands/Steg.svg";
import Focal from "../../assets/AudioBrands/Focal.png";
import Feelart from "../../assets/AudioBrands/Feelart.png";
import DDAudio from "../../assets/AudioBrands/DDAudio.svg";
import Cadence from "../../assets/AudioBrands/Cadence.svg";
import MaxLink from "../../assets/AudioBrands/Maxlink.png";
import Pioneer from "../../assets/AudioBrands/Pioneer.svg";
import Sony from "../../assets/AudioBrands/Sony.svg";
import JBL from "../../assets/AudioBrands/JBL.svg";
import Kenwood from "../../assets/AudioBrands/Kenwood.svg";
import Nakamichi from "../../assets/AudioBrands/Nakamichi.svg";

const brands = [
  { name: "Alpine", image: Alpine },
  { name: "Morel", image: Morel },
  { name: "Audison", image: Audison },
  { name: "Steg", image: Steg },
  { name: "Focal", image: Focal },
  { name: "Feelart", image: Feelart },
  { name: "DD Audio", image: DDAudio },
  { name: "Cadence", image: Cadence },
  { name: "Max Link", image: MaxLink },
  { name: "Pioneer", image: Pioneer },
  { name: "Sony", image: Sony },
  { name: "JBL", image: JBL },
  { name: "Kenwood", image: Kenwood },
  { name: "Nakamichi", image: Nakamichi },
];

const features = [
  {
    icon: ShieldCheck,
    title: "100% Original Products",
    desc: "Authentic automotive accessories built for quality and long-lasting durability.",
  },
  {
    icon: AudioWaveform,
    title: "Studio Quality Sound",
    desc: "Clear balanced audio delivering immersive sound throughout every drive.",
  },
  {
    icon: Sparkles,
    title: "Professional Installation",
    desc: "Expert technicians ensure accurate fittings with smooth professional finishing.",
  },
  {
    icon: BadgeCheck,
    title: "Premium Brand Collection",
    desc: "Trusted global brands for premium performance.",
  },
];

export default function AudioBrandsSection() {
  return (
    <section className="relative w-full bg-[#f8f8f8] py-24 px-6 md:px-12 overflow-hidden" id="brands">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#EF993A]/10 blur-[120px]"></div>

      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-orange-200/30 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">

          {/* LEFT CONTENT */}
          <div>

            {/* LABEL */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-[2px] bg-[#EF993A]"></div>

              <p className="uppercase tracking-[4px] text-sm font-semibold text-[#EF993A]">
                Premium Audio Brands
              </p>
            </div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
             Top International <br />
              Audio Brands
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-2xl">
              We provide premium automotive audio products from trusted global brands 
              known for performance, sound clarity, durability, and advanced technology.
            </p>

            {/* BUTTON */}
            <button
              onClick={() => {
                const section = document.getElementById("services");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-[#EF993A] text-white px-8 py-4 font-bold hover:scale-105 transition duration-300 shadow-xl"
            >
              Explore Audio Setup
            </button>

          </div>

          {/* FEATURE CARD */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-52 h-52 bg-[#EF993A]/20 blur-3xl"></div>

            <div className="relative overflow-hidden bg-white border border-gray-200 shadow-2xl p-8 md:p-10">

              {/* TOP LINE */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EF993A] to-orange-500"></div>

              {/* HEADER */}
              <div className="flex items-center justify-between mb-10">

                <div>
                  <p className="uppercase tracking-[3px] text-sm text-gray-500 font-semibold">
                    Why Choose PROMAX
                  </p>

                  <h3 className="text-3xl font-black text-gray-900 mt-3">
                    Premium Brand Collection
                  </h3>
                </div>

                <div className="w-20 h-20 bg-gradient-to-br from-[#EF993A] to-orange-500 flex items-center justify-center shadow-xl">
                  <Speaker className="text-white" size={36} />
                </div>

              </div>

              {/* FEATURES */}
              <div className="space-y-5">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="group flex items-start gap-5 p-5 border border-gray-100 bg-[#fafafa] hover:border-[#EF993A]/30 hover:bg-white transition duration-300"
                    >

                      <div className="w-14 h-14 bg-[#fff5eb] flex items-center justify-center shrink-0 group-hover:bg-[#EF993A] transition duration-300">

                        <Icon
                          size={26}
                          className="text-[#EF993A] group-hover:text-white transition duration-300"
                        />

                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900">
                          {feature.title}
                        </h4>

                        <p className="text-gray-600 mt-1 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          </div>
        </div>

        {/* BRAND GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-[#EF993A]/5 to-transparent border border-[#EF993A] p-7 flex flex-col items-center justify-center hover:border-[#EF993A] hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl overflow-hidden"
            >

              {/* HOVER BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EF993A]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* LOGO */}
              <div className="relative z-10 w-28 h-16 flex items-center justify-center overflow-visible">

                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-32 h-20 object-contain transition duration-500 group-hover:scale-110"
                />

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 relative overflow-hidden bg-gradient-to-r from-[#EF993A] to-orange-500  p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Advanced Car Audio Solutions
            </h3>

            <p className="text-white/90 mt-4 max-w-2xl text-lg leading-relaxed">
              Explore PROMAX premium automotive audio solutions from globally recognized 
              brands delivering exceptional sound quality, advanced technology, and reliable performance.
            </p>
          </div>

         <button
    onClick={() => {
        const section = document.getElementById("products");
        section?.scrollIntoView({ behavior: "smooth" });
    }}
    className="relative z-10 bg-white text-[#EF993A] font-bold px-8 py-4 hover:scale-105 transition duration-300 shadow-lg"
>
    Explore Products
</button>

        </div>

      </div>
    </section>
  );
}
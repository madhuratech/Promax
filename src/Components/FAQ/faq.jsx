import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Speaker,
  Wrench,
  CarFront,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

const faqData = [
  {
    question: "Can I customize my car accessories based on my style?",
    answer:
      "Absolutely! We provide personalized customization options to match your car’s look, comfort, and performance needs.",
    icon: <Speaker size={22} />,
  },
  {
    question: "How long does a complete car makeover take?",
    answer:
      "Depending on the package and accessories chosen, most upgrades are completed within the same day or 1-2 working days.",
    icon: <Wrench size={22} />,
  },
  {
    question: "Do you offer premium lighting upgrades for night driving?",
    answer:
      "Yes, we install high-performance LED bulbs and fog projectors for better visibility and a stylish road presence.",
    icon: <Speaker size={22} />,
  },
  {
    question: "Will sun control films really reduce cabin heat?",
    answer:
      "Yes, our premium sun control films help reduce heat, glare, and UV exposure, making your drive cooler and more comfortable.",
    icon: <CarFront size={22} />,
  },
  {
    question: "Why choose PROMAX Car Accessories over others?",
    answer:
      "PROMAX combines premium products, expert installation, stylish customization, and customer-focused service to give your car a standout finish.",
    icon: <BadgeCheck size={22} />,
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F8F8F8] py-20 px-5 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2  bg-[#EF993A]/10 text-[#EF993A] text-sm font-semibold tracking-wide uppercase">
            FAQs
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#111111] mt-5 leading-tight">
            Frequently Asked <span className="text-[#EF993A]">Questions</span>
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-5 text-lg leading-relaxed">
           Find answers about PROMAX audio installations, customization services, pricing,
           warranties, and professional support solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          
          {/* LEFT SIDE */}
          <div className="relative">
            
            {/* Main Image */}
            <div className="relative  overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop"
                alt="Best car audio system in Coimbatore3"
                loading="lazy"
                className="w-full h-[620px] object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 shadow-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  
                  <div className="bg-[#EF993A] text-white p-4">
                    <ShieldCheck size={28} />
                  </div>

                  <div>
                    <h3 className="text-[#111111] text-xl font-semibold">
                      Trusted Car Accessories Store
                    </h3>

                    <p className="text-gray-600 mt-2 leading-relaxed">
                      PROMAX provides premium car audio systems, DSP tuning,
                      seat covers, floor mats, and professional installation
                      services with genuine branded products.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FAQs */}
          <div className="space-y-5">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={` border transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow-lg ${
                    isOpen
                      ? "border-[#EF993A]"
                      : "border-gray-200 hover:border-[#EF993A]/50"
                  }`}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 text-left p-6"
                  >
                    <div className="flex items-center gap-4">
                      
                      {/* Icon */}
                      <div
                        className={`min-w-[55px] h-[55px]  flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#EF993A] text-white"
                            : "bg-[#FFF4E8] text-[#EF993A]"
                        }`}
                      >
                        {faq.icon}
                      </div>

                      {/* Question */}
                      <h3 className="text-[#111111] text-lg md:text-xl leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Arrow */}
                    <div
                      className={`transition-all duration-300 p-2  ${
                        isOpen
                          ? "bg-[#EF993A] text-white"
                          : "bg-[#F5F5F5] text-[#111111]"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pl-[95px]">
                      <p className="text-gray-600 text-[16px] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
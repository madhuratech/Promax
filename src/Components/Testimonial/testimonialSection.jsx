import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    title: "Fast & Efficient",
    review:
      "PROMAX delivered a clean and professional car audio installation with excellent finishing. Their team completed the setup quickly while maintaining premium quality.",
    name: "Arun Kumar",
    role: "3-Way Audio Setup",
    company: "@promax",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Wow Effect",
    review:
      "The sound clarity and bass tuning completely transformed my driving experience. PROMAX provided the perfect balance of performance and professional support.",
    name: "Vignesh",
    role: "DSP Tuning",
    company: "@promax",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    title: "Creative",
    review:
      "Very friendly team with genuine products and affordable pricing. The installation quality and customer handling were truly impressive.",
    name: "Jennifer",
    role: "Premium Interior Upgrade",
    company: "@promax",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Professional",
    review:
      "The installation was neat and perfectly finished. PROMAX handled everything professionally and delivered exactly what I expected.",
    name: "Sathish",
    role: "Speaker Upgrade",
    company: "@promax",
    image:
      "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    title: "Premium Quality",
    review:
      "Excellent customer support and genuine branded products. The team explained everything clearly before installation.",
    name: "Karthik",
    role: "Car Interior Customization",
    company: "@promax",
    image:
      "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (currentIndex + visibleCards >= testimonials.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - visibleCards);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-[#1d1d1d] py-24 px-6 lg:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-gray-500 text-3xl md:text-4xl font-light mb-2">
            Trusted
          </p>

          <h2 className="text-[60px] md:text-[90px] leading-none font-light text-gray-500">
            by 200 +
          </h2>

          <h3 className="text-[55px] md:text-[85px] leading-none font-semibold text-white">
            Customers
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-500">
          {testimonials
            .slice(currentIndex, currentIndex + visibleCards)
            .map((item, index) => (
              <div
                key={index}
                className={`relative border border-white/10 backdrop-blur-md p-8 min-h-[340px] transition-all duration-500 hover:-translate-y-2 ${
                  index === 1
                    ? "bg-white text-black shadow-2xl scale-[1.02]"
                    : "bg-[#2a2a2a] text-white"
                }`}
              >
                {/* Quote */}
                <div
                  className={`absolute top-8 right-8 ${
                    index === 1
                      ? "text-gray-100"
                      : "text-white/10"
                  }`}
                >
                  <Quote size={60} strokeWidth={1.2} />
                </div>

                {/* Title */}
                <h3
                  className={`text-4xl font-semibold mb-6 ${
                    index === 1
                      ? "text-black"
                      : "text-gray-300"
                  }`}
                >
                  “{item.title}”
                </h3>

                {/* Review */}
                <p
                  className={`leading-relaxed text-[15px] mb-10 max-w-sm ${
                    index === 1
                      ? "text-gray-600"
                      : "text-gray-400"
                  }`}
                >
                  {item.review}
                </p>

                {/* Profile */}
                <div className="flex items-center gap-4 mt-auto">
                  
                  <div>
                    <h4
                      className={`text-sm font-semibold ${
                        index === 1
                          ? "text-gray-800"
                          : "text-white"
                      }`}
                    >
                      {item.name}
                    </h4>

                    <p
                      className={`text-sm ${
                        index === 1
                          ? "text-gray-500"
                          : "text-gray-400"
                      }`}
                    >
                      {item.role}{" "}
                      <span className="text-[#EF993A]">
                        {item.company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Bottom Logo */}
                <div
                  className={`absolute bottom-8 right-8 font-bold tracking-widest text-sm ${
                    index === 1
                      ? "text-gray-200"
                      : "text-white/10"
                  }`}
                >
                  PROMAX
                </div>
              </div>
            ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-14">
          <button
            onClick={prevSlide}
            className="w-12 h-12  bg-[#2a2a2a] border border-white/10 text-white flex items-center justify-center hover:bg-[#EF993A] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12  bg-[#2a2a2a] border border-white/10 text-white flex items-center justify-center hover:bg-[#EF993A] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
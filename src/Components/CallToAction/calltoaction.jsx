import { PhoneCall, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative bg-white py-20 px-6 lg:px-16 overflow-hidden border-t border-b border-gray-200">
      
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-white to-orange-50"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <span className="inline-block text-[#EF993A] font-semibold tracking-wide uppercase text-sm mb-5">
              PROMAX CAR ACCESSORIES
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Upgrade Your Car Today
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Transform your car with premium accessories and professional
              audio setups from{" "}
              <span className="font-semibold text-gray-900">
                PROMAX Car Accessories
              </span>.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row lg:justify-end gap-5">
            
            {/* Contact Button */}
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 bg-[#EF993A] hover:bg-[#db8424] text-white font-semibold px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <PhoneCall size={20} />
              Contact Us
            </a>

            {/* Consultation Button */}
            <a
              href="#consultation"
              className="flex items-center justify-center gap-3 border border-gray-300 hover:border-[#EF993A] hover:text-[#EF993A] text-gray-800 font-semibold px-8 py-4 transition-all duration-300 bg-white"
            >
              <MessageCircle size={20} />
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
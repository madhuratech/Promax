

// ================= DATA =================

const beforeAfterData = [
  {
    id: 1,
    title: "Premium Audio Upgrade",
    description:
      "Complete dashboard transformation with premium speakers, custom tweeter setup, and immersive sound quality.",
    beforeImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    features: ["DSP Tuning", "Premium Speakers", "Luxury Finish"],
  },

  {
    id: 2,
    title: "Ambient Interior Setup",
    description:
      "Elegant ambient lighting installation with premium interior enhancement for a luxury driving experience.",
    beforeImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
    features: ["Ambient Lights", "Interior Styling", "Premium Finish"],
  },

  {
    id: 3,
    title: "Luxury Dashboard Modification",
    description:
      "Upgraded dashboard with premium accessories, infotainment system, and stylish detailing.",
    beforeImage:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1200&auto=format&fit=crop",
    features: ["Touch Display", "Premium Dashboard", "Modern Design"],
  },

  {
    id: 4,
    title: "Car Lighting Enhancement",
    description:
      "Advanced lighting customization with modern LED setup and premium aesthetic finishing.",
    beforeImage:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200&auto=format&fit=crop",
    features: ["LED Lights", "Custom Setup", "Night Ambience"],
  },
];

// ================= COMPONENT =================

const BeforeAfter = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16">

          <p className="text-[#EF993A] uppercase tracking-[5px] text-sm font-semibold">
            Transformation Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
            Before & After Installation
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-relaxed text-lg">
            Experience the stunning transformation after upgrading your
            vehicle with premium audio systems, ambient lighting,
            and automotive accessories.
          </p>

        </div>

        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {beforeAfterData.map((item) => (
            <div
              key={item.id}
              className="bg-[#111] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl hover:-translate-y-2 transition duration-500"
            >

              {/* ================= IMAGE SECTION ================= */}
              <div className="grid grid-cols-2">

                {/* BEFORE IMAGE */}
                <div className="relative group overflow-hidden">

                  <img
                    src={item.beforeImage}
                    alt="Before Installation"
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/20"></div>

                  {/* LABEL */}
                  <div className="absolute top-5 left-5 bg-red-500 text-white text-xs font-bold tracking-[2px] px-5 py-2 rounded-full shadow-lg">
                    BEFORE
                  </div>

                </div>

                {/* AFTER IMAGE */}
                <div className="relative group overflow-hidden">

                  <img
                    src={item.afterImage}
                    alt="After Installation"
                    className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-[#EF993A]/10"></div>

                  {/* LABEL */}
                  <div className="absolute top-5 left-5 bg-[#EF993A] text-white text-xs font-bold tracking-[2px] px-5 py-2 rounded-full shadow-lg">
                    AFTER
                  </div>

                </div>

              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-8">

                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed text-lg">
                  {item.description}
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {item.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-white/5 border border-white/10 text-gray-300 px-4 py-2 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* ================= BUTTON ================= */}
        <div className="text-center mt-16">

          <button className="bg-[#EF993A] hover:bg-[#d88428] text-white px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:scale-105 transition duration-300">
            Explore More Installations
          </button>

        </div>

      </div>
    </section>
  );
};

export default BeforeAfter;
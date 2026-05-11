import { useState } from "react";
import {
  FaVolumeUp,
  FaChair,
  FaCompactDisc,
  FaCamera,
} from "react-icons/fa";

import {
  MdDashboardCustomize,
  MdOutlineWbSunny,
} from "react-icons/md";

const products = [
  {
    title: "Car Audio Systems",
    icon: <FaVolumeUp />,
    description:
      "Advanced car audio solutions engineered for crystal-clear sound performance and immersive driving experience.",

    items: [
      {
        name: "Amplifiers",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "DSP Processors",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Subwoofers",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Tweeters",
        image:
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    title: "Seat Covers",
    icon: <FaChair />,
    description:
      "Premium custom-fit seat covers designed for luxury interiors, comfort, and long-lasting durability.",

    items: [
      {
        name: "Leather Seat Covers",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Luxury Covers",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Premium Cushioning",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Custom Fit Covers",
        image:
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    title: "Speaker Audio",
    icon: <FaCompactDisc />,
    description:
      "Branded speaker systems delivering deep bass, balanced sound clarity, and premium audio quality.",

    items: [
      {
        name: "Alpine Speakers",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Pioneer Speakers",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Door Speakers",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Rear Speakers",
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    title: "Car Mats",
    icon: <MdDashboardCustomize />,
    description:
      "Elegant and durable floor mats crafted to protect your vehicle interior from dust, mud, and spills.",

    items: [
      {
        name: "7D Mats",
        image:
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "PVC Mats",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Waterproof Mats",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Premium Floor Mats",
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    title: "Sun Films",
    icon: <MdOutlineWbSunny />,
    description:
      "Heat-resistant and UV-protection sun films that enhance comfort, privacy, and vehicle appearance.",

    items: [
      {
        name: "Heat Control Films",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Privacy Films",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "UV Protection Films",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Black Tint Films",
        image:
          "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },

  {
    title: "Reverse Cameras",
    icon: <FaCamera />,
    description:
      "Advanced parking assistance and HD reverse camera systems for safer and smarter driving.",

    items: [
      {
        name: "HD Cameras",
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Parking Sensors",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "Night Vision",
        image:
          "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      },

      {
        name: "360° Camera",
        image:
          "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

const ProductSection = () => {
  const [selectedImages, setSelectedImages] = useState(
    products.map((product) => product.items[0].image)
  );

  const handleImageChange = (productIndex, image) => {
    const updatedImages = [...selectedImages];
    updatedImages[productIndex] = image;
    setSelectedImages(updatedImages);
  };

  return (
    <section className="bg-[#f7f7f7] py-16 lg:py-24 px-5 lg:px-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-16 lg:mb-24">

          <span className="uppercase tracking-[4px] text-[#EF993A] font-semibold">
            Premium Collection
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mt-5 leading-tight">
            Premium Car Accessories
            <span className="block text-[#EF993A]">
              & Automotive Products
            </span>
          </h2>

          <div className="w-24 h-[3px] bg-[#EF993A] mx-auto mt-8"></div>

          <p className="text-gray-600 max-w-3xl mx-auto mt-8 text-base lg:text-lg leading-relaxed">
            Explore luxury automotive accessories, branded audio systems,
            premium interiors, and advanced vehicle enhancement products.
          </p>

        </div>

        {/* PRODUCT LAYOUT */}
        <div className="space-y-20 lg:space-y-24">

          {products.map((product, productIndex) => (

            <div
              key={productIndex}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch border-t border-gray-200 pt-12 lg:pt-16"
            >

              {/* LEFT IMAGE SECTION */}
              <div className="relative h-full">

                {/* CORNER BORDER */}
                <div className="absolute top-0 left-0 w-20 h-20 lg:w-32 lg:h-32 border-t-4 border-l-4 border-[#EF993A] z-10"></div>

                <div className="relative overflow-hidden h-[420px] sm:h-[500px] lg:h-full lg:min-h-[620px] bg-black shadow-[0_10px_40px_rgba(0,0,0,0.12)] group">

                  <img
                    src={selectedImages[productIndex]}
                    alt={product.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-black to-transparent">

                    <div className="flex items-center gap-4 mb-5">

                      <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#EF993A] text-white flex items-center justify-center text-xl lg:text-2xl">
                        {product.icon}
                      </div>

                      <div>

                        <span className="uppercase text-[10px] sm:text-xs tracking-[3px] text-gray-300">
                          Premium Collection
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-black text-white">
                          {product.title}
                        </h3>

                      </div>
                    </div>

                    <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-lg">
                      {product.description}
                    </p>

                  </div>
                </div>
              </div>

              {/* RIGHT CONTENT SECTION */}
              <div className="h-full flex flex-col justify-between">

                <div>

                  <span className="uppercase tracking-[4px] text-[#EF993A] font-semibold text-sm">
                    Product Category
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-5 leading-tight">
                    Premium Automotive
                    <span className="block text-[#EF993A]">
                      Accessories
                    </span>
                  </h2>

                  <div className="w-24 h-[3px] bg-[#EF993A] mt-6 mb-8"></div>

                  <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
                    High-quality accessories and premium car enhancement
                    solutions crafted for comfort, luxury, safety,
                    and performance.
                  </p>

                </div>

                {/* PRODUCT ITEMS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 mt-auto">

                  {product.items.map((item, itemIndex) => (

                    <button
                      key={itemIndex}
                      onClick={() =>
                        handleImageChange(productIndex, item.image)
                      }
                      className="group relative bg-white border border-gray-300 p-5 lg:p-6 text-left hover:border-[#EF993A] hover:bg-[#fffaf3] transition-all duration-300"
                    >

                      {/* TOP BORDER EFFECT */}
                      <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#EF993A] group-hover:w-full transition-all duration-500"></div>

                      <div className="w-11 h-11 lg:w-12 lg:h-12 bg-[#EF993A]/10 text-[#EF993A] flex items-center justify-center font-bold mb-5 group-hover:bg-[#EF993A] group-hover:text-white transition duration-300">
                        0{itemIndex + 1}
                      </div>

                      <h4 className="font-bold text-gray-900 text-base lg:text-lg mb-2">
                        {item.name}
                      </h4>

                      <p className="text-sm text-gray-500 leading-relaxed">
                        Premium quality upgrade for modern vehicles.
                      </p>

                    </button>

                  ))}

                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
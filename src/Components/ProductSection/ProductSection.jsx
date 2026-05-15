import {
  FaVolumeUp,
  FaChair,
  // FaCompactDisc,
  FaCamera,
} from "react-icons/fa";

import {
  MdDashboardCustomize,
  MdOutlineWbSunny,
} from "react-icons/md";

// Car Audio Systems
import Mainaudio from "../../assets-avif/Audio/Mainaudio.avif"
import Amplifier from "../../assets-avif/Audio/Amplifier.avif"
import DSP from "../../assets-avif/Audio/DSP.avif"
import Subwoofers from "../../assets-avif/Audio/Subwoofers.avif"
import Tweaters from "../../assets-avif/Audio/Tweaters.avif"

// Seat Covers
import Seat from "../../assets-avif/SeatCovers/Seat.avif"
import Leather from "../../assets-avif/SeatCovers/Leather.avif"
import Luxury from "../../assets-avif/SeatCovers/Luxury.avif"
import Cuisine from "../../assets-avif/SeatCovers/Cuisine.avif"
import Custom from "../../assets-avif/SeatCovers/Custom.avif"

// Car Mats
import CarMats from "../../assets-avif/Mats/CarMats.avif"
import sevenMats from "../../assets-avif/Mats/seven.avif"
import pvc from "../../assets-avif/Mats/pvc.avif"
import Waterproof from "../../assets-avif/Mats/Waterproof.avif"
import Premium from "../../assets-avif/Mats/Premium.avif"

// Tint
import SunFilms from "../../assets-avif/Film/SunFilms.avif"
import HeatControl from "../../assets-avif/Film/HeatControl.avif"
import Privacy from "../../assets-avif/Film/Privacy.avif"
import Shield from "../../assets-avif/Film/Shield.avif"
import Tint from "../../assets-avif/Film/Tint.avif"

// Camera
import ReverseCamera from "../../assets-avif/Camera/ReverseCamera.avif"
import hdCamera from "../../assets-avif/Camera/hdCamera.avif"
// import Sensor from "../../assets-avif/Camera/Sensor.avif"
import dvr from "../../assets-avif/Camera/dvr.avif"
import FullCamera from "../../assets-avif/Camera/FullCamera.avif"
import ParkingSensor from "../../assets-avif/Camera/ParkingSensor.avif"

// Lighting
import Led from "../../assets-avif/Light/Led.avif"
import Fog from "../../assets-avif/Light/Fog.avif"
import Light from "../../assets-avif/Light/Light.avif"


const products = [
  {
    title: "Car Audio Systems",
    icon: <FaVolumeUp />,
    heading: "Advanced Automative Accessories",
    description:
      "Upgrade your driving entertainment with an advanced car audio system in Coimbatore delivering crystal-clear sound quality and powerful bass performance.",

    banner: Mainaudio,


    items: [
      {
        name: "Amplifiers",
        description: "High-power amplifiers for superior sound clarity.",
        image: Amplifier,

      },

      {
        name: "DSP Processors",
        description: "Advanced digital sound tuning systems.",
        image: DSP,
      },

      {
        name: "Subwoofers",
        description: "Deep bass enhancement for music lovers.",
        image: Subwoofers,
      },

      {
        name: "Tweeters",
        description: "Crisp and balanced high-frequency sound output.",
        image: Tweaters,
      },
    ],
  },

  {
    title: "Seat Covers",
    icon: <FaChair />,
    heading: "Premium Interior Accessories",
    description:
      "Premium seat covers designed for stylish interiors, enhanced comfort, durability, and long-lasting protection for every vehicle.",
    banner: Seat,

    items: [
      {
        name: "Leather Covers",
        description: "Elegant premium leather finish interiors.",
        image: Leather,
      },

      {
        name: "Luxury Covers",
        description: "Modern stitched designer seat collections.",
        image: Luxury,
      },

      {
        name: "Cushion Support",
        description: "Enhanced comfort for long drives.",
        image: Cuisine,
      },

      {
        name: "Custom Fit",
        description: "Perfect fitting for all car models.",
        image: Custom,
      },
    ],
  },

  // {
  //   title: "Speaker Audio",
  //   icon: <FaCompactDisc />,
  //   description:
  //     "Branded speaker systems designed to deliver balanced sound, rich vocals, and powerful bass response.",

  //   banner:
  //     "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1400&auto=format&fit=crop",

  //   items: [
  //     {
  //       name: "Alpine Speakers",
  //       description: "Premium branded speaker performance.",
  //       image:
  //         "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
  //     },

  //     {
  //       name: "Pioneer Speakers",
  //       description: "Reliable and powerful speaker systems.",
  //       image:
  //         "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
  //     },

  //     {
  //       name: "Door Speakers",
  //       description: "Clear front door audio enhancement.",
  //       image:
  //         "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
  //     },

  //     {
  //       name: "Rear Speakers",
  //       description: "Full cabin immersive sound experience.",
  //       image:
  //         "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1200&auto=format&fit=crop",
  //     },
  //   ],
  // },

  {
    title: "Car Mats",
    icon: <MdDashboardCustomize />,
    heading: "Premium Car Protection",
    description:
      "Durable car mats crafted for interior cleanliness, maximum floor protection, stylish appearance, and everyday driving comfort.",

    banner: CarMats,

    items: [
      {
        name: "7D Mats",
        description: "Luxury layered premium floor protection.",
        image: sevenMats,
      },

      {
        name: "PVC Mats",
        description: "Durable and easy-to-clean floor mats.",
        image: pvc,
      },

      {
        name: "Waterproof Mats",
        description: "Complete dirt and spill protection.",
        image: Waterproof,
      },

      {
        name: "Premium Floor Mats",
        description: "Stylish interiors with premium finish.",
        image: Premium,
      },
    ],
  },

  {
    title: "Sun Films",
    icon: <MdOutlineWbSunny />,
    heading: "Advanced Window Protection",
    description:
      "Premium sun films help reduce heat, improve privacy, block harmful rays, and enhance driving comfort during travel.",

    banner: SunFilms,

    items: [
      {
        name: "Heat Control",
        description: "Reduces cabin heat and improves comfort.",
        image: HeatControl,
      },

      {
        name: "Privacy Films",
        description: "Enhanced privacy and premium aesthetics.",
        image: Privacy,
      },

      {
        name: "UV Protection",
        description: "Blocks harmful UV rays effectively.",
        image: Shield,
      },

      {
        name: "Black Tint Films",
        description: "Stylish dark finish with premium look.",
        image: Tint,
      },
    ],
  },

  {
    title: "Reverse Cameras",
    icon: <FaCamera />,
    heading: "Smart Safety Solutions",
    description:
      "Advanced reverse camera systems provide improved rear visibility, safer parking assistance, and enhanced driving confidence every day.",

    banner: ReverseCamera,

    items: [
      {
        name: "HD Cameras",
        description: "Crystal clear parking visibility.",
        image: hdCamera,
      },

      {
        name: "Parking Sensors",
        description: "Accurate parking assistance technology.",
        image: ParkingSensor,
      },

      {
        name: "DVR Camera",
        description: "High-quality recording for safety and security.",
        image: dvr,
      },

      {
        name: "360° Camera",
        description: "Complete surround parking assistance.",
        image: FullCamera,
      },
    ],
  },
  {
  title: "Car Lighting",
  icon: <MdOutlineWbSunny />,
  heading: "Premium Lighting Solutions",
  description:
    "Upgrade your vehicle with advanced LED lighting systems for improved night visibility, stylish appearance, and enhanced driving safety.",

  banner: Light,

  items: [
    {
      name: "LED Bulbs",
      description: "High-brightness LED bulbs for superior road visibility.",
      image: Led,
    },

    {
      name: "Fog Projectors",
      description: "Powerful projector lights designed for fog and low-light driving.",
      image: Fog,
    },
  ],
},
];

const ProductSection = () => {
  return (
    <section
      className="bg-[#f7f7f7] py-14 lg:py-24 px-4 sm:px-6 lg:px-20"
      id="products"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12 lg:mb-16">

          <span className="uppercase tracking-[4px] text-[#EF993A] font-semibold text-xs sm:text-sm">
            Premium Collection
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-gray-900 mt-4">
            Car Accessories in Coimbatore
          </h2>

          <div className="w-24 h-[3px] bg-[#EF993A] mx-auto mt-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto mt-5 text-sm sm:text-base lg:text-lg leading-relaxed">
            Discover premium automotive accessories designed for comfort, style,
            and enhanced driving performance.
          </p>

        </div>

        {/* ALL PRODUCT CATEGORIES */}
        <div className="space-y-10 lg:space-y-14">

          {products.map((product, productIndex) => (

            <div
              key={productIndex}
              className="bg-white overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition duration-500"
            >

              {/* TOP SECTION */}
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

                {/* IMAGE */}
                <div className="relative h-[260px] sm:h-[360px] lg:h-full overflow-hidden">

                  <img
                    src={product.banner}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 p-6 lg:p-10">

                    <div className="w-14 h-14 bg-[#EF993A] text-white flex items-center justify-center text-2xl mb-4">
                      {product.icon}
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white">
                      {product.title}
                    </h3>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

                  <span className="uppercase tracking-[3px] text-[#EF993A] font-semibold text-xs">
                    Product Category
                  </span>

                  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-gray-900 mt-3 leading-tight">
                    {product.heading}
                  </h2>

                  <div className="w-20 h-[3px] bg-[#EF993A] mt-6 mb-6"></div>

                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {product.description}
                  </p>

                </div>

              </div>


              {/* PRODUCT ITEMS */}
              {/* PRODUCT ITEMS */}
              <div className="border-t border-gray-200 bg-[#fafafa] p-6 lg:p-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {product.items.map((item, itemIndex) => (

                    <div
                      key={itemIndex}
                      className="group bg-white overflow-hidden border border-gray-200 hover:border-[#EF993A] hover:shadow-2xl transition-all duration-500"
                    >

                      {/* LANDSCAPE IMAGE */}
                      <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden">

                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                        {/* NUMBER */}
                        <div className="absolute top-5 left-5 bg-[#EF993A] text-white font-bold px-4 py-2 text-sm tracking-wide">
                          0{itemIndex + 1}
                        </div>

                        {/* TITLE */}
                        <div className="absolute bottom-0 left-0 p-6">

                          <h4 className="text-white text-2xl lg:text-3xl font-black">
                            {item.name}
                          </h4>

                        </div>

                      </div>

                      {/* CONTENT */}
                      <div className="p-6 lg:p-7">

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {item.description}
                        </p>

                      </div>

                    </div>

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
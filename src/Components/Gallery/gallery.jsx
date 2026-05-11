import { useState } from "react";
import {
    Speaker,
    Volume2,
    Camera,
    Lightbulb,
    ShieldCheck,
    CarFront,
} from "lucide-react";

const galleryItems = [
    {
        id: 1,
        category: "Audio Setup",
        title: "Premium DSP Audio Tuning",
        icon: <Speaker size={18} />,
        // instagramEmbed:
        //     "https://www.instagram.com/reel/DOr_joVkpB5/embed",
    },
    {
        id: 2,
        category: "Speaker Installation",
        title: "Door Speaker Upgrade",
        icon: <Volume2 size={18} />,
        // instagramEmbed:
        //     "https://www.instagram.com/reel/DMot1pUyb35/embed",
    },

    {
        id: 3,
        category: "Seat Cover Fitting",
        title: "Luxury Leather Seat Covers",
        icon: <ShieldCheck size={18} />,
        // instagramEmbed:
        //     "https://www.instagram.com/reel/DKJlZq9SOiX/embed",
    },

    {
        id: 4,
        category: "Reverse Camera Setup",
        title: "HD Reverse Camera Installation",
        icon: <Camera size={18} />,
        // instagramEmbed:
        //     "https://www.instagram.com/reel/DKOs1Hkyqw0/embed",
    },

    {
        id: 5,
        category: "Ambient Lighting",
        title: "Premium Ambient Lighting",
        icon: <Lightbulb size={18} />,
        // instagramEmbed:
        //     "https://www.instagram.com/reel/DLOfws2ScCr/embed",
    },

    {
        id: 6,
        category: "Full Interior Upgrade",
        title: "Complete Interior Transformation",
        icon: <CarFront size={18} />,
        // instagramEmbed:
        //     "https://www.instagram.com/reel/DK_SGXaSRzG/embed",
    },
];

const categories = [
    "All",
    "Audio Setup",
    "Speaker Installation",
    "Seat Cover Fitting",
    "Reverse Camera Setup",
    "Ambient Lighting",
    "Full Interior Upgrade",
];

const GallerySection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter(
                (item) => item.category === activeCategory
            );

    return (
        <section className="bg-[#f7f7f7] py-24 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16">

                    <span className="text-[#EF993A] font-semibold uppercase tracking-[4px]">
                        Installation Gallery
                    </span>

                    <h2 className="text-4xl md:text-5xl font-black mt-4 text-gray-900 leading-tight">
                        Our Recent Installations
                    </h2>

                    <p className="text-gray-600 text-lg mt-6 leading-relaxed">
                        Explore our latest car audio installations, premium interior
                        upgrades, speaker setups, seat cover fittings, reverse camera
                        installations, ambient lighting upgrades, and customized vehicle
                        transformations completed for satisfied customers.
                    </p>

                </div>

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-14">

                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category
                                ? "bg-[#EF993A] text-white border-[#EF993A] shadow-lg"
                                : "bg-white text-gray-700 border-gray-200 hover:border-[#EF993A] hover:text-[#EF993A]"
                                }`}
                        >
                            {category}
                        </button>
                    ))}

                </div>


                {/* Instagram Video Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-[28px] overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-500"
                        >

                            {/* Instagram Reel */}
                            <div className="relative w-full h-[340px] overflow-hidden">

                                <iframe
                                    src={item.instagramEmbed}
                                    title={item.title}
                                    allowTransparency={true}
                                    allowFullScreen={true}
                                    frameBorder="0"
                                    scrolling="no"
                                    className="w-full h-full"
                                ></iframe>

                            </div>

                            {/* Content */}
                            <div className="p-5">

                                <div className="flex items-center gap-2 text-[#EF993A] mb-2">
                                    {item.icon}

                                    <span className="text-sm font-semibold">
                                        {item.category}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                                    {item.title}
                                </h3>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default GallerySection;
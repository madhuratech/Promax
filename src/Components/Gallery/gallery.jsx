import {
    Speaker,
    Volume2,
    Camera,
    Lightbulb,
    ShieldCheck,
    CarFront,
} from "lucide-react";

import { FaInstagram } from "react-icons/fa";

import volks from "../../assets/Gallery-webm/volks.webm";
import Innova from "../../assets/Gallery-webm/innova.webm";
import AudUpgrade from "../../assets/Gallery-webm/audupgrade.webm";
import Promax from "../../assets/Gallery-webm/promax.webm";
import caraccess from "../../assets/Gallery-webm/caraccess.webm";
import Alpine from "../../assets/Gallery-webm/alpine.webm";

const galleryItems = [
    {
        id: 1,
        category: "Audio Setup",
        title: "Premium DSP Audio Tuning",
        icon: <Speaker size={18} />,
        video: volks,
        instagramUrl: "https://www.instagram.com/reel/DQxr1LmEhmT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
        id: 2,
        category: "Speaker Installation",
        title: "Door Speaker Upgrade",
        icon: <Volume2 size={18} />,
        video: Innova,
        instagramUrl: "https://www.instagram.com/reel/DMy9CePyip8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
        id: 3,
        category: "Seat Cover Fitting",
        title: "Luxury Leather Seat Covers",
        icon: <ShieldCheck size={18} />,
        video: AudUpgrade,
        instagramUrl: "https://www.instagram.com/reel/DK_SGXaSRzG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
        id: 4,
        category: "Reverse Camera Setup",
        title: "HD Reverse Camera Installation",
        icon: <Camera size={18} />,
        video: Promax,
        instagramUrl: "https://www.instagram.com/reel/DKJlZq9SOiX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
        id: 5,
        category: "Ambient Lighting",
        title: "Premium Ambient Lighting",
        icon: <Lightbulb size={18} />,
        video: caraccess,
        instagramUrl: "https://www.instagram.com/reel/DKrOX86S6zm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },

    {
        id: 6,
        category: "Full Interior Upgrade",
        title: "Complete Interior Transformation",
        icon: <CarFront size={18} />,
        video: Alpine,
        instagramUrl: "https://www.instagram.com/reel/DLGuJn3yC8X/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
];

const GallerySection = () => {
    return (
        <section
            className="bg-[#f7f7f7] py-20 px-4 md:px-10 lg:px-16"
            id="gallery"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-14">

                    <span className="text-[#EF993A] font-semibold uppercase tracking-[3px] text-sm">
                        Installation Gallery
                    </span>

                    <h2 className="text-3xl md:text-5xl font-black mt-4 text-gray-900 leading-tight">
                        Our Recent Installations
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg mt-5 leading-relaxed">
                        Explore our latest premium car audio installations,
                        speaker upgrades, seat cover fittings, reverse camera
                        setups, ambient lighting and complete interior
                        transformations.
                    </p>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group "
                        >

                            {/* Video Section */}
                            <a
                                href={item.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden bg-black cursor-pointer">

                                    <video
                                        src={item.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        webkit-playsinline="true"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                        {/* Dark Overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300"></div>

                                        {/* Instagram Hover Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">

                                            <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 shadow-lg">

                                                <FaInstagram
                                                    size={34}
                                                    className="text-white"
                                                />
                                            </div>
                                        </div>
                                </div>
                            </a>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default GallerySection;
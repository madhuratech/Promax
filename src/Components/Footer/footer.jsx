import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

import PromaxLogo from "../../assets/AudioBrands/PromaxLogo.png";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-[#1a1a1a] text-white">

            {/* TOP SECTION */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 text-center">

                {/* LOGO */}
                <div className="flex flex-col items-center justify-center w-full">

                    <img
                        src={PromaxLogo}
                        alt="PROMAX Logo"
                        className="w-56 md:w-72 lg:w-80 object-contain mx-auto"
                    />

                    <p className="text-sm md:text-base text-[#EF993A] tracking-[6px] uppercase -mt-3">
                        Car Accessories
                    </p>

                </div>

                {/* MENU */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-14 text-sm font-medium uppercase tracking-wide">

                    <a
                        href="#home"
                        className="text-[#EF993A] hover:text-white transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        About
                    </a>

                    <a
                        href="#services"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        Services
                    </a>

                    <a
                        href="#gallery"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        Gallery
                    </a>

                    <a
                        href="#brands"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        Brands
                    </a>

                    <a
                        href="#contact"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        Contact
                    </a>

                </div>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-5 mt-14">

                    <a
                        href="#"
                        className="w-12 h-12 border border-[#2c2c2c] bg-[#111111] flex items-center justify-center text-[#EF993A] hover:bg-[#EF993A] hover:text-black transition duration-300"
                    >
                        <FaFacebookF size={17} />
                    </a>

                    <a
                        href="#"
                        className="w-12 h-12 border border-[#2c2c2c] bg-[#111111] flex items-center justify-center text-[#EF993A] hover:bg-[#EF993A] hover:text-black transition duration-300"
                    >
                        <FaInstagram size={17} />
                    </a>

                    <a
                        href="#"
                        className="w-12 h-12 border border-[#2c2c2c] bg-[#111111] flex items-center justify-center text-[#EF993A] hover:bg-[#EF993A] hover:text-black transition duration-300"
                    >
                        <FaYoutube size={17} />
                    </a>

                    <a
                        href="#"
                        className="w-12 h-12 border border-[#2c2c2c] bg-[#111111] flex items-center justify-center text-[#EF993A] hover:bg-[#EF993A] hover:text-black transition duration-300"
                    >
                        <FaWhatsapp size={17} />
                    </a>

                </div>

                {/* DESCRIPTION */}
                <p className="max-w-3xl mx-auto text-gray-500 text-sm md:text-base leading-8 mt-14">
                    Premium car accessories, professional audio installations,
                    Android systems, ambient lighting, seat covers, reverse cameras,
                    and complete car customization solutions designed with quality,
                    performance, and style.
                </p>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-[#1f1f1f] py-5 px-6 bg-[#050505]">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

                    <p className="text-sm text-gray-600 text-center md:text-left">
                        © 2026 PROMAX Car Accessories. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-5 text-xs uppercase tracking-wide text-gray-600">

                        <a href="#" className="hover:text-[#EF993A] transition">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-[#EF993A] transition">
                            Terms & Conditions
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
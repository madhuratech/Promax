import {
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

import {Link} from "react-router-dom";

import Promaxcbe from "../../assets-avif/Logo/Promaxcbe.avif"
const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-[#1a1a1a]">

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-2 md:px-16 py-6 ">

                {/* LOGO CENTER */}
                <div className="flex flex-col items-center justify-center">

                    <img
                        src={Promaxcbe}
                        alt="Best car audio system in Coimbatore4"
                        loading="lazy"
                        className="w-52 md:w-64 object-contain"
                    />

                    <p className="text-gray-400 text-sm md:text-base text-center max-w-2xl mt-5 leading-7">
                        Premium car accessories, Android systems, ambient lighting,
                        audio upgrades, reverse cameras, seat covers, and complete
                        car customization solutions with professional installation.
                    </p>

                </div>

                {/* CENTER MENUS */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10 text-sm md:text-base font-medium">

                    <a
                        href="/"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        Home
                    </a>

                    <a
                        href="/#about"
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

                    <Link
                        to="/contact"
                        className="text-gray-400 hover:text-[#EF993A] transition duration-300"
                    >
                        Contact
                    </Link>

                </div>



                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-4 mt-10">

                    <a
                        href="https://www.instagram.com/promaxcaraccessories221?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full border border-[#2c2c2c] bg-[#111111] flex items-center justify-center text-[#EF993A] hover:bg-[#EF993A] hover:text-black transition duration-300"
                    >
                        <FaInstagram size={18} />
                    </a>

                    <a
                        href="https://wa.me/919943366663?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full border border-[#2c2c2c] bg-[#111111] flex items-center justify-center text-[#EF993A] hover:bg-[#EF993A] hover:text-black transition duration-300"
                    >
                        <FaWhatsapp size={18} />
                    </a>

                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-[#1f1f1f] bg-[#050505] py-4 px-6">

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

                    <p className="text-xs md:text-sm text-gray-600 text-center">
                        © 2026 PROMAX Car Accessories. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-5 text-[11px]  tracking-wide text-gray-600">

                        <a
                            href="https://madhuratech.com" target="_blank"
                            className="transition"
                        >
                            Tuned by <span className="font-bold text-[#EF993A]">MADHURA TECH</span>
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
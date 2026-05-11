import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png"
import Promax from "../../assets/Logo/Promax.png"

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#0B0B0B] border-b border-[#1f1f1f]">

                <div className="max-w-7xl mx-auto h-[74px] px-6 lg:px-10 flex items-center justify-between">

                    {/* LEFT */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 shrink-0"
                    >

                        {/* ICON */}

                            <img
                                src={logo}
                                alt="Promax Icon"
                                className="w-7 object-contain"
                            />
                
                        {/* BRAND */}
                        <img
                            src={Promax}
                            alt="PROMAX"
                            className="w-[135px] md:w-[150px] object-contain"
                        />
                    </Link>

                    {/* CENTER MENU */}
                    <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-300">

                        <Link
                            to="/"
                            className="hover:text-[#EF993A] transition duration-300"
                        >
                            Home
                        </Link>

                        <Link
                            to="/services"
                            className="hover:text-[#EF993A] transition duration-300"
                        >
                            Services
                        </Link>

                        <Link
                            to="/products"
                            className="hover:text-[#EF993A] transition duration-300"
                        >
                            Products
                        </Link>

                        <Link
                            to="/gallery"
                            className="hover:text-[#EF993A] transition duration-300"
                        >
                            Gallery
                        </Link>

                        <Link
                            to="/contact"
                            className="hover:text-[#EF993A] transition duration-300"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">

                        {/* PHONE */}
                        <a
                            href="tel:+919003680296"
                            className="hidden md:flex items-center gap-2 border border-[#262626] px-4 py-2 text-sm text-gray-300 hover:border-[#EF993A] transition"
                        >
                            <Phone size={16} className="text-[#EF993A]" />

                            <span>
                                +91 9003680296
                            </span>
                        </a>

                        {/* BUTTON */}
                        <button className="hidden md:block bg-[#EF993A] hover:bg-[#d88323] text-white text-sm font-semibold px-5 py-2 transition duration-300">
                            Get Quote
                        </button>

                        {/* MOBILE MENU */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="lg:hidden text-white"
                        >
                            {mobileMenu ? (
                                <X size={28} />
                            ) : (
                                <Menu size={28} />
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
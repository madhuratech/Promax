import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Promaxcbe from "../../assets/logo/Promaxcbe.png";


const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    // ACTIVE CLICK STATE
    const [activeMenu, setActiveMenu] = useState("home");

    const location = useLocation();
    const navigate = useNavigate();

    // NAVIGATION ITEMS
    const navItems = [
        { id: "home", label: "Home" },
        { id: "services", label: "Services" },
        { id: "products", label: "Products" },
        { id: "gallery", label: "Gallery" },
    ];

    // SMOOTH SCROLL
    const handleScroll = (id) => {
        setMobileMenu(false);

        // SET ACTIVE ONLY ON CLICK
        setActiveMenu(id);

        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                const section = document.getElementById(id);

                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);
        } else {
            const section = document.getElementById(id);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#0B0B0B] border-b border-[#1f1f1f]">

                <div className="max-w-7xl mx-auto h-[90px] px-6 lg:px-10 flex items-center justify-between">

                    {/* LEFT */}
                    <Link
                        to="/"
                        className="flex items-center gap-5 shrink-0"
                    >
                        {/* ICON LOGO */}
                        <div className="flex items-center justify-center h-[90px]">
                            <img
                                src={Promaxcbe}
                                alt="Promax Icon"
                                className="w-42 md:w-56  object-contain "
                            />
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center gap-2 text-[15px] font-medium">

                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`px-4 py-2 transition-all duration-300

                                ${activeMenu === item.id
                                        ? "text-[#EF993A]"
                                        : "text-gray-300 hover:text-[#EF993A]"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* CONTACT */}
                        <Link
                            to="/contact"
                            onClick={() => setActiveMenu("contact")}
                            className={`px-4 py-2 transition-all duration-300

                            ${location.pathname === "/contact"
                                    ? "text-[#EF993A]"
                                    : "text-gray-300 hover:text-[#EF993A]"
                                }`}
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
                            <Phone
                                size={16}
                                className="text-[#EF993A]"
                            />

                            <span>
                                +91 9003680296
                            </span>
                        </a>

                        {/* BUTTON */}
                        <button className="hidden md:block bg-[#EF993A] hover:bg-[#d88323] text-white text-sm font-semibold px-5 py-2 transition duration-300">
                            Get Quote
                        </button>

                        {/* MOBILE MENU BUTTON */}
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

                {/* MOBILE MENU */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#0B0B0B]

                    ${mobileMenu
                            ? "max-h-[500px] border-t border-[#1f1f1f]"
                            : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col px-6 py-5 space-y-5 text-[15px] font-medium">

                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScroll(item.id)}
                                className={`text-left transition duration-300

                                ${activeMenu === item.id
                                        ? "text-[#EF993A]"
                                        : "text-gray-300 hover:text-[#EF993A]"
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}

                        {/* CONTACT */}
                        <Link
                            to="/#contact"
                            onClick={() => {
                                setMobileMenu(false);
                                setActiveMenu("contact");
                            }}
                            className={`transition duration-300

                            ${location.pathname === "/contact"
                                    ? "text-[#EF993A]"
                                    : "text-gray-300 hover:text-[#EF993A]"
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
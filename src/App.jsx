import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* MOBILE STICKY WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919003680296?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-5 right-5 z-50
          flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366] text-white
          shadow-lg
          hover:scale-110
          transition-all duration-300
        
        "
      >
        <FaWhatsapp size={32} />
      </a>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
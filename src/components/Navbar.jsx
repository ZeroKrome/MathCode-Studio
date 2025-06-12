import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/src/assets/icon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-darkBlue text-white px-6 sm:px-12 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Logo + nom */}
        <div className="flex items-center gap-4 mr-auto mt-2">
          <div className="h-10 w-10 flex items-center justify-center scale-150">
            <img src={logo} alt="logo" className="h-full w-auto" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-accent">
            MathCode Studio
          </span>
        </div>

        {/* Liens nav desktop */}
        <div className="hidden md:flex gap-10 text-lg font-semibold">
          <Link to="/">Accueil</Link>
          <Link to="/services">Services</Link>
          <Link to="/projets">Projets</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Menu burger mobile */}
        <div
          className="md:hidden text-2xl cursor-pointer ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-darkBlue text-center py-6 flex flex-col gap-4 text-lg font-medium md:hidden z-50">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Accueil
            </Link>
            <Link to="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link to="/projets" onClick={() => setMenuOpen(false)}>
              Projets
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

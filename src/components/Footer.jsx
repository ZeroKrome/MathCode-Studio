import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-darkBlue text-white px-6 py-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Logo + nom */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-7 h-7 object-contain" />
          <span className="font-bold text-base md:text-lg">
            MathCode Studio
          </span>
        </div>

        {/* Liens + Réseaux */}
        <nav className="flex flex-wrap gap-5 text-sm md:text-base items-center">
          <Link to="/" className="hover:text-accent transition-colors">
            Accueil
          </Link>
          <Link to="/services" className="hover:text-accent transition-colors">
            Services
          </Link>
          <Link to="/projets" className="hover:text-accent transition-colors">
            Projets
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>

          <a
            href="mailto:lemaire.mathieu.dev@gmail.com"
            className="hover:text-accent transition-colors text-lg"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/mathieu-lemaire-8b394a294/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} MathCode Studio. Tous droits réservés.
      </div>
    </footer>
  );
}

export default Footer;

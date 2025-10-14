import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo_ishy_braces.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <div className="bg-sky-50/50"></div>
      <nav className="flex flex-wrap items-center justify-between text-gray-400 font-semibold rounded-2xl py-2.5 px-5 backdrop-blur-md bg-white/5 border border-white/20 shadow-lg">
        <Link to="/">
          <img src={logo} alt="Ishy" className="w-auto h-6" />
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <div className="flex flex-col md:flex-row">
            <Link
              to="/about"
              className="block hover:text-sky-100 px-5 py-2 md:py-0"
            >
              About
            </Link>

            <Link
              to="/skills"
              className="block hover:text-sky-100 px-5 py-2 md:py-0"
            >
              Skills
            </Link>

            <Link
              to="/projects"
              className="block hover:text-sky-100 px-5 py-2 md:py-0"
            >
              Projects
            </Link>
          </div>
          <Link
            to="/contact"
            className="block md:hidden h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mt-2"
          >
            Contact
          </Link>
        </div>

        {/* Contact Button for Desktop */}
        <Link
          to="/contact"
          className="hidden md:block h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500"
        >
          Contact
        </Link>
      </nav>
    </>
  );
}

export default Navbar;

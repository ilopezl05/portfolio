import { useState } from "react";
import logo from "../assets/images/logo_ishy_braces.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-sky-50/50"></div>
      <nav className="flex flex-wrap items-center justify-between text-gray-400 font-semibold rounded-2xl py-2.5 px-5 backdrop-blur-md bg-white/5 border border-white/20 shadow-lg">
        <a href="">
          <img src={logo} alt="Ishy" className="w-auto h-6" />
        </a>

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
          <ul className="flex flex-col md:flex-row">
            <li>
              <a href="" className="block hover:text-sky-100 px-5 py-2 md:py-0">
                About
              </a>
            </li>
            <li>
              <a href="" className="block hover:text-sky-100 px-5 py-2 md:py-0">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="block hover:text-sky-100 px-5 py-2 md:py-0">
                Projects
              </a>
            </li>
          </ul>
          <a
            href=""
            className="block md:hidden h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500 mt-2"
          >
            Contact
          </a>
        </div>

        {/* Contact Button for Desktop */}
        <a
          href=""
          className="hidden md:block h-full w-auto py-2 px-4 rounded-2xl bg-sky-600 text-sky-100 hover:bg-sky-500"
        >
          Contact
        </a>
      </nav>
    </>
  );
}

export default Navbar;

import { React, useState } from "react";
import {Link} from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglenavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-gray-500 fixed top-0 left-0 w-full z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-4xl font-bold">
          <Link to="/" className="hover:text-black hover:underline">
            Interview preP
          </Link>
        </div>
        <nav className={`md:flex ${isOpen ? "block" : "hidden"} `}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-semibold ">
            <li>
              <Link to="" className="text-xl hover:text-black hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-xl hover:text-black hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/sign-up" className="text-xl hover:text-black hover:underline">
                Sign-up
              </Link>
            </li>
            <li>
              <Link to="/sign-in" className="text-xl hover:text-black hover:underline">
                login
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl hover:text-black hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={togglenavbar}
          >
            <span className="material-icons text-6xl font-extrabold">=</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

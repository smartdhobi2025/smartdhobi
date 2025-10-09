import React from "react";
import { LogIn, UserPlus, Menu } from "lucide-react";
import logo from "../assets/logo.png"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleLoginClick, handleRegisterClick, isMenuOpen,setIsMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 md:w-24 md:h-24 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Smart Dhobi Logo"
                  className="w-full h-full object-contain mb-2"
                />
              </div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
                Smart Dhobi
              </h1>
              <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                Premium Laundry
              </p>
            </div>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              How it Works
            </a>
            <a
              href="#nearby"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Find Nearby
            </a>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/login')}
                className="flex items-center space-x-2 px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <LogIn size={18} />
                <span>Login</span>
              </button>
              <button
                onClick={() => handleRegisterClick("customer")}
                className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <UserPlus size={18} />
                <span>Register</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#nearby"
              className="block py-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              Find Nearby
            </a>
            <hr className="border-purple-100" />
            <button
              onClick={() => handleLoginClick("customer")}
              className="flex items-center space-x-2 w-full py-2 text-purple-600"
            >
              <LogIn size={18} />
              <span>Login</span>
            </button>
            <button
              onClick={() => handleRegisterClick("customer")}
              className="flex items-center space-x-2 w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg"
            >
              <UserPlus size={18} />
              <span>Register</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

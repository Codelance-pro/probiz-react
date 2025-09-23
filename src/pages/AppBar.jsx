import React, { useState } from 'react'
import logo from "@/assets/logo.png";
import { Link, NavLink } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Menu, X } from 'lucide-react';

const AppBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const baseClasses =
    "relative text-sm lg:text-base text-muted-foreground transition-colors px-1";
  return (
    <div className="bg-gradient-card px-4 sm:px-6 mt-2">
      <header className="relative z-50 px-4 sm:px-6 py-4 bg-[#dbeafe] rounded-t-2xl">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
            <div className="flex items-center space-x-4 sm:space-x-8">
              <img src={logo} alt="Probiz Logo" width={200} height={100} />

              {/* Desktop Navigation - Fixed with explicit display classes */}
              <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  Home
                  {/* underline */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  About
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  Contact
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  Blogs
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>
              </div>
            </div>

            {/* Desktop Download Button - Fixed with explicit display classes */}
            <Button className="hidden sm:flex sm:bg-foreground sm:text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base">
              Book a Demo
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="flex sm:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="block sm:hidden mt-2 rounded-2xl px-4 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
              <div className="flex flex-col space-y-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  Home
                  {/* underline */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  About
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  Contact
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>

                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `${baseClasses} ${isActive ? "text-purple-400 font-semibold" : "hover:text-foreground"
                    }`
                  }
                >
                  Blogs
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-300 -translate-x-1/2 group-hover:w-full"></span>
                </NavLink>
                <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full flex items-center justify-center">
                  Book a Demo
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default AppBar
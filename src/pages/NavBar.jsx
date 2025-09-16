import React, { useState } from 'react'
import logo from "@/assets/logo.png";
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Menu, X } from 'lucide-react';

const NavBar = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gradient-card px-4 sm:px-6 mt-2">
            <header className="relative z-50 px-4 sm:px-6 py-4 bg-[#d9c8fb] rounded-t-2xl">
                  <div className="max-w-7xl mx-auto">
                    <nav className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
                      <div className="flex items-center space-x-4 sm:space-x-8">
                        {/* <h1 className="text-xl sm:text-2xl font-bold text-foreground">Probiz</h1> */}
                        <img src={logo} alt="Probiz Logo" className=" sm:h-10 " />
        
        
                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                          <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">Home</a>
                          <Link to="/about" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">About</Link>
                          <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                          <a href="#" className="text-sm lg:text-base text-muted-foreground hover:text-foreground transition-colors">Blog</a>
                        </div>
                      </div>
        
                      {/* Desktop Download Button */}
                      <Button className="hidden sm:flex bg-foreground text-background hover:bg-foreground/90 rounded-full px-4 lg:px-6 items-center py-2 text-sm lg:text-base">
                        {/* <Download className="w-4 h-4 mr-2" />
                        <span className="hidden lg:inline">Download for iOS</span>
                        <span className="lg:hidden">Download</span> */}
                        Book a Demo
                      </Button>
        
                      {/* Mobile Menu Button */}
                      <button
                        className="sm:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                      </button>
                    </nav>
        
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                      <div className="sm:hidden mt-2 rounded-2xl px-4 py-3 bg-card/80 backdrop-blur-sm shadow-lg">
                        <div className="flex flex-col space-y-3">
                          <a href="#" className="text-foreground hover:text-foreground/80 transition-colors py-2">Home</a>
                          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">About</a>
                          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Pricing</a>
                          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors py-2">Blog</a>
                          <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full w-full flex items-center justify-center">
                            {/* <Download className="w-4 h-4 mr-2" /> */}
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

export default NavBar
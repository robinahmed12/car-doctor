"use client"

import React, { useState } from "react";
import { 
  Home, 
  User, 
  Settings, 
  BookOpen, 
  Mail, 
  Menu, 
  X,
  Car,
  LogIn,
  UserPlus
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#", icon: User },
    { name: "Services", href: "#", icon: Settings },
    { name: "Blog", href: "#", icon: BookOpen },
    { name: "Contact", href: "#", icon: Mail },
  ];

  return (
    <header className="bg-slate-50 shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a 
              className="flex items-center space-x-2 text-slate-900 hover:text-red-500 transition-colors duration-300" 
              href="#"
            >
              <Car className="h-8 w-8 text-red-500" />
              <span className="text-xl lg:text-2xl font-bold">Car Doctor</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.name}>
                    <a
                      className="flex items-center space-x-2 px-3 lg:px-4 py-2 text-sm lg:text-base font-medium text-slate-600 hover:text-red-500 hover:bg-white rounded-lg transition-all duration-300 group"
                      href={item.href}
                    >
                      <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              className="flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              href="#"
            >
              <LogIn className="h-4 w-4" />
              <span>Login</span>
            </a>
            <a
              className="flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-medium text-red-500 bg-white border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300 hover:scale-105"
              href="#"
            >
              <UserPlus className="h-4 w-4" />
              <span>Register</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-slate-600 hover:text-red-500 hover:bg-white rounded-lg transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    className="flex items-center space-x-3 px-3 py-3 text-base font-medium text-slate-600 hover:text-red-500 hover:bg-slate-50 rounded-lg transition-all duration-300"
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-300"
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <LogIn className="h-5 w-5" />
                  <span>Login</span>
                </a>
                <a
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 text-base font-medium text-red-500 bg-white border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all duration-300"
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserPlus className="h-5 w-5" />
                  <span>Register</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
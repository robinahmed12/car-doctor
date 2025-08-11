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
  Calendar,
  Search,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight,
} from "lucide-react";

const Banner = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div
          className="absolute  inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url("/images/banner/5.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Affordable
                  <br />
                  <span className="text-red-500">Price For Car</span>
                  <br />
                  Servicing
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed">
                  There Are Many Variations Of Passages Of Available, But The
                  Majority Have Suffered Alteration In Some Form
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center space-x-2 px-8 py-4 text-base font-semibold text-white bg-red-500 hover:bg-red-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                  <span>Discover More</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group flex items-center justify-center space-x-2 px-8 py-4 text-base font-semibold text-white border-2 border-white hover:bg-white hover:text-slate-900 rounded-lg transition-all duration-300 hover:shadow-lg">
                  <span>Latest Project</span>
                </button>
              </div>
            </div>

           
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 flex space-x-2">
            <button className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

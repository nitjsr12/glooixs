
"use client";

import { useState, useEffect } from "react";
import { Search, Bell, Menu, X, ChevronDown, Globe, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "bn", name: "বাংলা" },
  { code: "bho", name: "भोजपुरी" },
];

const movieCategories = [
  { name: "Bhojpuri", href: "/movies/bhojpuri" },
  { name: "Bengali", href: "/movies/bengali" },
  { name: "Israeli", href: "/movies/israeli" },
  { name: "Malayalam", href: "/movies/malayalam" },
  { name: "Tamil", href: "/movies/tamil" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Primary Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img src="images/logo.png" alt="Glopixs Logo" className="h-10 w-auto" />
              <span className="ml-2 text-2xl font-bold text-white">Glopixs</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex ml-10 items-center space-x-8">
            <a href="/" className="text-white hover:text-gray-300">Home</a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                Movies <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 border-gray-800">
                {movieCategories.map((category) => (
                  <DropdownMenuItem key={category.name} className="text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer">
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
            <a href="/blog" className="text-gray-300 hover:text-white">Blog</a>
            <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-16 left-0 w-full py-4 px-6 flex flex-col space-y-4 text-white">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/blog" className="hover:text-gray-300">Blog</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}
    </nav>
  );
}

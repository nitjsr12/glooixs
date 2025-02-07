"use client";

import { useState, useEffect } from "react";
import { Film, Search, Bell, Menu, X, ChevronDown, Globe, LogIn } from "lucide-react";
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
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
              <Film className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-2xl font-bold text-white">Glopixs</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-10 items-center space-x-8">
              <a href="/" className="text-white hover:text-gray-300">
                Home
              </a>

              {/* Movies Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                  Movies <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-black/95 border-gray-800">
                  {movieCategories.map((category) => (
                    <DropdownMenuItem
                      key={category.name}
                      className="text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer"
                    >
                      {category.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="/about" className="text-gray-300 hover:text-white">
                About 
              </a>
              <a href="/blog" className="text-gray-300 hover:text-white">
                Blog 
              </a>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>

          {/* Right Side: Search, Language, and Profile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search movies, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-900/50 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-300 hover:text-white">
                <Globe className="h-5 w-5 mr-1" />
                {selectedLanguage.name}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 border-gray-800">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang)}
                    className="text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Login/Sign Up Button */}
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <LogIn className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-transparent"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95">
          {/* Mobile Search */}
          <div className="p-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search movies, genres..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-900/50 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Mobile Navigation Links */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-white rounded-md bg-gray-900">
              Home
            </a>
            <a href="/movies" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md">
              Movies
            </a>
            <a href="/subscription" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md">
              Subscription Plans
            </a>
            <a href="/about" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md">
              About Us
            </a>
            <a href="/blog" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md">
              Blog & News
            </a>
            <a href="/contact" className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-900 rounded-md">
              Contact Us
            </a>
          </div>

          {/* Mobile Language Selector */}
          <div className="px-4 py-3 border-t border-gray-700">
            <div className="flex items-center px-3 py-2">
              <Globe className="h-5 w-5 text-gray-400 mr-2" />
              <select
                value={selectedLanguage.code}
                onChange={(e) => {
                  const lang = languages.find(l => l.code === e.target.value);
                  if (lang) setSelectedLanguage(lang);
                }}
                className="bg-transparent text-gray-300 focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code} className="bg-black">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Mobile Sign In */}
          <div className="px-4 py-3 border-t border-gray-700">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <LogIn className="h-5 w-5 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
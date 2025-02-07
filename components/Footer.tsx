import { Facebook, Twitter, Instagram, Youtube, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TV Shows</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Popular</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Device Compatibility</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Content Guidelines</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Download Our App</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start space-x-2">
                <Download className="h-5 w-5" />
                <span>Get it on Google Play</span>
              </Button>
              <Button variant="outline" className="w-full justify-start space-x-2">
                <Download className="h-5 w-5" />
                <span>Download on App Store</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Facebook className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
            <Instagram className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
            <Youtube className="h-6 w-6 hover:text-white cursor-pointer transition-colors" />
          </div>
          
          <p className="text-sm text-center md:text-right">
            © 2025 Glopixs. All rights reserved. <br />
            <span className="text-gray-500">Bringing regional cinema to the world</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
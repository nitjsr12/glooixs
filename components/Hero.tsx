"use client";

import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative h-[85vh] w-full">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">Cinema Beyond Borders</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your Home for Bhojpuri, Bengali & More!
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Experience the rich diversity of Indian cinema with our curated collection of regional masterpieces.
          </p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              <Play className="mr-2 h-5 w-5" /> Watch Now
            </Button>
            <Button size="lg" variant="outline" className="bg-gray-500/50 hover:bg-gray-500/70">
              <Info className="mr-2 h-5 w-5" /> Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
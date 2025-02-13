"use client";

import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    image: "https://www.indianchemicalnews.com/public/uploads/news/2024/10/23636/Ratan_Tata.jpg",
    title: "Ratan Tata",
    quote: "If you want to walk fast, walk alone. But if you want to walk far, walk together.",
    role: "Indian Industrialist",
  },
  {
    image: "https://www.frontlist.in/storage/uploads/2019/08/apj.png",
    title: "APJ Abdul Kalam",
    quote: "Dream is not that which you see while sleeping, it is something that does not let you sleep.",
    role: "Former President of India",
  }
];

export default function Hero() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        className="h-full w-full"
        opts={{
          loop: true,
          duration: 50,
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-[85vh]">
              <div className="relative h-full w-full">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
                
                <div className="relative h-full flex items-center">
                  <div className="container px-4 md:px-6">
                    <div className="max-w-3xl space-y-4">
                      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                        {slide.title}
                      </h1>
                      <blockquote className="text-2xl italic text-gray-200 md:text-3xl">
                        "{slide.quote}"
                      </blockquote>
                      <p className="text-lg text-gray-300">{slide.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-white w-4" : "bg-white/50"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
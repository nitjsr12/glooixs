"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Movie {
  id: number;
  title: string;
  image: string;
  trailerUrl?: string;
}

const movies: Movie[] = [
  {
    id: 1,
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb",
    trailerUrl: "https://example.com/trailer1.mp4"
  },
  {
    id: 2,
    title: "Inception",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
    trailerUrl: "https://example.com/trailer2.mp4"
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    trailerUrl: "https://example.com/trailer3.mp4"
  },
  {
    id: 4,
    title: "The Matrix",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    trailerUrl: "https://example.com/trailer4.mp4"
  },
  {
    id: 5,
    title: "Blade Runner",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7",
    trailerUrl: "https://example.com/trailer5.mp4"
  },
  {
    id: 6,
    title: "Avatar",
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0",
    trailerUrl: "https://example.com/trailer6.mp4"
  }
];

interface MovieListProps {
  title: string;
  category: string;
}

export default function MovieList({ title, category }: MovieListProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState<number | null>(null);
  const [watchlist, setWatchlist] = useState<number[]>([]);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`scroll-container-${category}`);
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  const toggleWatchlist = (movieId: number) => {
    setWatchlist(prev => 
      prev.includes(movieId) 
        ? prev.filter(id => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="group relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 hidden group-hover:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div
          id={`scroll-container-${category}`}
          className="flex space-x-4 overflow-x-hidden scroll-smooth"
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-none w-[300px] relative group/item"
              onMouseEnter={() => setHoveredMovie(movie.id)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <div className="relative h-[169px] overflow-hidden rounded-md">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredMovie === movie.id ? 'scale-105' : ''
                  }`}
                />
                {hoveredMovie === movie.id && (
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center space-y-3">
                    <Button className="bg-white text-black hover:bg-white/90">
                      <Play className="h-5 w-5 mr-2" /> Play
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/20"
                      onClick={() => toggleWatchlist(movie.id)}
                    >
                      {watchlist.includes(movie.id) ? (
                        <><Check className="h-5 w-5 mr-2" /> Added to Watchlist</>
                      ) : (
                        <><Plus className="h-5 w-5 mr-2" /> Add to Watchlist</>
                      )}
                    </Button>
                  </div>
                )}
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 hidden group-hover:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
"use client";
import { Calendar, Clock, Tag } from "lucide-react";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Glopixs Announces Partnership with Major Bhojpuri Production House",
    excerpt: "Exclusive streaming rights secured for upcoming Bhojpuri blockbusters...",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Industry News",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728"
  },
  {
    id: 2,
    title: "Bengali Cinema's Rising Global Appeal",
    excerpt: "How Bengali films are capturing international audiences' attention...",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
  },
  {
    id: 3,
    title: "Israeli Film Festival Coming to Glopixs",
    excerpt: "Exclusive streaming event featuring award-winning Israeli cinema...",
    date: "March 10, 2024",
    readTime: "3 min read",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
  }
];

const newspaperCuts = [
  "images/11.jpeg",
  "images/12.jpeg",
  "images/13.jpeg",
  "images/14.jpeg",
  "images/15.jpeg",
  "images/16.jpeg",
  "images/17.jpeg",
  "images/18.jpeg",
  "images/19.jpeg",
  "images/110.jpeg",
];

export default function BlogPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26"
            alt="Blog & News"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog & News</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Stay updated with the latest in regional cinema
          </p>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Newspaper Cut Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newspaperCuts.map((cut, index) => (
              <div
                key={index}
                className="cursor-pointer border-4 border-gray-700 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(cut)}
              >
                <img
                  src={cut}
                  alt={`Newspaper Cut ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <div className="relative p-4 max-w-3xl w-full">
              <button
                className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-600"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img src={selectedImage} alt="Full View" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
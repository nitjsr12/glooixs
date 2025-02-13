import Hero from "@/components/Hero";
import MovieList from "@/components/MovieList";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <div className="px-4 md:px-8 lg:px-12 space-y-12 pb-12">
        <MovieList title="Trending in Bhojpuri" category="bhojpuri" />
        <MovieList title="Popular Bengali Shows" category="bengali" />
        <MovieList title="Malayalam Hits" category="malayalam" />
        <MovieList title="Tamil Blockbusters" category="tamil" />
        
        <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-8 py-12 bg-gray-900 rounded-lg shadow-lg p-8">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-extrabold text-red-500">About Us</h2>
            <p className="text-lg">
              We bring the best regional movies and shows to your screen, ensuring entertainment for every language and culture.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-lg">
              To provide high-quality entertainment across diverse languages and cultures, making regional content easily accessible.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-lg">
              To be the go-to platform for regional content, celebrating diversity and storytelling worldwide.
            </p>
          </div>
        </section>
        
        <div className="text-center mt-6">
          <Link href="/about" legacyBehavior>
            <a className="inline-block bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition duration-300">
              Learn More
            </a>
          </Link>
        </div>
        
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}

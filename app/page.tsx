import Hero from "@/components/Hero";
import MovieList from "@/components/MovieList";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <div className="px-4 md:px-8 lg:px-12 space-y-12 pb-12">
        <MovieList title="Trending in Bhojpuri" category="bhojpuri" />
        <MovieList title="Popular Bengali Shows" category="bengali" />
        <MovieList title="Malayalam Hits" category="malayalam" />
        <MovieList title="Tamil Blockbusters" category="tamil" />
        <SubscriptionPlans />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
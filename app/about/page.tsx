import Footer from "@/components/Footer";
import { Heart, Globe, Rocket, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1"
            alt="Cinema"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Bringing the world's diverse cinema to your screens
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Glopixs is more than just a streaming platform – we're a passionate community 
              dedicated to celebrating the rich diversity of global cinema. Our mission is to 
              break down language barriers and bring exceptional regional content to audiences 
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-300">
                    To make regional cinema accessible to everyone, preserving cultural 
                    heritage while fostering global understanding through the power of storytelling.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                  <p className="text-gray-300">
                    To become the world's leading platform for regional and international 
                    cinema, connecting audiences with stories that matter.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Community</h3>
                  <p className="text-gray-300">
                    We're building a vibrant community of film lovers who appreciate 
                    diverse storytelling and cultural experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Future</h3>
                  <p className="text-gray-300">
                    We're constantly expanding our library and developing new features 
                    to enhance your viewing experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why We Started</h2>
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-gray-300 mb-6">
              We noticed a significant gap in the streaming market – while mainstream content 
              was readily available, rich regional cinema from cultures around the world 
              remained largely inaccessible to global audiences.
            </p>
            <p className="text-gray-300 mb-6">
              The vibrant film industries of Bhojpuri, Bengali, and Israeli cinema, among 
              others, were producing exceptional content that deserved a wider platform. 
              We saw an opportunity to bridge this gap and create a home for these 
              incredible stories.
            </p>
            <p className="text-gray-300">
              Today, Glopixs stands as a testament to our commitment to diversity in 
              entertainment, offering a carefully curated selection of regional content 
              that celebrates different cultures and perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Looking Ahead</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expanding Languages</h3>
              <p className="text-gray-300">
                Adding more regional languages and dialects to our growing library
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Original Content</h3>
              <p className="text-gray-300">
                Producing exclusive Glopixs originals in multiple languages
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Global Community</h3>
              <p className="text-gray-300">
                Building features to connect film enthusiasts worldwide
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>

    </main>

  );

}
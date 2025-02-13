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

      {/* About Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          At Glopixs, we believe in the power of stories—the kind that transcend borders, cultures, and languages. We are more than just an OTT platform; we are a bridge connecting diverse content with audiences eager for fresh, authentic storytelling.
          Glopixs was founded with a singular mission: to bring underrepresented content to the forefront and create a space where every voice matters. Whether it’s films, series, or documentaries, our platform is dedicated to curating content that reflects the world’s cultural diversity.
          </p>
        </div>
      </section>

      {/* Vision & Impact */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Vision & Impact</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vision</h3>
                <p className="text-gray-300">
                Inspired by Ratan Tata’s Legacy
                At Glopixs, we believe in the power of inclusive growth and innovation—principles deeply embodied by Sir Ratan Tata. Just as he revolutionized industries by fostering accessibility, quality, and global impact, we aim to reshape the entertainment landscape by bringing regional and international cinema to a wider audience.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p className="text-gray-300">
                From transforming the Tata Group into a global powerhouse to pioneering affordable innovation with the Nano car, Ratan Tata's impact transcends business metrics. Through digital transformation and sustainable practices, we continue this legacy of creating meaningful change.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Founder’s Story</h2>
          <div className="text-gray-300 text-lg leading-relaxed">
            <p className="mb-6">
            Glopixs was founded by Vincey AL, a visionary leader and technology innovator who serves as our CEO. With a passion for digital transformation and a deep understanding of emerging technologies, Vincey has been instrumental in shaping Glopixs into a leading force in the industry.</p>

           <p> Anita, our distinguished co-founder, brings invaluable expertise and strategic insight to our organization. Together, they lead a team of dedicated professionals committed to delivering innovative solutions that drive business success.</p>

          <p>  Our leadership team combines decades of experience in technology, business strategy, and digital innovation, ensuring that we remain at the forefront of digital transformation.
            </p>
            <p>
              Today, we continue that journey, ensuring that every culture, every language, and 
              every storyteller gets a stage to shine.
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

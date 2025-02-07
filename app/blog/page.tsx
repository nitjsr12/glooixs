import Footer from "@/components/Footer";
import { Pencil, Film, Calendar, MessageSquare } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1598899134739-24c76aade6ea"
            alt="Blog"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Latest Movie Insights</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Reviews, Interviews & Behind-the-Scenes Exclusives
          </p>
        </div>
      </section>

      {/* Blog Sections */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Pencil className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Movie Reviews & Recommendations</h3>
                  <p className="text-gray-300">
                    Expert critiques and top movie picks to help you decide what to watch next.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Film className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Behind-the-Scenes Stories</h3>
                  <p className="text-gray-300">
                    Discover how your favorite films were made with exclusive production insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interviews with Filmmakers & Actors</h3>
                  <p className="text-gray-300">
                    Get insights from directors, actors, and producers behind the biggest movies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-600 p-3 rounded-lg">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Upcoming Movie Releases & Premieres</h3>
                  <p className="text-gray-300">
                    Stay updated with the latest movies hitting theaters and streaming platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Engagement */}
      <section className="py-16 px-4 md:px-8 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Conversation</h2>
          <p className="text-lg text-gray-300 mb-6">
            Share your thoughts, leave comments, and interact with fellow movie lovers.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg text-lg">
            Leave a Comment
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

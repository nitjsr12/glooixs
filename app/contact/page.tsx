import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Contact Hero */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            We're here to help and answer any question you might have
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Mail className="h-10 w-10 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">support@glopixs.com</p>
              <p className="text-gray-300">business@glopixs.com</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <Phone className="h-10 w-10 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-gray-300">Mon-Fri, 9am-6pm EST</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-red-600" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">123 Cinema Street</p>
              <p className="text-gray-300">New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <p className="text-gray-300 mb-4">
            Can't find the answer you're looking for? Reach out to our customer support team.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
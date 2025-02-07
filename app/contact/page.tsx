import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1593642634367-d91a135587b5"
            alt="Contact"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
        </div>
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            We're here to help! Get in touch for support & partnerships.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Address</h3>
                <p className="text-gray-300">123 Movie Street, Film City, CA 90001</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-300">support@glopixs.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-300">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-red-600 p-3 rounded-lg">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-300">Click <a href="#" className="text-blue-400 underline">here</a> to chat with us live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="text-left space-y-6">
            <div>
              <h3 className="text-xl font-semibold">How do I resolve payment issues?</h3>
              <p className="text-gray-300">Ensure your payment details are correct and try again. Contact support if the issue persists.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Why is my streaming quality poor?</h3>
              <p className="text-gray-300">Check your internet speed and ensure no other applications are using excessive bandwidth.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What is your refund policy?</h3>
              <p className="text-gray-300">Refunds are available within 7 days of purchase for eligible cases. Contact support for details.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What is Glopixs?</h3>
              <p className="text-gray-300">Glopixs is an OTT streaming platform offering Bhojpuri, Bengali, Israeli, and South Indian films.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How much does Glopixs cost?</h3>
              <p className="text-gray-300">We offer a Free plan with ads, a Standard plan (₹XX/month), and a Premium plan (₹XX/year) with offline downloads and ad-free streaming.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">What devices can I watch Glopixs on?</h3>
              <p className="text-gray-300">You can stream on Smart TVs, mobiles, tablets, and web browsers.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Can I download movies for offline viewing?</h3>
              <p className="text-gray-300">Yes! The Premium plan allows offline downloads for selected titles.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Is there a trial period for the Premium plan?</h3>
              <p className="text-gray-300">Yes! We offer a 7-day free trial for first-time users.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How do I cancel my subscription?</h3>
              <p className="text-gray-300">You can cancel anytime from your account settings, and your subscription will remain active until the end of the billing cycle.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Do you support multiple profiles?</h3>
              <p className="text-gray-300">Yes! You can create up to 5 user profiles per account.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "Access to selected content",
      "Ad-supported streaming",
      "720p video quality",
      "Watch on mobile & tablet",
      "Cancel anytime",
    ],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹199/month",
    features: [
      "Ad-free streaming",
      "1080p video quality",
      "Watch on all devices",
      "Download for offline viewing",
      "Cancel anytime",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹499/month",
    features: [
      "4K Ultra HD streaming",
      "HDR & Dolby Atmos",
      "Watch on all devices",
      "Unlimited downloads",
      "Priority support",
    ],
    popular: false,
  },
];

export default function SubscriptionPlans() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-400">Select the perfect plan for your entertainment needs</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? "bg-gradient-to-b from-blue-600 to-blue-800 border-2 border-blue-400"
                : "bg-gray-900"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </span>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold">{plan.price}</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              className={`w-full ${
                plan.popular
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
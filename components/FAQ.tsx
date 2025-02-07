"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the different subscription plans?",
    answer: "We offer three plans: Free (ad-supported), Standard (ad-free), and Premium (4K + offline viewing). Each plan comes with different features and pricing to suit your needs.",
  },
  {
    question: "Is there a trial period?",
    answer: "Yes! New users get a 30-day free trial of our Premium plan. You can cancel anytime during the trial period without being charged.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account settings. If you cancel, you'll continue to have access until the end of your billing period.",
  },
  {
    question: "Can I download content for offline viewing?",
    answer: "Yes, offline viewing is available on our Standard and Premium plans. You can download content on up to 5 devices depending on your plan.",
  },
  {
    question: "Which devices are supported?",
    answer: "Our service works on all major devices including smartphones, tablets, smart TVs, laptops, and gaming consoles. Some features may vary by device and plan.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400">Find answers to common questions about our service</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-gray-900 rounded-lg px-6">
              <AccordionTrigger className="text-lg hover:text-blue-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
import React from "react";

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "Browse our menu, add items to your cart, and proceed to checkout. Follow the on-screen instructions to complete your order.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, you can cancel your order within 5 minutes of placing it. After that, cancellation is subject to restaurant approval.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept UPI, credit/debit cards, net banking, and COD in select locations.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard encryption to protect your personal and payment information.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Help Center
        </h1>

        {/* FAQs */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Still need help?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact our 24/7 customer support team for more assistance.
          </p>
          <a
            href="mailto:support@foodieshub.com"
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Email Support
          </a>
        </div>
      </div>
    </div>
  );
}

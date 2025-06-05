import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are the benefits of regular car maintenance?",
      answer:
        "Regular car maintenance extends the life of your vehicle, enhances safety, improves performance, and maintains resale value.",
    },
    {
      question: "How often should I change my car's oil?",
      answer:
        "Typically, it's recommended to change your car's oil every 3,000 to 5,000 miles, but always check your owner's manual for the manufacturer's guidelines.",
    },
    {
      question: "What should I do if my car's check engine light comes on?",
      answer:
        "If the check engine light comes on, it's best to take your car to a professional mechanic to diagnose and fix any potential issues.",
    },
    {
      question: "How can I improve my car's fuel efficiency?",
      answer:
        "Improving fuel efficiency can be achieved by regular maintenance, proper tire inflation, reducing excess weight, and smooth driving habits.",
    },
    {
      question: "What are the advantages of using synthetic oil?",
      answer:
        "Synthetic oil provides better engine protection, improved performance in extreme temperatures, and longer intervals between oil changes.",
    },
    {
      question: "How do I know when my car needs new tires?",
      answer:
        "Look for signs such as tread wear indicators, cracks, bulges, or if the tires have low tread depth (less than 2/32 of an inch).",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="bg-black text-white text-center py-10">
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Find answers to common queries
        </p>
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto my-10 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg mb-4 transition-all duration-300"
          >
            <button
              className="flex items-center justify-between w-full text-left p-5 text-lg font-semibold bg-gray-100 hover:bg-gray-200 rounded-t-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span>
                {index + 1}. {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 text-gray-700 border-t border-gray-300 bg-gray-50 rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faq;

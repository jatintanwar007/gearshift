import React from "react";
import { CheckCircle, ShieldCheck, Wrench, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="text-red-600 w-10 h-10" />,
      title: "Expert Mechanics",
      description:
        "Our team consists of highly skilled and certified mechanics to ensure top-notch service.",
    },
    {
      icon: <ShieldCheck className="text-red-600 w-10 h-10" />,
      title: "Trusted & Reliable",
      description:
        "We are committed to honesty, transparency, and customer satisfaction.",
    },
    {
      icon: <Wrench className="text-red-600 w-10 h-10" />,
      title: "High-Quality Service",
      description:
        "We use the best tools and techniques to maintain and repair your car efficiently.",
    },
    {
      icon: <Clock className="text-red-600 w-10 h-10" />,
      title: "Quick Turnaround",
      description:
        "We value your time and ensure fast yet precise car servicing and repairs.",
    },
  ];

  return (
    <div>
      <div className="bg-black text-white text-center py-10">
        <h5 className="text-sm font-semibold uppercase opacity-80">
          -- Why Us --
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose Us?</h2>
      </div>

      <section className="max-w-6xl mx-auto my-10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            {feature.icon}
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default WhyChooseUs;

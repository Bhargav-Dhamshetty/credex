import React from 'react';

const steps = [
  { title: "Upload License", icon: "🗂" },
  { title: "Get Valuation", icon: "💰" },
  { title: "Get Paid", icon: "🏦" },
];

const HowItWorks = () => (
  <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-slate-100 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-6">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="group flex flex-col items-center bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 hover:bg-blue-50 duration-300"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {step.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {step.title}
          </h3>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;

import React from 'react';

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CTO",
    company: "TechWorld",
    comment: "SoftSell made it so easy to sell our unused licenses. Quick and hassle-free!"
  },
  {
    name: "Bob Smith",
    role: "IT Manager",
    company: "CyberNova",
    comment: "Great support and fast payments. Highly recommend!"
  }
];

const Testimonials = () => (
  <section className="py-16 bg-gray-50 text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">What Our Customers Say</h2>
    <div className="grid md:grid-cols-2 gap-8 px-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
        >
          <p className="italic text-lg text-gray-700 mb-4 transition-colors duration-300 group-hover:text-gray-900">
            “{t.comment}”
          </p>
          <h4 className="font-semibold text-gray-900 text-lg">{t.name}</h4>
          <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;

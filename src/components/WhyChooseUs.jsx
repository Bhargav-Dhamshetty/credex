import React from 'react';
import { ShieldCheck, Clock, Users, Zap } from 'lucide-react'; // Optional icons from Lucide

const features = [
  { icon: <Clock className="h-8 w-8 text-blue-600" />, title: "Fast Payments", desc: "Receive funds within 24 hours." },
  { icon: <Users className="h-8 w-8 text-blue-600" />, title: "Verified Buyers", desc: "Trustworthy and secure platform." },
  { icon: <ShieldCheck className="h-8 w-8 text-blue-600" />, title: "24/7 Support", desc: "Help when you need it." },
  { icon: <Zap className="h-8 w-8 text-blue-600" />, title: "Easy Process", desc: "No complex forms or delays." }
];

const WhyChooseUs = () => (
  <section className="py-16 text-center bg-gradient-to-b from-white via-slate-50 to-slate-100">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="group p-6 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 hover:bg-blue-50"
        >
          <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;

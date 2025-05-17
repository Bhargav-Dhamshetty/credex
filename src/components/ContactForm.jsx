import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Name, Email, and Message are required.");
      return;
    }
    alert("Form submitted (frontend only)!");
    setForm({ name: '', email: '', company: '', license: '', message: '' });
    setError('');
  };

  return (
    <section className="py-16 bg-slate-50 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>
      <form 
        className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-200 space-y-5"
        onSubmit={handleSubmit}
      >
        <div className="space-y-4">
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input 
            name="email" 
            type="email"
            value={form.email} 
            onChange={handleChange} 
            placeholder="Your Email" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input 
            name="company" 
            value={form.company} 
            onChange={handleChange} 
            placeholder="Company Name (Optional)" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select 
            name="license" 
            value={form.license} 
            onChange={handleChange} 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select License Type</option>
            <option>Windows</option>
            <option>Adobe</option>
            <option>Antivirus</option>
            <option>Other</option>
          </select>
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Your Message" 
            rows="4" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>
        {error && <p className="text-red-500 font-medium">{error}</p>}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

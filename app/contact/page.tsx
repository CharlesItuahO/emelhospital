'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';
import { createMessage, checkDbStatus } from '@/lib/actions';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    
    try {
      const isConfigured = await checkDbStatus();
      if (!isConfigured) {
        setError('Database is not configured. Please set POSTGRES_URL in your environment variables.');
        setStatus('idle');
        return;
      }

      await createMessage(formData);
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setError('Failed to send message. Please try again later.');
      setStatus('idle');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600">We are here for you 24/7. Reach out to us for inquiries, emergencies, or to schedule a visit.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Our Location</h4>
                    <p className="text-slate-600">21 Road, Z Close, 2nd Ave,<br />Festac Town, Lagos</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone Number</h4>
                    <a href="tel:09012910195" className="text-blue-600 hover:underline">09012910195</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Operating Hours</h4>
                    <p className="text-slate-600">Open 24 hours, 7 days a week</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Always Available</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 overflow-hidden h-[300px] relative">
              {/* Embed Google Map for Festac Town */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.331215413162!2d3.277833314770451!3d6.479038995313334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b6a3a3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s21%20Rd%2C%20Festac%20Town%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="09012910195"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center disabled:opacity-70"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>Send Message <Send className="w-5 h-5 ml-2" /></>
                )}
              </button>
              {status === 'success' && (
                <p className="text-green-600 text-center font-medium mt-4">Message sent successfully! We will get back to you soon.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

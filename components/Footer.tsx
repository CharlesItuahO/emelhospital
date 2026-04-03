import Link from 'next/link';
import { MapPin, Phone, Clock, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-serif font-bold text-xl">E</div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">Emel Hospital</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Trusted, compassionate, and comprehensive care with a strong legacy in pediatrics and family health in Lagos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-400 transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Paediatrics', 'Obstetrics & Gynaecology', 'Internal Medicine', 'Surgery', 'Diagnostics'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="hover:text-blue-400 transition-colors flex items-center">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-blue-500 shrink-0 mt-0.5" />
                <span>21 Road, Z Close, 2nd Ave,<br />Festac Town, Lagos</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>09012910195</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-500 shrink-0" />
                <span>Open 24 Hours, 7 Days a week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Emel Hospital. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

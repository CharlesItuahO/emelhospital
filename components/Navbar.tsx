'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden lg:flex justify-between items-center px-8 pb-2 border-b border-slate-100 text-sm text-slate-600">
        <div className="flex items-center space-x-6">
          <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-600" /> 21 Road, Z Close, 2nd Ave, Festac Town, Lagos</div>
          <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-600" /> Open 24 Hours</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/admin" className="text-blue-600 hover:text-blue-800 font-medium">Admin Login</Link>
          <div className="flex items-center font-semibold text-blue-700"><Phone className="w-4 h-4 mr-2" /> 09012910195</div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center mt-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-2xl">E</div>
          <span className="font-serif font-bold text-2xl text-slate-900 tracking-tight">Emel Hospital</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-medium transition-colors hover:text-blue-600 ${pathname === link.href ? 'text-blue-600' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm hover:shadow-md">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`font-medium text-lg ${pathname === link.href ? 'text-blue-600' : 'text-slate-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/book" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-3 rounded-lg font-medium text-center">
            Book Appointment
          </Link>
          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-2 text-sm text-slate-600">
            <div className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-600" /> 09012910195</div>
            <div className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-600" /> Open 24 Hours</div>
            <Link href="/admin" className="text-blue-600 font-medium mt-2">Admin Login</Link>
          </div>
        </div>
      )}
    </header>
  );
}

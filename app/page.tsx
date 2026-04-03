import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, ShieldCheck, Stethoscope, Users, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/hospital-building/1920/1080" 
            alt="Emel Hospital Facility" 
            fill 
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Your Partner in a <br className="hidden md:block" />
            <span className="text-blue-200">Healthier Tomorrow</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Trusted, compassionate, and comprehensive care with a strong legacy in pediatrics and family health in Festac Town, Lagos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
              Book Appointment
            </Link>
            <a href="tel:09012910195" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all">
              Call Now: 09012910195
            </a>
          </div>
        </div>
      </section>

      {/* Highlights / Quick Info */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock emergency and medical care.' },
            { icon: ShieldCheck, title: 'Modern Facilities', desc: 'Equipped with state-of-the-art medical technology.' },
            { icon: Stethoscope, title: 'Experienced Staff', desc: 'Highly skilled doctors and compassionate nurses.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/seed/doctor-patient/800/1000" 
                  alt="Doctor with patient" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-blue-100 font-medium">Years of Excellence<br/>in Healthcare</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <HeartPulse className="w-4 h-4" />
                <span>Welcome to Emel Hospital</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                A Legacy of Care Since 1988
              </h2>
              <div className="prose prose-lg text-slate-600 mb-8">
                <p>
                  Emel Hospital was established in 1988 by Dr. Olufemi Mobolaji-Lawal, a consultant paediatrician. Dr. Mobolaji-Lawal trained as a doctor at the University College Hospital, Ibadan and as a paediatrician in the United Kingdom.
                </p>
                <p>
                  Prior to setting up Emel Hospital, he worked for some time as a consultant paediatrician at Ikeja General Hospital (now Lagos State University Teaching Hospital), Lagos. He is the board chairman and his wife, Dr. (Mrs) Margaret Mobolaji-Lawal is a non-executive director.
                </p>
              </div>
              <Link href="/about" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors text-lg">
                Read Our Full Story <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-slate-900 mb-6">Why Choose Emel Hospital?</h2>
            <p className="text-lg text-slate-600">We are committed to providing the highest standard of healthcare in a comfortable and safe environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Highly skilled professionals',
              'Clean and odor-free environment',
              'Compassionate patient care',
              'Modern equipment',
              'Excellent patient satisfaction',
              'Foremost pediatric referral centre'
            ].map((feature, i) => (
              <div key={i} className="flex items-start space-x-4 p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-lg font-medium text-slate-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-6">What Our Patients Say</h2>
              <p className="text-slate-400 text-lg">Rated 4.1/5 from 173 reviews. Read why families in Festac Town trust us with their health.</p>
            </div>
            <Link href="/testimonials" className="mt-6 md:mt-0 inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              View All Reviews <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Emel has had a long history in Festac town. Speaking from what I experience there, I must say they know what they are doing and are doing it right.", author: "Patient Review" },
              { text: "The customer service at Emel is topnotch. The Nurses were so friendly. Their response to my complaints was so prompt. I highly recommend.", author: "Patient Review" },
              { text: "Decent environment. And prompt response. The staff actually listen to complaints. Not all places you get that service.", author: "Patient Review" }
            ].map((review, i) => (
              <div key={i} className="bg-slate-800 p-8 rounded-3xl relative">
                <div className="text-blue-500 text-6xl font-serif absolute top-4 left-6 opacity-20">&quot;</div>
                <p className="text-slate-300 text-lg relative z-10 mb-6 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center space-x-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="font-medium text-white">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">Book an appointment online or visit us today. Our doors are open 24/7 to serve you.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg">
              Book Appointment
            </Link>
            <Link href="/contact" className="w-full sm:w-auto bg-blue-700 text-white hover:bg-blue-800 px-8 py-4 rounded-full font-semibold text-lg transition-all border border-blue-500">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

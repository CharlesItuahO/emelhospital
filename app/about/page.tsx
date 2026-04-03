import Image from 'next/image';
import { Target, Eye, HeartPulse } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Emel Hospital</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Providing standard healthcare services in a conducive environment towards achieving complete clients&apos; satisfaction.</p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6">Our History & Overview</h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  The hospital was declared open on the 9th of December 1988 by the then Honorable Minister of Health of Nigeria, Prof. Olikoye Ransome-Kuti. It is the first private hospital in Lagos, Nigeria to be designated &quot;Baby Friendly Hospital&quot; by the Federal Ministry of Health in 1993.
                </p>
                <p>
                  We are a well-recognized and foremost pediatric referral centre in Amuwo Odofin area and its environs, as well as providing general medical care and specialist services in obstetrics and gynaecology, internal medicine and various surgical specialities.
                </p>
                <p>
                  Established by Dr. Olufemi Mobolaji-Lawal, a consultant paediatrician trained at the University College Hospital, Ibadan and in the United Kingdom. He is the board chairman and his wife, Dr. (Mrs) Margaret Mobolaji-Lawal is a non-executive director.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-xl">
                <Image 
                  src="https://picsum.photos/seed/hospital-exterior/800/600" 
                  alt="Emel Hospital Exterior" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our Mission is to excel in the provision of standard healthcare services in a conducive environment towards achieving complete clients&apos; satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our Vision is to be one of the best private healthcare facilities in Nigeria and sub region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-12">Our Core Emphasis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <HeartPulse className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Patient-Centered Care</h3>
              <p className="text-slate-600">Your health and comfort are our top priorities at every step of your journey.</p>
            </div>
            <div className="p-6">
              <Image src="https://picsum.photos/seed/staff/100/100" alt="Staff" width={48} height={48} className="rounded-full mx-auto mb-4" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Professional Healthcare Staff</h3>
              <p className="text-slate-600">Our team consists of highly trained and experienced medical professionals.</p>
            </div>
            <div className="p-6">
              <Image src="https://picsum.photos/seed/clean/100/100" alt="Environment" width={48} height={48} className="rounded-full mx-auto mb-4" referrerPolicy="no-referrer" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clean & Serene Environment</h3>
              <p className="text-slate-600">We maintain the highest standards of hygiene for a safe healing space.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

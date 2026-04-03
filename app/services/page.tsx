import { Activity, Baby, Heart, Stethoscope, TestTube, Truck, Users, Bone, Droplets, Pill, Microscope, BedDouble } from 'lucide-react';

export default function Services() {
  const services = [
    { name: 'Paediatrics', icon: Baby, desc: 'Specialized medical care for infants, children, and adolescents.' },
    { name: 'Obstetrics & Gynaecology', icon: Users, desc: 'Comprehensive care for women\'s reproductive health and pregnancy.' },
    { name: 'Internal Medicine', icon: Heart, desc: 'Diagnosis, management, and nonsurgical treatment of unusual or serious diseases.' },
    { name: 'Surgery', icon: Activity, desc: 'Advanced surgical procedures performed by expert surgeons.' },
    { name: 'Physiotherapy', icon: Bone, desc: 'Rehabilitation services to restore movement and function.' },
    { name: 'Dietetics', icon: Droplets, desc: 'Expert nutritional advice and diet planning for optimal health.' },
    { name: 'Blood Bank Services', icon: Droplets, desc: 'Safe and reliable blood transfusion services.' },
    { name: 'Dispensary Services', icon: Pill, desc: 'Well-stocked pharmacy providing authentic medications.' },
    { name: 'Comprehensive Health-Checks', icon: Stethoscope, desc: 'Thorough medical examinations for preventive care.' },
    { name: 'Laboratory Services', icon: TestTube, desc: 'Accurate and timely diagnostic testing.' },
    { name: 'Diagnostics', icon: Microscope, desc: 'Advanced imaging and diagnostic procedures.' },
    { name: 'Neonatal Intensive Care', icon: Baby, desc: 'Specialized care for ill or premature newborn infants.' },
    { name: 'Ambulance & Emergency', icon: Truck, desc: '24/7 rapid response emergency medical services.' },
    { name: 'High Dependency Unit', icon: BedDouble, desc: 'Intensive monitoring and care for critically ill patients.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Medical Services</h1>
          <p className="text-lg text-slate-600">
            Emel Hospital provides a wide range of comprehensive healthcare services, utilizing modern technology and experienced professionals to ensure the best possible outcomes for our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    "Emel has had a long history in Festac town. Speaking from what I experience there, I must say they know what they are doing and are doing it right.",
    "The customer service at Emel is topnotch. The Nurses were so friendly. Their response to my complaints was so prompt. I highly recommend.",
    "My wife and I delivered our first baby here. From the warm reception on the first day, till the care on the very last day was amazing. I thank God I discovered Healing Touch and will highly recommend.",
    "I have been benefited from this health facilities right from when I joined the hospital , in many occasions I consulted doctors only on a very critical condition, and doctors handling my case always wonderful and expertised .God bless Emel hospital.",
    "I had a good experience with the staff and doctors, they pay good attention to datails, the environment is so clean that you won't even notice in the hospital.",
    "Decent environment. And prompt response. The staff actually listen to complaints. Not all places you get that service.",
    "Emel hospital is a very good hospital and the best in festac town I recommend it to u all u won't regret coming there.",
    "I had the best experience at Healing Touch Hospital. After my first baby at Healing Touch Hospital, I had to come again for my second baby. The doctors and all the staffs gave me the best care and I will always recommend the hospital to everyone because it feels like a home away from home. Healing Touch Hospital or nothing."
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Patient Testimonials</h1>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-3xl font-bold text-slate-900">4.1</span>
            <div className="flex text-yellow-400">
              {[...Array(4)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              <Star className="w-6 h-6 fill-current opacity-50" />
            </div>
          </div>
          <p className="text-lg text-slate-600">Based on 173 reviews from our wonderful patients.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic leading-relaxed">&quot;{review}&quot;</p>
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {String.fromCharCode(65 + (i % 26))}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Verified Patient</p>
                  <p className="text-sm text-slate-500">Festac Town, Lagos</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

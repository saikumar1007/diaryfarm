import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'San Francisco, CA',
    content: 'The milk is incredibly fresh and tastes so much better than store-bought. My kids love it, and I love knowing exactly where our dairy comes from.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Thompson',
    location: 'Oakland, CA',
    content: 'Delivery is always on time and the milk is consistently excellent. The glass bottles are a nice touch and remind me of the milk deliveries from my childhood.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emma Roberts',
    location: 'Berkeley, CA',
    content: 'What a difference fresh milk makes! We\'ve been subscribers for over a year now and the quality has always been top-notch. Highly recommend!',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what families who enjoy our milk delivery have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500 font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
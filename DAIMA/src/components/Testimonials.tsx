import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Mary A.',
      text: 'I received Ksh 80,000 within 10 minutes! The process was so smooth and fast.',
      amount: 80000,
      rating: 5,
    },
    {
      name: 'Samuel K.',
      text: 'Very simple process. No interest. I love it!',
      amount: 50000,
      rating: 5,
    },
    {
      name: 'Grace M.',
      text: 'Daima Limited saved me during an emergency. Highly recommended!',
      amount: 120000,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Daima Limited
          </p>
          <p className="text-sm text-gray-500 mt-2">(Demo testimonials for educational purposes)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-emerald-100" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-emerald-600 font-medium">
                  Received: Ksh {testimonial.amount.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
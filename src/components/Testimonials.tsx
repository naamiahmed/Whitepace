import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "👩‍💼",
      rating: 5,
      text: "Whitepace has completely transformed how our team collaborates. The intuitive interface and powerful features have increased our productivity by 40%."
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "👨‍💻",
      rating: 5,
      text: "As a growing startup, we needed a solution that could scale with us. Whitepace delivered exactly that, and the customer support is exceptional."
    },
    {
      name: "Emily Rodriguez",
      role: "Design Lead",
      company: "Creative Agency",
      avatar: "👩‍🎨",
      rating: 5,
      text: "The design is beautiful and the user experience is seamless. Our entire design team switched to Whitepace and we couldn't be happier."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience with Whitepace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute top-4 right-4 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Join 10,000+ Happy Customers</h3>
          <p className="text-lg mb-6 opacity-90">
            Start your free trial today and see why teams love Whitepace
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
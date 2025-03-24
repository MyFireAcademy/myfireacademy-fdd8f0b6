
import { Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Testimonial data
const testimonials = [
  {
    id: 1,
    content: "I was nervous about the NFPA 1001 exam, but this study guide made all the difference. The practice questions were almost identical to what was on my actual test. I passed with flying colors!",
    author: "Michael Thompson",
    position: "Firefighter, Boston FD",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    content: "After failing my first attempt at the certification, I found PassFire's study guide. The comprehensive coverage of all topics and detailed explanations helped me pass on my second try.",
    author: "Sarah Martinez",
    position: "Volunteer Firefighter",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    content: "The money-back guarantee gave me confidence in my purchase, but I didn't need it! The material was so well organized that I felt completely prepared. Highly recommend.",
    author: "David Johnson",
    position: "Fire Academy Graduate",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="section bg-white">
      <div 
        ref={ref} 
        className={`container mx-auto px-6 ${
          inView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="text-center mb-16">
          <span className="chip mb-4">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Join thousands of satisfied firefighters who passed their NFPA 1001 exam using our study guide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[320px] md:min-h-[250px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ease-apple ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-32'
                } ${
                  isAnimating ? 'opacity-0 -translate-x-32' : ''
                }`}
              >
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                  <Quote className="text-fire-500 mb-4" size={32} />
                  <p className="text-navy-800 text-lg mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">{testimonial.author}</h4>
                      <p className="text-navy-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentTestimonial(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-fire-600 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

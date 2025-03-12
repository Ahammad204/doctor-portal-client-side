import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
          name: "Leslie Alexander",
          username: "@lesliealexander",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          text: "I had an amazing experience at this clinic! The doctors were incredibly professional, and the staff was kind and welcoming. My treatment was smooth and painless, and I felt truly cared for throughout the process. Highly recommend!",
        },
        {
          name: "Lindsay Walton",
          username: "@lindsaywalton",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          text: "The level of care and attention I received here was outstanding. From booking my appointment to the actual treatment, everything was seamless. The doctor explained everything in detail, making me feel comfortable and informed. I finally have the smile I always wanted!",
        },
        {
          name: "Whitney Francis",
          username: "@whitneyfrancis",
          image: "https://randomuser.me/api/portraits/women/46.jpg",
          text: "I was nervous about visiting the dentist, but this clinic changed my perspective. The team made me feel at ease, and the treatment was quick and effective. My teeth feel healthier than ever, and I couldn’t be happier with the results!",
        },
      ];
    
      return (
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-[#19D3AE] font-semibold">Testimonials</h3>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
            What Our Patients Says
            </h2>
          </div>
    
          <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700 italic">“{testimonial.text}”</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.username}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      );
};

export default Testimonial;
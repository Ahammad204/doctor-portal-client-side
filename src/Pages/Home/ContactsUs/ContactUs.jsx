import React from 'react';

const ContactUs = () => {
    return (
        <div
          className="bg-cover bg-center bg-no-repeat py-16 px-6 flex justify-center items-center"
          style={{ backgroundImage: "url('../../../assets/images/appointment.png')" }}
        >
          <div className=" bg-opacity-60 p-8 md:p-12 rounded-lg w-full max-w-lg">
            {/* Title Section */}
            <div className="text-center text-white">
              <p className="text-[#19D3AE] font-bold text-lg">Contact Us</p>
              <h2 className="text-3xl md:text-4xl font-semibold mt-2">
                Stay connected with us
              </h2>
            </div>
    
            {/* Contact Form */}
            <form className="mt-6 flex flex-col gap-4">
              {/* Email Field */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md bg-white outline-none"
              />
    
              {/* Subject Field */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-white outline-none"
              />
    
              {/* Message Field */}
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full p-3 rounded-md bg-white outline-none resize-none"
              ></textarea>
    
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-md shadow-md cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(25, 211, 174) -22.5%, rgb(15, 207, 236) 120.833%)",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      );
};

export default ContactUs;
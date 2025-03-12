import React from "react";

const Terms = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-40">
        <img
          src="../../../../public/assets/images/treatment.png"
          className="w-full lg:max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Exceptional Dental Care, <br /> on Your Terms</h1>
          <p className="py-6">
          At our clinic, we provide top-notch dental care using advanced technology and expert techniques. Whether you need preventive care, restorative treatments, or cosmetic enhancements, our experienced professionals ensure a comfortable and effective experience. Your oral health is our priority, and we are dedicated to giving you a healthy, beautiful smile that lasts a lifetime.
          </p>
          <button
              className="btn btn-primary text-white border-none px-4 py-2 rounded-md"
              style={{
                background:
                  "linear-gradient(90deg, rgb(25, 211, 174) -22.5%, rgb(15, 207, 236) 120.833%)",
              }}
            >
              Get Started
            </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;

import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-28">
          <img
            src="../../../../public/assets/images/chair.png"
            className="w-full lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Your Health, Our Priority – Trusted Care for a Better Tomorrow{" "}
              <br />
              Book Appointments | Consult Experts | Access Medical Records
              Instantly
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
    </>
  );
};

export default Banner;

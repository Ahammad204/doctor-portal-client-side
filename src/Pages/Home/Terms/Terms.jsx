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
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
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

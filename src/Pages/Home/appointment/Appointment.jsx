import React from "react";


const Appointment = () => {
  return (
    <div>
       <div
      className="hero bg-cover bg-center bg-no-repeat py-16 lg:py-24"
      style={{ backgroundImage: "url('../../../assets/images/appointment.png')" }}
    >
        
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 justify-between">
        <img className=" h-96" src="../../../assets/images/doctor-small.png" alt="" />
      <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <p className="text-[#19D3AE] font-bold text-xl mb-3">Appointment</p>
            <h1 className="mb-5 text-5xl font-bold">Make an appointment Today</h1>
            <p className="mb-5">
            Booking your appointment has never been easier! Schedule a visit with our expert dentists at your convenience and receive the best dental care in a stress-free environment. Whether it's a routine checkup or a specialized treatment, we are here to help. Take the first step towards a healthier smile by booking your appointment today!
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
      </div>
    </div>
  );
};

export default Appointment;

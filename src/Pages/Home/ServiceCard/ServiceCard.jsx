import React from "react";

const ServiceCard = () => {
  return (
    <>
    <div className="my-20 text-center">
        <p className="text-[#19D3AE] font-bold text-xl">OUR SERVICES</p>
        <p className="font-medium text-5xl">Services We Provide</p>
    </div>

    <div className="my-10 mx-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="../../../../public/assets/images/fluoride.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Fluoride Treatment</h2>
          <p>
          Strengthen your teeth and prevent cavities with our advanced fluoride treatment. A simple yet effective way to protect your smile!
          </p>
          
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="../../../../public/assets/images/cavity.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cavity Filling</h2>
          <p>
          Say goodbye to tooth decay with our painless cavity filling service. Restore your teeth’s health and function with expert care
          </p>
          
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="../../../../public/assets/images/whitening.png"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Teeth Whitening</h2>
          <p>
          Brighten your smile with our professional teeth whitening treatment. Safe, effective, and designed to give you a radiant, confident smile!
          </p>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceCard;

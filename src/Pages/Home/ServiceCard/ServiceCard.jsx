/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";  

const ServiceCard = () => {
  return (
    <>
      <div className="my-20 text-center">
        <p className="text-[#19D3AE] font-bold text-xl">OUR SERVICES</p>
        <p className="font-medium text-5xl">Services We Provide</p>
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <motion.div 
          className="card bg-base-100 w-full lg:w-96 shadow-sm"
          whileHover={{ scale: 1.05 }} // Animation
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure className="px-10 pt-10">
            <img
              src="../../../assets/images/fluoride.png"
              alt="Fluoride Treatment"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fluoride Treatment</h2>
            <p>
              Strengthen your teeth and prevent cavities with our advanced fluoride treatment.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="card bg-base-100 w-full lg:w-96 shadow-sm"
          whileHover={{ scale: 1.05 }} // Animation
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure className="px-10 pt-10">
            <img
              src="../../../assets/images/cavity.png"
              alt="Cavity Filling"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cavity Filling</h2>
            <p>
              Say goodbye to tooth decay with our painless cavity filling service.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="card bg-base-100 w-full lg:w-96 shadow-sm"
          whileHover={{ scale: 1.05 }} // Animation
          transition={{ type: "spring", stiffness: 200 }}
        >
          <figure className="px-10 pt-10">
            <img
              src="../../../assets/images/whitening.png"
              alt="Teeth Whitening"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Teeth Whitening</h2>
            <p>
              Brighten your smile with our professional teeth whitening treatment.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceCard;

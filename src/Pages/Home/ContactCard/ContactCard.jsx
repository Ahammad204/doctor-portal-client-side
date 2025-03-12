/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";  

const ContactCard = () => {
  return (
    <div className="my-10 mx-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <motion.div
        className="card card-side  shadow-sm text-[#FFFFFF] p-10"
        style={{
          background:
            "linear-gradient(90deg, rgb(25, 211, 174) -22.5%, rgb(15, 207, 236) 120.833%)",
        }}
        whileHover={{ scale: 1.05 }} // Animation
          transition={{ type: "spring", stiffness: 200 }}
      >
        <figure>
          <img src="../../../../public/assets/icons/clock.svg" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Everyday 24/7</p>
        </div>
      </motion.div>
      <motion.div
        className="card card-side bg-[#3A4256]  shadow-sm text-[#FFFFFF] p-10"
        whileHover={{ scale: 1.05 }} // Animation
        transition={{ type: "spring", stiffness: 200 }}
      >
        <figure>
          <img className="z-10" src="../../../../public/assets/icons/marker.svg" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Visit our location</h2>
          <p>Brooklyn, NY 10036, United States</p>
        </div>
      </motion.div>
      <motion.div
        className="card card-side  shadow-sm text-[#FFFFFF] p-10"
        style={{
          background:
            "linear-gradient(90deg, rgb(25, 211, 174) -22.5%, rgb(15, 207, 236) 120.833%)",
        }}
        whileHover={{ scale: 1.05 }} // Animation
          transition={{ type: "spring", stiffness: 200 }}
      >
        <figure>
          <img className="z-10" src="../../../../public/assets/icons/phone.svg" alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contact us now</h2>
          <p>+000 123 456789</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactCard;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleActive = (path) => {
    setActive(path);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Appointment", path: "/appointment" },
    { label: "Reviews", path: "/reviews" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Login", path: "/login" },
  ];

  const navOptions = (
    <>
      {navItems.map((item) => (
        <li key={item.path} onClick={() => handleActive(item.path)}>
          <Link
            to={item.path}
            className={`relative transition-all duration-300 ${
              active === item.path ? "text-[#0FCFEC]" : ""
            }`}
          >
            {item.label}
            {active === item.path && (
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#0FCFEC]"></span>
            )}
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Doctors Portal</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;

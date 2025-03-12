import React from "react";
import footerbg from '../../../../src/assets/images/footer.png'

const Footer = () => {
  return (
    <footer
    style={{ backgroundImage: `url(${footerbg})` }}
    className="bg-cover bg-center "
  >
      <div className="footer sm:footer-horizontal   p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </nav>
        <nav>
          <h6 className="footer-title">ORAL HEALTH</h6>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </nav>
        <nav>
          <h6 className="footer-title">OUR ADDRESS</h6>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center  p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved 
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;

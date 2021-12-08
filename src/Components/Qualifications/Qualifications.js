import React, { useEffect } from "react";
import "../Qualifications/Qualifications.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Qualifications = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="qualifications">
      <div data-aos="fade-right">
        <h2 className="text-dark text-center res-qualifications-top pb-2">
          Qualifications
        </h2>
      </div>
      <div data-aos="fade-left">
        <h1 className="text-center text-uppercase text-dark mt-5 res-qualifications-header">
          Not updated yet...
        </h1>
      </div>
      <div>
        <hr className="new mt-5" />
        <p className="mt-2 text-secondary text-center text-uppercase">
          Avishek Ataur
        </p>
      </div>
    </div>
  );
};

export default Qualifications;

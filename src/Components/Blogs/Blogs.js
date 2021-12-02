import React, { useEffect } from "react";
import "../Blogs/Blogs.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="blogs">
      <div data-aos="fade-right">
        <h2 className="text-dark text-center pb-2">Blog</h2>
      </div>
      <div data-aos="fade-left">
        <h1 className="text-center text-uppercase text-dark display-2 mt-5">
          coming soon...
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

export default Blogs;

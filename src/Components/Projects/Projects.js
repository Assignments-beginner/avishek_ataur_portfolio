import React from "react";
import Slider from "react-slick";
import { baseUrl } from "../../baseUrl";

const Projects = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pb-5">
      <h2 className="text-center text-dark pb-2">Personal Projects</h2>
      <Slider {...settings}>
        <div>
          <img src={baseUrl + "/abstract01.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract02.jpg"} />
        </div>
        <div>
          <img src={baseUrl + "/abstract03.jpg"} />
        </div>
      </Slider>
    </div>
  );
};

export default Projects;

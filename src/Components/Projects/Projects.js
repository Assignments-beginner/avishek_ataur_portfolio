import React from "react";
// import Slider from "react-slick";
// import { baseUrl } from "../../baseUrl";

const Projects = () => {
  /* const settings = {
    customPaging: function (i) {
      return (
        <div>
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} alt="" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }; */
  return (
    <div id="projects" className="pb-5 px-5 mx-5">
      <h2 className="text-center text-dark pb-2">Personal Projects</h2>
      <h4 className="text-center text-dark">
        Not Completed Yet <span className="display-4">😔</span>
      </h4>
      {/* <Slider className="px-5 border border-dark" {...settings}>
        <div>
          <img src={abstract01} alt="" />
        </div>
        <div>
          <img src={baseUrl + "/abstract02.jpg"} alt="" />
        </div>
        <div>
          <img src={baseUrl + "/abstract03.jpg"} alt="" />
        </div>
      </Slider> */}
    </div>
  );
};

export default Projects;

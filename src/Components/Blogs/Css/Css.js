import React from "react";
import "../Css/Css.css";
import p1 from "../../../Images/css_img/barca/p1.webp";
import p2 from "../../../Images/css_img/barca/p2.webp";
import p3 from "../../../Images/css_img/barca/p3.webp";
import player1 from "../../../Images/css_img/Players/Player1.webp";
import player2 from "../../../Images/css_img/Players/Player2.jpg";
import player3 from "../../../Images/css_img/Players/Player3.jpg";

const Css = () => {
  return (
    <React.Fragment>
      {/* <!--------------------------------------------------------------------------------- 
  /////////////////////////////// in-Frame \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
 ----------------------------------------------------------------------------------> */}
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>In-Frame</h1>
      {/* <!-- container  --> */}

      <div class="container">
        {/* <!-- frame  --> */}
        <div class="frame">
          <div class="photo">
            <img src={p1} alt="" />
          </div>

          <div class="info">
            <h1>La Chandela</h1>
            <h3>Antra del capanila</h3>
          </div>
        </div>
        {/* <!-- frame  --> */}
        <div class="frame">
          <div class="photo">
            <img src={p2} alt="" />
          </div>

          <div class="info">
            <h1>La Chandela</h1>
            <h3>Antra del capanila</h3>
          </div>
        </div>
        {/* <!-- frame  --> */}
        <div class="frame">
          <div class="photo">
            <img src={p3} alt="" />
          </div>

          <div class="info">
            <h1>La Chandela</h1>
            <h3>Antra del capanila</h3>
          </div>
        </div>

        {/* <!-- container  --> */}
      </div>
      {/* <!--------------------------------------------------------------------------------- 
  ////////////////////////////// Without-Frame \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  
 ----------------------------------------------------------------------------------> */}
      <br />
      <h1 style={{ textAlign: "center", fontSize: "60px" }}>Without-Frame</h1>
      <br />
      <br />

      <div class="container-2">
        {/* <!-- container  --> */}
        {/* <!-- frame  --> */}
        <div class="frame-2">
          {/* <!-- frame  --> */}
          <div class="photo-2">
            <img src={player1} alt="" />
          </div>

          <div class="info-2">
            <h2>La Chandela</h2>
            <h3>Antra del capanila</h3>
          </div>
        </div>
        {/* <!-- frame  --> */}
        <div class="frame-2">
          {/* <!-- frame  --> */}
          <div class="photo-2">
            <img src={player2} alt="" />
          </div>

          <div class="info-2">
            <h2>La Chandela</h2>
            <h3>Antra del capanila</h3>
          </div>
        </div>
        {/* <!-- frame  --> */}
        <div class="frame-2">
          {/* <!-- frame  --> */}
          <div class="photo-2">
            <img src={player3} alt="" />
          </div>

          <div class="info-2">
            <h2>La Chandela</h2>
            <h3>Antra del capanila</h3>
          </div>
        </div>

        {/* <!-- container  --> */}
      </div>
      {/* <!-- line-breaks  --> */}
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default Css;

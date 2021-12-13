import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1
        style={{ fontSize: "140px", color: "#343a40" }}
        className="notfound mt-5 text-center"
      >
        404
      </h1>
      <h1 className="text-center text-secondary mb-5 pb-5">No Results Found</h1>
      <div className="text-center mt-5 pt-5 pb-5">
        <Link className="text-decoration-none" to="/home">
          {" "}
          <span style={{ color: "#343a40", fontSize: "20px" }}>
            Back To Portfolio
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

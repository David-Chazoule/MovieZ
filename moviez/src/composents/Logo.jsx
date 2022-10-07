import React from "react";
import { BiCameraMovie } from "react-icons/bi";

function Logo() {
  return (
    <div className="logo-container">
      <BiCameraMovie className="logo" />
      <p>
        Movie'<span>Z</span>
      </p>
    </div>
  );
}

export default Logo;

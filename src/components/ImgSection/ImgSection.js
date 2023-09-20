import React from "react";
import { Image } from "react-bootstrap";
import "../style.css";

function ImageSection() {
  return (
    <div id="image_parent">
      <Image
        src="./imageSectionn.png"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        className="image__pattern"
        alt="coffee-patternImg"
      />
    </div>
  );
}

export default ImageSection;

import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";

export const Image = () => {
  return (
    <>
      <div className="video_div">
        <video
          className="video"
          height={830}
          // style={{ zIndex: "-9" }}
          src="video12.mp4"
          autoPlay
          muted
          loop
        />
      </div>
    </>
  );
};

import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Make It Cool</h1>

      <h3>About</h3>

      <p>We do this...for this..how better..</p>
    </div>
  );
}

export default HeroSection;

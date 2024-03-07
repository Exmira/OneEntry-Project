import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-3" id="hero">
      <div className="container">
        <div className="hero-style3">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title wow img-custom-anim-left animated">
                Design Studio
              </h1>
              <div className="hero-3-thumb wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={520}
                  className="w-100"
                  src="/assets/img/hero/hero-3-1.jpg"
                  alt="img"
                />
              </div>
              <h1 className="hero-title text-end wow img-custom-anim-right animated">
                with Experience
              </h1>
            </div>
            <div className="col-lg-6 offset-lg-6">
              <p className="hero-text wow img-custom-anim-right animated">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences that drive top level growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

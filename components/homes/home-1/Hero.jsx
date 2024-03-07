import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-1" id="hero">
      <div className="container">
        <div className="hero-style1">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-title wow img-custom-anim-left animated">
                Next Generation
              </h1>

              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                Digital Agency
              </h1>
            </div>
            <div className="col-lg-6 offset-lg-6">
              <p className="hero-text wow img-custom-anim-right animated">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences that drive top level growth
              </p>
              <div className="btn-group fade_right">
                <Link
                  scroll={false}
                  href="/project"
                  className="btn wow img-custom-anim-right animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW OUR WORKS</span>
                    <span className="effect-1">VIEW OUR WORKS</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-year-tag wow img-custom-anim-left animated">
            <Image
              width={40}
              height={40}
              src="/assets/img/icon/worldwide.svg"
              alt="img"
            />
            <h6>Agency of this year worldwide</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

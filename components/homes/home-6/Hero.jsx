"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useParallax } from "react-scroll-parallax";

export default function Hero() {
  const parallax = useParallax({
    speed: -20,
  });

  return (
    <div className="hero-wrapper hero-6" id="hero">
      <div className="container">
        <div className="hero-style6">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                Creating The
              </h1>

              <h1 className="hero-title wow img-custom-anim-left animated">
                Best Digital
              </h1>

              <h1 className="hero-title text-lg-end wow img-custom-anim-right animated">
                Solution
              </h1>
            </div>
            <div className="col-lg-6 offset-lg-5">
              <p className="hero-text wow img-custom-anim-right animated">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences that drive top level growth
              </p>
            </div>
          </div>
          <Link
            scroll={false}
            className="circle-btn style2 btn bg-theme text-title gsap-magnetic wow img-custom-anim-left animated"
            href="/contact"
          >
            <span className="link-effect">
              <span className="effect-1">
                LET'S TALK <br />
                WITH US
              </span>
              <span className="effect-1">
                LET'S TALK <br />
                WITH US
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div
        ref={parallax.ref}
        className="hero-6-thumb wow img-custom-anim-top animated jarallax background-image"
        style={{ backgroundImage: "url(/assets/img/hero/hero-6-1.webp)" }}
      ></div>
    </div>
  );
}

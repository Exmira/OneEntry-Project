"use client";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    document.body.classList.add("bg-title");
    return () => {
      document.body.classList.remove("bg-title");
    };
  }, []);

  return (
    <div
      className="hero-wrapper hero-8 background-image"
      id="hero"
      style={{ backgroundImage: "url(/assets/img/hero/hero-8-1.png)" }}
    >
      <div className="container">
        <div className="hero-style8">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="hero-subtitle wow img-custom-anim-left animated text-smoke">
                Hi, I’m Daniel Pickman
              </h2>
              <h1 className="hero-title wow img-custom-anim-left animated text-smoke">
                Senior Graphics Designer
              </h1>
            </div>
            <div className="col-xl-4 col-lg-5 offset-xl-8 offset-lg-7">
              <p className="hero-text wow img-custom-anim-right animated text-smoke">
                We are digital agency that helps immersive and engaging user
                experiences that
              </p>
              <Link
                scroll={false}
                href="/project"
                className="btn style2 mt-40 wow img-custom-anim-right animated"
              >
                <span className="link-effect">
                  <span className="effect-1">WORK WITH ME</span>
                  <span className="effect-1">WORK WITH ME</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-2" id="hero">
      <div className="hero-2-thumb wow img-custom-anim-right animated">
        <Image
          width={1082}
          height={728}
          src="/assets/img/hero/hero-2-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="hero-style2">
          <div className="row">
            <div className="col-lg-9">
              <h1 className="hero-title wow img-custom-anim-right animated text-white">
                We Make
              </h1>
              <h1 className="hero-title wow img-custom-anim-left animated text-white">
                Creative Things
              </h1>
            </div>
            <div className="col-lg-10 offset-lg-2">
              <h1 className="hero-title wow img-custom-anim-right animated text-white">
                Everyday
              </h1>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <p className="hero-text wow img-custom-anim-left animated text-white">
                We are digital agency that helps immersive and engaging user
                experiences that
              </p>
              <div className="btn-group fade_left">
                <Link
                  scroll={false}
                  href="/project"
                  className="btn style2 wow img-custom-anim-left animated"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW OUR WORKS</span>
                    <span className="effect-1">VIEW OUR WORKS</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-xxl-6 col-xl-7 col-lg-9">
              <div className="wow img-custom-anim-right animated">
                <div className="hero-contact-wrap">
                  27 Division St, New York, NY 10002, USA
                </div>
                <div className="hero-contact-wrap">
                  <a href="tel:1800123654987">+1 800 123 654 987</a>
                  <a href="mailto:frisk.agency@mail.com">
                    frisk.agency@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

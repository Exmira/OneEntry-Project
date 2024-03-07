import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="hero-wrapper hero-4 shape-mockup-wrap" id="hero">
      <div
        className="hero-4-thumb img-custom-anim-left wow animated shape-mockup"
        style={{ left: "0px" }}
      >
        <Image
          width={838}
          height={838}
          className="w-100"
          src="/assets/img/hero/hero-4-1.jpg"
          alt="img"
        />
      </div>
      <div className="bg-theme">
        <div className="container">
          <div className="hero-style4">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <h1 className="hero-title wow img-custom-anim-right animated">
                  A Digital Marketing Agency
                </h1>
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
                <div className="hero-thumb-group img-custom-anim-right wow animated">
                  <Image
                    width={60}
                    height={60}
                    className="img1"
                    src="/assets/img/hero/hero-counter1-1.png"
                    alt="img"
                  />
                  <Image
                    width={60}
                    height={60}
                    className="img2"
                    src="/assets/img/hero/hero-counter1-2.png"
                    alt="img"
                  />
                  <div className="hero-counter counter-item">
                    <span className="counter-number">10</span>K
                  </div>
                  <p>
                    More than <span className="counter-number">10</span>k+
                    trusted customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

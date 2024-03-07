import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <div className="about-area-1 space bg-gray shape-mockup-wrap">
      <div
        className="about-img-1-1 shape-mockup img-custom-anim-left wow animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s"
        style={{ top: "-100px", left: "0px", bottom: "100px" }}
      >
        <Image
          width={838}
          height={730}
          src="/assets/img/normal/about_1-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="overflow-hidden">
              <div className="about-content-wrap fade_right">
                <div className="title-area mb-0">
                  <h2 className="sec-title text-smoke">
                    We Offer a Wide Range of Brand Services
                  </h2>
                  <p className="sec-text mt-35 mb-25 text-smoke">
                    We are a creative agency working with brands building
                    insightful strategy, creating unique designs and crafting
                    value
                  </p>
                  <h5 className="text-smoke mb-2">
                    Human Centered Design to Challenges
                  </h5>
                  <h5 className="text-smoke mb-2">
                    Bring Their Individual Experience
                  </h5>
                  <h5 className="text-smoke mb-0">
                    Developing Core Web Applications
                  </h5>
                  <div className="btn-wrap mt-50">
                    <Link
                      scroll={false}
                      href="/about"
                      className="link-btn text-theme"
                    >
                      <span className="link-effect">
                        <span className="effect-1">ABOUT US</span>
                        <span className="effect-1">ABOUT US</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

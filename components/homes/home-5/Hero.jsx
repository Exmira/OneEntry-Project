"use client";
import addGsap from "@/utils/addGsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Slider from "react-slick";

export default function Hero() {
  useEffect(() => {
    document.body.classList.add("bg-title");
    return () => {
      document.body.classList.remove("bg-title");
    };
  }, []);
  useEffect(() => {
    addGsap();
  }, []);

  const sliderOptions = {
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    // autoplay: true,
  };
  return (
    <div className="hero-wrapper hero-5" id="hero">
      <Slider className="global-carousel" id="heroSlider5" {...sliderOptions}>
        <div>
          <div
            className="hero-slider background-image por"
            style={{ backgroundImage: "url(/assets/img/hero/hero-5-1.webp)" }}
          >
            <div
              className="hero-overlay"
              data-overlay="title"
              data-opacity="5"
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="hero-style5">
                    <h1
                      className="hero-title"
                      data-ani="slideindown"
                      data-ani-delay="0.1s"
                    >
                      Modern Agency
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      We are digital agency that helps immersive and engaging
                      user experiences that
                    </p>
                    <div
                      className="hero-year-tag"
                      data-ani="slideindown"
                      data-ani-delay="0.3s"
                    >
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
                <div className="col-lg-5 align-self-end text-lg-end">
                  <div
                    className="text-lg-end"
                    data-ani="slideindown"
                    data-ani-delay="0.3s"
                  >
                    <Link
                      scroll={false}
                      className="circle-btn style2 btn bg-theme text-title gsap-magnetic"
                      href="/contact"
                    >
                      <span className="link-effect">
                        <span className="effect-1">
                          LET'S TALK <br /> WITH US
                        </span>
                        <span className="effect-1">
                          LET'S TALK <br /> WITH US
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="hero-slider background-image por"
            style={{ backgroundImage: "url(/assets/img/hero/hero-5-2.webp)" }}
          >
            <div
              className="hero-overlay"
              data-overlay="title"
              data-opacity="5"
            ></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="hero-style5">
                    <h1
                      className="hero-title"
                      data-ani="slideindown"
                      data-ani-delay="0.1s"
                    >
                      Modern Agency
                    </h1>
                    <p
                      className="hero-text"
                      data-ani="slideindown"
                      data-ani-delay="0.2s"
                    >
                      We are digital agency that helps immersive and engaging
                      user experiences that
                    </p>
                    <div
                      className="hero-year-tag"
                      data-ani="slideindown"
                      data-ani-delay="0.3s"
                    >
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
                <div className="col-lg-5 align-self-end text-lg-end">
                  <div
                    className="text-lg-end"
                    data-ani="slideindown"
                    data-ani-delay="0.3s"
                  >
                    <Link
                      scroll={false}
                      className="circle-btn style2 btn bg-theme text-title gsap-magnetic"
                      href="/contact"
                    >
                      <span className="link-effect">
                        <span className="effect-1">
                          LET'S TALK <br /> WITH US
                        </span>
                        <span className="effect-1">
                          LET'S TALK <br /> WITH US
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

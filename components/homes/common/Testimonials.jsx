"use client";

import { testimonialData } from "@/data/testimonials";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        },
      },
      // ... add more responsive settings
    ],
  };
  return (
    <div className="testimonial-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="testimonial-img-1-1 shape-mockup wow img-custom-anim-right animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ right: "0px", top: "-100px", bottom: "100px" }}
      >
        <Image
          width={838}
          height={716}
          src="/assets/img/testimonial/testi_thumb1_1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area ">
              <h2 className="sec-title">Testimonials</h2>
            </div>
            <div className="quote-icon ">
              <Image
                width={52}
                height={32}
                src="/assets/img/icon/quote.svg"
                alt="icon"
              />
            </div>
            <Slider
              className="row global-carousel testi-slider1 "
              {...settings}
            >
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="col-lg-4 sliderItem">
                  <div className="testi-box">
                    <p className="testi-box_text">{testimonial.text}</p>
                    <div className="testi-box_profile">
                      <h4 className="testi-box_name">{testimonial.name}</h4>
                      <span className="testi-box_desig">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

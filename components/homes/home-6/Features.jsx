"use client";
import { featureData3 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function Features() {
  const slickSettings = {
    slidesToShow: 3,
    dots: true,

    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">What We Can Do for Our Clients</h2>
            </div>
          </div>
        </div>
        <Slider {...slickSettings} className="row global-carousel">
          {featureData3.map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6 sliderItem">
              <div className="feature-card">
                <div className="feature-card-icon">
                  <Image width={40} height={40} src={elm.icon} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                  <a href="#">{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <Link
                  scroll={false}
                  href={`/service-details/${elm.id}`}
                  className="link-btn"
                >
                  <span className="link-effect">
                    <span className="effect-1">VIEW DETAILS</span>
                    <span className="effect-1">VIEW DETAILS</span>
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
          ))}
        </Slider>
      </div>
    </div>
  );
}

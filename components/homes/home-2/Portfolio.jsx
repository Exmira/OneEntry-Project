"use client";
import { portfolioData2 } from "@/data/portfolio";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Portfolio() {
  const sliderSettings = {
    slidesToShow: 1,

    centerPadding: "400px",

    dots: true,
    arrows: false,

    centerMode: true, // ... add more settings
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          centerMode: true,
          centerPadding: "400px", // Adjust for extra-large screens
        },
      },
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          centerPadding: "250px", // Adjust for large screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: "150px", // Adjust for medium screens
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          centerPadding: "100px", // Adjust for small screens
        },
      },
      {
        breakpoint: 450,
        settings: {
          centerMode: true,
          centerPadding: "80px", // Adjust for small screens
        },
      },
      {
        breakpoint: 410,
        settings: {
          centerMode: true,
          centerPadding: "0px", // Adjust for small screens
        },
      },
    ],
  };
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9">
            <div className="title-area text-center">
              <h2 className="sec-title">Discover Our Selected Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <Slider
          className="row global-carousel gx-60 portfolio-slider"
          {...sliderSettings}
        >
          {portfolioData2.map((item) => (
            <div key={item.id} className="col-lg-4 sliderItem">
              <a
                href={`/project-details/${item.id}`}
                className="portfolio-wrap style2"
              >
                <div className="portfolio-thumb">
                  <Image
                    width={746}
                    height={540}
                    src={item.imageSrc}
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    <li>{item.category}</li>
                  </ul>
                  <h3 className="portfolio-title">{item.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

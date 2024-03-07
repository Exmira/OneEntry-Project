"use client";
import { portfolioData } from "@/data/portfolio";
import addGsap from "@/utils/addGsap";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useRef } from "react";

export default function Portfolio() {
  const isotopContainer = useRef();
  const initIsotop = async () => {
    const Isotope = (await import("isotope-layout")).default;
    const imagesloaded = (await import("imagesloaded")).default;

    // Initialize Isotope in the mounted hook
    const isotope = new Isotope(isotopContainer.current, {
      itemSelector: ".filter-item",
      layoutMode: "masonry", // or 'fitRows', depending on your layout needs
    });
    imagesloaded(isotopContainer.current).on(
      "progress",
      function (instance, image) {
        // Trigger Isotope layout
        isotope.layout();
      }
    );
  };

  useEffect(() => {
    /////////////////////////////////////////////////////
    // Magnate Animation

    initIsotop();
    addGsap();
  }, []);

  return (
    <div
      className="portfolio-area-1 space-bottom overflow-hidden background-image"
      style={{ backgroundImage: "url(/assets/img/bg/portfolio-1-bg.png)" }}
    >
      <div className="container">
        <div
          className="row  gy-60  justify-content-between masonary-active"
          ref={isotopContainer}
        >
          {portfolioData.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-6 filter-item">
              <div
                className={`portfolio-wrap ${i == 0 ? "mt-lg-140" : ""}
                `}
              >
                <div
                  className="portfolio-thumb wow img-custom-anim-top animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <Link scroll={false} href={`/project-details/${elm.id}`}>
                    <img src={elm.imageSrc} alt="portfolio" />
                  </Link>
                </div>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    {elm.categoryLinks.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
                  <h3 className="portfolio-title">
                    <Link scroll={false} href={`/project-details/${elm.id}`}>
                      {elm.projectTitle}
                    </Link>
                  </h3>
                  <Link
                    scroll={false}
                    href={`/project-details/${elm.id}`}
                    className="link-btn"
                  >
                    <span className="link-effect">
                      <span className="effect-1">VIEW PROJECT</span>
                      <span className="effect-1">VIEW PROJECT</span>
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
          ))}
          <div className="col-lg-6 filter-item">
            <div className="btn-wrap mt-140">
              <Link
                scroll={false}
                className="circle-btn btn gsap-magnetic mx-lg-5"
                href="/project"
              >
                <span className="link-effect">
                  <span className="effect-1">VIEW ALL</span>
                  <span className="effect-1">VIEW ALL</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

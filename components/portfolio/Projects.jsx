"use client";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
//

export default function Projects() {
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
  }, []);
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div
          className="row gy-60 justify-content-between masonary-active"
          ref={isotopContainer}
        >
          {portfolioData.map((elm, i) => (
            <div key={i} className="col-lg-6 filter-item">
              <div className={`portfolio-wrap ${i == 0 ? "mt-lg-140" : ""} `}>
                <div className="portfolio-thumb">
                  <Link scroll={false} href={`/project-details/${elm.id}`}>
                    <Image
                      width={526}
                      height={740}
                      src={elm.imageSrc}
                      alt="portfolio"
                    />
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
                    <a href="#">{elm.projectTitle}</a>
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
        </div>
        <div className="btn-wrap justify-content-center mt-60">
          <Link scroll={false} className="btn" href="/project-2">
            <span className="link-effect">
              <span className="effect-1">LOAD MORE</span>
              <span className="effect-1">LOAD MORE</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

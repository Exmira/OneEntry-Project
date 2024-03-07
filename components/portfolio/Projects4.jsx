import { projects2 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects4() {
  return (
    <div className="project-area-8 space">
      <div className="container">
        <div className="row gy-4">
          {projects2.map((elm, i) => (
            <div key={i} className="col-12">
              <div className="portfolio-wrap style3">
                <div className="portfolio-thumb">
                  <Image
                    width={1920}
                    height={800}
                    src={elm.imageSrc}
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <div className="media-left">
                    <ul className="portfolio-meta">
                      {elm.categories.map((elm2, i2) => (
                        <li key={i2}>
                          <a href="#">{elm2}</a>
                        </li>
                      ))}
                    </ul>
                    <h3 className="portfolio-title">
                      <Link scroll={false} href={`/project-details/${elm.id}`}>
                        {" "}
                        {elm.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="portfolio-details-btn">
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

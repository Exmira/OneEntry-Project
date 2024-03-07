import { portfolioData5 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects3() {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-60 justify-content-center">
          {portfolioData5.map((elm, i) => (
            <div key={i} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap">
                <div className="portfolio-thumb">
                  <Link scroll={false} href={`/project-details/${elm.id}`}>
                    <Image
                      width={618}
                      height={470}
                      src={elm.imageSrc}
                      alt="portfolio"
                    />
                  </Link>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title mb-3">
                    <Link scroll={false} href={`/project-details/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h3>
                  <ul className="portfolio-meta">
                    {elm.categoryLinks.map((elm2, i2) => (
                      <li key={i2}>
                        <a href="#">{elm2}</a>
                      </li>
                    ))}
                  </ul>
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

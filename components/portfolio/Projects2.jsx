import { portfolioData4 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects2() {
  return (
    <div className="portfolio-area-1 space overflow-hidden">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {portfolioData4.map((elm, i) => (
            <div key={i} className={elm.parentClass}>
              <Link
                scroll={false}
                href={`/project-details/${elm.id}`}
                className="portfolio-wrap style3"
              >
                <div className="portfolio-thumb">
                  <Image
                    width={746}
                    height={540}
                    src={elm.imageUrl}
                    alt="portfolio"
                  />
                </div>
                <div className="portfolio-details">
                  <ul className="portfolio-meta">
                    <li>{elm.category}</li>
                  </ul>
                  <h3 className="portfolio-title">{elm.title}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="btn-wrap justify-content-center mt-60">
          <Link scroll={false} className="btn" href={`/project`}>
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

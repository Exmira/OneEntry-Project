"use client";

import { portfolioData3 } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Tooltip } from "react-tooltip";

export default function Portfolio() {
  return (
    <div className="award-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="award-wrap-area">
              {portfolioData3.map((elm, i) => (
                <li
                  key={i}
                  className="single-award-list style2 tg-img-reveal-item"
                  data-tooltip-id={elm.id}
                >
                  <span className="award-year">{elm.year}</span>
                  <div className="award-details">
                    <h4>
                      <Link scroll={false} href={`/project-details/${elm.id}`}>
                        {elm.title}
                      </Link>
                    </h4>
                    <div className="award-meta">
                      {elm.categories.map((elm2, i2) => (
                        <a key={i2} href="#">
                          {elm2}
                        </a>
                      ))}
                    </div>
                  </div>
                  <span className="award-tag">{elm.tag}</span>
                  <Tooltip
                    place="right-start"
                    render={({ content, activeAnchor }) => (
                      <div
                        className=" wow img-custom-anim-top animated"
                        data-wow-duration="1.5s"
                        data-wow-delay="0.2s"
                        style={{ animationDuration: "0.5s" }}
                      >
                        <Image
                          width={329}
                          height={401}
                          className="preload"
                          src={elm.img}
                          data-wow-duration="1.5s"
                          data-wow-delay="0.1s"
                          alt="image"
                        />
                      </div>
                    )}
                    float={true}
                    id={elm.id}
                  />
                </li>
              ))}
            </ul>
            <div className="btn-wrap mt-50 justify-content-center">
              <Link scroll={false} href={`/project`} className="btn">
                <span className="link-effect">
                  <span className="effect-1">VIEW ALL PROJECTS</span>
                  <span className="effect-1">VIEW ALL PROJECTS</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

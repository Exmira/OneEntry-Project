import { featureData2 } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {featureData2.map((elm, i) => (
            <div key={i} className="col-xl-4 col-md-6">
              <div className="feature-card style2">
                <div className="feature-card-icon">
                  <Image width={40} height={40} src={elm.icon} alt="icon" />
                </div>
                <h4 className="feature-card-title">
                  <a href="#">{elm.title}</a>
                </h4>
                <p className="feature-card-text">{elm.text}</p>
                <a href={`/service-details/${elm.id}`} className="link-btn">
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

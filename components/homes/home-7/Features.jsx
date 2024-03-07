import { featureData2 } from "@/data/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Features() {
  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-5 col-lg-8 position-relative">
            <div className="sec_title_static">
              <div className="sec_title_wrap">
                <div className="title-area">
                  <h2 className="sec-title">What We Can Do for Our Clients</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="feature-static-wrap">
              {featureData2.map((elm, i) => (
                <div key={i} className="feature-static">
                  <div className="feature-card style-grid">
                    <div className="feature-card-icon">
                      <Image width={40} height={40} src={elm.icon} alt="icon" />
                    </div>
                    <div className="feature-card-details">
                      <h4 className="feature-card-title">
                        <a href="#">{elm.title}</a>
                      </h4>
                      <p className="feature-card-text">{elm.text}</p>
                      <Link
                        scroll={false}
                        href={`/service-details`}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

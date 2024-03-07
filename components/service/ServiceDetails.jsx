"use client";

import { allFeatures } from "@/data/features";
import Image from "next/image";
import Link from "next/link";

export default function ServiceDetails({ serviceId }) {
  const serviceItem =
    allFeatures.filter((elm) => elm.id == serviceId)[0] || allFeatures[1];
  return (
    <div className="service-details-page-area space">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-12">
            <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
              <Image
                width={1296}
                height={700}
                className="w-100"
                src="/assets/img/service/service-details1-1.png"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xl-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{serviceItem.title}</h2>
              <p className="sec-text mt-30">
                BaseCreate is pleased to announce that it has been commissioned
                by Leighton Asia reposition its brand. We will help Leighton
                Asia evolve its brand strategy, and will be responsible updating
                Leighton Asia’s brand identity, website, and other collaterals.
              </p>
              <p className="sec-text mt-30">
                For almost 50 years Leighton Asia, one of the region’s largest
                and most respected construction companies, has been
                progressively building for a better future by leveraging
                international expertise with local intelligence. In that time
                Leighton has delivered some of Asia’s prestigious buildings and
                transformational infrastructure projects.
              </p>
            </div>
            <h3>Remarking Services</h3>
            <p className="sec-text mb-n1">
              Leighton Asia’s brand refreshment will help position the company
              to meet the challenges of future, as it seeks to lead the industry
              in technological innovation and sustainable building practices to
              deliver long-lasting value for its clients.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="video-area-1 mt-80 mb-80">
              <div className="video-wrap">
                <div
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/normal/video_2-2.png)",
                    overflow: "hidden",
                  }}
                ></div>
                <a
                  href="https://www.youtube.com/watch?v=vvNwlRLjLkU"
                  className="play-btn popup-video background-image"
                ></a>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <p className="sec-text mt-n1 mb-40">
              Leighton Asia’s brand refreshment will help position the company
              to meet the challenges of future, as it seeks to lead the industry
              in technological innovation and sustainable building practices to
              deliver long-lasting value for its clients.
            </p>
            <h3>Making for Users Friendly</h3>
            <p className="sec-text mt-30">
              Leighton Asia’s brand refreshment will help position the company
              to meet the challenges of future, as it seeks to lead the industry
              in technological innovation and sustainable building practices to
              deliver long-lasting value for its clients.
            </p>
            <p className="sec-text mb-40 mt-30">
              For almost 50 years Leighton Asia, one of the region’s largest and
              most respected construction companies, has been progressively
              building for a better future by leveraging international expertise
              with local intelligence. In that time Leighton has delivered some
              of Asia’s prestigious buildings and transformational
              infrastructure projects.
            </p>
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-3.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      Custom Solution
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Image
                      width={40}
                      height={40}
                      src="/assets/img/icon/feature-icon1-6.svg"
                      alt="icon"
                    />
                  </div>
                  <h4 className="feature-card-title">
                    <Link scroll={false} href="/project">
                      In-time Result
                    </Link>
                  </h4>
                  <p className="feature-card-text mb-n2">
                    We care success relationships fuel success we love building
                  </p>
                </div>
              </div>
            </div>
            <p className="sec-text mb-n1 mt-40">
              Leighton Asia’s brand refreshment will help position the company
              to meet the challenges of future, as it seeks to lead the industry
              in technological innovation and sustainable building practices to
              deliver long-lasting value for its clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { allPortfolio } from "@/data/portfolio";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
export default function ProjectDetails({ portfolioId }) {
  const portfolioItem =
    allPortfolio.filter((elm) => elm.id == portfolioId)[0] || allPortfolio[1];
  const itemsImages = [
    "/assets/img/portfolio/portfolio_inner_1.png",
    "/assets/img/portfolio/portfolio_inner_2.png",
  ];
  const slideroptions = {
    arrows: true,
    autoplay: true,
    prevArrow: (
      <button type="button" className="slick-prev slick-arrow">
        <i className="fas fa-arrow-left"></i>
      </button>
    ),

    nextArrow: (
      <button type="button" className="slick-next slick-arrow">
        <i className="fas fa-arrow-right"></i>
      </button>
    ),
  };
  return (
    <div className="project-details-page-area space">
      <div className="container">
        <Slider className="row global-carousel default" {...slideroptions}>
          {itemsImages.map((elm, i) => (
            <div key={i} className="col-xl-12">
              <div className="project-inner-thumb mb-80 wow img-custom-anim-top animated">
                <Image
                  width={1296}
                  height={700}
                  className="w-100"
                  src={elm}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="row justify-content-between flex-row-reverse">
          <div className="col-xl-3 col-lg-4">
            <div className="project-details-info mb-lg-0 mb-40">
              <ul className="list-wrap">
                <li>
                  <span>Category:</span>Development
                </li>
                <li>
                  <span>Software:</span>WordPress, Figma
                </li>
                <li>
                  <span>Service:</span>Development
                </li>
                <li>
                  <span>Client:</span>Eunice Mills
                </li>
                <li>
                  <span>Date:</span>October 6, 2023
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="title-area mb-35">
              <h2 className="sec-title">{portfolioItem.title}</h2>
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
            <h3>Challenge & Solution</h3>
            <p className="sec-text mb-n1">
              Future, as it seeks to lead the industry in technological
              innovation and sustainable building practices to deliver
              long-lasting value for its clients.
            </p>
            <h3 className="mt-35">Final Result</h3>
            <p className="sec-text mb-n1">
              For almost 50 years Leighton Asia, one of the region’s largest and
              most respected construction companies, has been progressively
              building for a better future by leveraging international expertise
              with local intelligence. In that time Leighton has delivered some
              of Asia’s prestigious buildings and transformational
              infrastructure projects.
            </p>
          </div>
          <div className="col-lg-12">
            <div className="inner__page-nav space-top mt-n1 mb-n1">
              <a href="#" className="nav-btn">
                <i className="fa fa-arrow-left"></i>
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Previous Post</span>
                    <span className="effect-1">Previous Post</span>
                  </span>
                </span>
              </a>
              <a href="#" className="nav-btn">
                <span>
                  <span className="link-effect">
                    <span className="effect-1">Next Post</span>
                    <span className="effect-1">Next Post</span>
                  </span>
                </span>
                <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

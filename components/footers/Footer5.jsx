import React from "react";
import Socials from "./component/Socials";
import FooterLinks3 from "./component/FooterLinks3";
import FooterLinks4 from "./component/FooterLinks4";
import Link from "next/link";

export default function Footer5() {
  return (
    <footer className="footer-wrapper footer-layout5 overflow-hidden">
      <div className="footer-top space bg-theme">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <h2 className="footer-top-title">Let’s Work Together</h2>
            </div>
            <div className="col-lg-5">
              <div className="footer-top-wrap">
                <p className="mb-30">
                  We are digital agency that helps businesses develop immersive
                  and engaging user experiences
                </p>
                <Link scroll={false} href="/project" className="btn">
                  <span className="link-effect">
                    <span className="effect-1">LET'S TALK WITH US</span>
                    <span className="effect-1">LET'S TALK WITH US</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="widget-area space-top">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5 col-lg-6">
              <div className="widget widget-about footer-widget">
                <h3 className="widget_title">About Frisk</h3>
                <p className="about-text">
                  If you ask our clients what it’s like working with talk how
                  much we care about their success. relationships fuel real
                  success. We love building brands
                </p>
                <div className="social-btn style3">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-xl-2 col-lg-3">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Links</h3>
                <div className="menu-all-pages-container list-column2">
                  <ul className="menu">
                    <FooterLinks3 />
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3 col-lg-4">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Others</h3>
                <div className="menu-all-pages-container list-column2">
                  <ul className="menu">
                    <FooterLinks4 />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <p>
                27 Division St, New York, <br />
                NY 10002, USA
              </p>
            </div>
            <div className="col-md-6 align-self-center text-md-end">
              <p className="copyright-text">
                <a href="tel:1800123654987"> +1 800 123 654 987 </a>
                <br />
                <a href="mailto:frisk.agency@mail.com">frisk.agency@mail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

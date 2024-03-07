import React from "react";
import Socials from "./component/Socials";
import Image from "next/image";
import FooterLinks3 from "./component/FooterLinks3";

export default function Footer4() {
  return (
    <footer className="footer-wrapper footer-layout4 overflow-hidden bg-white">
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5 col-lg-6">
              <div className="widget widget-about footer-widget">
                <div className="footer-logo">
                  <Image
                    width={86}
                    height={24}
                    src="/assets/img/logo.svg"
                    alt="logo"
                  />
                </div>
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
            <div className="col-md-6 col-xl-auto col-lg-4">
              <div className="widget footer-widget widget-contact">
                <h3 className="widget_title">Contact</h3>
                <ul className="contact-info-list">
                  <li>
                    27 Division St, New York, <br /> NY 10002, USA
                  </li>
                  <li>
                    <a href="tel:1800123654987">+1 800 123 654 987</a>
                    <a href="mailto:frisk.agency@mail.com">
                      frisk.agency@mail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-center align-items-center text-center">
            <div className="col-md-12">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://themeforest.net/user/ib-themes/portfolio">
                  ib-themes
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

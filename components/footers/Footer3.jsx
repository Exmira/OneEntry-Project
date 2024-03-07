import React from "react";
import Socials from "./component/Socials";
import FooterLinks1 from "./component/FooterLinks1";
import FooterLinks2 from "./component/FooterLinks2";

export default function Footer3() {
  return (
    <footer className="footer-wrapper footer-layout3 overflow-hidden bg-smoke">
      <div className="container">
        <div className="footer-menu-area">
          <div className="row gy-3 justify-content-between">
            <div className="col-xxl-6 col-lg-7">
              <ul className="footer-menu-list">
                <FooterLinks1 />
              </ul>
            </div>
            <div className="col-xxl-6 col-lg-5 text-lg-end">
              <ul className="footer-menu-list">
                <FooterLinks2 />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <div className="social-btn style3">
                <Socials />
              </div>
            </div>
            <div className="col-md-6 align-self-center text-md-end">
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

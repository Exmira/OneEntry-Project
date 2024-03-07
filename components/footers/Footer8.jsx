"use client";
import Socials from "./component/Socials";
import Image from "next/image";
import FooterLinks3 from "./component/FooterLinks3";

export default function Footer8() {
  return (
    <footer className="footer-wrapper footer-layout2 overflow-hidden">
      <div className="container">
        <div className="widget-area space-top">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-5 col-lg-6">
              <div className="widget widget-newsletter footer-widget">
                <h3 className="widget_title">
                  Get valuable strategy, culture and brand insights straight to
                  your inbox
                </h3>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="newsletter-form"
                >
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your email here"
                      required=""
                    />
                  </div>
                  <button type="submit" className="btn">
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </button>
                </form>
                <p>
                  By signing up to receive emails from Motto, you agree to our
                  Privacy Policy. We treat your info responsibly.
                </p>
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
                    <br />
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
          <div className="row gy-3 justify-content-between align-items-center">
            <div className="col-md-6">
              <p className="copyright-text">
                Copyright © {new Date().getFullYear()}{" "}
                <a href="https://themeforest.net/user/ib-themes/portfolio">
                  ib-themes
                </a>
              </p>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="social-btn style3 justify-content-md-end">
                <Socials />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

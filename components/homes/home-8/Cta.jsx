"use client";
import Socials from "@/components/footers/component/Socials";
import React from "react";

export default function Cta() {
  return (
    <div className="cta-area-1 overflow-hidden bg-theme space text-xl-start text-center">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-5 col-lg-10">
            <div className="title-area mb-xl-0 mb-40">
              <h2 className="sec-title">Let’s Work Together</h2>
              <p className="sec-text mt-30 mb-n2">
                We are digital agency that helps businesses develop immersive
                and engaging user experiences
              </p>
              <p className="copyright-text mt-4 mb-3">
                Copyright © 2024
                <a href="https://themeforest.net/user/ib-themes/portfolio">
                  ib-themes
                </a>
              </p>
              <div className="social-btn style3 justify-content-xl-start justify-content-center">
                <Socials />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form-wrap">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email address*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="website"
                        id="website"
                        placeholder="Website link"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="How Can We Help You*"
                        id="contactForm"
                        className="form-control style-border style2"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">SEND MESSAGE</span>
                      <span className="effect-1">SEND MESSAGE</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

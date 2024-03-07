import { contactInfo } from "@/data/contactInfo";
import Image from "next/image";
import React from "react";

export default function ContactInfo() {
  return (
    <div className="feature-area-1 space-bottom">
      <div className="container">
        <div className="row gy-4 align-items-center justify-content-center">
          {contactInfo.map((card, index) => (
            <div key={index} className="col-xxl-6 col-xl-6">
              <div className="feature-card style-grid">
                <div className="feature-card-icon">
                  <Image width={40} height={40} src={card.iconSrc} alt="icon" />
                </div>
                <div className="feature-card-details">
                  <h4 className="feature-card-title">
                    <a href="#">{card.title}</a>
                  </h4>
                  <p className="feature-card-text">{card.text}</p>
                  <a href={card.linkUrl} className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">{card.linkText}</span>
                      <span className="effect-1">{card.linkText}</span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { steps } from "@/data/steps";
import React from "react";

export default function Steps() {
  return (
    <div className="feature-area-1 space">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title text-smoke">Three Step Process</h2>
        </div>
        <div className="row gx-0 gy-40">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-4">
              <div className="process-card">
                <div className="process-card-number">{step.number}</div>
                <h4 className="process-card-title">{step.title}</h4>
                <p className="process-card-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

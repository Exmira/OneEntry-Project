import Counter from "@/components/common/Counter";
import { counterData } from "@/data/facts";
import React from "react";

export default function Facts() {
  return (
    <div className="counter-area-1 space-bottom overflow-hidden">
      <div className="container">
        <div className="row gy-40 align-items-center justify-content-lg-between justify-content-center">
          {counterData.map((elm, i) => (
            <div
              key={i}
              className="col-xl-auto col-lg-4 col-md-6 counter-divider"
            >
              <div className="counter-card">
                <h3 className="counter-card_number">
                  <span className="counter-number">
                    <Counter min={0} max={elm.number} />
                  </span>
                  +
                </h3>
                <h4 className="counter-card_title">{elm.title}</h4>
                <p className="counter-card_text">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

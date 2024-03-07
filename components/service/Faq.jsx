import { faqs3 } from "@/data/faq";
import React from "react";

export default function Faq() {
  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="accordion-area accordion" id="faqAccordion">
              {faqs3.map((elm, i) => (
                <div key={i} className="accordion-card active">
                  <div
                    className="accordion-header"
                    id={`collapse-item-${elm.id}`}
                  >
                    <button
                      className={`accordion-button ${
                        i == 0 ? "" : "collapsed"
                      } `}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${elm.id}`}
                      aria-expanded="true"
                      aria-controls={`collapse-${elm.id}`}
                    >
                      {" "}
                      <span className="faq-number">
                        {i.toString.length > 1 ? i : "0" + (i + 1)}
                      </span>{" "}
                      {elm.question}
                    </button>
                  </div>
                  <div
                    id={`collapse-${elm.id}`}
                    className={`accordion-collapse collapse ${
                      i == 0 ? "show" : ""
                    } `}
                    aria-labelledby={`collapse-item-${elm.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="faq-text">{elm.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

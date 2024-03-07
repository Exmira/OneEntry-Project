import { awardsData } from "@/data/awards";
import Link from "next/link";
import React from "react";

export default function Awards() {
  return (
    <div className="award-area-1 space-bottom overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ul className="award-wrap-area">
              {awardsData.map((elm, i) => (
                <li key={i} className="single-award-list">
                  <span className="award-year">{elm.year}</span>
                  <div className="award-details">
                    <h4>
                      <Link scroll={false} href="/about">
                        {elm.name}
                      </Link>
                    </h4>
                    <p>{elm.description}</p>
                  </div>
                  <span className="award-tag">{elm.role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

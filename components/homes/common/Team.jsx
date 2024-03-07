import { teamData } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  return (
    <div className="team-area-1 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <h2 className="sec-title">Our Team Behind The Studio</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {teamData.slice(0, 4).map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="team-card">
                <div className="team-card_img">
                  <Image
                    width={306}
                    height={380}
                    src={elm.imageSrc}
                    alt="Team Image"
                  />
                </div>
                <div className="team-card_content">
                  <h3 className="team-card_title">
                    <Link scroll={false} href={`/team-details/${elm.id}`}>
                      {elm.name}
                    </Link>
                  </h3>
                  <span className="team-card_desig">{elm.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

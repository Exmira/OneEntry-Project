import SkillProgress from "@/components/common/SkillProgress";
import { skillsData } from "@/data/skills";
import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <div className="service-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="service-img-1-1 shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: "0px", bottom: "140px" }}
        data-left="0"
        data-top="-100px"
        data-bottom="140px"
      >
        <Image
          width={838}
          height={788}
          src="/assets/img/normal/service_2-1.jpg"
          alt="img"
        />
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="about-content-wrap">
              <div className="title-area mb-0">
                <h2 className="sec-title">
                  We Offer a Wide Range of Brand Services
                </h2>
                <p className="sec-text mt-35 mb-40">
                  We are a creative agency working with brands building
                  insightful strategy, creating unique designs and crafting
                  value
                </p>
                {skillsData.map((skill) => (
                  <div key={skill.id} className="skill-feature">
                    <h3 className="skill-feature_title">{skill.title}</h3>
                    <div className="progress">
                      <SkillProgress progress={skill.progress} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

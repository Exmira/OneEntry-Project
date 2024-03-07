import { projects } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <div className="project-area-5 space overflow-hidden">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">
                Discover Our Selected Projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-60 gx-60 justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-xl-6 col-lg-6">
              <div className="portfolio-wrap style4">
                <div
                  className="portfolio-thumb wow img-custom-anim-top animated"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <Link scroll={false} href={`/project-details/${project.id}`}>
                    <Image
                      width={618}
                      height={470}
                      src={project.imageSrc}
                      alt="portfolio"
                    />
                  </Link>
                </div>
                <div className="portfolio-details">
                  <h3 className="portfolio-title">
                    <Link
                      scroll={false}
                      href={`/project-details/${project.id}`}
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <ul className="portfolio-meta">
                    {project.categories.map((category, index) => (
                      <li key={index}>
                        <a href="#">{category}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-wrap mt-50 justify-content-center">
          <Link
            scroll={false}
            href="/project"
            className="btn bg-theme text-title"
          >
            <span className="link-effect">
              <span className="effect-1">VIEW ALL PROJECTS</span>
              <span className="effect-1">VIEW ALL PROJECTS</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

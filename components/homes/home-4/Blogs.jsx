import { blogs2 } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <section className="blog-area space bg-smoke">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title">Read Our Articles and News</h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 justify-content-center">
          {blogs2.map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <Link
                scroll={false}
                href={`/blog-details/${elm.id}`}
                className="blog-card style2"
              >
                <div className="blog-img">
                  <Image
                    width={416}
                    height={460}
                    src={elm.image}
                    alt="blog image"
                  />
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    <span>March 26, 2024</span>
                    <span>Branding</span>
                  </div>
                  <h4 className="blog-title">
                    Everything You Should Know About Return
                  </h4>
                  <span className="link-btn">
                    <span className="link-effect">
                      <span className="effect-1">READ MORE</span>
                      <span className="effect-1">READ MORE</span>
                    </span>
                    <Image
                      width={13}
                      height={13}
                      src="/assets/img/icon/arrow-left-top.svg"
                      alt="icon"
                    />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

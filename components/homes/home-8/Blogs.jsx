import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <section className="blog-area space bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-6 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title text-smoke">
                Check Out My Latest Articles
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-40 justify-content-center">
          {blogs.slice(0, 3).map((elm, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="blog-card style3">
                <div className="blog-img">
                  <Link scroll={false} href={`/blog-details/${elm.id}`}>
                    <Image
                      width={416}
                      height={340}
                      src={elm.image}
                      alt="blog image"
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="post-meta-item blog-meta">
                    <a href="#">{elm.date}</a>
                    <a href="#">{elm.category}</a>
                  </div>
                  <h4 className="blog-title">
                    <Link scroll={false} href={`/blog-details/${elm.id}`}>
                      {elm.title}
                    </Link>
                  </h4>
                  <Link
                    scroll={false}
                    href={`/blog-details/${elm.id}`}
                    className="link-btn"
                  >
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { blogs3 } from "@/data/blogs";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagination";
import BlogSerchbar from "./BlogSerchbar";
import Categories from "./Categories";
import RecentPosts from "./RecentPosts";
import Tags from "./Tags";
import Image from "next/image";

export default function BlogList2() {
  return (
    <section className="blog__area space">
      <div className="container">
        <div className="blog__inner-wrap">
          <div className="row">
            <div className="col-70">
              <div className="blog-post-wrap">
                <div className="row gy-30 gutter-24">
                  {blogs3.map((elm, i) => (
                    <div key={i} className="col-md-6">
                      <div className="blog-post-item-two">
                        <div className="blog-post-thumb">
                          <Link scroll={false} href={`/blog-details/${elm.id}`}>
                            <Image
                              width={856}
                              height={600}
                              src={elm.image}
                              alt="img"
                            />
                          </Link>
                        </div>
                        <div className="blog-post-content">
                          <div className="blog-post-meta">
                            <ul className="list-wrap">
                              <li>{elm.date}</li>
                              <li>
                                <a href="#">{elm.category}</a>
                              </li>
                            </ul>
                          </div>
                          <h4 className="title">
                            <Link
                              scroll={false}
                              href={`/blog-details/${elm.id}`}
                            >
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
                <Pagination />
              </div>
            </div>
            <div className="col-30">
              <aside className="blog__sidebar">
                <BlogSerchbar />
                <Categories />
                <RecentPosts />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

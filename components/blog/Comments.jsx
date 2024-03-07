import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div className="comments-wrap">
      <h3 className="comments-wrap-title">02 Comments</h3>
      <div className="latest-comments">
        <ul className="list-wrap">
          <li>
            <div className="comments-box">
              <div className="comments-avatar">
                <Image
                  width={110}
                  height={100}
                  src="/assets/img/blog/comment01.png"
                  alt="img"
                />
              </div>
              <div className="comments-text">
                <div className="avatar-name">
                  <span className="date">March 26, 2024</span>
                  <h6 className="name">Parker Strong</h6>
                </div>
                <p>
                  But in order that you may see whence all this born error of
                  those who accuse pleasure and praise pain will open the whole
                  matter explain
                </p>
                <a href="#" className="link-btn">
                  <span className="link-effect">
                    <span className="effect-1">REPLY</span>
                    <span className="effect-1">REPLY</span>
                  </span>
                  <Image
                    width={13}
                    height={13}
                    src="/assets/img/icon/arrow-left-top.svg"
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <ul className="children">
              <li>
                <div className="comments-box">
                  <div className="comments-avatar">
                    <Image
                      width={110}
                      height={100}
                      src="/assets/img/blog/comment02.png"
                      alt="img"
                    />
                  </div>
                  <div className="comments-text">
                    <div className="avatar-name">
                      <span className="date">March 26, 2024</span>
                      <h6 className="name">Farell Colins</h6>
                    </div>
                    <p>
                      Finanappreciate your trust greatly Our clients choose
                      dentace ducts because know we are the best area
                      Awaitingare really.
                    </p>
                    <a href="#" className="link-btn">
                      <span className="link-effect">
                        <span className="effect-1">REPLY</span>
                        <span className="effect-1">REPLY</span>
                      </span>
                      <Image
                        width={13}
                        height={13}
                        src="/assets/img/icon/arrow-left-top.svg"
                        alt="icon"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

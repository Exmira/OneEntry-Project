"use client";
import addGsap from "@/utils/addGsap";
import React, { useEffect, useState } from "react";

import ModalVideo from "react-modal-video";
import { useParallax } from "react-scroll-parallax";
export default function Video() {
  const parallax = useParallax({
    speed: -20,
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <>
      <div className="video-area-1 overflow-hidden">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="video-wrap">
                <div
                  ref={parallax.ref}
                  className="jarallax background-image"
                  style={{
                    backgroundImage: "url(/assets/img/normal/video_2-1.jpg)",
                  }}
                ></div>

                <div
                  onClick={() => setIsOpen(true)}
                  className="play-btn circle-btn btn gsap-magnetic popup-video background-image"
                >
                  PLAY VIDEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={isOpen}
        videoId="vvNwlRLjLkU"
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

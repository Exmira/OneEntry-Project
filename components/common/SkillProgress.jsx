"use client";
import React, { useEffect, useRef, useState } from "react";

export default function SkillProgress({ progress }) {
  const targetElement = useRef();

  const [counted, setCounted] = useState(30);
  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((pre) => {
        if (pre == progress) {
          clearInterval(intervalId);
          return pre;
        } else {
          return pre + 1;
        }
      });
    }, 2000 / progress);
  };

  useEffect(() => {
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounted(30);
          startCountup();
          // observer.unobserve(entry.target);
          // Do something when the observed element enters the viewport
        }
      });
    }

    // Options for the Intersection Observer
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.5, // Trigger when 50% of the observed element is visible
    };

    // Create an Intersection Observer and pass in the callback function and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the target element

    observer.observe(targetElement.current);
    return () => {
      setCounted(30);
    };
  }, []);

  return (
    <>
      <div
        className="progress-bar"
        ref={targetElement}
        style={{ width: `${counted}%`, transition: "0s" }}
      ></div>
      <div className="progress-value">
        <span className="counter-number">{counted}</span>%
      </div>
    </>
  );
}

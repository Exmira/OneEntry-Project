"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Counter({ min, max }) {
  const [counted, setCounted] = useState(min);
  const targetElement = useRef();
  const startCountup = () => {
    const intervalId = setInterval(() => {
      setCounted((pre) => {
        const tempCount = pre + Math.ceil(max / 20);
        if (tempCount >= max) {
          clearInterval(intervalId);
          return max;
        } else {
          return tempCount;
        }
      });
    }, 70);
  };
  useEffect(() => {
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounted(min);
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
      setCounted(min);
    };
  }, []);

  return <span ref={targetElement}>{counted}</span>;
}

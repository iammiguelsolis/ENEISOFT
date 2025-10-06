import React, { useEffect, useRef } from "react";

export function ScrollAnimator({ children, className = "", ...props }) {
  const ref = useRef(null);

  useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        },
        {
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
  }, []);

  return (
    <div ref={ref} className={`animate-on-scroll ${className}`} {...props}>
      {children}
    </div>
  );
}

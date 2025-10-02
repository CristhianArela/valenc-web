import { useEffect, useState } from "react";

export default function useVisibleElements() {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return visibleElements;
}

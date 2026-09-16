import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // 1. Fallback for environments without IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -35px 0px',
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in initial view, reveal it smoothly
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setTimeout(() => el.classList.add('is-visible'), 60);
        } else {
          observer.observe(el);
        }
      });
    };

    observeElements();

    // Observe dynamically rendered or tab-changed items
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

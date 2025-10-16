import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Default easing
      smoothWheel: true,
      wheelMultiplier: 2,
    });

    // RAF function
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;
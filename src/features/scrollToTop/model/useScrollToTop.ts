import { useEffect, useRef, useState } from "react";

export const useScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          setVisible(window.scrollY > 1);

          console.log(window.scrollY);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { visible, scrollToTop };
};

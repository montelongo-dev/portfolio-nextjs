import { useState, useEffect } from "react";

export default function Width() {
  let width = useWindowSize().width;
  const breakpoint = 900;
  return { width, breakpoint };
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

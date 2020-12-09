import { useEffect, useState } from "react";

export default function Width() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 900;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return { width, breakpoint };
}

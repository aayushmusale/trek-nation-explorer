import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This scrolls the window to the very top (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the pathname changes

  return null; // This component doesn't render anything visual
};

export default ScrollToTop;
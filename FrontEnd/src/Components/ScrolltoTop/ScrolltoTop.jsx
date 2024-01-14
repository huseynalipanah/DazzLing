import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { useState, useEffect } from "react";


function ScrolltoTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {showTopBtn && (
        <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
      )}
    </div>
  );
}

export default ScrolltoTop;

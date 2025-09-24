import { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export function useToggleCountryOpenWithAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const ref = useRef<HTMLUListElement>(null);
  const [style, animate] = useSpring(() => ({ height: "0px", }), []);

  useEffect(() => {
    if (ref.current !== null) {
      animate({
        height: (isOpen ? 300 : 0) + "px",
      });
    }
  }, [animate, ref, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    handleClick,
    animated,
    style,
    ref,
  };
}

export default useToggleCountryOpenWithAnimation;

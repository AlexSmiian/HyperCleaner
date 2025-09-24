import { useRef, useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";

export function useToggleOpenWithAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const ref = useRef<HTMLUListElement>(null);
  const [style, animate] = useSpring(() => ({ height: "0px" }), []);

  useEffect(() => {
    if (ref.current !== null) {
      animate({
        height: (isOpen ? ref.current.offsetHeight : 0) + "px",
      });
    }
  }, [animate, ref, isOpen]);

  return {
    isOpen,
    setIsOpen,
    handleClick,
    animated,
    style,
    ref,
  };
}

export default useToggleOpenWithAnimation;

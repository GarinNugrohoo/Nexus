import type { RefObject } from "react";

export function useScrollToSection() {
  const scrollToSection = (ref: RefObject<HTMLElement | null>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("Scroll target ref is not attached to any element");
    }
  };

  return { scrollToSection };
}

import { useEffect } from "react";

export const useDisableInspect = () => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.metaKey && e.altKey && e.key === "I") ||
        e.key === "F12" ||
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

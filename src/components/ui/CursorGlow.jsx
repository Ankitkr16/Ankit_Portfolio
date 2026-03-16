import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return undefined;

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-30 hidden h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
}

export default CursorGlow;

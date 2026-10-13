
import { useEffect, useState } from "react";
// import "./CursorGlow.css";

export default function CursorGlow() {
    const [position, setPosition] = useState({
        x: -1000,
        y: -1000,
    });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 motion-reduce:hidden [@media(hover:none)]:hidden"
            style={{
                background: `radial-gradient(
      450px circle at ${position.x}px ${position.y}px,
      rgba(124, 58, 237, 0.16),
      rgba(59, 130, 246, 0.07) 35%,
      transparent 70%
    )`,
            }}
        />
    );
}

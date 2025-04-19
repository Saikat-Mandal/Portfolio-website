"use client";
import useMousePosition from "@/app/hooks/useMousePosition";

const DotRing = () => {
    const { x, y } = useMousePosition();

    const ringStyle = {
        position: "fixed",
        width: "30px",
        height: "30px",
        border: "2px solid rgba(31, 30, 30, 0.808)",
        borderRadius: "100%",
        transform: `translate(-50%, -50%)`,
        transitionDuration: "30ms",
        transitionTimingFunction: "linear",
        willChange: "width, height, transform, border",
        zIndex: 999,
        pointerEvents: "none",
        transformOrigin: "center",
        top: `${y}px`,
        left: `${x}px`
    };

    const dotStyle = {
        position: "fixed",
        top: `${y}px`,
        left: `${x}px`,
        width: "16px",
        height: "16px",
        backgroundColor: "black",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        zIndex: 999,
        pointerEvents: "none"
    };

    return (
        <>
            <div style={ringStyle}></div>
            <div style={dotStyle}></div>
        </>
    );
};

export default DotRing;

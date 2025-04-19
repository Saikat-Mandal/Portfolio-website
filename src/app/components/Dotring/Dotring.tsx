"use client";
import useMousePosition from "../../hooks/useMousePosition";

const DotRing = () => {
    const { x, y } = useMousePosition();

    return (
        <>
            <div
                className="fixed w-[30px] h-[30px] border-[2px] border-[rgba(31,30,30,0.808)] rounded-full 
                           transition-[width,height,transform,border] duration-[30ms] ease-linear 
                           will-change-[width,height,transform,border] z-[999] pointer-events-none"
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                    transitionDuration: "30ms",
                    transitionTimingFunction: "linear",
                    WebkitTransitionDuration: "30ms",  // Webkit support for transition-duration
                    WebkitTransitionTimingFunction: "linear", // Webkit support for transition-timing-function
                }}
            ></div>

            <div
                className="fixed w-[16px] h-[16px] bg-black rounded-full z-[999] pointer-events-none"
                style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            ></div>
        </>
    );
};

export default DotRing;

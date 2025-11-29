import {motion, useMotionValue, useSpring} from "framer-motion";
import {Plane} from "lucide-react";
import {useEffect} from "react";

const MouseTracker = () => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = {damping: 25, stiffness: 150};
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed pointer-events-none z-50 hidden lg:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
        >
            <Plane size={32} className="text-primary/40" style={{transform: "rotate(-45deg)"}} />
        </motion.div>
    );
};

export default MouseTracker;

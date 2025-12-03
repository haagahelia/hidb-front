import {motion} from "framer-motion";

const WindParticles = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => {
                const startY = Math.random() * 100;
                const duration = 5 + Math.random() * 10;
                const delay = Math.random() * 5;
                const opacity = 0.1 + Math.random() * 0.2;

                return (
                    <motion.div
                        key={`wind-${i}`}
                        className="absolute h-0.5 bg-linear-to-r from-transparent via-white/30 to-transparent"
                        style={{
                            width: `${50 + Math.random() * 100}px`,
                            top: `${startY}%`,
                            left: "-10%",
                            opacity,
                        }}
                        animate={{
                            x: ["0vw", "110vw"],
                            y: [0, (Math.random() - 0.5) * 50],
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                );
            })}
        </div>
    );
};

export default WindParticles;

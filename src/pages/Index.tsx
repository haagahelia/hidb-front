import {Link} from "react-router-dom";
import {Plane, Map, BookOpen, Navigation2, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-aircraft.jpg";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import WindParticles from "@/components/animations/WindParticles";
import MouseTracker from "@/components/animations/MouseTracker";

const Index = () => {
    const containerRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background overflow-x-hidden">
            <Navigation />

            <MouseTracker />

            {/* Hero Section */}
            <motion.section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                style={{opacity, scale}}
            >
                {/* Background layers */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "brightness(0.6)",
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background z-0" />

                {/* Animated layers */}
                <WindParticles />

                <div className="container mx-auto px-4 z-10 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg text-white"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 1, delay: 0.6}}
                        >
                            Finnish Aviation Museum
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.8}}
                    >
                        Explore the fascinating history of aviation through our interactive digital guide
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 1.1}}
                    >
                        <Link to="/aircraft">
                            <motion.div whileHover={{scale: 1.05, y: -5}} whileTap={{scale: 0.95}}>
                                <Button
                                    size="lg"
                                    className="gradient-sky text-lg px-8 py-6 relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{x: "-100%"}}
                                        whileHover={{x: "100%"}}
                                        transition={{duration: 0.5}}
                                    />
                                    <Plane className="mr-2 h-5 w-5 relative z-10" />
                                    <span className="relative z-10">Explore Aircraft</span>
                                </Button>
                            </motion.div>
                        </Link>
                        <Link to="/map">
                            <motion.div whileHover={{scale: 1.05, y: -5}} whileTap={{scale: 0.95}}>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="text-lg px-8 py-6 relative overflow-hidden group"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-primary/10"
                                        initial={{x: "-100%"}}
                                        whileHover={{x: "100%"}}
                                        transition={{duration: 0.5}}
                                    />
                                    <Map className="mr-2 h-5 w-5 relative z-10" />
                                    <span className="relative z-10">Museum Map</span>
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
                >
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                            animate={{opacity: [1, 0.3, 1]}}
                            transition={{duration: 2, repeat: Infinity}}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* Features Section */}
            <section className="py-20 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.h2
                        className="text-4xl font-bold text-center mb-12 text-gradient"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        Your Digital Aviation Guide
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Plane,
                                title: "Aircraft Collection",
                                description:
                                    "Discover detailed information about historic aircraft, from fighters to transport planes, with comprehensive specifications and fascinating histories.",
                                delay: 0,
                            },
                            {
                                icon: Navigation2,
                                title: "Interactive Navigation",
                                description:
                                    "Navigate the museum with ease using our interactive map. Find aircraft locations, facilities, and plan your visit efficiently.",
                                delay: 0.2,
                            },
                            {
                                icon: BookOpen,
                                title: "Rich History",
                                description:
                                    "Learn about Finland's aviation heritage, important dates, and the stories behind each aircraft in our collection.",
                                delay: 0.4,
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.6, delay: feature.delay}}
                            >
                                <motion.div
                                    whileHover={{
                                        y: -10,
                                        rotateY: 5,
                                        rotateX: 5,
                                    }}
                                    transition={{duration: 0.3}}
                                >
                                    <Card className="aircraft-shadow border-border h-full relative overflow-hidden group">
                                        <motion.div
                                            className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                                            transition={{duration: 0.3}}
                                        />
                                        <CardContent className="pt-6 relative z-10">
                                            <motion.div
                                                className="w-16 h-16 gradient-sky rounded-full flex items-center justify-center mb-4 mx-auto"
                                                whileHover={{rotate: 360, scale: 1.1}}
                                                transition={{duration: 0.5}}
                                            >
                                                <feature.icon className="h-8 w-8 text-white" />
                                            </motion.div>
                                            <h3 className="text-xl font-bold mb-3 text-center">{feature.title}</h3>
                                            <p className="text-muted-foreground text-center">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 gradient-sky relative overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />

                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        className="text-4xl font-bold mb-6 text-white"
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                    >
                        Ready to Start Your Journey?
                    </motion.h2>

                    <motion.p
                        className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        Begin exploring our collection of historic aircraft and immerse yourself in the fascinating
                        world of aviation history.
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.4}}
                    >
                        <Link to="/aircraft">
                            <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="text-lg px-8 py-6 relative group overflow-hidden"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-white/20"
                                        initial={{scale: 0, opacity: 0}}
                                        whileHover={{scale: 2, opacity: 1}}
                                        transition={{duration: 0.5}}
                                    />
                                    <Sparkles className="mr-2 h-5 w-5 relative z-10" />
                                    <span className="relative z-10">Start Exploring</span>
                                </Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-card border-t border-border">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <p>&copy; 2024 Finnish Aviation Museum. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Index;

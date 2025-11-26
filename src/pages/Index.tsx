import { Link } from "react-router-dom";
import { BookOpen, Map, Navigation2, Plane } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import Navigation from "@/Components/Navigation";
import heroImage from "@/assets/hero-aircraft.jpg";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
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

                <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                        Finnish Aviation Museum
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
                        Explore the fascinating history of aviation through our
                        interactive digital guide
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/aircraft">
                            <Button
                                size="lg"
                                className="gradient-sky text-lg px-8 py-6 hover-lift"
                            >
                                <Plane className="mr-2 h-5 w-5" />
                                Explore Aircraft
                            </Button>
                        </Link>
                        <Link to="/map">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="text-lg px-8 py-6 hover-lift"
                            >
                                <Map className="mr-2 h-5 w-5" />
                                Museum Map
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
                        Your Digital Aviation Guide
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover-lift aircraft-shadow border-border">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 gradient-sky rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <Plane className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">
                                    Aircraft Collection
                                </h3>
                                <p className="text-muted-foreground text-center">
                                    Discover detailed information about historic
                                    aircraft, from fighters to transport planes,
                                    with comprehensive specifications and
                                    fascinating histories.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover-lift aircraft-shadow border-border">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 gradient-sky rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <Navigation2 className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">
                                    Interactive Navigation
                                </h3>
                                <p className="text-muted-foreground text-center">
                                    Navigate the museum with ease using our
                                    interactive map. Find aircraft locations,
                                    facilities, and plan your visit efficiently.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover-lift aircraft-shadow border-border">
                            <CardContent className="pt-6">
                                <div className="w-16 h-16 gradient-sky rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <BookOpen className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">
                                    Rich History
                                </h3>
                                <p className="text-muted-foreground text-center">
                                    Learn about Finland's aviation heritage,
                                    important dates, and the stories behind each
                                    aircraft in our collection.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 gradient-sky">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                        Begin exploring our collection of historic aircraft and
                        immerse yourself in the fascinating world of aviation
                        history.
                    </p>
                    <Link to="/aircraft">
                        <Button
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8 py-6 hover-lift"
                        >
                            Start Exploring
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-card border-t border-border">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <p>
                        &copy; 2024 Finnish Aviation Museum. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Index;

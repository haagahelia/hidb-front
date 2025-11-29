import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Search, Filter, QrCode} from "lucide-react";
import {Input} from "@/temp/ui/input";
import {Button} from "@/temp/ui/button";
import {Card, CardContent} from "@/temp/ui/card";
import {Badge} from "@/temp/ui/badge";
import Navigation from "@/temp/Navigation";
import {fetchAllAirCrafts} from "@/services/fetch";
import {motion} from "framer-motion";
import {AircraftInterface} from "@/interfaces/interfaces";

const Aircraft = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<string>("all");
    const [aircraftData, setAirCraftData] = useState<AircraftInterface[]>([]);

    //get all aircrafts
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const data = await fetchAllAirCrafts();
                if (mounted) setAirCraftData(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

    const types = ["all", "military", "commercial", "general aviation", "cargo", "rotorcraft", "other"];

    const filteredAircraft = aircraftData.filter((aircraft) => {
        const matchesSearch =
            aircraft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.model.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = selectedType === "all" || aircraft.type === selectedType;

        return matchesSearch && matchesType;
    });

    const getTypeLabel = (type: string) => {
        return type
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <div className="min-h-screen bg-background relative flex flex-col">
            <Navigation />

            <div className="pt-24 pb-16 relative z-10 flex-1">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h1 className="text-5xl font-bold mb-4 text-gradient">Aircraft Collection</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore our extensive collection of historic aircraft from various eras and nations
                        </p>
                    </motion.div>

                    {/* Search and Filter */}
                    <motion.div
                        className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search aircraft by name, manufacturer, or role..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>

                        <div className="flex gap-2 flex-wrap">
                            <Filter className="h-5 w-5 text-muted-foreground my-auto" />
                            {types.map((type) => (
                                <Button
                                    key={type}
                                    variant={selectedType === type ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedType(type)}
                                    className={selectedType === type ? "gradient-sky" : ""}
                                >
                                    {type === "all" ? "All Types" : getTypeLabel(type)}
                                </Button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Aircraft Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                        {filteredAircraft.map((aircraft, index) => (
                            <motion.div
                                key={aircraft.id}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                                className="h-full flex flex-col"
                            >
                                <Link to={`/aircraft/${aircraft.id}`} className="block grow">
                                    <motion.div
                                        whileHover={{y: -10, scale: 1.02}}
                                        transition={{duration: 0.3}}
                                        className="h-full flex flex-col"
                                    >
                                        <Card className="h-full flex flex-col aircraft-shadow border-border overflow-hidden group">
                                            <div className="relative h-64 overflow-hidden">
                                                <motion.img
                                                    src={
                                                        aircraft.thumbnail_url ||
                                                        "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw"
                                                    }
                                                    alt={aircraft.thumbnail_caption}
                                                    onError={(e) => {
                                                        e.currentTarget.src =
                                                            "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw";
                                                    }}
                                                    className="w-full h-full object-cover"
                                                    whileHover={{scale: 1.1}}
                                                    transition={{duration: 0.5}}
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60" />
                                                <Badge className="absolute top-4 right-4 gradient-sky">
                                                    {getTypeLabel(aircraft.type)}
                                                </Badge>
                                                {aircraft.status === "under restoration" && (
                                                    <Badge className="absolute top-4 left-4 bg-accent">
                                                        Under Restoration
                                                    </Badge>
                                                )}

                                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <div className="bg-background/90 p-2 rounded-lg">
                                                        <QrCode className="h-5 w-5 text-primary" />
                                                    </div>
                                                </div>
                                            </div>

                                            <CardContent className="p-6 grow flex flex-col">
                                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                    {aircraft.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-3">
                                                    {aircraft.manufacturer} • {aircraft.year_built}
                                                </p>
                                                <p className="text-muted-foreground mb-4 line-clamp-3 grow">
                                                    {aircraft.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                                                    <Badge variant="outline">{aircraft.model}</Badge>
                                                    {aircraft.display_section && (
                                                        <Badge variant="outline">{aircraft.display_section}</Badge>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredAircraft.length === 0 && (
                        <motion.div className="text-center py-16" initial={{opacity: 0}} animate={{opacity: 1}}>
                            <p className="text-xl text-muted-foreground">
                                No aircraft found matching your search criteria.
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>

            <footer className="py-8 bg-card border-t border-border relative z-10">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <p>&copy; 2024 Finnish Aviation Museum. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Aircraft;

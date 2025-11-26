import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, Search } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import Navigation from "@/Components/Navigation";
import { aircraftData } from "@/data/aircraftData";

const Aircraft = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<string>("all");

    const types = [
        "all",
        "military",
        "commercial",
        "general aviation",
        "cargo",
        "rotorcraft",
        "other",
    ];

    const filteredAircraft = aircraftData.filter((aircraft) => {
        const matchesSearch =
            aircraft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            aircraft.manufacturer.toLowerCase().includes(
                searchTerm.toLowerCase(),
            ) ||
            aircraft.model.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = selectedType === "all" ||
            aircraft.type === selectedType;

        return matchesSearch && matchesType;
    });

    const getTypeLabel = (type: string) => {
        return type
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navigation />

            <div className="pt-24 pb-16 flex flex-col flex-1">
                <div className="container mx-auto px-4 flex flex-col flex-1">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in">
                        <h1 className="text-5xl font-bold mb-4 text-gradient">
                            Aircraft Collection
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore our extensive collection of historic
                            aircraft from various eras and nations
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 animate-slide-in-left">
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
                                    variant={selectedType === type
                                        ? "default"
                                        : "outline"}
                                    size="sm"
                                    onClick={() => setSelectedType(type)}
                                    className={selectedType === type
                                        ? "gradient-sky"
                                        : ""}
                                >
                                    {type === "all"
                                        ? "All Types"
                                        : getTypeLabel(type)}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Aircraft Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAircraft.map((aircraft, index) => (
                            <Link
                                key={aircraft.id}
                                to={`/aircraft/${aircraft.id}`}
                                className="block animate-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Card className="h-full hover-lift aircraft-shadow border-border overflow-hidden group">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={aircraft.image}
                                            alt={aircraft.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60" />
                                        <Badge className="absolute top-4 right-4 gradient-sky">
                                            {getTypeLabel(aircraft.type)}
                                        </Badge>
                                        {aircraft.status ===
                                                "under restoration" && (
                                            <Badge className="absolute top-4 left-4 bg-accent">
                                                Under Restoration
                                            </Badge>
                                        )}
                                    </div>

                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {aircraft.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {aircraft.manufacturer} •{" "}
                                            {aircraft.year_built}
                                        </p>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {aircraft.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Badge variant="outline">
                                                {aircraft.model}
                                            </Badge>
                                            {aircraft.display_section && (
                                                <Badge variant="outline">
                                                    {aircraft.display_section}
                                                </Badge>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {filteredAircraft.length === 0 && (
                        <div className="py-16 flex-1 flex flex-col items-center justify-center">
                            <p className="text-xl text-muted-foreground">
                                No aircraft found matching your search criteria.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <footer className="py-8 bg-card border-t border-border mt-auto">
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

export default Aircraft;

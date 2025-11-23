import {useState} from "react";
import {Link} from "react-router-dom";
import {Search, Filter, Building2} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {organizationData} from "@/data/organizationData";

const Organization = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<string>("all");

    const types = ["all", "military", "airline", "border_guard", "postal_service", "commercial", "other"];

    const filteredOrganizations = organizationData.filter((org) => {
        const matchesSearch =
            org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
            org.type.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesType = selectedType === "all" || org.type === selectedType;

        return matchesSearch && matchesType;
    });

    const getTypeLabel = (type: string) => {
        return type
            .split("_")
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
                        <h1 className="text-5xl font-bold mb-4 text-gradient">Organizations</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore the air forces, airlines, and organizations that operated these historic aircraft
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4 animate-slide-in-left">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search organizations by name, country, or type..."
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
                    </div>

                    {/* Organizations Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredOrganizations.map((org, index) => (
                            <Link
                                key={org.id}
                                to={`/organization/${org.id}`}
                                className="block animate-fade-in"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <Card className="h-full hover-lift aircraft-shadow border-border overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden bg-gradient-metallic flex items-center justify-center">
                                        <Building2 className="h-24 w-24 text-primary-foreground opacity-80" />
                                        <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-60" />
                                        <Badge className="absolute top-4 right-4 gradient-sky">
                                            {getTypeLabel(org.type)}
                                        </Badge>
                                    </div>

                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {org.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            {org.country} •{" "}
                                            {org.founding_year ? `Founded ${org.founding_year}` : "Historic"}
                                        </p>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">{org.description}</p>
                                        {org.notable_aircraft && org.notable_aircraft.length > 0 && (
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Badge variant="outline">{org.notable_aircraft.length} Aircraft</Badge>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {filteredOrganizations.length === 0 && (
                        <div className="py-16 flex-1 flex flex-col items-center justify-center">
                            <p className="text-xl text-muted-foreground">
                                No organizations found matching your search criteria.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <footer className="py-8 bg-card border-t border-border mt-auto">
                <div className="container mx-auto px-4 text-center text-muted-foreground">
                    <p>&copy; 2024 Finnish Aviation Museum. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Organization;

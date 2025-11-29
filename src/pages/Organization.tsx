import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Search, Filter, Building2} from "lucide-react";
import {Input} from "@/temp/ui/input";
import {Button} from "@/temp/ui/button";
import {Card, CardContent} from "@/temp/ui/card";
import {Badge} from "@/temp/ui/badge";
import Navigation from "@/temp/Navigation";
import {motion} from "framer-motion";
import {fetchAllOrganizations} from "@/services/fetch";
import {OrganizationInterface} from "@/interfaces/interfaces";

const Organization = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState<string>("all");

    const [organizationData, setOrganizationData] = useState<OrganizationInterface[]>([]);

    //get all organization
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const data = await fetchAllOrganizations();
                if (mounted) setOrganizationData(data);
            } catch (error) {
                console.error(error);
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

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
        <div className="min-h-screen bg-background relative flex flex-col">
            <Navigation />

            <div className="pt-24 pb-16 relative z-10 flex-1">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-12"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h1 className="text-5xl font-bold mb-4 text-gradient">Organizations</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore the air forces, airlines, and organizations that operated these historic aircraft
                        </p>
                    </motion.div>

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
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredOrganizations.map((org, index) => (
                            <motion.div
                                key={org.id}
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5, delay: index * 0.1}}
                            >
                                <Link to={`/organization/${org.id}`} className="block">
                                    <motion.div whileHover={{y: -10, scale: 1.02}} transition={{duration: 0.3}}>
                                        <Card className="h-full aircraft-shadow border-border overflow-hidden group">
                                            <div className="relative h-64 overflow-hidden bg-gradient-metallic flex items-center justify-center">
                                                <motion.img
                                                    src={
                                                        org.logo_url ||
                                                        "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw"
                                                    }
                                                    alt={org.name}
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
                                                    {getTypeLabel(org.type)}
                                                </Badge>
                                            </div>

                                            <CardContent className="p-6">
                                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                    {org.name}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {org.country} •{" "}
                                                    {org.founding_year ? `Founded ${org.founding_year}` : "Historic"}
                                                </p>
                                                {org.description && (
                                                    <p className="text-muted-foreground mt-3 mb-4 line-clamp-3">
                                                        {org.description}
                                                    </p>
                                                )}
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {filteredOrganizations.length === 0 && (
                        <motion.div className="text-center py-16" initial={{opacity: 0}} animate={{opacity: 1}}>
                            <p className="text-xl text-muted-foreground">
                                No organizations found matching your search criteria.
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

export default Organization;

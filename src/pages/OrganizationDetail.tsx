import {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {ArrowLeft, Calendar, Building2, Globe, Award, Plane} from "lucide-react";
import {Button} from "@/temp/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/temp/ui/card";
import {Badge} from "@/temp/ui/badge";
import {Separator} from "@/temp/ui/separator";
import Navigation from "@/temp/Navigation";
import {motion} from "framer-motion";
import {fetchOrganizationById, fetchAllAirCrafts} from "@/services/fetch";
import {OrganizationInterface, AircraftInterface} from "@/interfaces/interfaces";

const OrganizationDetail = () => {
    const {id} = useParams<{id: string}>();
    const [organization, setOrganization] = useState<OrganizationInterface>();
    const [aircraftData, setAirCraftData] = useState<AircraftInterface[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    //get all aircraft and organization
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const data1 = await fetchAllAirCrafts();
                if (mounted) setAirCraftData(data1);
                const data2 = await fetchOrganizationById(Number(id));
                if (mounted) setOrganization(data2);
                console.log(data1, data2);
            } catch (error) {
                console.error(error);
            } finally {
                if (mounted) setIsFetching(false);
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

    const relatedAircraft = organization ? aircraftData.filter((a) => a.organization_id === organization.id) : [];

    if (isFetching) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="pt-24 pb-16 container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Loading...</h1>
                </div>
            </div>
        );
    }

    if (!organization) {
        return (
            <div className="min-h-screen bg-background">
                <Navigation />
                <div className="pt-24 pb-16 container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Organization Not Found</h1>
                    <Link to="/organization">
                        <Button>Back to Organizations</Button>
                    </Link>
                </div>
            </div>
        );
    }

    const getTypeLabel = (type: string) =>
        type
            .split("_")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");

    return (
        <div className="min-h-screen bg-background relative">
            <Navigation />

            <div className="pt-24 pb-16 relative z-10">
                <div className="container mx-auto px-4">
                    <motion.div initial={{opacity: 0, x: -20}} animate={{opacity: 1, x: 0}}>
                        <Link to="/organization" className="inline-block mb-6">
                            <Button variant="ghost" size="sm">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Organizations
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="relative h-96 rounded-xl overflow-hidden mb-8 aircraft-shadow bg-gradient-metallic flex items-center justify-center"
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <img
                            src={
                                organization.logo_url ||
                                "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw"
                            }
                            alt={organization.name}
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw";
                            }}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <Badge className="mb-3 gradient-sky">{getTypeLabel(organization.type)}</Badge>
                            <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-2">{organization.name}</h1>
                            <p className="text-xl text-white/90 drop-shadow-md">
                                {organization.country}
                                {organization.founding_year && ` • Founded ${organization.founding_year}`}
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <motion.div
                                initial={{opacity: 0, x: -30}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.2}}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Award className="h-5 w-5 text-primary" />
                                            Overview
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {organization.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {organization.history && (
                                <motion.div
                                    initial={{opacity: 0, x: -30}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.3}}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Historical Background</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                                {organization.history}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}

                            {relatedAircraft.length > 0 && (
                                <motion.div
                                    initial={{opacity: 0, x: -30}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: 0.4}}
                                >
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Plane className="h-5 w-5 text-primary" />
                                                Aircraft in Collection
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                {relatedAircraft.map((aircraft) => (
                                                    <Link
                                                        key={aircraft.id}
                                                        to={`/aircraft/${aircraft.id}`}
                                                        className="group"
                                                    >
                                                        <motion.div whileHover={{y: -5}}>
                                                            <Card className="overflow-hidden border-border">
                                                                <div className="relative h-48 overflow-hidden">
                                                                    <img
                                                                        src={
                                                                            aircraft.thumbnail_url ||
                                                                            "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw"
                                                                        }
                                                                        alt={aircraft.thumbnail_caption}
                                                                        onError={(e) => {
                                                                            e.currentTarget.src =
                                                                                "https://lh3.googleusercontent.com/proxy/rnI3_En64EP7f3eLxeUK59zazrOt3DPuEhk8NOfOY_jdK7VbA7ucKFfwPTqdi_wFZCDyEWJ7hDnZq6D-94CPn7Qlp3A8tmPuWmJZf4aO3kbPtBnKfwVtZw";
                                                                        }}
                                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                                    />
                                                                </div>
                                                                <CardContent className="p-4">
                                                                    <h4 className="font-bold group-hover:text-primary transition-colors mb-1">
                                                                        {aircraft.name}
                                                                    </h4>
                                                                    <p className="text-sm text-muted-foreground">
                                                                        {aircraft.model} • {aircraft.year_built}
                                                                    </p>
                                                                </CardContent>
                                                            </Card>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <motion.div
                                initial={{opacity: 0, x: 30}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 0.3}}
                            >
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Building2 className="h-5 w-5 text-primary" />
                                            Quick Facts
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div>
                                            <p className="text-sm text-muted-foreground">Organization Type</p>
                                            <p className="font-medium">{getTypeLabel(organization.type)}</p>
                                            <Separator className="mt-3" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Country</p>
                                            <p className="font-medium flex items-center gap-2">
                                                <Globe className="h-4 w-4 text-primary" />
                                                {organization.country}
                                            </p>
                                            <Separator className="mt-3" />
                                        </div>
                                        {organization.founding_year && (
                                            <div>
                                                <p className="text-sm text-muted-foreground">Founded</p>
                                                <p className="font-medium flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-primary" />
                                                    {organization.founding_year}
                                                </p>
                                                <Separator className="mt-3" />
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-sm text-muted-foreground">Aircraft in Museum</p>
                                            <p className="font-medium">{relatedAircraft.length} Aircraft</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
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

export default OrganizationDetail;

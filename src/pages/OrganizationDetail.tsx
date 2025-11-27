import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Building2,
  Globe,
  Award,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { useEffect } from "react";
import { OrganizationInterface } from "@/interfaces/interfaces";
import { fetchOrganizationById } from "@/services/fetch";
//import {organizationData} from "@/data/organizationData";
//import {aircraftData} from "@/data/aircraftData";

const OrganizationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [organization, setOrganization] = useState<OrganizationInterface>();

  //const relatedAircraft = organization ? aircraftData.filter((a) => a.organization_id === organization.id) : [];

  //get organization by id
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchOrganizationById(Number(id));
        if (mounted) setOrganization(data);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

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

  const getTypeLabel = (type: string) => {
    return type
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/organization"
            className="inline-block mb-6 animate-fade-in"
          >
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Organizations
            </Button>
          </Link>

          {/* Header */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-8 animate-fade-in aircraft-shadow bg-gradient-metallic flex items-center justify-center">
            <Building2 className="h-32 w-32 text-primary-foreground opacity-30 absolute" />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <Badge className="mb-3 gradient-sky">
                {getTypeLabel(organization.type)}
              </Badge>
              <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-2">
                {organization.name}
              </h1>
              <p className="text-xl text-white/90 drop-shadow-md">
                {organization.country}
                {organization.founding_year &&
                  ` • Founded ${organization.founding_year}`}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card className="animate-slide-in-left">
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

              {/* History */}
              {organization.history && (
                <Card
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardHeader>
                    <CardTitle>Historical Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {organization.history}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Related Aircraft */}
              {/* {relatedAircraft.length > 0 && (
                <Card
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
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
                          <Card className="overflow-hidden hover-lift border-border">
                            <div className="relative h-32 overflow-hidden">
                              <img
                                src={aircraft.image}
                                alt={aircraft.name}
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
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )} */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Facts */}
              <Card className="animate-slide-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Organization Type
                    </p>
                    <p className="font-medium">
                      {getTypeLabel(organization.type)}
                    </p>
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
                  {/* <div>
                    <p className="text-sm text-muted-foreground">
                      Aircraft in Museum
                    </p>
                    <p className="font-medium">
                      {relatedAircraft.length}{" "}
                      {relatedAircraft.length === 1 ? "Aircraft" : "Aircraft"}
                    </p>
                  </div> */}
                </CardContent>
              </Card>

              {/* Type Badge */}
              <Card
                className="animate-slide-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Organization Category
                  </p>
                  <Badge variant="outline" className="text-lg py-2 px-4">
                    {getTypeLabel(organization.type)}
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Finnish Aviation Museum. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OrganizationDetail;

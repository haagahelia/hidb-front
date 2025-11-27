import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Wrench, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import AudioGuide from "@/components/AudioGuide";
import { fetchAircraftById } from "@/services/fetch";
import { AircraftInterface } from "@/interfaces/interfaces";
import { useEffect, useState } from "react";
//import {aircraftData} from "@/data/aircraftData";

const AircraftDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [aircraft, setAircraft] = useState<AircraftInterface>();

  //get aircraft by id
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchAircraftById(Number(id));
        if (mounted) setAircraft(data);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  if (!aircraft) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-24 pb-16 container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Aircraft Not Found</h1>
          <Link to="/aircraft">
            <Button>Back to Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/aircraft" className="inline-block mb-6 animate-fade-in">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Collection
            </Button>
          </Link>

          {/* Header Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-8 animate-fade-in aircraft-shadow">
            <img
              src={aircraft.image}
              alt={aircraft.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex gap-2 mb-3">
                <Badge className="gradient-sky">{aircraft.aircraft_type}</Badge>
                <Badge className="bg-accent">{aircraft.status}</Badge>
              </div>
              <h1 className="text-5xl font-bold text-white drop-shadow-lg mb-2">
                {aircraft.name}
              </h1>
              <p className="text-xl text-white/90 drop-shadow-md">
                {aircraft.manufacturer} {aircraft.model} • {aircraft.year_built}
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Audio Guide */}
              {aircraft.history && (
                <div className="animate-fade-in">
                  <AudioGuide
                    aircraftName={aircraft.name}
                    audioDescription={aircraft.history}
                  />
                </div>
              )}

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
                    {aircraft.description}
                  </p>
                </CardContent>
              </Card>

              {/* History */}
              {aircraft.history && (
                <Card
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.1s" }}
                >
                  <CardHeader>
                    <CardTitle>Historical Significance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {aircraft.history}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Importance */}
              {aircraft.importance && (
                <Card
                  className="animate-slide-in-left"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardHeader>
                    <CardTitle>Why It Matters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {aircraft.importance}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Fun Facts */}
              {aircraft.funFacts && aircraft.funFacts.length > 0 && (
                <Card
                  className="animate-slide-in-left gradient-sky"
                  style={{ animationDelay: "0.3s" }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Lightbulb className="h-5 w-5" />
                      Fun Facts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {aircraft.funFacts.map((fact, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-white/90"
                        >
                          <span className="text-xl">✈️</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specifications */}
              {aircraft.specifications && (
                <Card className="animate-slide-in-right">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wrench className="h-5 w-5 text-primary" />
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Weight</p>
                      <p className="font-medium">{aircraft.weight} kg</p>
                      <Separator className="mt-3" />
                    </div>
                    {aircraft.crew_capacity !== null && (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Crew Capacity
                        </p>
                        <p className="font-medium">{aircraft.crew_capacity}</p>
                        <Separator className="mt-3" />
                      </div>
                    )}
                    {aircraft.passenger_capacity !== null &&
                      aircraft.passenger_capacity > 0 && (
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Passenger Capacity
                          </p>
                          <p className="font-medium">
                            {aircraft.passenger_capacity}
                          </p>
                          <Separator className="mt-3" />
                        </div>
                      )}
                    {Object.entries(aircraft.specifications).map(
                      ([key, value]) =>
                        value && (
                          <div key={key}>
                            <p className="text-sm text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </p>
                            <p className="font-medium">{value}</p>
                            <Separator className="mt-3" />
                          </div>
                        )
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Museum Information */}
              <Card
                className="animate-slide-in-right"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Museum Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {aircraft.display_section && (
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Display Section
                      </p>
                      <p className="font-medium">{aircraft.display_section}</p>
                      <Separator className="mt-3" />
                    </div>
                  )}
                  {aircraft.museum_location_number && (
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Location Number
                      </p>
                      <p className="font-medium">
                        #{aircraft.museum_location_number}
                      </p>
                      <Separator className="mt-3" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <Badge className="mt-1">{aircraft.status}</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Type Badge */}
              <Card
                className="animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <CardContent className="pt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Aircraft Type
                  </p>
                  <Badge variant="outline" className="text-lg py-2 px-4">
                    {aircraft.aircraft_type}
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

export default AircraftDetail;

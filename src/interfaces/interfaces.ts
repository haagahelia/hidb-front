export interface AircraftInterface {
  id: number;
  name: string;
  manufacturer: string;
  model: string;
  year_built: number;
  weight: number;
  organization_id: number | null;
  crew_capacity: number | null;
  passenger_capacity: number | null;
  type: string | null;
  museum_location_number: number | null;
  display_section: string | null;
  qr_code_url: string | null;
  description: string | null;
  status: "on display" | "in storage" | "under restoration" | "loaned" | "decommissioned";
  thumbnail_url: string | null;
  thumbnail_caption: string | null;
  specifications?: {
    length?: string;
    wingspan?: string;
    height?: string;
    maxSpeed?: string;
    range?: string;
    engine?: string;
    armament?: string;
  };
  history?: string;
  importance?: string;
  fun_facts?: string[];
}

export interface OrganizationInterface {
    id: number;
    name: string;
    type: "airline" | "military" | "border_guard" | "postal_service" | "commercial" | "other";
    country: string;
    founding_year: number | null;
    logo_url: string | null;
    description?: string;
    history?: string;
    notable_aircraft?: number[];
}
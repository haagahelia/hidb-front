export interface Organization {
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

export const organizationData: Organization[] = [
    {
        id: 1,
        name: "Finnish Air Force",
        type: "military",
        country: "Finland",
        founding_year: 1918,
        logo_url: null,
        description:
            "The Finnish Air Force is one of the oldest independent air forces in the world, having gained independence alongside Finland in 1918.",
        history:
            "Founded on March 6, 1918, the Finnish Air Force has played a crucial role in defending Finnish sovereignty through the Winter War, Continuation War, and throughout the Cold War era. Known for achieving exceptional kill ratios with limited resources.",
        notable_aircraft: [1, 3, 4, 5, 6],
    },
    {
        id: 2,
        name: "Finnair (Aero O/Y)",
        type: "airline",
        country: "Finland",
        founding_year: 1923,
        logo_url: null,
        description: "Finland's flagship airline and one of the world's oldest continuously operating airlines.",
        history:
            "Founded as Aero O/Y in 1923, Finnair has connected Finland to the world for over 100 years. The airline pioneered Arctic routes and became known for its reliability and safety record.",
        notable_aircraft: [2],
    },
    {
        id: 3,
        name: "Soviet Air Forces",
        type: "military",
        country: "Soviet Union",
        founding_year: 1918,
        logo_url: null,
        description: "The air warfare branch of the Soviet Armed Forces during the existence of the Soviet Union.",
        history:
            "One of the largest and most powerful air forces in history, the Soviet Air Forces played a decisive role in World War II and maintained air superiority throughout the Cold War.",
        notable_aircraft: [1, 10],
    },
    {
        id: 4,
        name: "Royal Air Force",
        type: "military",
        country: "United Kingdom",
        founding_year: 1918,
        logo_url: null,
        description: "The United Kingdom's aerial warfare force and the oldest independent air force in the world.",
        history:
            "Founded on April 1, 1918, the RAF defended Britain during the Battle of Britain and played crucial roles in all theaters of World War II. Known for technological innovation and exceptional pilot training.",
        notable_aircraft: [7, 8],
    },
    {
        id: 5,
        name: "Luftwaffe",
        type: "military",
        country: "Germany",
        founding_year: 1935,
        logo_url: null,
        description: "The aerial warfare branch of the Wehrmacht during Nazi Germany.",
        history:
            "Reformed in 1935, the Luftwaffe became one of the most technologically advanced air forces of its time. Despite early success, it was eventually overcome by Allied air superiority.",
        notable_aircraft: [3],
    },
];

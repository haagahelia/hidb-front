// Import all aircraft images
import mig21Image from "@/assets/aircraft-mig21.jpg";
import dc3Image from "@/assets/aircraft-dc3.jpg";
import bf109Image from "@/assets/aircraft-bf109.jpg";
import brewsterImage from "@/assets/aircraft-brewster.jpg";
import gladiatorImage from "@/assets/aircraft-gladiator.jpg";
import fokkerImage from "@/assets/aircraft-fokker.jpg";
import hurricaneImage from "@/assets/aircraft-hurricane.jpg";
import mosquitoImage from "@/assets/aircraft-mosquito.jpg";
import drakenImage from "@/assets/aircraft-draken.jpg";
import mig15Image from "@/assets/aircraft-mig15.jpg";
import fougaImage from "@/assets/aircraft-fouga.jpg";
import vampireImage from "@/assets/aircraft-vampire.jpg";
import vihuriImage from "@/assets/aircraft-vihuri.jpg";
import l70Image from "@/assets/aircraft-l70.jpg";
import cherokeeImage from "@/assets/aircraft-cherokee.jpg";

export interface Aircraft {
  id: number;
  name: string;
  manufacturer: string;
  model: string;
  year_built: number;
  weight: number;
  organization_id: number | null;
  crew_capacity: number | null;
  passenger_capacity: number | null;
  type: "military" | "commercial" | "general aviation" | "cargo" | "rotorcraft" | "other";
  museum_location_number: number | null;
  display_section: string | null;
  qr_code_url: string | null;
  description: string | null;
  status: "on display" | "in storage" | "under restoration" | "loaned" | "decommissioned";
  image: string;
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
  funFacts?: string[];
}

export const aircraftData: Aircraft[] = [
  {
    id: 1,
    name: "MiG-21 Fishbed",
    manufacturer: "Mikoyan-Gurevich",
    model: "MiG-21bis",
    year_built: 1978,
    weight: 5460,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 1,
    display_section: "North Wing",
    qr_code_url: null,
    description: "Soviet supersonic fighter jet that served the Finnish Air Force during the Cold War era.",
    status: "on display",
    image: mig21Image,
    specifications: {
      length: "15.76 m",
      wingspan: "7.15 m",
      height: "4.10 m",
      maxSpeed: "2,175 km/h (Mach 2.05)",
      range: "1,580 km",
      engine: "Tumansky R-25-300 afterburning turbojet",
      armament: "1× 23mm GSh-23 cannon, missiles and bombs on 4 hardpoints"
    },
    history: "The MiG-21 is one of the most produced supersonic jets in aviation history. Finland operated MiG-21bis variants from 1963 to 1998 as part of its air defense strategy during the Cold War.",
    importance: "The MiG-21 represents a significant chapter in Finnish aviation history, symbolizing Finland's unique position during the Cold War.",
    funFacts: [
      "Over 11,000 MiG-21s were produced, making it one of the most numerous jet fighters ever built",
      "Finnish pilots nicknamed it 'Balalaika' due to its distinctive triangular planform",
      "The MiG-21 could reach an altitude of 17,500 meters in just 7 minutes"
    ]
  },
  {
    id: 2,
    name: "Douglas DC-3",
    manufacturer: "Douglas Aircraft Company",
    model: "DC-3",
    year_built: 1945,
    weight: 11430,
    organization_id: 2,
    crew_capacity: 3,
    passenger_capacity: 32,
    type: "commercial",
    museum_location_number: 2,
    display_section: "Central Hall",
    qr_code_url: null,
    description: "Revolutionary transport aircraft that transformed commercial aviation and military airlift operations worldwide.",
    status: "on display",
    image: dc3Image,
    specifications: {
      length: "19.66 m",
      wingspan: "28.96 m",
      height: "5.16 m",
      maxSpeed: "370 km/h",
      range: "2,400 km",
      engine: "2× Pratt & Whitney R-1830 Twin Wasp radial engines (1,200 hp each)"
    },
    history: "The Douglas DC-3 revolutionized air transport in the 1930s and 1940s, making commercial air travel practical and profitable. Finnish airlines operated DC-3s extensively from the 1940s through the 1970s.",
    importance: "The DC-3 is arguably the most significant transport aircraft in aviation history. In Finland, it connected a remote Nordic nation to the rest of Europe and beyond.",
    funFacts: [
      "Over 16,000 DC-3s and military variants were produced",
      "Many DC-3s are still flying today, over 85 years after the first flight",
      "It could carry 21-32 passengers in comfort previously unknown in air travel"
    ]
  },
  {
    id: 3,
    name: "Messerschmitt Bf 109",
    manufacturer: "Messerschmitt AG",
    model: "Bf 109G-6",
    year_built: 1943,
    weight: 2700,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 3,
    display_section: "North Wing",
    qr_code_url: null,
    description: "Legendary German fighter that served with distinction in the Finnish Air Force during World War II.",
    status: "on display",
    image: bf109Image,
    specifications: {
      length: "8.95 m",
      wingspan: "9.92 m",
      height: "2.60 m",
      maxSpeed: "640 km/h at 6,000 m",
      range: "850 km",
      engine: "Daimler-Benz DB 605A liquid-cooled V-12 (1,475 hp)",
      armament: "1× 20mm MG 151 cannon, 2× 13mm MG 131 machine guns"
    },
    history: "The Messerschmitt Bf 109 was one of the most advanced fighters of its era. Finland acquired Bf 109G variants in 1943 to strengthen its air defenses during the Continuation War.",
    importance: "Finland was the last country to operate the Bf 109 in military service, retiring them in 1954.",
    funFacts: [
      "Over 34,000 Bf 109s were produced, more than any other fighter aircraft in history",
      "Finnish ace Eino Ilmari Juutilainen scored 34 of his 94 victories flying the Bf 109"
    ]
  },
  {
    id: 4,
    name: "Brewster F2A Buffalo",
    manufacturer: "Brewster Aeronautical Corporation",
    model: "B-239",
    year_built: 1939,
    weight: 2146,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 4,
    display_section: "North Wing",
    qr_code_url: null,
    description: "American fighter aircraft that became one of the most successful fighters in Finnish Air Force history.",
    status: "on display",
    image: brewsterImage,
    specifications: {
      length: "8.03 m",
      wingspan: "10.67 m",
      height: "3.68 m",
      maxSpeed: "517 km/h",
      range: "1,553 km",
      engine: "Wright R-1820-G5 Cyclone radial (1,200 hp)",
      armament: "4× 12.7mm machine guns"
    },
    history: "Finnish pilots achieved an exceptional kill ratio of 32:1 with this aircraft during the Continuation War.",
    importance: "The Buffalo's service demonstrates how aircraft performance depends heavily on tactics and pilot skill.",
    funFacts: [
      "Finnish pilot Hans Wind scored 39 of his 75 victories flying the Buffalo",
      "Finnish pilots affectionately called it 'Taivaan helmi' (Pearl of the Sky)"
    ]
  },
  {
    id: 5,
    name: "Gloster Gladiator",
    manufacturer: "Gloster Aircraft Company",
    model: "Gladiator Mk II",
    year_built: 1938,
    weight: 1562,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 5,
    display_section: "East Wing",
    qr_code_url: null,
    description: "British biplane fighter that served as the last biplane fighter in Finnish Air Force service.",
    status: "on display",
    image: gladiatorImage,
    specifications: {
      length: "8.36 m",
      wingspan: "9.83 m",
      height: "3.53 m",
      maxSpeed: "414 km/h",
      range: "708 km",
      engine: "Bristol Mercury IX radial (840 hp)",
      armament: "4× .303 Browning machine guns"
    },
    history: "Finland acquired 30 Gladiators from Britain in 1940 during the Winter War. Despite being obsolete, it served admirably in Finnish hands.",
    importance: "The Gladiator represents the transition era between biplane and monoplane fighters.",
    funFacts: [
      "Last biplane fighter in RAF service before monoplanes took over",
      "Featured an enclosed cockpit, unusual for biplanes of the era"
    ]
  },
  {
    id: 6,
    name: "Fokker D.XXI",
    manufacturer: "Fokker",
    model: "D.XXI",
    year_built: 1938,
    weight: 1450,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 6,
    display_section: "East Wing",
    qr_code_url: null,
    description: "Dutch-designed fighter that became a backbone of Finnish air defense in the Winter War.",
    status: "on display",
    image: fokkerImage,
    specifications: {
      length: "8.20 m",
      wingspan: "11.00 m",
      height: "2.95 m",
      maxSpeed: "460 km/h",
      range: "950 km",
      engine: "Bristol Mercury VIII radial (830 hp)",
      armament: "4× 7.7mm machine guns"
    },
    history: "Finland built 93 D.XXIs under license, forming the bulk of Finnish fighter strength during the Winter War of 1939-1940.",
    importance: "The D.XXI was crucial to Finland's air defense during the Winter War.",
    funFacts: [
      "Finland built more D.XXIs than the Netherlands, the country of origin",
      "Performed exceptionally well in Finnish winter conditions"
    ]
  },
  {
    id: 7,
    name: "Hawker Hurricane Mk I",
    manufacturer: "Hawker Aircraft",
    model: "Hurricane Mk I",
    year_built: 1939,
    weight: 2118,
    organization_id: 4,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 7,
    display_section: "South Hall",
    qr_code_url: null,
    description: "Legendary British fighter that played a vital role in the Battle of Britain.",
    status: "on display",
    image: hurricaneImage,
    specifications: {
      length: "9.84 m",
      wingspan: "12.19 m",
      height: "3.99 m",
      maxSpeed: "547 km/h",
      range: "965 km",
      engine: "Rolls-Royce Merlin III V-12 (1,030 hp)",
      armament: "8× .303 Browning machine guns"
    },
    history: "The Hurricane shot down more enemy aircraft than Spitfires during the Battle of Britain. Finland acquired 12 Hurricanes in 1940.",
    importance: "The Hurricane represents the RAF's modernization before WWII.",
    funFacts: [
      "Shot down more enemy aircraft than Spitfires in Battle of Britain",
      "Over 14,500 Hurricanes were built in various versions"
    ]
  },
  {
    id: 8,
    name: "De Havilland Mosquito",
    manufacturer: "De Havilland",
    model: "Mosquito FB Mk VI",
    year_built: 1943,
    weight: 6486,
    organization_id: 4,
    crew_capacity: 2,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 8,
    display_section: "South Hall",
    qr_code_url: null,
    description: "The legendary 'Wooden Wonder' - one of WWII's most versatile and fastest combat aircraft.",
    status: "on display",
    image: mosquitoImage,
    specifications: {
      length: "12.34 m",
      wingspan: "16.51 m",
      height: "4.65 m",
      maxSpeed: "668 km/h",
      range: "2,400 km",
      engine: "2× Rolls-Royce Merlin V-12 (1,460 hp each)",
      armament: "4× 20mm cannons, 4× .303 machine guns, 2,000 kg bombs"
    },
    history: "Constructed primarily of wood, the Mosquito was one of WWII's most remarkable aircraft, serving in bomber, fighter, and reconnaissance roles.",
    importance: "The Mosquito was one of the fastest operational aircraft of WWII.",
    funFacts: [
      "Nicknamed 'Wooden Wonder' due to wooden construction",
      "One of the fastest aircraft of WWII, often flew without defensive armament"
    ]
  },
  {
    id: 9,
    name: "Saab 35 Draken",
    manufacturer: "Saab",
    model: "J 35F",
    year_built: 1972,
    weight: 7425,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 9,
    display_section: "Central Hall",
    qr_code_url: null,
    description: "Swedish supersonic fighter with distinctive double-delta wing design.",
    status: "on display",
    image: drakenImage,
    specifications: {
      length: "15.35 m",
      wingspan: "9.40 m",
      height: "3.89 m",
      maxSpeed: "2,125 km/h (Mach 2.0)",
      range: "3,250 km",
      engine: "Volvo Flygmotor RM6C afterburning turbojet",
      armament: "1× 30mm cannon, missiles on 6 hardpoints"
    },
    history: "Finland operated the Draken from 1974 to 2000 as its primary fighter aircraft during the latter Cold War period.",
    importance: "The Draken showcased Swedish aerospace excellence and served Finland's air defense for over 25 years.",
    funFacts: [
      "Its unique double-delta wing design was revolutionary",
      "Could perform the 'Cobra' maneuver decades before it became famous"
    ]
  },
  {
    id: 10,
    name: "MiG-15",
    manufacturer: "Mikoyan-Gurevich",
    model: "MiG-15bis",
    year_built: 1950,
    weight: 3681,
    organization_id: 3,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 10,
    display_section: "Training Section",
    qr_code_url: null,
    description: "Soviet jet fighter that dominated early Cold War skies, particularly in Korea.",
    status: "on display",
    image: mig15Image,
    specifications: {
      length: "11.05 m",
      wingspan: "10.08 m",
      height: "3.70 m",
      maxSpeed: "1,075 km/h",
      range: "1,424 km",
      engine: "Klimov VK-1 turbojet",
      armament: "1× 37mm cannon, 2× 23mm cannons"
    },
    history: "One of the first successful swept-wing jet fighters, the MiG-15 was a formidable opponent in the Korean War.",
    importance: "The MiG-15 represents the beginning of the jet age in aerial combat.",
    funFacts: [
      "Over 12,000 MiG-15s were built",
      "Its appearance in Korea shocked Western air forces"
    ]
  },
  {
    id: 11,
    name: "Fouga Magister",
    manufacturer: "Fouga",
    model: "CM.170",
    year_built: 1956,
    weight: 2150,
    organization_id: 1,
    crew_capacity: 2,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 11,
    display_section: "Training Section",
    qr_code_url: null,
    description: "French jet trainer with distinctive V-tail configuration.",
    status: "on display",
    image: fougaImage,
    specifications: {
      length: "10.06 m",
      wingspan: "12.15 m",
      height: "2.80 m",
      maxSpeed: "715 km/h",
      range: "1,200 km",
      engine: "2× Turbomeca Marboré IIA turbojets"
    },
    history: "Finland operated Fouga Magisters for jet pilot training during the Cold War era.",
    importance: "The Magister helped train a generation of Finnish jet pilots.",
    funFacts: [
      "Its distinctive V-tail made it instantly recognizable",
      "Over 900 were produced and used by many air forces"
    ]
  },
  {
    id: 12,
    name: "De Havilland Vampire",
    manufacturer: "De Havilland",
    model: "FB Mk 52",
    year_built: 1949,
    weight: 3304,
    organization_id: 1,
    crew_capacity: 1,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 12,
    display_section: "Training Section",
    qr_code_url: null,
    description: "British jet fighter that served as Finland's first jet aircraft.",
    status: "on display",
    image: vampireImage,
    specifications: {
      length: "9.37 m",
      wingspan: "11.58 m",
      height: "2.69 m",
      maxSpeed: "882 km/h",
      range: "1,960 km",
      engine: "de Havilland Goblin turbojet"
    },
    history: "Finland acquired Vampires in 1953, marking the Finnish Air Force's entry into the jet age.",
    importance: "The Vampire was Finland's first jet fighter, training pilots for the supersonic era.",
    funFacts: [
      "One of the first jet fighters to enter squadron service",
      "Its twin-boom design was distinctive and unusual"
    ]
  },
  {
    id: 13,
    name: "Pyry",
    manufacturer: "Valtion lentokonetehdas",
    model: "VL Pyry II",
    year_built: 1941,
    weight: 870,
    organization_id: 1,
    crew_capacity: 2,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 13,
    display_section: "Training Section",
    qr_code_url: null,
    description: "Finnish-designed and built primary trainer aircraft.",
    status: "on display",
    image: vihuriImage,
    specifications: {
      length: "7.76 m",
      wingspan: "9.80 m",
      height: "2.70 m",
      maxSpeed: "237 km/h",
      range: "600 km",
      engine: "Hirth HM 504 inverted inline"
    },
    history: "The Pyry was Finland's main primary trainer during WWII, training hundreds of Finnish pilots.",
    importance: "Represents Finnish aircraft manufacturing capability during the war years.",
    funFacts: [
      "Name means 'Blizzard' in Finnish",
      "Over 40 were built in Finland"
    ]
  },
  {
    id: 14,
    name: "Valmet L-70 Vinka",
    manufacturer: "Valmet",
    model: "L-70",
    year_built: 1975,
    weight: 800,
    organization_id: 1,
    crew_capacity: 2,
    passenger_capacity: 0,
    type: "military",
    museum_location_number: 14,
    display_section: "Training Section",
    qr_code_url: null,
    description: "Finnish primary trainer aircraft that served for over 30 years.",
    status: "on display",
    image: l70Image,
    specifications: {
      length: "7.50 m",
      wingspan: "9.64 m",
      height: "3.05 m",
      maxSpeed: "241 km/h",
      range: "610 km",
      engine: "Lycoming AEIO-360-A1B6"
    },
    history: "The L-70 Vinka trained Finnish Air Force pilots from 1980 to 2020, representing modern Finnish aviation industry.",
    importance: "Last Finnish-designed military trainer, representing post-war Finnish aerospace industry.",
    funFacts: [
      "Name means 'Slant' in Finnish",
      "Over 30 were built and some are still flying"
    ]
  },
  {
    id: 15,
    name: "Piper Cherokee",
    manufacturer: "Piper Aircraft",
    model: "PA-28-140",
    year_built: 1968,
    weight: 612,
    organization_id: null,
    crew_capacity: 1,
    passenger_capacity: 3,
    type: "general aviation",
    museum_location_number: 15,
    display_section: "Central Hall",
    qr_code_url: null,
    description: "Popular American general aviation aircraft representing civilian flying.",
    status: "on display",
    image: cherokeeImage,
    specifications: {
      length: "7.16 m",
      wingspan: "9.14 m",
      height: "2.24 m",
      maxSpeed: "226 km/h",
      range: "925 km",
      engine: "Lycoming O-320 horizontally-opposed"
    },
    history: "The Cherokee is one of the most successful general aviation aircraft ever produced, with over 32,000 built.",
    importance: "Represents the democratization of flying and the general aviation boom of the 1960s-70s.",
    funFacts: [
      "One of the most popular training aircraft ever",
      "Known for being easy to fly and maintain"
    ]
  }
];

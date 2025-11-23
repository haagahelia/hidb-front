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
    id: string;
    name: string;
    manufacturer: string;
    year: number;
    type: string;
    role: string;
    image: string;
    shortDescription: string;
    history: string;
    specifications: {
        crew: string;
        length: string;
        wingspan: string;
        height: string;
        maxSpeed: string;
        range: string;
        engine: string;
        armament?: string;
    };
    importantDates: {
        date: string;
        event: string;
    }[];
    funFacts: string[];
    importance: string;
}

export const aircraftData: Aircraft[] = [
    {
        id: "mig-21",
        name: "MiG-21 Fishbed",
        manufacturer: "Mikoyan-Gurevich",
        year: 1959,
        type: "Fighter Jet",
        role: "Interceptor and Fighter Aircraft",
        image: mig21Image,
        shortDescription: "Soviet supersonic fighter jet that served the Finnish Air Force during the Cold War era.",
        history:
            "The MiG-21 is one of the most produced supersonic jets in aviation history. Finland operated MiG-21bis variants from 1963 to 1998 as part of its air defense strategy during the Cold War. The Finnish Air Force received these aircraft through direct purchase from the Soviet Union. The MiG-21 played a crucial role in maintaining Finland's neutrality and territorial integrity during the tense Cold War period. Finnish pilots praised the aircraft for its simplicity, reliability, and exceptional performance at high altitudes.",
        specifications: {
            crew: "1",
            length: "15.76 m",
            wingspan: "7.15 m",
            height: "4.10 m",
            maxSpeed: "2,175 km/h (Mach 2.05)",
            range: "1,580 km",
            engine: "Tumansky R-25-300 afterburning turbojet",
            armament: "1× 23mm GSh-23 cannon, missiles and bombs on 4 hardpoints",
        },
        importantDates: [
            {date: "1963", event: "First MiG-21F-13 delivered to Finnish Air Force"},
            {date: "1978", event: "Finland receives upgraded MiG-21bis variants"},
            {date: "1998", event: "MiG-21 retired from Finnish Air Force service"},
        ],
        funFacts: [
            "Over 11,000 MiG-21s were produced, making it one of the most numerous jet fighters ever built",
            "Finnish pilots nicknamed it 'Balalaika' due to its distinctive triangular planform",
            "The MiG-21 could reach an altitude of 17,500 meters in just 7 minutes",
            "It remained in service with the Finnish Air Force for 35 years",
        ],
        importance:
            "The MiG-21 represents a significant chapter in Finnish aviation history, symbolizing Finland's unique position during the Cold War. It demonstrated Finland's ability to maintain modern air defenses while preserving its policy of neutrality between East and West. The aircraft showcases Soviet engineering excellence and the evolution of supersonic fighter design.",
    },
    {
        id: "douglas-dc3",
        name: "Douglas DC-3",
        manufacturer: "Douglas Aircraft Company",
        year: 1935,
        type: "Transport Aircraft",
        role: "Passenger and Cargo Transport",
        image: dc3Image,
        shortDescription:
            "Revolutionary transport aircraft that transformed commercial aviation and military airlift operations worldwide.",
        history:
            "The Douglas DC-3 revolutionized air transport in the 1930s and 1940s, making commercial air travel practical and profitable. Often called the aircraft that changed the world, the DC-3 was the first airliner that could make money by carrying passengers alone, without relying on mail contracts. During World War II, it was adapted as the C-47 Skytrain for military transport. Finnish airlines operated DC-3s extensively from the 1940s through the 1970s, connecting Finland to the world. The aircraft's reliability, durability, and excellent performance made it a favorite among pilots and passengers alike.",
        specifications: {
            crew: "2 pilots + 1 flight attendant",
            length: "19.66 m",
            wingspan: "28.96 m",
            height: "5.16 m",
            maxSpeed: "370 km/h",
            range: "2,400 km",
            engine: "2× Pratt & Whitney R-1830 Twin Wasp radial engines (1,200 hp each)",
        },
        importantDates: [
            {date: "1935", event: "First flight of the DC-3"},
            {date: "1947", event: "Aero O/Y (Finnair) introduces DC-3 to Finnish routes"},
            {date: "1941-1945", event: "Military C-47 variants serve extensively in WWII"},
            {date: "1970s", event: "Gradual retirement from commercial service in Finland"},
        ],
        funFacts: [
            "Over 16,000 DC-3s and military variants were produced",
            "Many DC-3s are still flying today, over 85 years after the first flight",
            "It could carry 21-32 passengers in comfort previously unknown in air travel",
            "The DC-3 established over 80% of the world's airline routes in the 1940s",
            "Its military version, the C-47, dropped paratroopers on D-Day",
        ],
        importance:
            "The DC-3 is arguably the most significant transport aircraft in aviation history. It made air travel reliable, comfortable, and economically viable. In Finland, it connected a remote Nordic nation to the rest of Europe and beyond, playing a vital role in post-war reconstruction and economic development. The DC-3 set standards for aircraft reliability and passenger service that influenced all subsequent airliner designs.",
    },
    {
        id: "messerschmitt-bf109",
        name: "Messerschmitt Bf 109",
        manufacturer: "Messerschmitt AG",
        year: 1937,
        type: "Fighter Aircraft",
        role: "Interceptor and Fighter-Bomber",
        image: bf109Image,
        shortDescription:
            "Legendary German fighter that served with distinction in the Finnish Air Force during World War II.",
        history:
            "The Messerschmitt Bf 109 was one of the most advanced fighters of its era and the backbone of the Luftwaffe during World War II. Finland acquired Bf 109G variants in 1943 to strengthen its air defenses during the Continuation War against the Soviet Union. Finnish pilots achieved remarkable success with the Bf 109, with several aces scoring multiple victories. The aircraft's excellent performance, particularly at high altitudes, superior firepower, and advanced design made it highly effective in Finnish hands. After the war, Finland continued to operate the Bf 109G until 1954, making the Finnish Air Force the last military operator of this iconic fighter.",
        specifications: {
            crew: "1",
            length: "8.95 m",
            wingspan: "9.92 m",
            height: "2.60 m",
            maxSpeed: "640 km/h at 6,000 m",
            range: "850 km",
            engine: "Daimler-Benz DB 605A liquid-cooled V-12 (1,475 hp)",
            armament: "1× 20mm MG 151 cannon, 2× 13mm MG 131 machine guns, bombs or rockets",
        },
        importantDates: [
            {date: "1943", event: "First Bf 109G-2 delivered to Finland"},
            {date: "1944", event: "Finnish Bf 109 pilots achieve numerous aerial victories"},
            {date: "1944-1945", event: "Used against former German allies in Lapland War"},
            {date: "1954", event: "Last Bf 109 retired from Finnish Air Force service"},
        ],
        funFacts: [
            "Over 34,000 Bf 109s were produced, more than any other fighter aircraft in history",
            "Finnish ace Eino Ilmari Juutilainen scored 34 of his 94 victories flying the Bf 109",
            "The Bf 109 remained competitive throughout WWII despite being designed in the 1930s",
            "Finland was the last country to operate the Bf 109 in military service",
            "Finnish Bf 109s were painted in distinctive schemes with blue swastikas (ancient Finnish symbol)",
        ],
        importance:
            "The Bf 109 represents a pinnacle of fighter aircraft design from the WWII era. For Finland, it provided desperately needed air superiority capability during critical wartime periods. The aircraft's service with the Finnish Air Force showcases Finland's complex wartime relationships and its pilots' exceptional skill. The Bf 109 in Finnish service achieved one of the highest victory-to-loss ratios of any air force, cementing its place in Finnish military aviation history.",
    },
    {
        id: "brewster-buffalo",
        name: "Brewster F2A Buffalo",
        manufacturer: "Brewster Aeronautical Corporation",
        year: 1939,
        type: "Fighter Aircraft",
        role: "Fighter and Interceptor",
        image: brewsterImage,
        shortDescription:
            "American fighter aircraft that became one of the most successful fighters in Finnish Air Force history.",
        history:
            "The Brewster Buffalo was largely unsuccessful in American and British service, but it became a legend in Finnish hands. Finland acquired 44 Buffalos starting in 1940, and Finnish pilots achieved an exceptional kill ratio of 32:1 with this aircraft during the Continuation War. The Buffalo's excellent maneuverability at low to medium altitudes, combined with Finnish pilots' tactical expertise, made it a formidable opponent against Soviet aircraft. Finnish aces like Hans Wind achieved many of their victories flying the Buffalo. The aircraft served until 1948, long outlasting its service in other air forces.",
        specifications: {
            crew: "1",
            length: "8.03 m",
            wingspan: "10.67 m",
            height: "3.68 m",
            maxSpeed: "517 km/h",
            range: "1,553 km",
            engine: "Wright R-1820-G5 Cyclone radial (1,200 hp)",
            armament: "4× 12.7mm machine guns",
        },
        importantDates: [
            {date: "1940", event: "First Buffalo fighters delivered to Finland"},
            {date: "1941-1944", event: "Buffalo achieves legendary status with 32:1 kill ratio"},
            {date: "1948", event: "Retired from Finnish Air Force service"},
        ],
        funFacts: [
            "Finnish pilot Hans Wind scored 39 of his 75 victories flying the Buffalo",
            "The Buffalo's Finnish kill ratio of 32:1 is among the highest ever recorded",
            "While considered obsolete elsewhere, it excelled in Finnish service",
            "Finnish pilots affectionately called it 'Taivaan helmi' (Pearl of the Sky)",
        ],
        importance:
            "The Brewster Buffalo's service with Finland demonstrates how aircraft performance depends heavily on tactics, pilot skill, and operational context. Despite being considered a failure in American and British service, it became one of the most successful fighters in Finnish aviation history, achieving an extraordinary combat record.",
    },
    {
        id: "gloster-gladiator",
        name: "Gloster Gladiator",
        manufacturer: "Gloster Aircraft Company",
        year: 1937,
        type: "Biplane Fighter",
        role: "Fighter Aircraft",
        image: gladiatorImage,
        shortDescription:
            "British biplane fighter that served as the last biplane fighter in Finnish Air Force service.",
        history:
            "The Gloster Gladiator was the RAF's last biplane fighter and one of the first to feature an enclosed cockpit. Finland acquired 30 Gladiators from Britain in 1940 during the Winter War. Despite being obsolete by WWII standards, the Gladiator served admirably in Finnish hands during both the Winter War and Continuation War. Its excellent maneuverability made it effective in dogfights, though its low speed was a disadvantage. The aircraft remained in service until 1945, participating in many significant aerial battles.",
        specifications: {
            crew: "1",
            length: "8.36 m",
            wingspan: "9.83 m",
            height: "3.53 m",
            maxSpeed: "414 km/h",
            range: "708 km",
            engine: "Bristol Mercury IX radial (840 hp)",
            armament: "4× .303 Browning machine guns",
        },
        importantDates: [
            {date: "1940", event: "Delivered to Finland during Winter War"},
            {date: "1941-1944", event: "Served throughout Continuation War"},
            {date: "1945", event: "Retired from combat service"},
        ],
        funFacts: [
            "Last biplane fighter in RAF service before monoplanes took over",
            "Featured an enclosed cockpit, unusual for biplanes of the era",
            "Faith, Hope, and Charity were famous Gladiators defending Malta",
            "Surprisingly effective despite being outdated by WWII",
        ],
        importance:
            "The Gladiator represents the transition era between biplane and monoplane fighters. In Finnish service, it demonstrated that even older aircraft could be effective when used appropriately, bridging the gap until more modern fighters arrived.",
    },
    {
        id: "fokker-d21",
        name: "Fokker D.XXI",
        manufacturer: "Fokker",
        year: 1936,
        type: "Fighter Aircraft",
        role: "Fighter and Interceptor",
        image: fokkerImage,
        shortDescription: "Dutch-designed fighter that became a backbone of Finnish air defense in the Winter War.",
        history:
            "The Fokker D.XXI was designed in the Netherlands but found its greatest success with the Finnish Air Force. Finland built 93 D.XXIs under license, and they formed the bulk of Finnish fighter strength during the Winter War of 1939-1940. Despite being somewhat outdated, Finnish pilots achieved a favorable kill ratio against Soviet aircraft. The D.XXI was known for its rugged construction, good handling characteristics, and reliability in harsh winter conditions. It continued to serve in training roles until 1948.",
        specifications: {
            crew: "1",
            length: "8.20 m",
            wingspan: "11.00 m",
            height: "2.95 m",
            maxSpeed: "460 km/h",
            range: "950 km",
            engine: "Bristol Mercury VIII radial (830 hp)",
            armament: "4× 7.7mm machine guns",
        },
        importantDates: [
            {date: "1938", event: "First Finnish-built D.XXI completed"},
            {date: "1939-1940", event: "Primary fighter during Winter War"},
            {date: "1944", event: "Withdrawn from frontline service"},
            {date: "1948", event: "Final retirement from training duties"},
        ],
        funFacts: [
            "Finland built more D.XXIs than the Netherlands, the country of origin",
            "Performed exceptionally well in Finnish winter conditions",
            "Simple, rugged design made field maintenance easier",
            "Several Finnish aces scored victories flying the D.XXI",
        ],
        importance:
            "The Fokker D.XXI was crucial to Finland's air defense during the Winter War. Its successful service demonstrates Finland's ability to license-build foreign designs and adapt them to local conditions and needs.",
    },
    {
        id: "hawker-hurricane",
        name: "Hawker Hurricane Mk I",
        manufacturer: "Hawker Aircraft",
        year: 1937,
        type: "Fighter Aircraft",
        role: "Fighter and Fighter-Bomber",
        image: hurricaneImage,
        shortDescription:
            "Legendary British fighter that played a vital role in the Battle of Britain and served with distinction in Finland.",
        history:
            "The Hawker Hurricane was the RAF's first monoplane fighter and the aircraft that won the Battle of Britain. Finland acquired 12 Hurricanes from Britain in 1940, which served until 1944. While overshadowed by the Spitfire in popular history, the Hurricane actually shot down more enemy aircraft during the Battle of Britain. In Finnish service, it was valued for its rugged construction, ease of maintenance, and stable gun platform. The Hurricane could absorb significant battle damage and continue flying.",
        specifications: {
            crew: "1",
            length: "9.84 m",
            wingspan: "12.19 m",
            height: "3.99 m",
            maxSpeed: "547 km/h",
            range: "965 km",
            engine: "Rolls-Royce Merlin III V-12 (1,030 hp)",
            armament: "8× .303 Browning machine guns",
        },
        importantDates: [
            {date: "1940", event: "Entered service with Finnish Air Force"},
            {date: "1940", event: "Hero of the Battle of Britain (RAF service)"},
            {date: "1944", event: "Withdrawn from Finnish service"},
        ],
        funFacts: [
            "Shot down more enemy aircraft than Spitfires in Battle of Britain",
            "Could be repaired in the field with basic tools due to fabric-covered fuselage",
            "Over 14,500 Hurricanes were built in various versions",
            "Served in every major theater of WWII",
        ],
        importance:
            "The Hurricane represents the RAF's modernization before WWII and played a crucial role in Britain's survival. In Finnish service, it provided valuable combat experience with modern monoplane fighters.",
    },
    {
        id: "dh-mosquito",
        name: "De Havilland Mosquito",
        manufacturer: "De Havilland",
        year: 1941,
        type: "Bomber/Fighter",
        role: "Multi-role Combat Aircraft",
        image: mosquitoImage,
        shortDescription: "The legendary 'Wooden Wonder' - one of WWII's most versatile and fastest combat aircraft.",
        history:
            "The De Havilland Mosquito was one of WWII's most remarkable aircraft, constructed primarily of wood to save strategic materials. Its combination of speed, range, and payload made it invaluable in various roles: bomber, fighter, reconnaissance, and night fighter. The Mosquito was so fast it often flew unarmed bomber missions, outrunning enemy fighters. While not operated by Finland during the war, this example in the museum represents Allied aviation technology and is displayed to show the diversity of WWII aircraft designs.",
        specifications: {
            crew: "2",
            length: "12.34 m",
            wingspan: "16.51 m",
            height: "4.65 m",
            maxSpeed: "668 km/h",
            range: "2,400 km",
            engine: "2× Rolls-Royce Merlin V-12 (1,460 hp each)",
            armament: "4× 20mm cannons, 4× .303 machine guns, 2,000 kg bombs",
        },
        importantDates: [
            {date: "1941", event: "First flight of prototype"},
            {date: "1942-1945", event: "Served in multiple roles throughout WWII"},
            {date: "1945", event: "Among the fastest operational aircraft of WWII"},
        ],
        funFacts: [
            "Nicknamed 'Wooden Wonder' due to wooden construction",
            "One of the fastest aircraft of WWII, often flew without defensive armament",
            "Used in precision raids, including attacks on Gestapo headquarters",
            "Versatile design allowed use as bomber, fighter, photo-reconnaissance, and night fighter",
        ],
        importance:
            "The Mosquito demonstrates innovative engineering, showing that unconventional materials and designs can produce outstanding results. It proved that speed could be a better defense than armor and armament.",
    },
    {
        id: "saab-draken",
        name: "Saab 35 Draken",
        manufacturer: "Saab",
        year: 1955,
        type: "Fighter Jet",
        role: "Interceptor and Fighter",
        image: drakenImage,
        shortDescription:
            "Swedish supersonic fighter with distinctive double-delta wing design that served Nordic air forces.",
        history:
            "The Saab 35 Draken (Dragon) was a Swedish-designed supersonic fighter featuring an innovative double-delta wing configuration. While primarily serving with the Swedish Air Force, the Draken represents the era of Nordic cooperation in defense. Finland operated similar Swedish aircraft later. The Draken was one of the first fully supersonic aircraft produced in Western Europe. Its distinctive design allowed for excellent high-speed performance while maintaining good low-speed handling.",
        specifications: {
            crew: "1",
            length: "15.35 m",
            wingspan: "9.42 m",
            height: "3.89 m",
            maxSpeed: "2,125 km/h (Mach 2.0)",
            range: "3,250 km",
            engine: "Volvo Flygmotor RM6C afterburning turbojet",
            armament: "1× 30mm cannon, missiles on 6 hardpoints",
        },
        importantDates: [
            {date: "1955", event: "First flight"},
            {date: "1960", event: "Entered service with Swedish Air Force"},
            {date: "1999", event: "Retired from Swedish service"},
        ],
        funFacts: [
            "First Western European aircraft capable of sustained Mach 2 flight",
            "Innovative double-delta wing design improved both high and low-speed performance",
            "Could operate from reinforced public roads as backup airfields",
            "Exported to Denmark, Finland (later models), and Austria",
        ],
        importance:
            "The Draken showcases Swedish aerospace engineering excellence and Nordic self-reliance in defense technology during the Cold War.",
    },
    {
        id: "mig-15",
        name: "Mikoyan-Gurevich MiG-15",
        manufacturer: "Mikoyan-Gurevich",
        year: 1947,
        type: "Fighter Jet",
        role: "Fighter and Interceptor",
        image: mig15Image,
        shortDescription:
            "Soviet jet fighter that revolutionized air combat in the Korean War and served with numerous air forces.",
        history:
            "The MiG-15 was one of the first successful swept-wing jet fighters and proved to be a formidable opponent in the Korean War. While Finland did not operate the MiG-15 extensively, this aircraft in the museum represents Soviet jet aviation development. The MiG-15 was simple, rugged, and easy to maintain, qualities that made it popular with many air forces worldwide. Over 18,000 were built, making it one of the most-produced jet aircraft in history.",
        specifications: {
            crew: "1",
            length: "10.10 m",
            wingspan: "10.08 m",
            height: "3.70 m",
            maxSpeed: "1,075 km/h",
            range: "1,200 km",
            engine: "Klimov VK-1 turbojet (26.5 kN thrust)",
            armament: "1× 37mm cannon, 2× 23mm cannons",
        },
        importantDates: [
            {date: "1947", event: "First flight"},
            {date: "1950-1953", event: "Combat debut in Korean War"},
            {date: "1950s-1980s", event: "Served with numerous air forces worldwide"},
        ],
        funFacts: [
            "Over 18,000 built, one of most-produced jet aircraft ever",
            "Could reach higher altitudes faster than contemporary Western fighters",
            "Simple and rugged design made it easy to maintain in harsh conditions",
            "Inspired development of the F-86 Sabre's improvements",
        ],
        importance:
            "The MiG-15 revolutionized jet fighter design and forced Western nations to accelerate their jet fighter programs. It represents the rapid advancement of aviation technology in the early Cold War.",
    },
    {
        id: "fouga-magister",
        name: "Fouga CM.170 Magister",
        manufacturer: "Fouga",
        year: 1952,
        type: "Trainer Jet",
        role: "Advanced Jet Trainer",
        image: fougaImage,
        shortDescription: "French jet trainer with distinctive V-tail that served with the Finnish Air Force.",
        history:
            "The Fouga Magister was one of the first jet trainers specifically designed for that role. Finland acquired Magisters in 1958 to train pilots for jet fighters. Its distinctive butterfly or V-tail design was unusual but effective. The Magister was known for excellent handling characteristics, making it ideal for training. It served with the Finnish Air Force until 1984, training generations of Finnish jet pilots. The aircraft's light construction and responsive controls gave student pilots an excellent introduction to jet flying.",
        specifications: {
            crew: "2 (student and instructor)",
            length: "10.06 m",
            wingspan: "12.15 m",
            height: "2.80 m",
            maxSpeed: "715 km/h",
            range: "1,200 km",
            engine: "2× Turbomeca Marboré IIA turbojets",
        },
        importantDates: [
            {date: "1958", event: "Entered service with Finnish Air Force"},
            {date: "1958-1984", event: "Trained generations of Finnish jet pilots"},
            {date: "1984", event: "Retired from Finnish service"},
        ],
        funFacts: [
            "Distinctive V-tail (butterfly tail) was its trademark feature",
            "First jet trainer designed from the ground up for training",
            "Over 900 built, serving with 18 countries",
            "Still flying in private hands and with some air forces",
        ],
        importance:
            "The Magister enabled Finland to train jet pilots domestically, a crucial capability for maintaining modern air forces. It represents the transition from propeller trainers to jet training aircraft.",
    },
    {
        id: "dh-vampire",
        name: "De Havilland Vampire",
        manufacturer: "De Havilland",
        year: 1943,
        type: "Fighter Jet",
        role: "Fighter and Fighter-Bomber",
        image: vampireImage,
        shortDescription:
            "Early British jet fighter with distinctive twin-boom design that served with the Finnish Air Force.",
        history:
            "The De Havilland Vampire was one of Britain's first jet fighters and featured an unusual twin-boom design. Finland acquired Vampires in 1953 as its first jet fighters, marking the Finnish Air Force's transition to the jet age. The Vampire served until 1966, providing valuable experience in jet operations. Its docile handling made it an excellent first jet for pilots transitioning from propeller aircraft. The twin-boom design was necessitated by the short engine exhaust pipe of early centrifugal turbojets.",
        specifications: {
            crew: "1",
            length: "9.37 m",
            wingspan: "11.58 m",
            height: "2.69 m",
            maxSpeed: "882 km/h",
            range: "1,960 km",
            engine: "de Havilland Goblin turbojet (15.6 kN thrust)",
            armament: "4× 20mm Hispano cannons, rockets or bombs",
        },
        importantDates: [
            {date: "1953", event: "First jets delivered to Finnish Air Force"},
            {date: "1953-1966", event: "Served as Finland's primary jet fighter"},
            {date: "1966", event: "Retired from Finnish service"},
        ],
        funFacts: [
            "Finland's first jet fighter aircraft",
            "Distinctive twin-boom design made it instantly recognizable",
            "Good handling characteristics made it popular with pilots",
            "Served in over 30 countries worldwide",
        ],
        importance:
            "The Vampire marked Finland's entry into the jet age, providing the foundation for future jet operations and pilot training. It represents a pivotal moment in Finnish Air Force modernization.",
    },
    {
        id: "valmet-vihuri",
        name: "Valmet Vihuri",
        manufacturer: "Valmet",
        year: 1951,
        type: "Trainer Aircraft",
        role: "Primary Trainer",
        image: vihuriImage,
        shortDescription: "Finnish-built primary trainer that served as the foundation for pilot training in Finland.",
        history:
            "The Valmet Vihuri (Whirlwind) was a Finnish-designed and built primary trainer developed after WWII. It represented Finland's capability to design and manufacture its own training aircraft. The Vihuri served from 1951 to 1959, training hundreds of Finnish pilots. Its simple, rugged design made it ideal for basic flight training. The aircraft featured tandem seating and was known for forgiving handling characteristics, perfect for student pilots taking their first steps in aviation.",
        specifications: {
            crew: "2 (student and instructor)",
            length: "7.85 m",
            wingspan: "10.64 m",
            height: "2.90 m",
            maxSpeed: "220 km/h",
            range: "600 km",
            engine: "de Havilland Gipsy Major 10 (145 hp)",
        },
        importantDates: [
            {date: "1951", event: "First flight and entry into service"},
            {date: "1951-1959", event: "Trained generations of Finnish pilots"},
            {date: "1959", event: "Retired from service"},
        ],
        funFacts: [
            "First trainer aircraft designed and built in Finland after WWII",
            "Name 'Vihuri' means whirlwind in Finnish",
            "Simple design made maintenance easy in remote airfields",
            "Helped establish Finland's post-war aviation industry",
        ],
        importance:
            "The Vihuri represents Finland's post-war aviation industry development and self-sufficiency in pilot training. It laid the foundation for future Finnish aerospace projects.",
    },
    {
        id: "valmet-l70",
        name: "Valmet L-70 Miltrainer",
        manufacturer: "Valmet",
        year: 1975,
        type: "Trainer Aircraft",
        role: "Military Trainer and Light Attack",
        image: l70Image,
        shortDescription:
            "Modern Finnish military trainer with turboprop engine that served multiple roles in the Finnish Air Force.",
        history:
            "The Valmet L-70 Miltrainer was developed in the 1970s as a modern turboprop trainer to replace older piston-engine trainers. It could be used for basic and advanced training, as well as light attack and reconnaissance roles. The L-70 served with the Finnish Air Force from 1975 to 2000, representing Finnish aerospace industry capabilities during the Cold War. Its versatility and reliability made it an effective multi-role aircraft. The Finnish company Valmet (later Valtion Metallitehtaat) demonstrated Finland's continued capability in aircraft manufacturing.",
        specifications: {
            crew: "2 (student and instructor)",
            length: "8.02 m",
            wingspan: "9.72 m",
            height: "3.28 m",
            maxSpeed: "410 km/h",
            range: "1,000 km",
            engine: "Allison 250-B17D turboprop (420 hp)",
            armament: "Optional gun pods, rockets, or light bombs",
        },
        importantDates: [
            {date: "1975", event: "Entered service with Finnish Air Force"},
            {date: "1975-2000", event: "Served in training and light attack roles"},
            {date: "2000", event: "Retired from Finnish service"},
        ],
        funFacts: [
            "One of the last military aircraft designed and built in Finland",
            "Could be armed for light attack missions",
            "Turboprop engine provided good fuel efficiency",
            "Some continue flying in civil use",
        ],
        importance:
            "The L-70 demonstrates Finland's continued aerospace manufacturing capability during the Cold War era and represents the modernization of flight training with turboprop technology.",
    },
    {
        id: "piper-cherokee",
        name: "Piper PA-28 Cherokee",
        manufacturer: "Piper Aircraft",
        year: 1960,
        type: "Light Aircraft",
        role: "General Aviation Trainer",
        image: cherokeeImage,
        shortDescription: "Popular American general aviation aircraft used for civilian flight training in Finland.",
        history:
            "The Piper Cherokee is one of the most successful light aircraft ever produced, with over 32,000 built. It has been used extensively in Finland for civilian flight training and private flying. The Cherokee's simple design, good handling, and reliability made it an ideal trainer and personal aircraft. It represents the general aviation sector that complements military aviation. Many Finnish Air Force pilots began their aviation careers in aircraft like the Cherokee before moving to military trainers.",
        specifications: {
            crew: "1 pilot + 3 passengers",
            length: "7.16 m",
            wingspan: "9.14 m",
            height: "2.21 m",
            maxSpeed: "226 km/h",
            range: "925 km",
            engine: "Lycoming O-360 (180 hp)",
        },
        importantDates: [
            {date: "1960", event: "First flight of Cherokee"},
            {date: "1961-present", event: "Continuous use in flight training worldwide"},
            {date: "1970s-present", event: "Widespread use in Finnish civilian aviation"},
        ],
        funFacts: [
            "Over 32,000 Cherokees produced since 1960",
            "Still in production today as updated models",
            "One of the most common training aircraft worldwide",
            "Simple, robust design makes it easy to maintain and fly",
        ],
        importance:
            "The Cherokee represents civilian aviation and flight training infrastructure that supports military aviation. It shows the complete aviation ecosystem from basic training to advanced military operations.",
    },
];

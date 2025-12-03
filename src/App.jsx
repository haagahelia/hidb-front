import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/Index";
import Aircraft from "./pages/Aircraft";
import AircraftDetail from "./pages/AircraftDetail";
import Organization from "./pages/Organization";
import OrganizationDetail from "./pages/OrganizationDetail";
// import MuseumMap from "./pages/MuseumMap";
// import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/aircraft" element={<Aircraft />} />
                    <Route path="/aircraft/:id" element={<AircraftDetail />} />
                    <Route path="/organization" element={<Organization />} />
                    <Route path="/organization/:id" element={<OrganizationDetail />} />

                    {/* <Route path="/map" element={<MuseumMap />} />
                    <Route path="/about" element={<About />} /> */}
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;

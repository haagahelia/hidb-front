import { Home, Scan, Map } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-md flex items-center justify-between px-8 py-2">
        <button
          className="flex flex-col items-center gap-1 text-xs focus:outline-none"
          aria-label="Home"
          onClick={() => navigate("/home")}
        >
          <Home className="w-6 h-6" />
          <span>Home</span>
        </button>
        <button
          className="flex flex-col items-center gap-1 text-xs focus:outline-none"
          aria-label="QR"
          onClick={() => navigate("/scan")}
        >
          <Scan className="w-6 h-6" />
          <span>Scan</span>
        </button>

        <button
          className="flex flex-col items-center gap-1 text-xs focus:outline-none"
          aria-label="Map"
          onClick={() => navigate("/map")}
        >
          <Map className="w-6 h-6" />
          <span>Map</span>
        </button>
      </div>
    </nav>
  );
}

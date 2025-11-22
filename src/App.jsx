import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Components/HomeScreen";
import ScanScreen from "./Components/ScanScreen";
import Map from "./Components/Map";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/scan" element={<ScanScreen />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;

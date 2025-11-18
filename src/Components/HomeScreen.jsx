import HomeScreenHeader from "./HomeScreenComponents/HomeScreenHeader";
import List from "./HomeScreenComponents/List";
import NavBar from "./HomeScreenComponents/NavBar";
export default function HomeScreen() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF]">
      <HomeScreenHeader />
      <List />
      <NavBar />
    </div>
  );
}

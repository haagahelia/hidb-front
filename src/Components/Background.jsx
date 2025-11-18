import Header from "./Header";
import List from "./List";
import NavBar from "./NavBar";
export default function Background() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF]">
      <Header />
      <List />
      <NavBar />
    </div>
  );
}

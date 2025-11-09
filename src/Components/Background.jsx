import Header from "./Header";
import List from "./List";
import PlaneIndividual from "./Individual";

export default function Background() {
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF]">
      <Header />
      <List />
      <PlaneIndividual/>
    </div>
  );
}

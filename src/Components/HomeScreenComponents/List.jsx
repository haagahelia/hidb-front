import Card from "../SmallComponents/Card";
import { mockData } from "../../mock_data";

export default function List() {
  return (
    <div className="w-full bg-[#FFFFFF] p-2 flex flex-col">
      <h2 className="font-semibold text-xl mb-4">Explore</h2>
      <div className="overflow-x-auto -mx-2">
        <div className="flex gap-4 px-2">
          {mockData.map((plane) => (
            <Card name={plane.name} img={plane.image} year={plane.year} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Search, TextAlignJustify, Plane } from "lucide-react";
export default function HomeScreenHeader() {
  return (
    <div className="w-full h-60 bg-[#FFFFFF] flex flex-col justify-center">
      <div className="w-full bbg-[#FFFFFF] h-15 flex flex-row justify-between items-center p-2">
        <Plane />
        <div className="flex flex-row justify-between w-17">
          <Search />
          <TextAlignJustify />
        </div>
      </div>

      <div className="w-full h-30 bg-[#FFFFFF] p-2 ">
        <h1 className="text-2xl font-semibold">Welcome to Plane Museum.</h1>
        <h1 className="text-2xl font-semibold">Scan for more.</h1>
        <p className="text-[11px] font-regular">Today 9:00 - 17:00</p>
      </div>
    </div>
  );
}

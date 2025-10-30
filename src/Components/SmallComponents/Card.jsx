export default function Card({ name, year, img }) {
  return (
    <div className="w-80 flex-shrink-0 overflow-hidden bg-white shadow ring-1 ring-black/5">
      {/* Image */}
      <img src={img} className="w-full h-100 object-cover" />

      {/* Info panel */}
      <div className="bg-[#F1F1F1] p-5">
        <h3 className="text-2xl font-semibold leading-tight text-gray-900">
          {name}
        </h3>
        <p className="mt-2 text-sm tracking-wide text-gray-500">
          First Introduced in {year}
        </p>
      </div>
    </div>
  );
}

export default function BestDayCard() {
  return (
    <div className="bg-white w-260 h-auto rounded-xl p-4 space-y-5 shadow-xl border-gray-200">
      <article className="p-5 bg-white rounded-xl shadow w-[300px]">
        <h2 className="text-lg font-semibold">
          Best Day: <strong className="text-green-600">Sat</strong>
        </h2>
        <p className="text-sm text-gray-700">Average sales of $7,200</p>
      </article>
    </div>
  );
}

export default function BestDayCard() {
  return (
    <div className="bg-white w-140 mt-5 h-auto rounded-xl p-4 space-y-5 shadow-xl border border-gray-200 mb-5">
      <article className="p-4 mt-auto bg-green-200 rounded-xl shadow .w-[560px] border border-green-400 .mt-4 ml-1">
        <h2 className="text-lg font-semibold">
          Best Day: <strong className="text-green-500">Sat</strong>
        </h2>
        <p className="text-sm text-gray-700">Average sales of $7,200</p>
      </article>
    </div>
  );
}

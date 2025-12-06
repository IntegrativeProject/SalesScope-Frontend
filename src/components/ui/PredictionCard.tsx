import LineChart from "../charts/LineChart";

  export default function PredictionCard() {
    return (
      <section className="bg-white  w-320 h-auto rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-end ">
        <div className="">

          <LineChart h="350px" w="1200px"/>
        </div>
        <article className="p-3 bg-blue-100 rounded-xl shadow border border-blue-300">
          <h2 className="text-lg font-semibold">
            Prediction for the coming weeks:
          </h2>
          <p className="text-sm text-gray-600 font-semibold">The last few week show a growth trend of 90%. It is recommended to increase stock levels of popular products</p>
        </article>
      </section>
    );
  }
  
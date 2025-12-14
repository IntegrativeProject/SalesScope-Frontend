

import AnalysisCards from "@/components/ui/AnalysisCards";
import RecommendationsCard from "@/components/ui/RecommendationsCard";
import StatisticsCard from "@/components/ui/StatisticsCard";

import BestDayCard from "../../../components/ui/BestDayCard";
import PredictionCard from "@/components/ui/PredictionCard";


export default function Page() {
 

  return (
    <div>
       <h1 className="p-1 ml-9 font-bold  text-4xl">Analysis and Predictions</h1>
      <h2 className="p-1 ml-9 font-semibold text-gray-700 text-xl mb-7">Insights and forecasts based on historical data</h2>
      <div className="flex space-x-20 justify-center  ">
        <AnalysisCards
          footerText="Prediction based on the last 3 weeks"
          price={30.067}
          mainText="Moving Average (3 weeks)"
          borderColor="border-[#4880FF]"
        />
        <AnalysisCards
          footerText="Prediction based on the last 3 weeks"
          price={28.4}
          mainText="Moving Average (5 weeks)"
          borderColor="border-[#00D824]"
        />
        <AnalysisCards
          footerText="Prediction based on the last 3 weeks"
          price={33.436}
          mainText="Linear Regression"
          borderColor="border-[#CD07E3]"
        />
      </div>
      <div className="mt-10  flex justify-center">
        <PredictionCard />
      </div>
      <div>
      <div className="flex justify-center gap-7 mt-5">
        <BestDayCard average={8288} day="Friday" />
        <StatisticsCard />
      </div>
      <div className="flex justify-center mt-5">
        <RecommendationsCard />
      </div>
      </div>
    </div>
  );
}

import AnalysisCards from "@/components/ui/AnalysisCards";
import RecommendationsCard from "@/components/ui/RecommendationsCard";
import StatisticsCard from "@/components/ui/StatisticsCard";
import React from "react";
import BestDayCard from "../../../components/ui/BestDayCard";
import PredictionCard from "@/components/ui/PredictionCard";

export default function page() {
  return (
    <div>
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
      <div className="mt-20 mb-10 flex justify-center">
        <PredictionCard/>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <BestDayCard average={7200} day="Saturday" />
        <StatisticsCard />
      </div>
      <div className="flex justify-center mt-2">
        <RecommendationsCard />
      </div>
    </div>
  );
}

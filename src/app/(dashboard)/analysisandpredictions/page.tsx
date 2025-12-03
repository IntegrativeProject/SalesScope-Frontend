import AnalysisCards from "@/components/ui/AnalysisCards";
import RecommendationsCard from "@/components/ui/RecommendationsCard";
import StatisticsCard from "@/components/ui/StatisticsCard";
import React from "react";

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
      <div>
        <StatisticsCard/>
      </div>
      <div className="flex justify-center">

      <RecommendationsCard/>
      </div>
    </div>
  );
}

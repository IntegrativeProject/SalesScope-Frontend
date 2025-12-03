import AnalysisCards from "@/components/ui/AnalysisCards";
import React from "react";

export default function page() {
  return (
    <div className="flex space-x-20 justify-center  ">
      <AnalysisCards
        footerText="Prediction based on the last 3 weeks"
        price={30.067}
        mainText="Moving Average (3 weeks)"
        borderColor="border-[#4880FF]"
      />
      <AnalysisCards
        footerText="Prediction based on the last 3 weeks"
        price={28.400}
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
  );
}

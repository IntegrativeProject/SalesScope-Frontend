import AnalysisCards from "@/components/ui/AnalysisCards";
import React from "react";

export default function page() {
  return (
    <div className="flex space-x-20 justify-center  ">
      <AnalysisCards
        mainText="Moving Average (3 weeks)"
        borderColor="border-[#4880FF]"
      />
      <AnalysisCards
        mainText="Moving Average (5 weeks)"
        borderColor="border-[#00D824]"
      />
      <AnalysisCards
        mainText="Linear Regression"
        borderColor="border-[#CD07E3]"
      />
    </div>
  );
}

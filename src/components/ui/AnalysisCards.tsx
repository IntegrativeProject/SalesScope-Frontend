import React from "react";


type CardProps ={
    borderColor:string
    mainText:string

}


export default function AnalysisCards({borderColor,mainText}:CardProps) {
  return (
    <div
      className={`relative bg-white w-95 h-55 rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] hover:scale-101 border-l-7 ${borderColor} `}
    >
      <h1 className="text-gray-500 p-4 ">{mainText}</h1>
      <div className="flex ">
        <h1 className="font-bold  text-4xl ml-15 mt-4 ">
          
        </h1>
        
      </div>
      <h3 className=" text-gray-500 p-4 mt-8 ml-8">
        <h1>dsa</h1>
        <h1>fsf</h1>
      </h3>
    </div>
  );
}

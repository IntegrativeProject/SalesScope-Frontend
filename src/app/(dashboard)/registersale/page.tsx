import ListContainer from "@/components/ui/ListContainer";
import RegisterForm from "@/components/ui/RegisterForm";
import React from "react";

export default function page() {
  return (
    <div> 
      <h1 className="p-1 ml-9 font-bold  text-4xl "> Register sale </h1>

    <div className="flex justify-center  space-x-10 p-5 mt-5 b rounded-2xl" >
      <div className="">
        <RegisterForm />
      </div>
      <div>
        <ListContainer />
      </div>
    </div>
    </div>
  );
}

import React from "react";
import { HomeSearch } from "./HomeSearch";
import { PaymentsList } from "./PaymentsList";

export function HomePage(){
  return(
    <div className="p-4 px-5">
      <HomeSearch/>
      <PaymentsList/>
    </div>
  )
}
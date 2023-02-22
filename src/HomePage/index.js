import React from "react";
import { HomeSearch } from "./HomeSearch";
import { PaymentsList } from "./PaymentsList";

export function HomePage(){
  return(
    <div className="">
      <HomeSearch/>
      <PaymentsList/>
    </div>
  )
}
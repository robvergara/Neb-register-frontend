import React from "react";
import { HomeSearch } from "./HomeSearch";
import { PaymentsList } from "./PaymentsList";

export function HomePage(){
  return(
    <div className="card mb-3">
      <HomeSearch/>
      <PaymentsList/>
    </div>
  )
}
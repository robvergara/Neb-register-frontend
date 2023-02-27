import React from "react";
import { HomeSearch } from "./HomeSearch";
import { PaymentsList } from "./PaymentsList";
import "./home.css"

export function HomePage(){
  return(
    <div className="container-sm">
      <HomeSearch/>
      <PaymentsList/>
    </div>
  )
}
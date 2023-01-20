import React from "react";
import { ModalContext } from "../../contexts/modalContext";
import {CoachForm} from "../CoachForm"
import {CoachList} from "../CoachList"
import { EditCoachForm } from "../EditCoachForm";

export function Entrenadores(){
  const {openModal} = React.useContext(ModalContext)
  return(
    <div className="card mb-3">

      <h3 className="card-header" >
       {openModal!== true? <b>AGREGAR ENTRENADOR</b> : <b>MODIFICAR ENTRENADOR</b>}
      </h3>

      <div  className="card-body">
      {openModal=== true? <EditCoachForm/> : <CoachForm/>}
        {/* <CoachForm /> */}
      </div>

      <div className="card">
        <CoachList/>
        {/* {openModal=== true? <EditCoachForm/> : <CoachForm/>} */}
        
      </div>

    </div>
  )
}
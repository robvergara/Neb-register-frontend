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
        <b>AGREGAR ENTRENADOR</b>
      </h3>

      <div  className="card-body">
        <CoachForm />
      </div>

      <div className="card">
        {/* <CoachList />
        {!!openModal && (
          <EditCoachForm/>
        )} */}
        {openModal=== true? <EditCoachForm/> : <CoachList/>}
        
      </div>

    </div>
  )
}
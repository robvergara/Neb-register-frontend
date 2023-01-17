import React from "react";

export const ModalContext = React.createContext();


export function ModalProvider({children}){
  const [openModal, setOpenModal] = React.useState(false);
  const [coachId, setCoachId] = React.useState('')

  const onCancelModal= ()=>{
    setOpenModal(false)
  }

  return(
    <ModalContext.Provider value={{openModal, setOpenModal, onCancelModal, coachId, setCoachId}}>
      {children}
    </ModalContext.Provider>
  )
}
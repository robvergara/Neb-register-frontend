import React from "react";

export const ModalContext = React.createContext();


export function ModalProvider({children}){
  const [openModal, setOpenModal] = React.useState(false);
  const [coachId, setCoachId] = React.useState('')
  const [CategoryId, setCategoryId] = React.useState('')
  const [studentId, setStudentId] = React.useState('')

  const onCancelModal= ()=>{
    setOpenModal(false)
  }

  return(
    <ModalContext.Provider value={{openModal, 
    setOpenModal, 
    onCancelModal, 
    coachId, 
    setCoachId, 
    CategoryId, 
    setCategoryId, 
    studentId, 
    setStudentId,
    }}>
      {children}
    </ModalContext.Provider>
  )
}
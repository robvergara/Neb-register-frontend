import React from "react";
import { StudentContext } from "../../contexts/studentContext";
import "./StudentSearch.css"


export function StudentSearch(){
  const {searchValue, setSearchValue} = React.useContext(StudentContext);

  const onSetSearchValue=(e)=>{
    // console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  return(
    <div>
      <input
        className="StudentSearch my-3 mx-auto shadow" 
        type="text" 
        placeholder="Busca por la cedula"
        value={searchValue}
        onChange={onSetSearchValue}
      >
      </input>
    </div>
  )
}
import React from "react";
import { CoachContext } from "../../contexts/coachContext";
import { CategoryForm } from "../CategoryForm";
import { CategoryList } from "../CategoryList";

export function CategoryPage({
  categories, 
  setCategories, 
  state, 
  onSuccess, 
  onError, 
  onConfirm,
  onCancel
}){
  const {entrenadores} = React.useContext(CoachContext)
  return(
    <div className="card mb-3">
      <h3 className="card-header">
        <b>AGREGAR CATEGORIA</b>
      </h3>
      <div className="card-body">
        <CategoryForm 
          entrenadores={entrenadores}
          categories={categories}
          setCategories={setCategories}
          state={state}
          onSuccess={onSuccess}
          onError={onError}
        />
      </div>
      <div className="card">
        <CategoryList
          categories={categories}
          setCategories={setCategories}
          state={state}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </div>
    </div>
  )
}
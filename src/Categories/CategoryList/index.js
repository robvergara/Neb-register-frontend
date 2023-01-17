import React from "react";
import { CategoryItem } from "../CategoryItem";



export function CategoryList({categories, setCategories, state, onConfirm, onCancel}){

  return(
    <>    
      <h3 className="card-header">
        lista de categorias
      </h3>

      {(!categories || categories.length === 0) && (
        <div className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">No hay categorias</h5>
          </div>
        </div>
      )}

      {categories.map(categorie => (
        <CategoryItem 
          key={categorie.id} 
          categorie = {categorie} 
          categories={categories}
          setCategories={setCategories}
          state={state}
          onConfirm={onConfirm} 
          onCancel={onCancel}
        />
      ))}

    </>

  )
}
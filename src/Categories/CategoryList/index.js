import React from "react";
import { CategoryContext } from "../../contexts/categorycontext";
import { CategoryItem } from "../CategoryItem";



export function CategoryList(){
  const {categories} = React.useContext(CategoryContext);
  return(
    <>    
      <h3 className="card-header">
        LISTA DE CATEGORIAS
      </h3>

      {(!categories || categories.length === 0) && (
        <div className="list-group-item">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">No hay categorias</h5>
          </div>
        </div>
      )}

      {categories.map(category => (
        <CategoryItem 
          key={`${category._id}`} 
          category = {category} 
        />
      ))}

    </>

  )
}
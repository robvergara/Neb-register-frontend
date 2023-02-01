import React from "react";
import { useAuth } from "../../contexts/auth";
import { CategoryContext } from "../../contexts/categorycontext";
import { CoachContext } from "../../contexts/coachContext";
import { getEntrenador } from "../../services/entrenadores.services";
import { CategoryItem } from "../CategoryItem";



export function CategoryList(){
  const {categories} = React.useContext(CategoryContext);
  const {entrenadores} = React.useContext(CoachContext);
  const [coach, setCoach] = React.useState({});
  const auth = useAuth();

  React.useEffect(()=>{
    const cedula = auth.user.usuario;
    const coach = entrenadores.find( entrenador => entrenador.cedula === cedula);
    async function obtenerEntrenador(){
      const entrenador = await getEntrenador(coach._id);
      setCoach(entrenador[0]);
    }
    obtenerEntrenador();
  },[])

  const coachCategories = categories.filter(category=> category.entrenador_id === coach._id);

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

      {auth.user.status === 1 &&(
        categories.map(category => (
          <CategoryItem 
            key={`${category._id}`} 
            category = {category} 
          />
      )))}

      {auth.user.status === 0 && (
        coachCategories.map(category => (
          <CategoryItem 
            key={`${category._id}`} 
            category = {category} 
          />
        ))
      )
      

      }

    </>

  )
}
import {get, post, put, erase} from './Network'

export function getCategories() {
  return get("/categoria")
}

export function createCategory(body) {
  return post("/categoria",{
    nombre: body.nombre,
    edad: body.edad,
    genero: body.genero,
    entrenador_id:body.entrenador_id
  })
}

export function updateCategory(id,body) {
  return put(`/categoria/${id}`, {
    nombre: body.nombre,
    edad: body.edad,
    genero: body.genero,
    entrenador_id:body.entrenador_id
  })
}

export function deleteCategory(id){
  return erase(`/categoria/${id}`)
}
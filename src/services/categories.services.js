import {get, post, put} from './Network'

export function getCategories() {
  return get("/categoria")
}

export function createCategory(body) {
  return post("/categoria",{
    nombre: body.name,
    edad: body.age,
    genero: body.gender,
    entrenador_id:body.coach
  })
}

export function updateCategory(id,body) {
  return put(`/categoria/${id}`, {
    nombre: body.name,
    edad: body.age,
    genero: body.gender,
    entrenador_id:body.coach
  })
}
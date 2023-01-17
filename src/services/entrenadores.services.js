import {erase, get, post, put} from './Network'

export function getEntrenadores() {
  return get("/entrenador")
}

export function createEntrenador(body) {
  return post("/entrenador",{
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    status: body.status
  })
}

export function updateEntrenadores(id,body) {
  return put(`/entrenador/${id}`, {
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    status: body.status
  })
}

export function deleteEntrenador(id){
  return erase(`/entrenador/${id}`)
}
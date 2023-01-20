import {erase, get, post, put} from './Network'

export function getStudents() {
  return get("/estudiante")
}

export function createStudent(body) {
  return post("/estudiante",{
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    edad: body.edad,
    nacimiento: body.nacimiento,
    email: body.email
  })
}

export function updateStudent(id,body) {
  return put(`/estudiante/${id}`, {
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    edad: body.edad,
    nacimiento: body.nacimiento,
    email: body.email
  })
}

export function deleteStudent(id){
  return erase(`/estudiante/${id}`)
}
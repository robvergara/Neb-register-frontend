import {erase, get, post, put} from './Network'

export function getStudents() {
  return get("/estudiante")
}

export function getStudent(id) {
  return get(`/estudiante/${id}`);
}

export function createStudent(body) {
  return post("/estudiante",{
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    edad: body.edad,
    categoria_id: body.categoria_id,
    email: body.email
  })
}

export function updateStudent(id,body) {
  console.log(body);
  return put(`/estudiante/${id}`, {
    nombre: body.nombre,
    apellido: body.apellido,
    cedula: body.cedula,
    edad: body.edad,
    categoria_id: body.categoria_id,
    email: body.email
  })
}

export function deleteStudent(id){
  return erase(`/estudiante/${id}`)
}
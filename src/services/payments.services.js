import {erase, get, post, put} from './Network'

export function getArrayPayments(id) {
  return get(`/pagos/${id}`)
}

export function enterPayment(body) {
  return post("/pagos",{
    cedula: body.cedula,
    estudiante_id: body.estudiante_id,
    mes: body.month,
    ano: body.year,
  })
}

export function modifyPayment(id, body) {
  return put(`/pagos/${id}`,{
    cedula: body.cedula,
    estudiante_id: body.estudiante_id,
    mes: body.month,
    ano: body.year,
  })
}

export function deletePayment(id){
  return erase(`/pagos/${id}`)
}
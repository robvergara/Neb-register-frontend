import { api } from "../services/Network";

export async function post(url, body) {
  try {
    const res = await api.post(url, body);
    console.log(res.data)
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export function getLogin(usuario, password) {
  return post("/login",{
    usuario: usuario,
    contrasena: password
  })
}

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token };
    // return { "x-auth-token": user.accessToken };
  } else {
    return {};
  }
}
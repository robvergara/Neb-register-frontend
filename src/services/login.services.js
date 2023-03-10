import { api } from "../services/Network";

export async function getLogin(body) {
  try {
    const res = await api.post("/login",{
      usuario: body.usuario,
      contrasena: body.password
    });
    // console.log(res)
    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

// export function getLogin(usuario) {
//   post("/login",{
//     usuario: usuario.usuario,
//     contrasena: usuario.password
//   });
//   console.log()
// }

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};


export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
    // return { "x-auth-token": user.accessToken };
  } else {
    return {};
  }
}
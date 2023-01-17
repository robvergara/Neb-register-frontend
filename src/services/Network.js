import axios from "axios";

export const api = axios.create({baseURL: "http://localhost:3000/api"});

export async function get(url, params) {
  try {
    const res = await api.get(url, {
      params
    });
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export async function post(url, body) {
  try {
    const res = await api.post(url, body);
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export async function put(url, params, body) {
  try {
    const res = await api.patch(url, { params }, body);
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export async function erase(url, params) {
  try {
    return await api.delete(url, { params });
  } catch (error) {
    console.error(error.message);
  }
}
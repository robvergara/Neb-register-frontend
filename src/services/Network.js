import axios from "axios";
import { authHeader } from "./login.services";

export const api = axios.create({baseURL: "https://api.neb.com.co:30001/api"});

export async function get(url, params) {
  try {
    const res = await api.get(url, { params, headers: authHeader() });
    // console.log(authHeader())
    // console.log(res.data);
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export async function post(url, body) {
  try {
    const res = await api.post(url, body, {headers: authHeader()});
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export async function put(url, body, params) {
  try {
    const res = await api.put(url, body, {params, headers: authHeader() });
    return res.data;
  } catch (reason) {
    console.error(reason.message);
  }
}

export async function erase(url, params) {
  try {
    return await api.delete(url, { params, headers: authHeader() });
  } catch (error) {
    console.error(error.message);
  }
}
import api from "../api/axios";

export function getProducts() {
  return api.get("/products");
}
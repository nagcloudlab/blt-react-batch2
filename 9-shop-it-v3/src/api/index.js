import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const getProducts = (category) => api.get(`/v1/products`);
export const getReviews = (id) => api.get(`/v1/products/${id}/reviews`);
export const postReview = (productId, review) =>
  api.post(`/v1/products/${productId}/reviews`, review);

import { api } from "./axios";

export const getOrders = async () => {
  const response = await api.get(
    "/orders"
  );

  return response.data;
};

export const getOrder = async (
  id: number
) => {
  const response = await api.get(
    `/orders/${id}`
  );

  return response.data;
};

export const createOrder = async (
  data: unknown
) => {
  const response = await api.post(
    "/orders",
    data
  );

  return response.data;
};

export const deleteOrder = async (
  id: number
) => {
  await api.delete(`/orders/${id}`);
};
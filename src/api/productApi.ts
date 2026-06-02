import { api } from "./axios";

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

export const createProduct = async (
  data: unknown
) => {
  const response = await api.post(
    "/products",
    data
  );

  return response.data;
};

export const updateProduct = async (
  id: number,
  data: unknown
) => {
  const response = await api.put(
    `/products/${id}`,
    data
  );

  return response.data;
};

export const deleteProduct = async (
  id: number
) => {
  await api.delete(`/products/${id}`);
};

export const uploadImage = async (
  file: File
) => {

  const formData = new FormData();

  formData.append(
    "image",
    file
  );

  const response = await api.post(
    "/products/upload-image",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createProduct,
  deleteProduct,
} from "../api/productApi";

export const useCreateProduct = () => {

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
};

export const useDeleteProduct = () => {

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
    onError: (error: any) => {
      console.error(error);
    },
  });
};
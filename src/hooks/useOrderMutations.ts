import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createOrder,
  deleteOrder,
} from "../api/orderApi";

export const useCreateOrder = () => {

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });

      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
};

export const useDeleteOrder = () => {

  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteOrder,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });
};
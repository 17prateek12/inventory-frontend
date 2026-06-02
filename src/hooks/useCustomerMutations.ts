import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  createCustomer,
  deleteCustomer,
} from "../api/customerApi";

export const useCreateCustomer = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: createCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
  });
};

export const useDeleteCustomer = () => {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: deleteCustomer,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
  });
};
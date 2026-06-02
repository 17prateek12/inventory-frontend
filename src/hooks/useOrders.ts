import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../api/orderApi";

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
};

import { getOrder } from "../api/orderApi";

export const useOrder = (
  id: number
) => {
  return useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
    enabled: !!id,
  });
};
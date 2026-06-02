import OrderForm from "../components/orders/OrderForm";

import OrdersTable from "../components/orders/OrdersTable";

import {
  useOrders
} from "../hooks/useOrders";

export default function OrdersPage() {

  const {
    data,
    isLoading,
  } = useOrders();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        Orders
      </h1>

      <OrderForm />

      <OrdersTable
        orders={data ?? []}
      />

    </div>
  );
}
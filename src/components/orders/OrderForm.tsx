import { useState } from "react";

import { useCustomers } from "../../hooks/useCustomers";
import { useProducts } from "../../hooks/useProducts";

import { useCreateOrder } from "../../hooks/useOrderMutations";

export default function OrderForm() {

  const { data: customers } =
    useCustomers();

  const { data: products } =
    useProducts();

  const createMutation =
    useCreateOrder();

  const [
    customerId,
    setCustomerId,
  ] = useState("");

  const [
    productId,
    setProductId,
  ] = useState("");

  const [
    quantity,
    setQuantity,
  ] = useState(1);

  function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    createMutation.mutate({
      customer_id:
        Number(customerId),

      items: [
        {
          product_id:
            Number(productId),

          quantity,
        },
      ],
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl border bg-white p-6"
    >

      <h2 className="mb-4 text-xl font-semibold">
        Create Order
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <select
          value={customerId}
          onChange={(e) =>
            setCustomerId(
              e.target.value
            )
          }
          className="rounded border p-3"
        >

          <option value="">
            Select Customer
          </option>

          {customers?.map(
            (customer:any) => (
              <option
                key={customer.id}
                value={
                  customer.id
                }
              >
                {
                  customer.full_name
                }
              </option>
            )
          )}

        </select>

        <select
          value={productId}
          onChange={(e) =>
            setProductId(
              e.target.value
            )
          }
          className="rounded border p-3"
        >

          <option value="">
            Select Product
          </option>

          {products?.map(
            (product:any) => (
              <option
                key={product.id}
                value={
                  product.id
                }
              >
                {product.name}
              </option>
            )
          )}

        </select>

        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) =>
            setQuantity(
              Number(
                e.target.value
              )
            )
          }
          className="rounded border p-3"
        />

      </div>

      <button
        type="submit"
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Create Order
      </button>

    </form>
  );
}
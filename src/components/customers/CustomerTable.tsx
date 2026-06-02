import type {
  Customer,
} from "../../types/customer";

import {
  useDeleteCustomer,
} from "../../hooks/useCustomerMutations";

interface Props {
  customers: Customer[];
}

export default function CustomerTable({
  customers,
}: Props) {

  const deleteMutation =
    useDeleteCustomer();

  return (
    <div className="overflow-auto rounded-xl border bg-white">

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="p-3">
              Name
            </th>

            <th className="p-3">
              Email
            </th>

            <th className="p-3">
              Phone
            </th>

            <th className="p-3">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {customers.map(
            (customer) => (
              <tr
                key={customer.id}
                className="border-b"
              >

                <td className="p-3">
                  {customer.full_name}
                </td>

                <td className="p-3">
                  {customer.email}
                </td>

                <td className="p-3">
                  {customer.phone}
                </td>

                <td className="p-3">

                  <button
                    onClick={() =>
                      deleteMutation.mutate(
                        customer.id
                      )
                    }
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}
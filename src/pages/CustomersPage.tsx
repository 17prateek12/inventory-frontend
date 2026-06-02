import CustomerForm from "../components/customers/CustomerForm";

import CustomerTable from "../components/customers/CustomerTable";

import {
  useCustomers,
} from "../hooks/useCustomers";

export default function CustomersPage() {

  const {
    data,
    isLoading,
  } = useCustomers();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        Customers
      </h1>

      <CustomerForm />

      <CustomerTable
        customers={data ?? []}
      />

    </div>
  );
}
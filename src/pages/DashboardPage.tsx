import StatCard from "../components/ui/StatCard";

import { useDashboard } from "../hooks/useDashboard";

export default function DashboardPage() {
  const {
    data,
    isLoading,
    error,
  } = useDashboard();

  if (isLoading)
    return <p>Loading...</p>;

  if (error)
    return <p>Failed to load dashboard.</p>;

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Products"
          value={data.total_products}
        />

        <StatCard
          title="Customers"
          value={data.total_customers}
        />

        <StatCard
          title="Orders"
          value={data.total_orders}
        />

        <StatCard
          title="Low Stock"
          value={data.low_stock_products}
        />
      </div>
    </div>
  );
}
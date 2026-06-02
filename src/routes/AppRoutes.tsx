import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardPage from "../pages/DashboardPage";
import ProductsPage from "../pages/ProductsPage";
import CustomersPage from "../pages/CustomersPage";
import OrdersPage from "../pages/OrdersPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route
          path="/"
          element={<DashboardPage />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/customers"
          element={<CustomersPage />}
        />

        <Route
          path="/orders"
          element={<OrdersPage />}
        />

        <Route
          path="/orders/:id"
          element={<OrderDetailsPage />}
        />
      </Route>
    </Routes>
  );
}
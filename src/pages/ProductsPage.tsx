import ProductForm from "../components/products/ProductForm";

import ProductTable from "../components/products/ProductTable";

import { useProducts } from "../hooks/useProducts";

export default function ProductsPage() {

  const {
    data,
    isLoading,
  } = useProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>

      <h1 className="mb-6 text-3xl font-bold">
        Products
      </h1>

      <ProductForm />

      <ProductTable
        products={data ?? []}
      />

    </div>
  );
}
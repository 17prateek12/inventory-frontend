import {
  useState,
} from "react";

import {
  uploadImage,
} from "../../api/productApi";

import {
  useCreateProduct,
} from "../../hooks/useProductMutations";

export default function ProductForm() {

  const createMutation =
    useCreateProduct();

  const [
    imageUrl,
    setImageUrl,
  ] = useState("");

  const [
    loading,
    setLoading,
  ] = useState(false);

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    const formData =
      new FormData(
        event.currentTarget
      );

    createMutation.mutate({
      name: formData.get("name"),
      sku: formData.get("sku"),
      price: Number(
        formData.get("price")
      ),
      stock_quantity: Number(
        formData.get(
          "stock_quantity"
        )
      ),
      image_url: imageUrl,
    });

    event.currentTarget.reset();
  }

  async function handleImageUpload(
    file: File
  ) {

    try {

      setLoading(true);

      const response =
        await uploadImage(
          file
        );

      setImageUrl(
        response.image_url
      );

    } finally {

      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl border bg-white p-6"
    >

      <h2 className="mb-4 text-xl font-semibold">
        Add Product
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <input
          name="name"
          placeholder="Product Name"
          className="rounded border p-3"
          required
        />

        <input
          name="sku"
          placeholder="SKU"
          className="rounded border p-3"
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="rounded border p-3"
          required
        />

        <input
          type="number"
          name="stock_quantity"
          placeholder="Quantity"
          className="rounded border p-3"
          required
        />

      </div>

      <div className="mt-4">

        <input
          type="file"
          onChange={(e) => {

            const file =
              e.target.files?.[0];

            if (file) {
              handleImageUpload(
                file
              );
            }
          }}
        />

        {loading && (
          <p>
            Uploading...
          </p>
        )}

      </div>

      <button
        type="submit"
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Create Product
      </button>

    </form>
  );
}
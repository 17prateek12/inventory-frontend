import {
  useCreateCustomer,
} from "../../hooks/useCustomerMutations";

export default function CustomerForm() {

  const mutation =
    useCreateCustomer();

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();

    const formData =
      new FormData(
        event.currentTarget
      );

    mutation.mutate({
      full_name:
        formData.get(
          "full_name"
        ),
      email:
        formData.get(
          "email"
        ),
      phone:
        formData.get(
          "phone"
        ),
    });

    event.currentTarget.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-xl border bg-white p-6"
    >

      <h2 className="mb-4 text-xl font-semibold">
        Add Customer
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <input
          name="full_name"
          placeholder="Full Name"
          className="rounded border p-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded border p-3"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          className="rounded border p-3"
          required
        />

      </div>

      <button
        type="submit"
        className="mt-4 rounded bg-black px-4 py-2 text-white"
      >
        Create Customer
      </button>
      {mutation.isError && (
        <div className="mt-4 rounded border border-red-300 bg-red-50 p-3 text-red-600">
          {
            (mutation.error as any)?.response?.data?.detail ??
            "Something went wrong"
          }
        </div>
      )}

    </form>
  );
}
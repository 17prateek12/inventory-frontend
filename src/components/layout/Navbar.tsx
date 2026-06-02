export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h2 className="text-lg font-semibold">
        Inventory Management
      </h2>

      <div>
        <span className="text-sm text-gray-500">
          Admin
        </span>
      </div>
    </header>
  );
}
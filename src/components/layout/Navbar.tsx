import { Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({
  onMenuClick,
}: NavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">

      <div className="flex items-center gap-3">

        <button
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>

        <h2 className="text-base font-semibold md:text-lg">
          Inventory Management
        </h2>

      </div>

      <span className="text-sm text-gray-500">
        Admin
      </span>

    </header>
  );
}
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    path: "/products",
    icon: Package,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: ShoppingCart,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="p-6">
        <h1 className="text-xl font-bold">
          Inventory System
        </h1>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg p-3 transition ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <Icon size={18} />
              {link.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  ChevronLeft,
} from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
};

export default function Sidebar({
  open,
  onClose,
  collapsed,
  onToggleCollapse,
}: Props) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `
    flex items-center gap-3 px-3 py-2 rounded-lg transition
    ${
      pathname === path
        ? "bg-white/20 font-semibold"
        : "opacity-80 hover:opacity-100 hover:bg-white/10"
    }
  `;

  return (
    <>
      {/* Overlay (mobile) */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          top-0 left-0 h-full
          bg-black text-white p-4
          transition-all duration-300
          ${collapsed ? "w-16" : "w-64"}
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo + collapse */}
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <h2 className="text-2xl font-bold">Deelsa</h2>
          )}

          <button
            onClick={onToggleCollapse}
            className="hidden md:block"
          >
            <ChevronLeft
              size={20}
              className={`transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <nav className="space-y-2">
          <Link href="/dashboard" onClick={onClose} className={linkClass("/dashboard")}>
            <LayoutDashboard size={20} />
            {!collapsed && "Dashboard"}
          </Link>

          <Link href="/dashboard/leads" onClick={onClose} className={linkClass("/dashboard/leads")}>
            <Users size={20} />
            {!collapsed && "Leads"}
          </Link>

          <Link href="/dashboard/settings" onClick={onClose} className={linkClass("/dashboard/settings")}>
            <Settings size={20} />
            {!collapsed && "Settings"}
          </Link>
        </nav>
      </aside>
    </>
  );
}


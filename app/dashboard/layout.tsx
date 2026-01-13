"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      <div
        className={`
          flex-1 flex flex-col transition-all duration-300
          ${collapsed ? "md:ml-16" : "md:ml-64"}
        `}
      >
        <Header onMenuClick={() => setOpen(true)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}


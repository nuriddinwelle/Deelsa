"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatCard from "./components/StatCard";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Protected page</p>
    </div>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard title="Leads" value="124" />
      <StatCard title="Active Campaigns" value="5" />
      <StatCard title="Revenue" value="$2,340" />
    </div>
  );
}

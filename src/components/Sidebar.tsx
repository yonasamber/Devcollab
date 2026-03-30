"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen border-r p-4 bg-white">
      <nav className="space-y-2">
        <Link href="/dashboard">
          <div className="p-2 hover:bg-gray-100 rounded">Dashboard</div>
        </Link>

        <Link href="/projects">
          <div className="p-2 hover:bg-gray-100 rounded">Projects</div>
        </Link>
      </nav>
    </div>
  );
}

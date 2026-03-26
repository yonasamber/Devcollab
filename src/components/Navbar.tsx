"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link href="/" className="font-bold text-xl">
        DevCollab
      </Link>
      <div className="flex gap-4">
        <Link
          href="/dashboard"
          className={path.startsWith("/dashboard") ? "text-blue-500" : ""}
        >
          Dashboard
        </Link>
        <Link
          href="/login"
          className={path === "/login" ? "text-blue-500" : ""}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

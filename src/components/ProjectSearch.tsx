"use client";

export default function TaskSearch({ setSearch }: any) {
  return (
    <input
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search tasks"
      type="text"
      className="border p-2 rounded w-full mb-4"
    />
  );
}

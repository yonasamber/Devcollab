import api from "@/lib/axios";
import { Project } from "@/types";
import React, { useState } from "react";

export default function CreateProject({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await api.post<Project>("/projects", { title, description, owner: "me" });
    setTitle("");
    setDescription("");
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        className="border p-2 mr-2 rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-2 mr-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Create
      </button>
    </form>
  );
}

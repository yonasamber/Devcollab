"use client";

import api from "@/lib/axios";
import { useState } from "react";

export default function TaskComments({ taskId }: { taskId: string }) {
  const [message, setMessage] = useState("");

  const send = async () => {
    await api.post("/comments", { taskId, message });

    setMessage("");
  };

  return (
    <div className="mt-2">
      <textarea
        className="border p-2 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={send}>Comment</button>
    </div>
  );
}

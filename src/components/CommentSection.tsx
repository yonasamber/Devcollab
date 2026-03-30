"use client";

import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function CommentSection({ takId }: any) {
  const qc = useQueryClient();
  const [comment, setComment] = useState("");

  const { data: comments } = useQuery(["comments", taskId], async () => {
    const res = await api.get(`/comments?taskId=${taskId}`);
    return res.data.comments;
  });

  const addComment = useMutation(
    async (newComment: string) =>
      api.post("/comments", { taskId, text: newComment }),
    {
      onSuccess: () => qc.invalidateQueries(["comments", taskId]),
    },
  );

  const handleAdd = () => {
    if (!comment) return;

    addComment.mutate(comment);
    setComment("");
  };

  return (
    <div className="mt-2">
      <div className="flex gap-2 mb-2">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add comment..."
          className="border p-1 rounded flex-1"
        />
        <button
          onClick={handleAdd}
          className="px-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <div>
        {comments?.map((c: any) => (
          <div key={c._id} className="bg-gray-100 p-1 rounded">
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
}

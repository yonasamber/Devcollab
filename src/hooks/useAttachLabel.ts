import api from "@/lib/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAttachLabel = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ taskId, label }: any) =>
      api.put(`/tasks/${taskId}/labels`, { label }),

    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

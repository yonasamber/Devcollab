import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useComments = (taskId: string) => {
  return useQuery({
    queryKey: ["comments", taskId],
    queryFn: async () => {
      const { data } = await api.get(`/comments?taskId=${taskId}`);
      return data.comments;
    },
  });
};

export const useCreateComment = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: any) => api.post("/comments", data),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({
        queryKey: ["comments", variables.taskId],
      });
    },
  });
};

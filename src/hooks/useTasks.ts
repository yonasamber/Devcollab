import api from "@/lib/axios";
import { Task } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useTasks = (projectId: string) => {
  return useQuery<Task[]>({
    queryKey: ["tasks", projectId],
    queryFn: async () => {
      if (!projectId) return []; // safety check
      const { data } = await api.get(`/tasks?projectId=${projectId}`);
      return data.tasks;
    },
  });
};

export const useCreateTask = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Task>) => api.post("/tasks", data),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["tasks", variables.projectId] });
    },
  });
};

export const useUpdateTask = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: any) => api.put(`/tasks/${id}`, data),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["tasks", variables.data.projectId] });
    },
  });
};

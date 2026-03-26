import api from "@/lib/axios";
import { Project } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery<Project[], any>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get<{ projects: Project[] }>("/projects");
      return data.projects;
    },
  });
};

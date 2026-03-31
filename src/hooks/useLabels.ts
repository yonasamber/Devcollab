import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useLabels = () => {
  return useQuery({
    queryKey: ["labels"],
    queryFn: async () => {
      const { data } = await api.get("/labels");
      return data;
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import { todoApi } from "../api/todos";

export const useTodoQuery = (id) => {
  return useQuery({
    queryKey: ["detail", { id }],
    queryFn: async () => {
      const response = await todoApi.get(`/todos/${id}`);
      return response.data;
    },
  });
};

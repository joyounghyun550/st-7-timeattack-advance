import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todoApi } from "../api/todos";

export function useTodoMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["todos"],
    mutationFn: async (newTodo) => {
      await todoApi.post("/todos", newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return mutation.mutate;
}

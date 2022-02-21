type TodoType = {
  value: string;
  id: number;
};

type RemoveTodoType = Omit<TodoType, "value">;

export type { TodoType, RemoveTodoType };

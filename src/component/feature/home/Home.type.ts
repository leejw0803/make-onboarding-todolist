import { ChangeEventHandler, MouseEventHandler } from "react";

type TodoType = {
  value: string;
  id: number;
};

type RemoveTodoType = Omit<TodoType, "value">;

type HomePresenterProps = {
  currentTodo: TodoType;
  targetTodo: TodoType;
  todoList: TodoType[];
  isUpdating: boolean;
  isRemoving: boolean;
  isAdding: boolean;
  optionList: string[];
  onClickAddButton: MouseEventHandler<HTMLButtonElement>;
  onCloseAddModal: () => void;
  onAddInputChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleAddOKButtonClick: MouseEventHandler<HTMLButtonElement>;
  onModifyButtonClick: (item: TodoType, idx: number, data: string) => void;
  handleOptionClick: (data: string) => void;
  onCloseUpdateModal: () => void;
  onUpdateInputChange: ChangeEventHandler<HTMLTextAreaElement>;
  handleUpdateOKButtonClick: MouseEventHandler<HTMLButtonElement>;
  handleRemoveOKButtonClick: MouseEventHandler<HTMLButtonElement>;
  handleRemoveCancelButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export type { TodoType, RemoveTodoType, HomePresenterProps };

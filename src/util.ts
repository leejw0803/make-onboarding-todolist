import { RemoveTodoType, TodoType } from "./dto";

export const fetchTodoList: () => Promise<TodoType[]> = () => {
  const keys = Object.keys(window.localStorage);
  const list = keys.map((key) => {
    const [isTodo, id] = key.split("_");
    const value = window.localStorage.getItem(key);
    return isTodo === "todo" && { value, id: Number(id) };
  });

  const filteredList: TodoType[] = list.filter(
    (item) => item !== false
  ) as TodoType[];

  filteredList.sort((todo1, todo2) => Number(todo1.id) - Number(todo2.id));

  return new Promise((resolve, reject) => {
    if (filteredList.length === 0) reject(new Error("NoTodoListError"));
    resolve(filteredList);
  });
};

export const updateTodoList: ({ id, value }: TodoType) => Promise<void> = ({
  id,
  value,
}: TodoType) => {
  return new Promise((resolve, reject) => {
    if (!value) reject(new Error("NoValueError"));
    if (id < 0) reject(new Error("NoIdError"));
    resolve(window.localStorage.setItem(`todo_${id}`, value));
  });
};

export const deleteTodoList: ({ id }: RemoveTodoType) => Promise<void> = ({
  id,
}: RemoveTodoType) => {
  return new Promise((resolve, reject) => {
    if (!window.localStorage.getItem(`todo_${id}`))
      reject(new Error("NoItemError"));
    resolve(window.localStorage.removeItem(`todo_${id}`));
  });
};

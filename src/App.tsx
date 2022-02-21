import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import "./App.css";
import { TodoType } from "./dto";
import { deleteTodoList, fetchTodoList, updateTodoList } from "./util";

function App() {
  const [todo, setTodo] = useState<TodoType>({
    value: "",
    id: -1,
  });
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [updatingTodo, setUpdatingTodo] = useState<TodoType>({
    value: "",
    id: -1,
  });
  const [updatingTodoIndex, setUpdatingTodoIndex] = useState<number>(-1);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const todoList = await fetchTodoList();
      setTodoList(todoList);
    };
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const onChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setTodo({ ...todo, value: e.target.value });
  };

  const onUpdatingChange: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatingTodo({ ...updatingTodo, value: e.target.value });
  };

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = async () => {
    const id = Date.now();
    try {
      await updateTodoList({ id, value: todo.value });
    } catch (e) {
      console.log(e);
    }
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, id });
  };

  const handleUpdateCompleteClick: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      await updateTodoList(updatingTodo);
    } catch (e) {
      console.log(e);
    }
    todoList.splice(updatingTodoIndex, 1, updatingTodo);
    setTodoList([...todoList]);
    setIsUpdating(false);
  };

  const deleteElement: (item: TodoType, idx: number) => void = async (
    item: TodoType,
    idx: number
  ) => {
    try {
      await deleteTodoList({ id: item.id });
    } catch (e) {
      console.log(e);
    }
    todoList.splice(idx, 1);
    setTodoList([...todoList]);
  };

  const onUpdateButtonClick: (item: TodoType, idx: number) => void = (
    item: TodoType,
    idx: number
  ) => {
    setIsUpdating(true);
    setUpdatingTodo({
      value: item.value,
      id: item.id,
    });
    setUpdatingTodoIndex(idx);
  };

  return (
    <>
      {isUpdating ? (
        <>
          <input
            name="todoInputUpdate"
            value={updatingTodo.value}
            onChange={onUpdatingChange}
            placeholder="수정할 텍스트를 입력해 주세요!"
          />
          <button onClick={handleUpdateCompleteClick}>수정</button>
        </>
      ) : (
        <>
          <input
            name="todoInput"
            value={todo.value}
            onChange={onChange}
            placeholder="할 일을 입력하세요!"
          />
          <button onClick={handleButtonClick}>추가</button>
          {todoList.map((item: TodoType, idx: number) => (
            <div>
              {item.value} &nbsp;{" "}
              <span
                className="button-text"
                onClick={() => deleteElement(item, idx)}
              >
                삭제
              </span>{" "}
              &nbsp;
              <span
                className="button-text"
                onClick={() => onUpdateButtonClick(item, idx)}
              >
                수정
              </span>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default App;

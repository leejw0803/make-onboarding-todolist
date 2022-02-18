import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import "./App.css";

type TodoType = {
  value: string;
  index: number;
  id?: string;
};

function App() {
  const [todo, setTodo] = useState<TodoType>({
    value: "",
    index: -1,
  });
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [updatingTodo, setUpdatingTodo] = useState<TodoType>({
    value: "",
    index: -1,
  });
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

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

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo({ ...todo, id: new Date().toString() });
      window.localStorage.setItem(`${todo.id}`, todo.value);
    }
  };

  const handleUpdateCompleteClick: MouseEventHandler<
    HTMLButtonElement
  > = () => {
    todoList.splice(updatingTodo.index, 1, updatingTodo);
    setTodoList([...todoList]);
    window.localStorage.setItem(`${updatingTodo.id}`, updatingTodo.value);
    setIsUpdating(false);
  };

  const deleteElement: (item: TodoType, idx: number) => void = (
    item: TodoType,
    idx: number
  ) => {
    todoList.splice(idx, 1);
    setTodoList([...todoList]);
    window.localStorage.removeItem(`${item.id}`);
  };

  const onUpdateButtonClick: (item: TodoType, idx: number) => void = (
    item: TodoType,
    idx: number
  ) => {
    setIsUpdating(true);
    setUpdatingTodo({
      value: item.value,
      id: item.id,
      index: idx,
    });
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
              <span onClick={() => deleteElement(item, idx)}>삭제</span> &nbsp;
              <span onClick={() => onUpdateButtonClick(item, idx)}>수정</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default App;

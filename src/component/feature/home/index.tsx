import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { TodoType } from "./Home.type";
import {
  deleteTodoList,
  fetchTodoList,
  updateTodoList,
} from "../../../api/todo";
import HomePresenter from "./Home.presenter";

function Home() {
  const [todo, setTodo] = useState<TodoType>({
    value: "",
    id: -1,
  });
  const [targetTodo, setTargetTodo] = useState<TodoType>({
    value: "",
    id: -1,
  });
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [targetIndex, setTargetIndex] = useState<number>(-1);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

  const optionList = ["수정", "삭제"];

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

  const handleOptionClick = (data: string) => {
    switch (data) {
      case "수정":
        setIsUpdating(true);
        break;
      case "삭제":
        setIsRemoving(true);
    }
  };

  const onAddInputChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, value: e.target.value });
  };

  const onUpdateInputChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTargetTodo({ ...targetTodo, value: e.target.value });
  };

  const handleAddButtonClick: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
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
      await updateTodoList(targetTodo);
    } catch (e) {
      console.log(e);
    }
    todoList.splice(targetIndex, 1, targetTodo);

    setTodoList([...todoList]);
    setIsUpdating(false);
    setTargetTodo({ value: "", id: -1 });
    setTargetIndex(-1);
  };

  const handleDeleteCompleteClick: MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    try {
      await deleteTodoList({ id: targetTodo.id });
    } catch (e) {
      console.log(e);
    }
    todoList.splice(targetIndex, 1);
    setTodoList([...todoList]);
    setIsRemoving(false);
    setTargetTodo({ value: "", id: -1 });
    setTargetIndex(-1);
  };

  const onModifyButtonClick: (
    item: TodoType,
    idx: number,
    type: string
  ) => void = (item: TodoType, idx: number, type: string) => {
    if (type === "수정") setIsUpdating(true);
    else if (type === "삭제") setIsRemoving(true);
    setTargetTodo({
      value: item.value,
      id: item.id,
    });
    setTargetIndex(idx);
  };

  const onClickAddButton = () => {
    setIsAdding(true);
  };

  return (
    <HomePresenter
      currentTodo={todo}
      targetTodo={targetTodo}
      todoList={todoList}
      isUpdating={isUpdating}
      isRemoving={isRemoving}
      isAdding={isAdding}
      optionList={optionList}
      onClickAddButton={onClickAddButton}
      onCloseAddModal={() => setIsAdding(false)}
      onAddInputChange={onAddInputChange}
      handleAddOKButtonClick={(e) => {
        handleAddButtonClick(e);
        setIsAdding(false);
      }}
      onModifyButtonClick={onModifyButtonClick}
      handleOptionClick={handleOptionClick}
      onCloseUpdateModal={() => setIsUpdating(false)}
      onUpdateInputChange={onUpdateInputChange}
      handleUpdateOKButtonClick={(e) => {
        handleUpdateCompleteClick(e);
        setIsUpdating(false);
      }}
      handleRemoveOKButtonClick={(e) => {
        handleDeleteCompleteClick(e);
        setIsRemoving(false);
      }}
      handleRemoveCancelButtonClick={() => setIsRemoving(false)}
    />
  );
}

export default Home;

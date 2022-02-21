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
import HomeStyle from "./Home.style";
import Input from "../../share/Input";
import Modal from "../../share/Modal";
import ContentCard from "../../share/ContentCard";

function Home() {
  const [todo, setTodo] = useState<TodoType>({
    value: "",
    id: -1,
  });
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [targetTodo, setTargetTodo] = useState<TodoType>({
    value: "",
    id: -1,
  });
  const [targetIndex, setTargetIndex] = useState<number>(-1);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [isRemoving, setIsRemoving] = useState<boolean>(false);

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

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, value: e.target.value });
  };

  const onUpdatingChange: ChangeEventHandler<HTMLTextAreaElement> = (
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

  const optionList = ["수정", "삭제"];

  const handleOptionClick = (data: string) => {
    switch (data) {
      case "수정":
        setIsUpdating(true);
        break;
      case "삭제":
        setIsRemoving(true);
    }
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
    <HomeStyle.Wrapper>
      <HomeStyle.Category
        count={todoList.length}
        handleClick={onClickAddButton}
      >
        {todoList.map((item: TodoType, idx: number) => (
          <ContentCard
            name="dudo"
            optionList={optionList}
            handleOptionClick={(data: string) => {
              onModifyButtonClick(item, idx, data);
              handleOptionClick(data);
            }}
          >
            {item.value}
          </ContentCard>
        ))}
      </HomeStyle.Category>
      <Modal
        opened={isUpdating}
        title="dudo"
        okText="수정하기"
        handleOKButtonClick={(e) => {
          handleUpdateCompleteClick(e);
          setIsUpdating(false);
        }}
        onClose={() => setIsUpdating(false)}
      >
        <Input
          value={targetTodo.value}
          handleChange={onUpdatingChange}
          placeholder="수정할 텍스트를 입력해 주세요!"
        />
      </Modal>
      <Modal
        noHeader={true}
        opened={isRemoving}
        okText="삭제"
        cancelText="취소"
        handleOKButtonClick={(e) => {
          handleDeleteCompleteClick(e);
          setIsRemoving(false);
        }}
        handleCancelButtonClick={() => setIsRemoving(false)}
      >
        삭제
      </Modal>
      <Modal
        opened={isAdding}
        title="dudo"
        okText="추가하기"
        handleOKButtonClick={(e) => {
          handleAddButtonClick(e);
          setIsAdding(false);
        }}
        onClose={() => setIsAdding(false)}
      >
        <Input
          value={todo.value}
          handleChange={onChange}
          placeholder="당신의 할일은?"
        />
      </Modal>
    </HomeStyle.Wrapper>
  );
}

export default Home;

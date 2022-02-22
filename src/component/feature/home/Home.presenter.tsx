import { TodoType, HomePresenterProps } from "./Home.type";
import HomeStyle from "./Home.style";

function HomePresenter({
  currentTodo,
  targetTodo,
  todoList,
  isUpdating,
  isRemoving,
  isAdding,
  optionList,
  onClickAddButton,
  onCloseAddModal,
  onAddInputChange,
  handleAddOKButtonClick,
  onModifyButtonClick,
  handleOptionClick,
  onCloseUpdateModal,
  onUpdateInputChange,
  handleUpdateOKButtonClick,
  handleRemoveOKButtonClick,
  handleRemoveCancelButtonClick,
}: HomePresenterProps) {
  return (
    <HomeStyle.Wrapper>
      <HomeStyle.Category
        count={todoList.length}
        handleClick={onClickAddButton}
      >
        {todoList.map((item: TodoType, idx: number) => (
          <HomeStyle.Content
            optionList={optionList}
            handleOptionClick={(data: string) => {
              onModifyButtonClick(item, idx, data);
              handleOptionClick(data);
            }}
          >
            {item.value}
          </HomeStyle.Content>
        ))}
      </HomeStyle.Category>
      <HomeStyle.UpdateModal
        opened={isUpdating}
        handleOKButtonClick={handleUpdateOKButtonClick}
        onClose={onCloseUpdateModal}
      >
        <HomeStyle.InputTitle>내용 수정</HomeStyle.InputTitle>
        <HomeStyle.UpdateInput
          value={targetTodo.value}
          handleChange={onUpdateInputChange}
        />
      </HomeStyle.UpdateModal>
      <HomeStyle.RemoveModal
        opened={isRemoving}
        handleOKButtonClick={handleRemoveOKButtonClick}
        handleCancelButtonClick={handleRemoveCancelButtonClick}
      >
        <HomeStyle.RemoveModalTitle>
          정말 삭제 하시겠습니까?
        </HomeStyle.RemoveModalTitle>
        <HomeStyle.RemoveModalContent>
          삭제하시면 모든 정보가 삭제되며 이후 복구가 불가능합니다.
        </HomeStyle.RemoveModalContent>
      </HomeStyle.RemoveModal>
      <HomeStyle.AddModal
        opened={isAdding}
        handleOKButtonClick={handleAddOKButtonClick}
        onClose={onCloseAddModal}
      >
        <HomeStyle.InputTitle>할 일 추가</HomeStyle.InputTitle>
        <HomeStyle.AddInput
          value={currentTodo.value}
          handleChange={onAddInputChange}
        />
      </HomeStyle.AddModal>
    </HomeStyle.Wrapper>
  );
}

export default HomePresenter;

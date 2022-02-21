import ModalPresenter from "./Modal.presenter";
import { ModalPresenterProps } from "./Modal.type";

function Modal({
  noHeader,
  opened,
  title,
  okText,
  cancelText,
  onClose,
  handleOKButtonClick,
  handleCancelButtonClick,
  children,
}: ModalPresenterProps) {
  return (
    <ModalPresenter
      noHeader={noHeader}
      opened={opened}
      title={title}
      okText={okText}
      cancelText={cancelText}
      onClose={onClose}
      handleOKButtonClick={handleOKButtonClick}
      handleCancelButtonClick={handleCancelButtonClick}
      children={children}
    />
  );
}

export default Modal;

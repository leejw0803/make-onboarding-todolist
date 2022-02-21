import ModalStyle from "./Modal.style";
import { ModalPresenterProps } from "./Modal.type";

function ModalPresenter({
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
    <ModalStyle.Dimmer opened={opened}>
      <ModalStyle.Wrapper>
        {!noHeader && (
          <ModalStyle.ModalHeader>
            <ModalStyle.ProfileBox>
              <ModalStyle.ProfileImg />
              <ModalStyle.ProfileName>{title}</ModalStyle.ProfileName>
            </ModalStyle.ProfileBox>
            <ModalStyle.CloseIcon onClick={onClose} />
          </ModalStyle.ModalHeader>
        )}
        <ModalStyle.ModalContent>{children}</ModalStyle.ModalContent>
        <ModalStyle.ModalFooter>
          {!!handleCancelButtonClick && (
            <ModalStyle.CancelButton onClick={handleCancelButtonClick}>
              {cancelText}
            </ModalStyle.CancelButton>
          )}
          {!!handleOKButtonClick && (
            <ModalStyle.OKButton onClick={handleOKButtonClick}>
              {okText}
            </ModalStyle.OKButton>
          )}
        </ModalStyle.ModalFooter>
      </ModalStyle.Wrapper>
    </ModalStyle.Dimmer>
  );
}
export default ModalPresenter;

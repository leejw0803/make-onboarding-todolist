import { MouseEventHandler, ReactNode } from "react";

type DimmerProps = {
  opened: boolean;
};

type ModalPresenterProps = {
  noHeader?: boolean;
  opened: boolean;
  title?: string;
  okText?: string;
  cancelText?: string;
  onClose?: MouseEventHandler<HTMLImageElement>;
  handleOKButtonClick?: MouseEventHandler<HTMLButtonElement>;
  handleCancelButtonClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export type { DimmerProps, ModalPresenterProps };

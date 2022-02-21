import { MenuProps } from "../Menu/Menu.type";

type ContentCardPresenterProps = {
  name: string;
  children: string;
} & MenuProps;

type ContentCardProps = ContentCardPresenterProps;

export type { ContentCardPresenterProps, ContentCardProps };

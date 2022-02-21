import { MouseEventHandler, ReactNode } from "react";

type CategoryCardPresenterProps = {
  title: string;
  count: number;
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

type CategoryCardProps = CategoryCardPresenterProps;

export type { CategoryCardPresenterProps, CategoryCardProps };

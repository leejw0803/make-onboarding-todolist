import Header from "./Header";
import { LayoutProps } from "./Layout.type";

function LayoutPresenter({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default LayoutPresenter;

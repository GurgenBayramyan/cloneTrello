import Header from "components/Header";
import SideBar from "components/SideBar/SideBar";
import { FC} from "react";
import { ILayoutProps } from "./LayoutTypes";
import style from "./Layout.module.scss";
import DeleteBoard from "components/DeleteBoard/DeleteBoard";
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className={style.layoutBlock}>
        <DeleteBoard />
        <Header />
        <div className={style.content}>
          <SideBar />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

import Header from "components/Header";
import SideBar from "components/SideBar/SideBar";
import { FC} from "react";
import { ILayoutProps } from "./LayoutTypes";
import style from "./Layout.module.scss";
const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <div className={style.layoutBlock}>
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

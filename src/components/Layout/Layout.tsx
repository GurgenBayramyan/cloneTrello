import Header from "components/Header";
import SideBar from "components/SideBar/SideBar";
import { FC } from "react";
import { ILayoutProps } from "./LayoutTypes";
import style from "./Layout.module.scss";
import { useAppSelector } from "hooks/changDispatchSekector";

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { token, loading } = useAppSelector((state) => state.contentSlice);

  return (
    <>
      {token ? (
        loading ? (
          <div className={style.spinner_wrapper}>
            <div className={style.spinner}></div>
        </div>
        ) : (
          <div className={style.layoutBlock}>
            <Header />
            <div className={style.content}>
              <SideBar />
              {children}
            </div>
          </div>
        )
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default Layout;

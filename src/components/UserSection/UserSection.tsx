import UserName from "components/UserName/UserName";
import { FC, useState} from "react";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { setMenu } from "store/slices/showMenuUserSlice/showMenuUserSlice";
import style from "./UserSection.module.scss";

const UserSection: FC = () => {
  const dispatch = useAppDispatch();
  const positionAndShow = useAppSelector((state) => state.showMenuUser);


  const handleClose = () => {
    dispatch(
      setMenu({
        ...positionAndShow,
        show: false,
      })
    );
  };
  return (
      !!positionAndShow.show ? (
        <div
         data-name="stop"
          style={{
            top: `${positionAndShow.top}px`,
            left: `${positionAndShow.left}px`,
          }}
          className={style.userBlock}
          tabIndex={0}
        >
          <div className={style.userBlock_top}>
            <div className={style.userName}>
              <UserName name="Vahe" lastName="Gevorgian" />
            </div>
            <div className={style.userDAta}>
              <span>UserName userLastname</span>
              <span>userEmail@gmail.com</span>
            </div>
            <span onClick={handleClose}>x</span>
          </div>
          <div className={style.userBlock_down}>
            <span>View profile</span>
            <hr />
            <span>Remove from Card</span>
          </div>
        </div>
      ) : null
  );
};

export default UserSection;

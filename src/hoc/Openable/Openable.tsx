import { ComponentType, FocusEvent, MouseEvent, useState } from "react";
import style from "./Openable.module.scss";

const Openable = (Component: ComponentType, propsname: string, Icon: any) => {
  const ReturnedComp = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleOpenMembers = (event: MouseEvent<HTMLElement>) => {
      const targetElement = event.target as HTMLElement;
      if (
        targetElement.dataset.name === "close" ||
        (targetElement.dataset.name === "toggle" && show)
      ) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
    const handleClose = (event: FocusEvent<HTMLElement>) => {
      if (!event.relatedTarget) {
        setShow(false);
      }
    };

    return (
      <div
        onClick={handleOpenMembers}
        onBlur={handleClose}
        tabIndex={0}
        className={style.menu}
      >
        <div data-name="toggle" className={style.coostomBlock}>
          <Icon sx={{ fontSize: "15px" }} />
          <span>{propsname}</span>
        </div>
        {show && <Component />}
      </div>
    );
  };

  return ReturnedComp;
};
export default Openable;

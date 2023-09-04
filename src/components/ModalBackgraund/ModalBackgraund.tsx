import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "hooks/changDispatchSekector";
import { setShowOptionDiv } from "store/slices/showOptiondivSlice/showOptionDivSlice";
import { setStyles } from "store/slices/taskSettings/taskSettingsSlice";
import style from "./ModalBackgraund.module.scss";
import { createPortal } from "react-dom";

const ModalBackgraund = () => {
  const dispatch = useAppDispatch();
  const { show } = useAppSelector((state) => state.setShowOptionDiv);
  const setOption = () => {
    dispatch(
      setStyles({
        currentLeft: -600,
        currentTop: -600,
      })
    );
    dispatch(setShowOptionDiv(!show));
  };
  return createPortal(
    <div
      onClick={setOption}
      className={classNames(style.settings, {
        [style.settingsIsNone]: show,
      })}
    ></div>,
    document.body
  );
};

export default ModalBackgraund;

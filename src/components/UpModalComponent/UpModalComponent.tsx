import AddBoxIcon from '@mui/icons-material/AddBox';
import style from "./UpModalComponent.module.scss";
import { FC, useEffect, useRef } from 'react';
import { IUpmodalProps } from './UpModalComponentTypes';
import { useAppDispatch, useAppSelector } from 'hooks/changDispatchSekector';
import { setShowModal } from 'store/slices/modalSlice/modalSlice';

const UpModalComponent:FC<IUpmodalProps> = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector(state => state.modallMeniu);
  const onClose = () => {
    dispatch(setShowModal(!modal.upModalShow))
  };

  return (
    <div  className={style.upModalComponent}>
      <div className={style.leftBlock}>
        <div className={style.cardblock}></div>
        <span>This is a Template card.</span>
      </div>
      <div className={style.rightBlock}>
        <div className={style.templateSection}>
          <div className={style.iconBlock}>
            <AddBoxIcon sx={{ fontSize: "16px" }} />
          </div>
          <span>Create card from template</span>
        </div>
        <div onClick={onClose} className={style.closeSection}>
          <span>X</span>
        </div>
      </div>
    </div>
  );
};

export default UpModalComponent;

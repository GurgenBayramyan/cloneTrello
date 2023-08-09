import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import style from './SideBar.module.scss'
import { useState } from "react";

const SideBar = () => {
    const [open,setOpen] = useState(true);
    const handleMenu = () => {
        setOpen(!open)
    }
  return (
    <div className={`${style.leftContainer} ${open && style.close} `}>
        <div className={style.leftContainer_top}>
          <div className={style.numbers}>
            <div className={style.first}>
              <span>4</span>
            </div>
            <div className={style.last}>
              <span>48</span>
            </div>
          </div>
          {open ? (
            <div className={style.openBlock}>
              <ChevronRightIcon
                sx={{ cursor: "pointer" }}
                onClick={handleMenu}
              />
            </div>
          ) : (
            <div className={style.closeblock}>
              <ChevronLeftIcon
                sx={{ cursor: "pointer" }}
                onClick={handleMenu}
              />
            </div>
          )}
          <div />
        </div>
        <div className={style.leftContainer_down} />
      </div>
  )
}

export default SideBar
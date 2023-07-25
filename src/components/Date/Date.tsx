import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import style from "./Date.module.scss";

const Date = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>();

  return(
    <Calendar className={[style.date]} onChange={onChange} value={value} />
  )
};

export default Date;

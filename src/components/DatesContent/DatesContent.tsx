import Calendar from "react-calendar";
import style from "./DatesContent.module.scss";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const DatesContent = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className={style.dates}>
      <div className={style.dates_header}>
        <p>Dates</p>
        <span>x</span>
      </div>
      <div className={style.calendar}>
        <Calendar onChange={onChange} value={value} />
      </div>
      <h5>Start date</h5>
      <div className={style.startDate}>
        <input type="checkbox" />
        <div>
          <span>M/D/YYYY</span>
        </div>
      </div>
      <h5>Due date</h5>
      <div>
        <span>M/D/YYYY</span>
        <span>M/D/YYYY</span>
      </div>
      <h5>Set due date reminder</h5>
      <select >
          <option value="example">example</option>
          <option value="example">example1</option>
          <option value="example">example2</option>
      </select>
      <h5>Reminders will be sent to all members and watchers of this card.</h5>
      <div className={style.save}>
          <span>Save</span>
      </div>
      <div className={style.remove}>
          <span>Remove</span>
      </div>
    </div>
  );
};

export default DatesContent;

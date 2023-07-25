import Calendar from "react-calendar";
import style from "./DatesContent.module.scss";
import { FC} from "react";
import { IDates } from "./DatesContentTypes";
import Date from "components/Date/Date";

const DatesContent:FC<IDates> = ({onClose}) => {
 
  return (
    <div  className={style.dates}>
      <div className={style.dates_header}>
        <p>Dates</p>
        <span data-name="close" onClick={onClose} >x</span>
      </div>
      <div className={style.calendar}>
        <Date />
      </div>
      <h5>Start date</h5>
      <div className={style.startDate}>
        <div className={style.blockCheck}>
          <input type="checkbox" />
        </div>
        <div className={style.dateinfo}>
          <span>M/D/YYYY</span>
        </div>
      </div>
      <h5>Due date</h5>
      <div className={style.dueData}>
      <div className={style.blockCheck}>
          <input type="checkbox" />
        </div>
        <div className={style.dateinfo}>
          <span>M/D/YYYY</span>
        </div>
        <div className={style.dateinfo}>
          <span>M/D/YYYY</span>
        </div>
      </div>
      <h5>Set due date reminder</h5>
      <select >
          <option value="None">None</option>
          <option value="At time of due Date">at time of due Date</option>
          <option value="5 Minutes before">5 minutes before</option>
          <option value="10 Minutes before">10 minutes before</option>
          <option value="15 Minutes before">15 minutes before</option>
          <option value="1 Hour before">1 Hour before</option>
          <option value="2 Hour before">2 Hour before</option>
          <option value="1 Day befpre">1 Day befpre</option>
          <option value="2 Day befpre">2 Day befpre</option>
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

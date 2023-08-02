import AttachComponent from "components/AttachComponent/AttachComponent";
import style from "./AttackContent.module.scss";

const AttackContent = () => {
  return (
    <div className={style.attach}>
      <div className={style.attach_header}>
        <p>Attach</p>
        <span data-name="close"> x</span>
      </div>
      <h5>Arrach a file from your computer</h5>
      <p className={style.parag}>You can also drag and drop files to upload them.</p>
      <div className={style.chose}>
        <span>Choose a file</span>
      </div>
      <hr />
      <div className={style.labelBlock}>
        <label htmlFor="link">Search or paste a link</label>
        <input name="link" id="link" type="text" />
      </div>
      <div className={style.labelBlock}>
        <label htmlFor="link_two">Display text (optional)</label>
        <input name="link_two"  id="link_two" type="text" />
      </div>
     <h6>RECENTLY VIEWED</h6>
     <div className={style.culumnLists}>
        <AttachComponent  name="Task functional"/>
        <AttachComponent  name="Task functional"/>
        <AttachComponent  name="Task functional"/>
        <AttachComponent  name="Task functional"/>
     </div>
     <div className={style.btnBlocks}>
          <button className={style.cancelBtn}>Cancel</button>
          <button className={style.insert}>Insert</button>
     </div>
    </div>
  );
};

export default AttackContent;

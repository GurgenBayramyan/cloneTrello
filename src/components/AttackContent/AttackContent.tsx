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
        <input type="text" />
      </div>
      <div className={style.labelBlock}>
        <label htmlFor="link">Display text (optional)</label>
        <input type="text" />
      </div>

    </div>
  );
};

export default AttackContent;

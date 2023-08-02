import style from './CustomContent.module.scss'
const CustomContent = () => {
  return (
    <div className={style.cusstomBlock}>
      <div className={style.cusstomBlock_header}>
        <p>Attach</p>
        <span data-name="close"> x</span>
      </div>
      <div className={style.image}>

      </div>
    </div>
  );
}

export default CustomContent
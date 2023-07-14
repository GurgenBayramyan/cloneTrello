import style from './List.module.scss'
import { IListProps } from './ListTypes'

const List = ({title}:IListProps) => {
  return (
    <div className={style.listBlock}>
      <div className={style.listBlock_header}>
          <span>{title}</span>  
          <div>
            <span>...</span>
          </div>
      </div>
    </div>
  )
}

export default List
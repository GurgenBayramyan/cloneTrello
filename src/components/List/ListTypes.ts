export interface IListProps{
    title:string
    openModal?:()=>void
}
export interface IListState{
    addCard:boolean
    titleBlock:boolean
}
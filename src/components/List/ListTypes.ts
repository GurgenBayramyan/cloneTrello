export interface IListProps{
    title:string
    openModal:()=>void
    setOption:() => void
    showSetings:boolean
}
export interface IListState{
    optionBlock:boolean
    addCard:boolean
    titleBlock:boolean
}
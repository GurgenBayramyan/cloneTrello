interface IWorkspace {
  show: boolean
  currentTop: number
  currentLeft: number
  content: string
}
export interface IStateBlock{
  menuActive:boolean
  menuBlock:string
}
interface IBackgroundBlockInitial{
  show:boolean,
  top:number
  right:number
}

export interface IWorkspaceInitial {
  workspace:IWorkspace
  menuState:IStateBlock
  backgroundState:IBackgroundBlockInitial
  url:string
}
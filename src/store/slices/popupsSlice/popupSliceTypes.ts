interface IWorkspace {
  show: boolean;
  currentTop: number;
  currentLeft: number;
  content: string;
}
export interface IStateBlock {
  menuActive: boolean;
  menuBlock: string;
  currentTop: number;
  currentLeft: number;
}
interface IBackgroundBlockInitial {
  show: boolean;
  top: number;
  right: number;
}
export interface Ioptionboard {
  show: boolean;
  currentTop: number;
  currentLeft: number;
  name: string;
  id: number;
}

export interface IWorkspaceInitial {
  workspace: IWorkspace;
  menuState: IStateBlock;
  backgroundState: IBackgroundBlockInitial;
  optionboard: Ioptionboard;
  deleteBoard: {
    show: boolean;
  };
  changePopup: {
    show: boolean;
  };
  questionBlock: boolean;
  loadingDelete: boolean;
}

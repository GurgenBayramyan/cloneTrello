import BoardBackgraund from "components/BoardBackgraund/BoardBackgraund";
import CreateMenu from "components/CreateMenu/CreateMenu";
import MainRoutes from "components/MainRoutes/MainRoutes";
import ModalBackgraund from "components/ModalBackgraund/ModalBackgraund";
import ModalBlock from "components/ModallBlock/ModalBlock";
import OptionBoard from "components/OptionBoard/OptionBoard";
import TaskSettings from "components/TaskSettings/TaskSettings";
import UserSection from "components/UserSection/UserSection";
import WorkspaceContent from "components/WorkspaceContent/WorkspaceContent";
import { ToastContainer } from "react-toastify";
import style from './App.module.scss'
import "react-toastify/dist/ReactToastify.css";
import DeleteBoard from "components/DeleteBoard/DeleteBoard";

const App = () => {

  return (
    <div className={style.App}>
      <MainRoutes />
      <ModalBackgraund />
      <UserSection />
      <BoardBackgraund />
      <WorkspaceContent />
      <ModalBlock />
      <TaskSettings taskName="TaskName" />
      <OptionBoard />
      <CreateMenu />
      <ToastContainer />
     
    </div>
  );
};
export default App;

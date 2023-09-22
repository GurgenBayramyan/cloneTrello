import Content from "components/Content/Content";
import DeleteBoard from "components/DeleteBoard/DeleteBoard";
import Layout from "components/Layout/Layout";
import { createPortal } from "react-dom";


const Board = () => {
  const root = document.getElementById("root") as HTMLElement
  return (
    <Layout>
        {createPortal(<DeleteBoard />,root)}  <DeleteBoard />
      <Content />
    </Layout>
  );
};

export default Board;

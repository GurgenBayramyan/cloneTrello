import Content from "components/Content/Content";
import DeleteBoard from "components/DeleteBoard/DeleteBoard";
import Layout from "components/Layout/Layout";
import { createPortal } from "react-dom";


const Board = () => {
  return (
    <Layout>
        {createPortal(<DeleteBoard />,document.body)} 
      <Content />
    </Layout>
  );
};

export default Board;

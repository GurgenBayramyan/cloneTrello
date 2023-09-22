
import style from "./HomePage.module.scss";
import Layout from "components/Layout/Layout";

const HomePage = () => {

  return (
    <Layout>
      <div className={style.home}>
        <span>Home Page</span>
      </div>
    </Layout>
  );
};

export default HomePage;

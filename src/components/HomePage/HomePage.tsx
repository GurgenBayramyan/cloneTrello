import Layout from "components/Layout/Layout";
import style from "./HomePage.module.scss";

const HomePage = () => {
  console.log("HomePage")
  return (
    <Layout>
      <div className={style.home}>
        <span>Home Page</span>
      </div>
    </Layout>
  );
};

export default HomePage;

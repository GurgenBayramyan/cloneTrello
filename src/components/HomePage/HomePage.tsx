import { useAppDispatch } from "hooks/changDispatchSekector";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setLoading, setToken } from "store/slices/contentSlice/contentSlice";
import style from "./HomePage.module.scss";
import Layout from "components/Layout/Layout";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setToken(Cookies.get("token") as string));
    dispatch(setLoading(false));
  }, []);
  return (
    <Layout>
      <div className={style.home}>
        <span>Home Page</span>
      </div>
    </Layout>
  );
};

export default HomePage;

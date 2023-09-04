import { useEffect } from "react";
import style from "./HomePage.module.scss";
import { useAppDispatch } from "hooks/changDispatchSekector";
import { setLoading, setToken } from "store/slices/contentSlice/contentSlice";
import Cookies from "js-cookie";

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setToken(Cookies.get("token") as string));
    dispatch(setLoading(false));
  }, []);
  return (
    <div className={style.home}>
      <span>Home Page</span>
    </div>
  );
};

export default HomePage;

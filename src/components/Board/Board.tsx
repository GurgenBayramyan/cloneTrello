import Content from "components/Content/Content";
import { useAppDispatch } from "hooks/changDispatchSekector";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { setToken } from "store/slices/contentSlice/contentSlice";

const Board = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setToken(Cookies.get("token") as string));
  }, []);
  return <Content />;
};

export default Board;

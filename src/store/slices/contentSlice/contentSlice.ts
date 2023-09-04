import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IContentInitial, IUserData } from "./contentSliceTypes";

const initialState: IContentInitial = {
  data: {
    firstname: "",
    lastname: "",
    genders: "",
    email: "",
    age: "",
  },
  token: "",
  loading: true,
};

const contentSlice = createSlice({
  name: "contentSlice",
  initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<IUserData>) => {
      state.data = payload;
    },
    setToken: (state, { payload }: PayloadAction<string>) => {
      state.token = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});
export default contentSlice;
export const { setUserData, setToken, setLoading } = contentSlice.actions;

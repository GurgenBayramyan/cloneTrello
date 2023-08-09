import React, { useEffect } from "react";
import Login from "../login";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Registration from "../Registration";
import { ToastContainer } from "react-toastify";
import ErrorPage from "components/ErrorPage/ErrorPage";
import Protected from "hoc/CompletedRoutes/Protected";
import ProtectedLoginRegistr from "hoc/CompletedRoutLoginRegistr/ProtectedLoginRegistr";
import Content from "components/Content/Content";

const App = () => {
  const HomeComponent = Protected(Home)
  const LoginComponent = ProtectedLoginRegistr(Login)
  const RegistrationComponent = ProtectedLoginRegistr(Registration)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent  />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="registration" element={<RegistrationComponent />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/:id" element={<Content openModal={() => console.log("yay")}  />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
export default App;

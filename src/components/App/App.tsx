import Login from "../login";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Registration from "../Registration";
import { ToastContainer } from "react-toastify";
import ErrorPage from "components/ErrorPage/ErrorPage";
import Protected from "hoc/CompletedRoutes/Protected";
import ProtectedLoginRegistr from "hoc/CompletedRoutLoginRegistr/ProtectedLoginRegistr";
import Board from "components/Board";

const App = () => {
  const HomeComponent = Protected(Home)
  const LoginComponent = ProtectedLoginRegistr(Login)
  const RegistrationComponent = ProtectedLoginRegistr(Registration)

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent  />}>
          <Route path="/:id" element={<Board />} />
        </Route>
        <Route path="login" element={<LoginComponent />} />
        <Route path="registration" element={<RegistrationComponent />} />
        <Route path="error" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
export default App;

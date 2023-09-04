import Login from "../login";
import Board from "components/Board/Board";
import ErrorPage from "components/ErrorPage/ErrorPage";
import HomePage from "components/HomePage/HomePage";
import Registration from "components/Registration/Registration";
import ProtectedLoginRegistr from "hoc/CompletedRoutLoginRegistr/ProtectedLoginRegistr";
import Protected from "hoc/CompletedRoutes/Protected";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const HomeComponent = Protected(HomePage);
  const BoardPage = Protected(Board);
  const ErrorComponent = Protected(ErrorPage);
  const LoginComponent = ProtectedLoginRegistr(Login);
  const RegistrationComponent = ProtectedLoginRegistr(Registration);
  return (
    <Routes>
      <Route path="/" element={<HomeComponent />} />
      <Route path="/board/:id" element={<BoardPage />} />
      <Route path="login" element={<LoginComponent />} />
      <Route path="registration" element={<RegistrationComponent />} />
      <Route path="error" element={<ErrorComponent />} />
      <Route path="*" element={<ErrorComponent />} />
    </Routes>
  );
};

export default MainRoutes;

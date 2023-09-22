import Loading from "components/Loading/Loading";
import ProtectedLoginRegistr from "hoc/CompletedRoutLoginRegistr/ProtectedLoginRegistr";
import Protected from "hoc/CompletedRoutes/Protected";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("../HomePage"));
const Board = lazy(() => import("components/Board/Board"));
const Login = lazy(() => import("../login"));
const Registration = lazy(() => import("components/Registration/Registration"));
const ErrorPage = lazy(() => import("components/ErrorPage/ErrorPage"));


const MainRoutes = () => {
  const HomeComponent = Protected(HomePage);
  const BoardPage = Protected(Board);
  const LoginComponent = ProtectedLoginRegistr(Login);
  const RegistrationComponent = ProtectedLoginRegistr(Registration);

  return (
    <Suspense fallback={<Loading background="#1d2125" spinnerColor="#fff" />}>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/board/:id" element={<BoardPage />} />
        <Route path="login" element={<LoginComponent />} />
        <Route path="registration" element={<RegistrationComponent />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );

};

export default MainRoutes;

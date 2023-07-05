import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../store/authContext";
import React, { useContext } from "react";

import PacientsPage from "../components/mainPage/pacientesPage/pacietspage";
import Mainpage from "../components/mainPage/mainpage";
import BedsPage from "../components/mainPage/bedsPage/bedspage";
import InternationPage from "../components/mainPage/internationsPage/internationpage";
import LoginPage from "../components/loginPage/loginpage";
import NewPacientPage from "../components/mainPage/pacientesPage/cnewPacientPage";


const RequireAuth = ({ children }: { children: any }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};
const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" Component={Mainpage}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/pacients" Component={PacientsPage}></Route>
        <Route path={"/pacients"} Component={PacientsPage}>
          <Route path={""} Component={PacientsPage} />
          <Route path={"new"} Component={NewPacientPage} />
        </Route>
        <Route path="/pacients/newPaciente" Component={NewPacientPage}></Route>
        <Route path="/beds" Component={BedsPage}></Route>
        <Route path="/pacients/internation" Component={InternationPage}></Route>
      </Routes>
  );
};

export default MyRoutes;

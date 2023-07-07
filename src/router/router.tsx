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
    return <Navigate to='/login' />;
  }else{
    window.localStorage.setItem('state', JSON.stringify(auth.user));
  }

  return <React.Fragment>{children}</React.Fragment>;
};
export function refreshPage(){ 
  window.location.reload(); 
} 

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path='/*'
        element={
          <RequireAuth>
            <Routes>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/' element={<Mainpage />} />
              <Route path='/pacients' element={<PacientsPage />} />
              <Route path='/pacients/new' element={<NewPacientPage />} />
              <Route path='/pacients/internation' element={<InternationPage />} />
              <Route path='/beds' element={<BedsPage />} />
            </Routes>
          </RequireAuth>
        }
      />
      <Route path='/login' element={<LoginPage />} />
     
    </Routes>
  );
};
export default MyRoutes;

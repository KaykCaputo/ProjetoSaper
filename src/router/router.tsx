import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  
  import PacientsPage from "../components/mainPage/pacientesPage/pacietspage";
  import Mainpage from "../components/mainPage/mainpage";
  import BedsPage from "../components/mainPage/bedsPage/bedspage";
  import InternationPage from "../components/mainPage/internationsPage/internationpage";
  import LoginPage from "../components/loginPage/loginpage";
  import NewPacientPage from "../components/mainPage/pacientesPage/cnewPacientPage";
  const MyRoutes = () => {
     return(
      <BrowserRouter>
      <Routes>
         <Route path="/*" Component={Mainpage}></Route>
         <Route path="/login" Component={LoginPage}></Route>
         <Route path="/pacients" Component={PacientsPage}></Route>
         <Route path="/pacients/newPaciente" Component={NewPacientPage}></Route>
         <Route path="/beds" Component={BedsPage}></Route>
         <Route path="/pacients/internation" Component={InternationPage}></Route>
         </Routes>
      </BrowserRouter>
         
     )
  }
  
  export default MyRoutes;
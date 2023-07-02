import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
  
  import PacientsPage from "../components/mainPage/pacientesPage/pacietspage";
  import Mainpage from "../components/mainPage/mainpage";
  import BedsPage from "../components/mainPage/bedsPage/bedspage";
  import DoctorsPage from "../components/mainPage/doctorsPage/doctorsPage";
  import InternationPage from "../components/mainPage/internationsPage/internationpage";
  import LoginPage from "../components/loginPage/loginpage";
  const MyRoutes = () => {
     return(
      <BrowserRouter>
      <Routes>
         <Route path="/*" Component={Mainpage}></Route>
         <Route path="/login" Component={LoginPage}></Route>
         <Route path="/pacients" Component={PacientsPage}></Route>
         <Route path="/beds" Component={BedsPage}></Route>
         <Route path="/doctors" Component={DoctorsPage}></Route>
         <Route path="/pacients/internation" Component={InternationPage}></Route>
         </Routes>
      </BrowserRouter>
         
     )
  }
  
  export default MyRoutes;
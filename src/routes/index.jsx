import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "../components/Navbar";

export const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={"/"}  element = {<Navbar/>}>
              <Route path={"/"} element = {<HomePage/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

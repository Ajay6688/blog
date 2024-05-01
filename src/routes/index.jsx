import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Navbar } from "../components/Navbar";
import { BlogList } from "../pages/BlogList";
import { Blog } from "../pages/Blog";

export const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path={"/"}  element = {<Navbar/>}>
              <Route path={"/"} element = {<HomePage/>}/>
              <Route path = {"/all-blogs"} element = {<BlogList/>} />
              <Route path = {"/all-blogs/:id"} element = {<Blog/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

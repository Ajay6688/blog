import { Link, Outlet } from "react-router-dom";
import "../styles/HomePage.css";

export const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light home-navbar"
          style={{ paddingLeft: "37px", boxShadow: "0px 1px #d5" }}
        >
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{
              display: "flex",
              marginLeft: "37px",
              marginRight: "37px",
              justifyContent: "space-between",
            }}
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/all-blogs">
                  All Blogs
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Create
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";
import "./layoutdefault.scss";
import { getCookie } from "../../help/cookie";
import { useSelector } from "react-redux";

const LayoutDefault = () => {
  const layout = useSelector((state) => state.authenReducer);
  const token = getCookie("token");
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="main-nav navbar navbar-expand-lg navbar-light text-center m-0">
            {token ? (
              <a
                href="/"
                className="navbar-brand mr-0 d-flex align-items-center"
              >
                <img src={logo} alt="logo" />
              </a>
            ) : (
              <a
                href="/dashboard"
                className="navbar-brand mr-0 d-flex align-items-center"
              >
                <img src={logo} alt="logo" />
              </a>
            )}
            <button
              className="navbar-toggler shadow-none border-0 p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            {token ? (
              <>
                <ul className="navbar-nav">
                  <li>
                    <NavLink to="/dashboard" className="nav-link">
                        Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/job" className="nav-link">
                        Job
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/cv" className="nav-link">
                        CV
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/logout" className="header__main__btn__1 text-capitalize">
                        Logout
                    </NavLink>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="/" className="nav-link active">
                      home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      event
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="/login"
                      className="header__main__btn__1 text-capitalize"
                    >
                      for employers
                    </a>
                  </li>
                </ul>
              </>)}
            </div>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};
export default LayoutDefault;

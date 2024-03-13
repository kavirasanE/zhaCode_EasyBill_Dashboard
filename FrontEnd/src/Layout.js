import "./layout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main row">
      {/* <header>Header</header> */}
      <div className="menu col-lg-3 col-md-3 col-sm-4 col-2">
        <div className="row ">
          <div className=" text-center user-name">
            <p className="font-weight-bold">Admin</p>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <NavLink className="menu-name nav-link" to="dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-name nav-link" to="users">
                  Manage Users
                </NavLink>
              </li>
             
              <li>
                <NavLink className="menu-name nav-link" to="managesubscription">
                  <span className=" text-nowrap "> Manage Subscription </span>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link menu-name " to="subscriptionplans">
                  <span className=" text-nowrap"> Transaction History </span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink className="menu-name nav-link" to="userexample">
                  UsersExample
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="content bg-white col-lg-9 col-md-9 col-sm-8 col-10 overflow-auto">
        {/* <div className="test">hello</div> */}
        <Outlet />
      </div>
      {/*<main className="col-9">
      </main> */}
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;

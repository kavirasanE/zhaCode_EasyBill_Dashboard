import React, { useContext, useState } from "react";
import billing from "../../assests/billing.jpg";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../Context/DataProvider";

const Login = () => {
  const { loginState, setLoginState } = useContext(DataContext);
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
    status: "",
  });

  function handleLogin() {
    navigate("/dashboard");
  }

  function handleLoginChange(eve) {
    setLogin((preVal) => ({
      ...preVal,
      [eve.target.name]: eve.target.value,
    }));
  }

  return (
    <>
      <div
        className="row position-relative align-items-center"
        style={{
          backgroundImage: `url(${billing})`,
          backgroundSize: "80%",
          backgroundPosition: "top",
          height: "100vh",
        }}
      >
        <div className=" position-absolute d-flex justify-content-center">
          <div className="bg-light col-4 my-10 rounded-3 ">
            <h1 className="text-center p-2 pt-4 fs-4  font-weight-bold">LOGIN</h1>

            <div className="p-4">
              <FaUser className="text-primary position-absolute mt-2 mx-3" />
              <input
                name="username"
                type="text"
                onChange={handleLoginChange}
                placeholder="Enter your username"
                className="form-control text-center"
              />
            </div>

            <div className="px-4">
              <RiLockPasswordFill className="text-primary position-absolute mt-2 mx-3" />
              <input
                name="password"
                onChange={handleLoginChange}
                placeholder="Enter your password"
                type="password"
                className="form-control text-center"
              />
            </div>
            <div className="d-flex  justify-content-center p-4 align-items-center  ">
              <button
                type="button"
                className="btn btn-primary rounded text-center justify-content-center my-3 px-5 py-2"
                onClick={handleLogin}
              >
                Login
              </button>
              <p>{login.status}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

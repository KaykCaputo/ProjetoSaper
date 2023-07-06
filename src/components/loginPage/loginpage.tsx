/* eslint-disable no-unused-expressions */
import React, { useContext, useRef, useState } from "react";
import Helmet from "react-helmet";
import "./loginpage.css";
import { SeePassword, flip } from "./script";
import { useAPI } from "../../services/API";
import { AuthContext } from "../../store/authContext";
import { useNavigate } from "react-router-dom";
import "./userdefault.png";

/** @tsx React.DOM */

type LoginData = {
  username: string;
  password: string;
  email: string;
};


export default function LoginPage() {
  //LOGIN
  document.body.style.overflow = "hidden";
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = useState<LoginData>({ username: "", password: "" , email:""});
  const api = useAPI();

  const onUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
  name: "username" | "password" | "email"
) => {
  const value = e.target.value;
  setState((prevState) => ({ ...prevState, [name]: value }));
};

  function doLogin() {
    if (state.username && state.password) {
      const basicAuth = "Basic " + btoa(state.username + ":" + state.password);
      const htmlConfig = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          Authorization: basicAuth,
        },
      };
      api
        .get("/user/username/" + state.username, {}, htmlConfig)
        .then((res) => {
          auth.updateUser ? auth.updateUser({ ...res, basicAuth }) : null;

          navigate("/");
        });
    }
  }
  // SIGN-IN
  
  async function handleSubmit(e: any) {
    e.preventDefault();

   if (state.username && state.password && state.email) {
      const userData = {
        username: state.username,
        email: state.email,
        password: state.password,
      };

      try {
        const response = await api.post("/user", userData);
        const { data } = response;
        const basicAuth = response.headers["authorization"];
        auth.updateUser && auth.updateUser({ ...data, basicAuth });
        navigate("/");
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
    }
  
  

  return (
    <body className="loginbody">
      <div id="card-front" className="card">
        <div className="front" id="card-content-front">
          <div id="card-title-front">
            <h2>Welcome Back</h2>
            <div className="underline-title"></div>
          </div>
          <form className="form">
            <label htmlFor="username" style={{ paddingTop: "13px" }}>
              {" "}
              &nbsp;Username{" "}
            </label>
            <input
              id="username"
              className="form-content"
              type="username"
              name="username"
              autoComplete="on"
              required
              value={state.username}
              onChange={(e) => onUpdate(e, "username")}
            />
            <div className="form-border"></div>
            <label htmlFor="user-password" style={{ paddingTop: "22px" }}>
              &nbsp;Password{" "}
            </label>
            <input
              id="user-password"
              className="form-content"
              type="password"
              name="password"
              required
              value={state.password}
              onChange={(e) => onUpdate(e, "password")}
            />
            <div>
              Show Password
              <input
                name="seepass"
                type="checkbox"
                onClick={() => SeePassword()}
                id="see-password"
              />
            </div>
            <div className="form-border"></div>
            <a>
              <legend id="forgot-pass">Forgot password?</legend>
            </a>
            <input
              id="submit"
              type="button"
              name="submit"
              value="LOGIN"
              onClick={() => doLogin()}
            />{" "}
            <a id="signup" style={{ fontSize: "11pt;" }}>
              Don't have an Account?
              <input
                type="button"
                value="Sign Up"
                className="btn1"
                onClick={() => flip()}
              />
            </a>
          </form>
        </div>
        <div className="back" id="card-content-back">
          <div className="card-back-title">
            <h2>Signup!</h2>
            <div className="underline-title"></div>
          </div>
          <div>
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="username" style={{ paddingTop: "13px;" }}>
                &nbsp;Username
              </label>
              <input
                type="text"
                id="username"
                className="form-content"
                style={{ marginBottom: "10%" }}
                required
                value={state.username}
                onChange={(e) => onUpdate(e, "username")}
              />
              <div className="form-border"></div>
              <label
                htmlFor="user-registration"
                style={{ paddingTop: "13px;" }}
              >
                {" "}
                &nbsp;Email
              </label>
              <input
                id="email-register"
                className="form-content"
                type="email"
                name="email"
                autoComplete="off"
                style={{ marginBottom: "10%" }}
                required
                value={state.email}
                onChange={(e) => onUpdate(e, "email")}
              />
              <div className="form-border"></div>
              <label
                htmlFor="register-password"
                style={{ paddingTop: "22px;" }}
              >
                &nbsp;Password
              </label>
              <input
                type="password"
                id="password-register"
                className="form-content"
                name="password"
                style={{ marginBottom: "6%" }}
                required
                value={state.password}
                onChange={(e) => onUpdate(e, "password")}
              />
              <input
                type="submit"
                id="register"
                name="register"
                value="REGISTER"
              />
              <div className="form-border" style={{ marginBottom: "4%" }}></div>
              <input
                style={{ marginBottom: "14%" }}
                type="button"
                value="Have an account? Go To Login"
                className="btn2"
                onClick={() => flip()}
              />
            </form>
          </div>
        </div>
      </div>
    </body>
  );
}


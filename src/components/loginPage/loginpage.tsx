/* eslint-disable no-unused-expressions */
import React, { useContext, useRef, useState } from "react";
import Helmet from "react-helmet";
import "./loginpage.css";
import { SeePassword, flip } from "./script";
import { useAPI } from "../../services/API";
import { AuthContext } from "../../store/authContext";
import { useNavigate } from "react-router-dom";
import './userdefault.png';

/** @tsx React.DOM */

type LoginData = {
  email: string;
  password: string;
};
type UserData = {
  file?: any
  username: string
  email: string
  password: string
}

export default function LoginPage() {
  //LOGIN
  document.body.style.overflow = "hidden"
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = useState<LoginData>({ email: "", password: "" });
  const api = useAPI();

  const onUpdate = (e: React.ChangeEvent<any>, name: "email" | "password") => {
    setState((state) => ({ ...state, [name]: e.target.value }));
  };

  function _handleSubmit(e: any) {
    e.preventDefault();

    if (state.email && state.password) {
      const basicAuth = "Basic " + btoa(state.email + ":" + state.password);
      const htmlConfig = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: basicAuth,
        },
      };
      api.get("/user", {}, htmlConfig).then((res) => {
        auth.updateUser ? auth.updateUser({ ...res, basicAuth }) : null;/* eslint-disable-line */
        
        navigate("/");
      });
    }
  }
  // SIGN-IN
  const [_state, _setState] = useState<UserData>({
    username: '',
    password: '',
    email: '',
  })
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [imageProfile, setImageProfile] = useState<any>('./userdefault.png')

  const _onUpdate = (
    e: React.ChangeEvent<any>,
    name: 'username' | 'password' | 'email',
  ) => {
    setState((_state) => ({ ..._state, [name]: e.target.value }))
  }

  function handleSubmit(e: any) {
    e.preventDefault()

    if (_state.username && _state.password && _state.email) {
      const bodyFormData = new FormData()
      bodyFormData.append('file', _state.file)
      bodyFormData.append('username', _state.username)
      bodyFormData.append('email', _state.email)
      bodyFormData.append('password', _state.password)

      const httpConfig = {
        headers: {
          Authorization: auth.user?.basicAuth,
          'Content-Type': `multipart/form-data;`,
        },
      }

      api.post('/user', _state, httpConfig).then(() => {
        navigate('/')
      })
    }
  }

  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = function () {
      setImageProfile(reader.result)
    }

    if (file) {
      setState((state) => ({ ...state, file }))
      reader.readAsDataURL(file)
    } else {
      setImageProfile('./userdefault.png');
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
            <form method="get" className="form">
              <label htmlFor="user-email" style={{ paddingTop: "13px" }}>
                {" "}
                &nbsp;Email{" "}
              </label>
              <input
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                autoComplete="on"
                required
                value={state.email}
                onChange={(e) => onUpdate(e, "email")}
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
              <input id="submit" type="submit" name="submit" value="LOGIN" onClick={() => handleSubmit}/>{" "}
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
          {/* Signup */}
          <div className="back" id="card-content-back">
            <div className="card-back-title">
              <h2>Signup!</h2>
              <div className="underline-title"></div>
            </div>
            <div>
              <form method="post" className="form">
                <label htmlFor="username" style={{ paddingTop: "13px;" }}>
                  &nbsp;Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-content"
                  style={{ marginBottom: "10%" }}
                  required
                  value={_state.username}
                  onChange={(e) => _onUpdate(e, "username")}
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
                  value={_state.email}
                  onChange={(e) => _onUpdate(e, "email")}
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
                  value={_state.password}
                  onChange={(e) => _onUpdate(e, "password")}
                />
                <input
                  type="submit"
                  id="register"
                  name="register"
                  value="REGISTER"
                  onClick={() => _handleSubmit(_state)}
                />
                <div
                  className="form-border"
                  style={{ marginBottom: "4%"}}
                ></div>
                Have an account? 
                <input
                style={{ marginBottom: "14%"}}
                  type="button"
                  value="Login"
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

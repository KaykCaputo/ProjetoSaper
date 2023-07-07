import React, { useContext } from "react";
import Helmet from "react-helmet";
import { toggleNav } from "./script";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { AuthContext } from "../../store/authContext";

export default function Sidebar() {
  const auth = useContext(AuthContext);
  return (
    <body style={{position:"sticky"}}>
      <div className="topnav">
        <a className="openbtn" onClick={() => toggleNav()}>
          ☰
        </a>
        <a>
          <img
            src={require("../mainPage/logofront.png")}
            alt="some text"
            width="322"
            height="48"
          />
        </a>
      </div>

      <div id="mySidenav" className="sidenav">
        <div className="margemdaborda">
          <div className="bordapessoa">
            <div className="divdaimg">
              <img
                className="imgpessoa"
                src={require("../mainPage/vemdoback.png")}
                width="30px"
                height="30px"
              />
            </div>
            <div className="bemvindo">
              <div>Seja bem-vindo</div>
              <div className="nomeblack">{auth.user?.username}</div>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="link-container">
            <i className="fas fa-home link-icon"></i>
            <span className="link-text"> Inicio</span>
          </div>
        </Link>

        <Dropdown
          className="link-container"
          style={{ marginLeft: "7%", marginBottom: "6%" }}
        >
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            <i className="fas fa-user link-icon"></i>
            <span
              className="link-text"
              style={{ fontSize: "20px", padding: "0% 4% 0% 10%" }}
            >
              Pacientes
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link
                to="/pacients/new"
                style={{
                  padding: "1% 20% 1% 0%",
                  boxSizing: "content-box",
                  marginBottom: "-7%",
                  fontSize: "17px",
                }}
                className="link-text"
              >
                <i
                  className="fas fa-plus link-icon"
                  style={{ marginRight: "3%" }}
                ></i>
                Novo Paciente
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/pacients"
                style={{
                  padding: "1% 20% 1% 0%",
                  boxSizing: "content-box",
                  marginBottom: "-7%",
                  fontSize: "17px",
                }}
                className="link-text"
              >
                <i
                  className="fas fa-book link-icon"
                  style={{ marginRight: "3%" }}
                ></i>
                Visualizar Existente
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown
          className="link-container"
          style={{ marginLeft: "7%", marginBottom: "10%" }}
        >
          <Dropdown.Toggle variant="transparent" id="dropdown-basic">
            <i className="fas fa-bed link-icon"></i>
            <span
              className="link-text"
              style={{ fontSize: "20px", padding: "0% 5% 0% 10%" }}
            >
              Leitos
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link
                to="/beds"
                style={{
                  padding: "1% 20% 1% 0%",
                  boxSizing: "content-box",
                  marginBottom: "-7%",
                  fontSize: "17px",
                }}
                className="link-text"
              >
                <i
                  className="fas fa-book link-icon"
                  style={{ marginRight: "3%" }}
                ></i>
                Visualizar Existente
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link to="/login" className="logout-btn">
          Sair <i className="fas fa-sign-out-alt"></i>
        </Link>
      </div>
    </body>
  );
}

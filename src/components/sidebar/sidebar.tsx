import React from "react";
import Helmet from "react-helmet";
import { toggleNav } from "./script";
import "./sidebar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function Sidebar() {
  return (
    <html>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <script src="java.js"></script>
      </Helmet>
      <body>
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
                <div className="nomeblack">nome do back</div>
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
                  to="/pacients/newPaciente"
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
    </html>
  );
}

import React from "react";
import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import { Link } from "react-router-dom";
import PacientDetails from "./components/pacientDetails";
import InternationDetails from "./components/internationDetails";

export default function PacientsPage() {
  return (
    <body>
      <Sidebar />
      <div id="pacientes" className="content" style={{ display: "none;" }}>
        <h1>Página do Paciente</h1>
        <h6 style={{ width: "30%", fontSize: "1.2vw", marginLeft: "1%" }}>
          Insira o ID do prontuario:
        </h6>
        <input
          type="text"
          style={{
            width: "10%",
            float: "left",
            height: "4vh",
            marginTop: "0.3%",
            marginLeft: "1%",
          }}
        ></input>
        <span>
          <div className="button-container">
            <button type="submit" id="search-btn">
              Procurar
            </button>
          </div>
        </span>
        <h2 style={{ marginLeft: "38%" }}>Informações do Paciente:</h2>
        <PacientDetails
          age={18}
          address="1"
          name="Kayk Caputo"
          email="emaillegal@email.com"
          gender="Masculino"
          phoneNumber="(78)92471-3578"
        />

        <div className="internacoes">
          <h2 style={{ float: "left" }}>Internações</h2>
          <Link to="internation" style={{ float: "right" }}>
            <button type="button" className="btn btn-primary">
              Cadastrar Nova Internação
            </button>
          </Link>

          <table>
            <h5>Internações</h5>
            <tr>
              <th>Motivo</th>
              <th>Data</th>
              <th>Leito</th>
              <th>Protocolo</th>
            </tr>
            <InternationDetails
              bed={1}
              cause="Fratura nos membros superiores"
              protocol={1}
              date={new Date()}
            />
          </table>
        </div>
      </div>
    </body>
  );
}

import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import { Link } from "react-router-dom";
import PacientDetails from "./components/pacientDetails";
import InternationDetails from "./components/internationDetails";
import { useAPI } from "../../../services/API";
import Pacient from "../../../entities/pacient";
import { Table } from "react-bootstrap";
import Internation from "../../../entities/internation";
import convertDate from "../../../services/convertDate";

export default function PacientsPage() {
  const [pacients, setPacients] = useState<Array<Pacient>>([]);
  const [internations, setInternations] = useState<Array<Internation>>([]);
  const api = useAPI();

  const htmlConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };

  useEffect(() => {
    // Carregar a lista de leitos inicialmente
    api.get("/pacient", {}, htmlConfig).then((res) => {
      setPacients(res);
    });

    api.get("/hospitalization", {}, htmlConfig).then((res) => {
      setInternations(res);
    });
  }, []);

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

        <div>
          <Table>
            <thead>
              <th>Id do prontuario</th>
              <th>Nome</th>
              <th>Data de nascimento</th>
              <th>Telefone</th>
            </thead>
            <tbody>
              {pacients.map((pacient) => (
                <PacientDetails
                  medicalRecord_id={pacient.medicalRecord_id}
                  name={pacient.name}
                  birthday={convertDate(pacient.birthday)}
                  phoneNumber={pacient.phone}
                />
              ))}
            </tbody>
          </Table>
        </div>



        <div className="internacoes">
          <h2 style={{ float: "left" }}>Internações</h2>
          <Link to="internation" style={{ float: "right" }}>
            <button type="button" className="btn btn-primary">
              Cadastrar Nova Internação
            </button>
          </Link>

          <table>
            <thead>
              <th>Protocolo</th>

              <th>Motivo</th>
              <th>Data</th>
              <th>Leito</th>
              <th>Paciente</th>

            </thead>
            {internations.map((internation) => (
                <InternationDetails
                  bed={internation.bed_id}
                  cause={internation.permanenceReason}
                  protocol={internation.hospitalization_id}
                  date={internation.hospitalizationDate}
                  pacient={internation.medicalRecord_id}
              />
            ))}
          </table>
        </div>
      </div>
    </body>
  );
}

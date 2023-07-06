import React from "react";
import Helmet from "react-helmet";
import Sidebar from "./../sidebar/sidebar";
/** @tsx React.DOM */
export default function BedsPage() {
  return (
    <body>
      <Sidebar />
      <div id="inicio" className="content">
        <div className="imgdefundo" style={{ height: "20vh" }}>
          <h1>Bem-vindo ao Hospital XYZ</h1>
          <h5 style={{ textAlign: "center", marginTop: "1%" }}>
            Serviços de saúde de qualidade para a sua família
          </h5>
        </div>
        <h3 style={{ textAlign: "center", marginTop: "2%" }}>
          Seja bem vindo ao nosso sistema, aqui você pode:
        </h3>
        <div className="row">
          <div className="row">
            <div className="card green">
              <h2>Gerenciar Leitos</h2>
              <ul style={{ lineHeight: "350%", fontSize: "21px" }}>
                <li>Cadastrar Leitos</li>
                <li>Apagar Leitos</li>
                <li>Gerenciar Ocupação dos Leitos</li>
              </ul>
            </div>

            <div className="card blue">
              <h2>Gerenciar Pacientes</h2>
              <ul style={{ lineHeight: "350%", fontSize: "21px" }}>
                <li>Cadastrar Pacientes</li>
                <li>Apagar Pacientes</li>
                <li>Gerenciar o Prontuario</li>
              </ul>
            </div>

            <div className="card red">
              <h2>Gerenciar Internações</h2>
              <ul style={{ lineHeight: "350%", fontSize: "21px" }}>
                <li>Cadastrar Internações</li>
                <li>Apagar Internações</li>
                <li>Atualizar Internações</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <h4 style={{ textAlign: "center", marginTop: "1%" }}>
          Qualquer bug/duvida entre em contato com:
          contatohospitalbeds@email.com.br
        </h4>
      </div>
    </body>
  );
}

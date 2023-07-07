import React, { useState } from "react";
import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import "../main.css";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../../services/API";

export default function InternationPage() {
  const [formData, setFormData] = useState({
    "permanenceReason": "",
    "hospitalizationDate": "",
    "bed_id": "",
    "fugilin": "",
    "medicalRelease": "false",
    "origem": "",
    "specialty": ""
  });

  const api = useAPI();
  const navigate = useNavigate();

  const changeFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function createInternation(e: any) {
    e.preventDefault();

    console.log("Entrou")

    try {
      const response = await api.post("/hospitalization", formData);
      const { data } = response;

      navigate("/pacients")
    } catch (error) {
      console.error(`Some error as ocurred: ${error}`)
    }
  }

  return (
    <body>
      <Sidebar />
      <div id="interna" className="content" style={{ display: "none;" }}>
        <div className="container">
          <h3>Nova Internação</h3>
          <form onSubmit={createInternation}>
            <div className="form-group">
              <label htmlFor="motivo">Motivo da Internação:</label>
              <textarea id="motivo" name="permanenceReason" required onChange={changeFormData} ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="data">Data de Internação:</label>
              <input type="date" id="data" name="hospitalizationDate" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="leito">Número de prontuario do paciente:</label>
              <input type="text" id="prontuario" name="medicalRecord_id" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="leito">Leito do Paciente:</label>
              <input type="text" id="leito" name="bed_id" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="situacao">Situação do Paciente(Fugulin):</label>
              <input type="text" id="situacao" name="fugilin" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="situacao">Origem:</label>
              <input type="text" id="origem" name="origem" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="situacao">Especialidade:</label>
              <input type="text" id="especialidade" name="specialty" required onChange={changeFormData} />
            </div>
            <div className="button-container">
              <button type="submit" className="btn-submit">
                Registrar Internação
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

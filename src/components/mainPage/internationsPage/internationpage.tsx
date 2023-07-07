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
              <select required onChange={changeFormData} name="fugilin" style={{fontSize:"17px"}}>
                <option value={"Cuidados minimos"}>Cuidados minimos</option>
                <option value={"Cuidados intermediarios"}>Cuidados intermediarios</option>
                <option value={"Cuidados de alta dependência"}>Cuidados de alta dependência</option>
                <option value={"Cuidados semi-intensivos"}>Cuidados semi-intensivos</option>
                <option value={"Cuidados intensivos"}>Cuidados intensivos</option>
             </select>
            </div>
            <div className="form-group">
              <label htmlFor="situacao">Origem:</label>
              <select required onChange={changeFormData} name="origem" style={{fontSize:"17px"}}>
                <option value={"SAMU"}>SAMU</option>
                <option value={"Demanda Espontanea"}>Demanda Espontanea</option>
             </select>
            </div>
            <div className="form-group">
              <label htmlFor="situacao">Especialidade:</label>
              <select required onChange={changeFormData} name="specialty" style={{fontSize:"17px"}}>
                <option value={"Cuidados minimos"}>Leito de enfermaria</option>
                <option value={"Cuidados intermediarios"}>Leito de terapia intensiva</option>
                <option value={"Cuidados de alta dependência"}>Parecer de outra especialidade</option>
                <option value={"Cuidados semi-intensivos"}>Transferencia externa</option>
                <option value={"Cuidados intensivos"}>Social</option>
                <option value={"Cuidados intensivos"}>Hemodialise</option>
             </select>
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

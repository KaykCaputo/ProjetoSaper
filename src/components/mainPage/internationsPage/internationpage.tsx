import React, { useState } from "react";
import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import "../main.css";
import { useNavigate } from "react-router-dom";
import { useAPI } from "../../../services/API";
import requestError from "../../../entities/error";

export default function InternationPage() {
  const [formData, setFormData] = useState({
    "permanenceReason": "",
    "hospitalizationDate": "",
    "bed_id": "",
    "fugilin": "Cuidados minimos",
    "medicalRelease": "false",
    "origem": "SAMU",
    "specialty": "Leito de enfermaria"
  });

  const [errors, setErrors] = useState<Array<requestError>>([]);

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

    await api.post("/hospitalization", formData).then((res) => {
      navigate("/pacients");
    }).catch((err) => {
      if(err.response.status === 409) {
        setErrors([{ field: "pacient/bed", error: err.response.data }]);
      } else {
        setErrors(err.response.data);
      }
    });
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
                <option value={"Leito de enfermaria"}>Leito de enfermaria</option>
                <option value={"Leito de terapia intensiva"}>Leito de terapia intensiva</option>
                <option value={"Parecer de outra especialidade"}>Parecer de outra especialidade</option>
                <option value={"Transferencia externa"}>Transferencia externa</option>
                <option value={"Social"}>Social</option>
                <option value={"Hemodialise"}>Hemodialise</option>
             </select>
            </div>
            {errors &&
              errors.map((error: requestError, key) => (
                <p key={key}>{error.error}</p>
              ))
            }
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

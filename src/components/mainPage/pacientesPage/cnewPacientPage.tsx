import React from "react";
import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import "../main.css";
import { useState } from "react";
import { useAPI } from "../../../services/API";
import { useNavigate } from "react-router-dom";

export default function NewPacientPage() {
  const [formData, setFormData] = useState({
    "name": "",
    "cpf": "",
    "birthday": "",
    "phone": "",
    "medicalRelease": "false"
  });

  const api = useAPI();
  const navigate = useNavigate();

  const changeFormData = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function createPacient(e: any) {
    e.preventDefault();

    try {
      const response = await api.post("/pacient", formData);
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
          <h3>Cadastrar Paciente</h3>
          <div className="form-group">
            <label htmlFor="nome">Nome Do Paciente:</label>
            <input type="text" id="nome" name="name" required onChange={changeFormData} />
          </div>
          <form onSubmit={createPacient}>
            <div className="form-group">
              <label htmlFor="nome">CPF do paciente:</label>
              <input type="text" id="nome" name="cpf" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="nome">Data de Nascimento:</label>
              <input type="Date" id="nome" name="birthday" required onChange={changeFormData} />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Telefone:</label>
              <input type="tel" id="tel" name="phone" required onChange={changeFormData} />
            </div>
            <div className="button-container">
              <button type="submit" className="btn-submit">
                Finalizar Cadastro
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}

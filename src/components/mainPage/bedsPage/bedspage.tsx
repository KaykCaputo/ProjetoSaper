import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import BedDetails from "./components/bedDetails";
import "../main.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAPI } from "../../../services/API";
import Bed from "../../../entities/bed";

export default function BedsPage() {
  // CONSULTAR LEITOS-------------------------------------
  const navigate = useNavigate();
  const [beds, setBeds] = useState<Array<Bed>>([]);
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
    api.get("/bed", {}, htmlConfig).then((res) => {
      setBeds(res);
    });
  }, []);

  // Função para criar um novo leito
  async function createBed() {
    const bedData = {
      occupied: "true",
      type: "",
    };

    const response = await api.post("/bed", bedData);
    const { data } = response;
    const basicAuth = response.headers["authorization"];

    // Atualizar a lista de leitos
    api.get("/bed", {}, htmlConfig).then((res) => {
      setBeds(res);
    });
  }
  return (
    <body>
      <Sidebar />
      <div id="leitos" className="content" style={{ display: "none;" }}>
        <h1>Leitos do Hospital</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={createBed}
          style={{
            marginRight: "0.5%",
            float: "right",
            marginBottom: "0.5%",
          }}
        >
          Cadastrar Novo Leito
        </button>
        <table>
          <tr>
            <th>Leito</th>
            <th>Status</th>
            <th>Tipo</th>
            <th></th>
          </tr>

          {beds.map((b) => (
            <BedDetails
              key={b.bed_id}
              bed_id={b.bed_id}
              fugulim={b.type}
              status={b.occupied}
              onDelete={() => {
                api.get("/bed", {}, htmlConfig).then((res) => {
                  setBeds(res);
                });
              }}
            />
          ))}
        </table>
      </div>
    </body>
  );
}

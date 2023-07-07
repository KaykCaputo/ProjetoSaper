import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import BedDetails from "./components/bedDetails";
import "../main.css";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import {Link, useNavigate} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import { useAPI } from "../../../services/API";
import Bed from "../../../entities/bed";

export default function BedsPage() {
    // CONSULTAR LEITOS-------------------------------------
    const navigate = useNavigate();
    const [beds, setBeds] = useState<Array<Bed>>([]);
    const api = useAPI()

    const htmlConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };
    useEffect(() => {
      api.get('/bed', {}, htmlConfig).then((res) => {
        setBeds(res)
      })
    }, [])
    //-------------------------------------------------------
  return (
    <body>
      <Sidebar />
      <div id="leitos" className="content" style={{ display: "none;" }}>
        <h1>Leitos do Hospital</h1>
        <button
          type="button"
          className="btn btn-primary"
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
            <th>Fugulin</th>
            <th></th>
          </tr>

          { beds.map(b => <BedDetails key={b.id} bedId={b.id} fugulim={b.type} status={b.occupied} />)}
        </table>
      </div>
    </body>
  );
}

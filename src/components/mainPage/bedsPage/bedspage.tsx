import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import BedDetails from "./components/bedDetails";
import Table from "react-bootstrap/Table";
import "../main.css";
import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { useAPI } from "../../../services/API";
import { Link, useNavigate } from "react-router-dom";

export default function BedsPage() {
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
          <BedDetails bedId={1} fugulim="Grave" status={true} />
          <BedDetails bedId={2} fugulim="" status={false} />
          <BedDetails bedId={3} fugulim="Moderado" status={true} />
        </table>
      </div>
    </body>
  );
}

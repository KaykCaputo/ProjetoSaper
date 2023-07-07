import React from "react";
import Helmet from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useAPI } from "../../../../../services/API";
interface BedDetailsProps {
  bed_id: number;
  status: boolean;
  fugulim: string;
  onDelete(): void;
}

export default function BedDetails({
  bed_id,
  status,
  fugulim,
  onDelete,
}: BedDetailsProps) {
  let _status: string;
  if (status == true) {
    _status = "Ocupado";
  } else {
    _status = "Livre";
    fugulim = "Indefinido";
  }
  const api = useAPI();
  const getId = () => {
    console.log(bed_id);
  return bed_id;
};
async function DeleteBed() {
  const response = await api.delete(`/bed/${getId()}`);
  const { data } = response;
  const basicAuth = response.headers["authorization"]; 
  onDelete();
  }
  return (
    <tr>
      <td>Leito {bed_id}</td>
      <td>{_status}</td>
      <td>{fugulim}</td>
      <td> <button type="button" className="btn btn-danger"
          onClick={DeleteBed}
          style={{
            float: "right",
            height: "6vh",
            fontSize: "16px",
            marginBottom: "2%",
          }}
        >
          <i className="fas fa-trash link-icon"></i> Apagar Leito
        </button>
        <button
          type="button"
          className="btn btn-warning"
          style={{
            float: "right",
            height: "6vh",
            fontSize: "16px",
            marginBottom: "2%",
            marginRight: "1%",
          }}
        >
          <i className="fas fa-edit link-icon"></i>Editar Leito
        </button>
      </td>
    </tr>
  );
}

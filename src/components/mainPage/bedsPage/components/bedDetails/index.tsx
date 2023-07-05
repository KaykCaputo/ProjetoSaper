import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface BedDetailsProps {
  bedId: number;
  status: boolean;
  fugulim: string;
}

export default function BedDetails({
  bedId,
  status,
  fugulim,
}: BedDetailsProps) {
  let _status: string;
  if (status == true) {
    _status = "Ocupado";
  } else {
    _status = "Livre";
    fugulim = "Indefinido";
  }
  return (
    <tr>
      <td>Leito {bedId}</td>
      <td>{_status}</td>
      <td>{fugulim}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          style={{
            float: "right",
            height: "6vh",
            fontSize: "0.9vw",
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
            fontSize: "0.9vw",
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

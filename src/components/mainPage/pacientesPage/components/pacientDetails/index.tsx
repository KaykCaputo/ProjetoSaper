import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface PacienteDetailsProps {
  medicalRecord_id: number,
  name: string;
  birthday: string;
  phoneNumber: string;
}

export default function PacientDetails({
  medicalRecord_id,
  name,
  birthday,
  phoneNumber,
}: PacienteDetailsProps) {
  return (
    <tr>
      <td>{medicalRecord_id}</td>
      <td>{name}</td>
      <td>{birthday}</td>
      <td>{phoneNumber}</td>
    </tr>
  );
}

import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface PacienteDetailsProps {
  name: string;
  age: number;
  gender: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export default function PacientDetails({
  name,
  age,
  gender,
  address,
  phoneNumber,
  email,
}: PacienteDetailsProps) {
  return (
    <div>
      <Table>
        <thead>
          <th>Nome</th>
          <th>Idade</th>
          <th>Sexo</th>
          <th>Endereço</th>
          <th>Telefone</th>
          <th>Email</th>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{age} anos</td>
            <td>{gender}</td>
            <td>{address}</td>
            <td>{phoneNumber}</td>
            <td>{email}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

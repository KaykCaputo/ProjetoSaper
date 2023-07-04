import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface InternationDetailsProps{
    name: string;
    cause: string;
    date: Date;
    bed: number;
    protocol: number;
}
const LocaleConfig : Intl.DateTimeFormatOptions = {day: 'numeric', month: 'numeric', year: 'numeric'};
export default function InternationDetails({ name, cause, date, bed, protocol,}: InternationDetailsProps) {
  return (
    <div>
      <h2>Informações do Paciente</h2>
      <Table>
        <thead>
          <th>Nome</th>
          <th>Motivo</th>
          <th>Data</th>
          <th>Leito</th>
          <th>Protocolo</th>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{cause} anos</td>
            <td>{date.toLocaleDateString(undefined, LocaleConfig)}</td>
            <td>{bed}</td>
            <td>{protocol}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
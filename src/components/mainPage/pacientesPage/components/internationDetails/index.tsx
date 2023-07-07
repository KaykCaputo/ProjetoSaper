import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface InternationDetailsProps {
  cause: string;
  date: string;
  bed: number;
  pacient: number;
  protocol: number;
}

export default function InternationDetails({
  cause,
  date,
  bed,
  pacient,
  protocol,
}: InternationDetailsProps) {
  return (
    <tr>
      <td>{protocol}</td>
      <td>{cause}</td>
      <td>{date}</td>
      <td>{bed}</td>
      <td>{pacient}</td>

    </tr>
  );
}

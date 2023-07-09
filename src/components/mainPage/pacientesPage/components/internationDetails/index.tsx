import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import convertDate from "../../../../../services/convertDate";

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
  const timeDifference = new Date().getTime() - new Date(date).getTime();
  const daysPassed = timeDifference / (1000 * 3600 * 24);

  let backgroundColor;

  if(daysPassed <= 1) {
    backgroundColor = "#54ff98";
  } else if(daysPassed <= 3) {
    backgroundColor = "#edff54";
  } else {
    backgroundColor = "#ff5454";
  }

  return (
    <tr style={{backgroundColor: backgroundColor}}>
      <td>{protocol}</td>
      <td>{cause}</td>
      <td>{convertDate(date)}</td>
      <td>{bed}</td>
      <td>{pacient}</td>

    </tr>
  );
}

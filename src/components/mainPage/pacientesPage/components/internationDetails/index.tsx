import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface InternationDetailsProps {
  cause: string;
  date: Date;
  bed: number;
  protocol: number;
}
const LocaleConfig: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};
export default function InternationDetails({
  cause,
  date,
  bed,
  protocol,
}: InternationDetailsProps) {
  return (
    <tr>
      <td>{cause}</td>
      <td>{date.toLocaleDateString(undefined, LocaleConfig)}</td>
      <td>{bed}</td>
      <td>{protocol}</td>
    </tr>
  );
}

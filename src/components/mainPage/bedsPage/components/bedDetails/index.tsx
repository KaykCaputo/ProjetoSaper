import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

interface BedDetailsProps{
    bedId: number;
    status: boolean;
    fugulim: string;
};



export default function BedDetails({ bedId, status, fugulim}: BedDetailsProps) {
  let _status: string;
  if(status==true){
    _status="Ocupado"
  }else{
    _status="Livre"
    fugulim="Indefinido"
  }
  return (
     <tr>
         <td>Leito {bedId}</td>
          <td>{_status}</td>
          <td>{fugulim}</td>
      </tr>
  );
}

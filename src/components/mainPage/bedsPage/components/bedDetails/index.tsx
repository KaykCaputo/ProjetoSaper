import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, Navigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { useAPI } from "../../../../../services/API";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Bed from "../../../../../entities/bed";

interface BedDetailsProps {
  bed_id: number;
  status: boolean;
  fugulim: string;
  refresh(): void;
}

export default function BedDetails({
  bed_id,
  status,
  fugulim,
  refresh,
}: BedDetailsProps) {
  let _status: string;
  if (status == true) {
    _status = "Ocupado";
  } else {
    _status = "Livre";
    fugulim = "Indefinido";
  }
  type BedData = {
    bedId: number;
    occupied: boolean;
    type: string;
  };
  const [state, setState] = useState<BedData>({
    bedId: 0,
    occupied: false,
    type: "",
  });
  const api = useAPI();
  const [beds, setBeds] = useState<Array<Bed>>([]);

  const htmlConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
    },
  };
  const getId = () => {
    console.log(bed_id);
    return bed_id;
  };

  async function DeleteBed() {
    const response = await api.delete(`/bed/${getId()}`);
    const { data } = response;
    const basicAuth = response.headers["authorization"];
    refresh();
  }
  const onUpdate = (e: React.ChangeEvent<any>, name: "occupied" | "type") => {
    let value = e.target.value;
    if (value === "true" || value == "false") {
      value = JSON.parse(value);
  }
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  async function handleSubmit() {
    if (state.type && state.occupied) {
      const bedData = {
        occupied: state.occupied,
        type: state.type,
      };
      try {
        const response = await api.put(`/bed/${getId()}`, bedData, htmlConfig);
        const { data } = response;
        const basicAuth = response.headers["authorization"];
        refresh();
      } catch (error) {
        // Handle error
        console.error(error);
      }
    }
  }
  return (
    <tr>
      <td>Leito {bed_id}</td>
      <td>{_status}</td>
      <td>{fugulim}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={DeleteBed}
          style={{
            float: "right",
            height: "6vh",
            fontSize: "16px",
            marginBottom: "2%",
            marginLeft: "6%",
          }}
        >
          <i className="fas fa-trash link-icon"></i> Apagar Leito
        </button>
        <form>
          <Dropdown
            className="d-inline mx-2"
            autoClose="outside"
            style={{
              float: "right",
              height: "8vh",
              fontSize: "18px",
              marginBottom: "2%",
              width: "12vh",
            }}
          >
            <Dropdown.Toggle
              id="dropdown-autoclose-outside"
              className=" btn btn-warning"
              style={{
                color: "aliceblue",
                marginTop: "1%",
                height: "5.9vh",
                marginRight: "20%",
              }}
            >
              <i className="fas fa-edit link-icon"></i> Editar
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ width: "220%", textAlign: "center" }}>
              <Dropdown.Item>
                Disponibilidade:
                <Form.Select
                  aria-label="Default select example"
                  value={state.type}
                  onChange={(e) => onUpdate(e, "occupied")}
                >
                  <option>Selecione</option>
                  <option value="true">Ocupado</option>
                  <option value="false">Livre</option>
                </Form.Select>
              </Dropdown.Item>
              <Dropdown.Item>
                Tipo:
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={state.type}
                    onChange={(e) => onUpdate(e, "type")}
                  />
                </Form.Group>
              </Dropdown.Item>
              <Dropdown.Item>
              <button
              type="button"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              Finalizar Edição
            </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </form>
      </td>
    </tr>
  );
}

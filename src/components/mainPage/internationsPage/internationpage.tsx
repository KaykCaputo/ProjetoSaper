import React from "react";
import Helmet from "react-helmet";
import Sidebar from "../../sidebar/sidebar";
import "../main.css";

export default function InternationPage() {
  return (
    <html>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <script src="java.js"></script>
      </Helmet>
      <body>
        <Sidebar />
        <div id="interna" className="content" style={{ display: "none;" }}>
          <div className="container">
            <h3>Nova Internação</h3>
            <form>
              <div className="form-group">
                <label htmlFor="motivo">Motivo da Internação:</label>
                <textarea id="motivo" name="motivo" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="data">Data de Internação:</label>
                <input type="date" id="data" name="data" required />
              </div>
              <div className="form-group">
                <label htmlFor="leito">Leito do Paciente:</label>
                <input type="text" id="leito" name="leito" required />
              </div>
              <div className="form-group">
                <label htmlFor="situacao">Situação do Paciente(Fugulin):</label>
                <input type="text" id="situacao" name="situacao" required />
              </div>
              <div className="button-container">
                <button type="submit" className="btn-submit">
                  Registrar Internação
                </button>
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  );
}

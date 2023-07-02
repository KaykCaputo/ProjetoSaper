import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../sidebar/sidebar'
import "../main.css"

export default function DoctorsPage(){
    return(
        <html>
        <Helmet>
             <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
            <script src="java.js"></script>
        </Helmet>
        <body>
        <Sidebar/>
                <div id="medicos" className="content" style={{display: "none;"}}>
        <h1>Página de Medicos</h1>
                <div className="internacoes">
                <h2>Internações 

                <button className="btninterna">
                    <a href="javascript:void(0);">
                    <div className="link-container">
                    <span className="link-text" style={{color: "#333;"}}>  Nova Internação</span>
                    </div>
                    </a>
                </button>
                </h2>
                <table>
                    <h5>1ª Internação</h5>
                    <tr>
                        <th>Nome do paciente</th>
                        <th>Motivo</th>
                        <th>Data</th>
                        <th>Leito</th>
                    </tr>
                    <tr>
                        <td>Marla singer</td>
                        <td>Fratura no braço(atropelada)</td>
                        <td>12/05/2023</td>
                        <td>102</td>
                    </tr>
                </table>
                
                <table>
                <h5>2ª Internação</h5>
                    <tr>
                        <th>Nome do paciente</th>
                        <th>Motivo</th>
                        <th>Data</th>
                        <th>Leito</th>
                    </tr>
                    <tr>
                        <td>seila</td>
                        <td>Pneumonia</td>
                        <td>28/06/2023</td>
                        <td>215</td>
                    </tr>
                </table>

                <table>
                <h5>3ª Internação</h5>
                    <tr>
                        <th>Nome do paciente</th>
                        <th>Motivo</th>
                        <th>Data</th>
                        <th>Leito</th>
                    </tr>
                    <tr>
                        <td>seila2</td>
                        <td>Apêndice inflamado</td>
                        <td>10/09/2023</td>
                        <td>305</td>
                    </tr>
                </table>
            </div>
        </div>
      </body>
      </html>
      )
}
import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../sidebar/sidebar'
import { Link } from 'react-router-dom'
import PacientDetails from './components/pacientDetails'
import InternationDetails from './components/internationDetails'

export default function PacientsPage(){
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
        <div id="pacientes" className="content" style={{display: "none;"}}>
        <h1>Página do Paciente</h1>
        <h6 style={{width:"30%", fontSize:"1.4vw"}}>Procurando um paciente especifico? Insira o ID do prontuario:</h6>
        <input type='text' style={{width:"30%", float:"left", height:"20%"}}></input>
                  
        <PacientDetails age={18} address='1' name='Kayk Caputo' email='emaillegal@email.com' gender='Masculino' phoneNumber='(78)92471-3578'/>

          <div className="internacoes">
              <h2 style={{float:"left"}}>Internações</h2> 
            <Link to="internation" style={{float:"right"}}>
                 <button type="button" className="btn btn-primary">Cadastrar Nova Internação</button>
            </Link>
              
              <table>
                  <h5>Internações</h5>
                  <tr>
                      <th>Motivo</th>
                      <th>Data</th>
                      <th>Leito</th>
                      <th>Protocolo</th>
                  </tr>
                  <InternationDetails bed={1} cause='Fratura nos membros superiores' protocol={1} date={new Date}/>
              </table>
              
             
          </div>
      </div>
      </body>
      </html>
      )
}
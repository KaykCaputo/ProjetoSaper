import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../sidebar/sidebar'
import { Link } from 'react-router-dom'

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
        <h1>Página de Pacientes</h1>
        <h6 style={{width:"30%", fontSize:"1.4vw"}}>Procurando um paciente especifico? Insira o ID do prontuario:</h6>
        <input type='text' style={{width:"30%", float:"left", height:"20%"}}></input>
                  
          <table>
              <h2>Informações do Paciente</h2>
              <tr>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Sexo</th>
                  <th>Endereço</th>
                  <th>Telefone</th>
                  <th>Email</th>
              </tr>
              <tr>
                  <td>Maria Silva</td>
                  <td>40 anos</td>
                  <td>Feminino</td>
                  <td>Rua Principal, 123</td>
                  <td>(11) 1234-5678</td>
                  <td>maria@exemplo.com</td>
              </tr>
          </table>
          
          <div className="internacoes">
              <h2 style={{float:"left"}}>Internações</h2> 
            <Link to="internation" style={{float:"right"}}>
                 <button type="button" className="btn btn-primary">Cadastrar Nova Internação</button>
            </Link>
              
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
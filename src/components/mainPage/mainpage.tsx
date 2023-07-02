import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from './../sidebar/sidebar'

export default function BedsPage(){
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
        <div id="inicio" className="content">
        <div className="imgdefundo">
            <h1>Bem-vindo ao Hospital XYZ</h1>
            <h5 style={{textAlign:"center"}}>Serviços de saúde de qualidade para a sua família</h5>
        </div>
        <h3 style={{textAlign:"center"}}>Seja bem vindo ao nosso sistema, aqui você pode:</h3>
        </div>
        <div className="row">
      <div className="card green">
        <h2>Gerenciar Leitos</h2>
        <ul>
            <li>Cadastrar Leitos</li>
            <li>Apagar Leitos</li>
            <li>Gerenciar Ocupação dos Leitos</li>
        </ul>
      </div>
 
      <div className="card blue">
        <h2>Gerenciar Pacientes</h2>
        <ul>
            <li>Cadastrar Pacientes</li>
            <li>Apagar Pacientes</li>
            <li>Gerenciar o Prontuario</li>
        </ul>
      </div>
 
      <div className="card red">
        <h2>Gerenciar Internações</h2>
        <ul>
            <li>Cadastrar Internações</li>
            <li>Apagar Internações</li>
            <li>Atualizar Internações</li>
        </ul>
    </div>
    </div>
    <h4 style={{textAlign:"center"}}>Qualquer bug/duvida entre em contato com: contatohospialbeds@email.com.br</h4>
      </body>
      </html>
      )
}
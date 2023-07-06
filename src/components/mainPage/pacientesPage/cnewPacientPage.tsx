import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../sidebar/sidebar'
import "../main.css"

export default function NewPacientPage(){
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
            <div id="interna" className="content" style={{display: "none;"}}>
            <div className="container">
                <h3>Cadastrar Paciente</h3>
                <div className="form-group">
                    <label htmlFor="nome">Nome Do Paciente:</label>
                    <input type="text" id="nome" name="nome" required/>
                </div>
                <form>
                <div className="form-group">
                    <label htmlFor="nome">CPF do paciente:</label>
                    <input type="text" id="nome" name="nome" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Data de Nascimento:</label>
                    <input type="Date" id="nome" name="nome" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="motivo">Endereço:</label>
                    <textarea id="motivo" name="motivo" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="tel">Telefone:</label>
                    <input type="tel" id="tel" name="tel" required/>
                </div>
                <div  className="form-group">
                    <label htmlFor="Gender">Sexo:</label>
                        <select id="Gender" name="Gender">
                        <option value="masc">Masculino</option>
                        <option value="fem">Feminino</option>
                        <option value="other">Outro</option>
                        <option value="not">Prefiro não responder</option>
                    </select>
                </div>
                <div className="button-container">
                    <button type="submit" className="btn-submit">Finalizar Cadastro</button>
                </div>
                </form>
            </div>
            </div>
      </body>
      </html>
      )
}
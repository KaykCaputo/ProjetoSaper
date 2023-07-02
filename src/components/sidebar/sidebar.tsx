import React from 'react'
import Helmet from 'react-helmet'
import { toggleNav } from './script'
import "./sidebar.css"
import { Link } from 'react-router-dom'
 
 
 export default function Sidebar(){
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
        <div className="topnav">
          <a  className="openbtn" onClick={()=> toggleNav()}>☰</a>
          <a ><img src={require('../mainPage/logofront.png')} alt="some text" width="322" height="48"/></a>
        </div>
        
          <div id="mySidenav" className="sidenav">
            <div className="margemdaborda">
                <div className="bordapessoa">
                  <div className="divdaimg">
                    <img className="imgpessoa" src={require('../mainPage/vemdoback.png')} width="30px" height="30px"/>
                  </div>
                  <div className="bemvindo">
                    <div>Seja bem-vindo</div>
                    <div className="nomeblack">nome do back</div>
                  </div> 
                </div>
            </div>     
            <Link to="/">
            <div className="link-container">
                <i className="fas fa-home link-icon"></i>
                <span className="link-text">  Inicio</span>
              </div>
            </Link>  
            <Link to="/pacients">
            <div className="link-container">
                <i className="fas fa-user link-icon"></i>
                <span className="link-text">  Pacientes</span>
              </div>
            </Link> 
            <Link to="/beds">
            <div className="link-container">
                <i className="fas fa-bed link-icon"></i>
                <span className="link-text">  Leitos</span>
              </div>
            </Link> 
            <Link to="/login"  className="logout-btn">
            Sair  <i className="fas fa-sign-out-alt"></i>
            </Link>
          </div>
          </body>
          </html>
    )
 }
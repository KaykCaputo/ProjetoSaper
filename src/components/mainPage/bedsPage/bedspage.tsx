import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../sidebar/sidebar'
import "../main.css"

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
        <div id="leitos" className="content" style={{display: "none;"}}>
        <h1>Leitos do Hospital</h1>
        <table>
            <tr>
            <th>Leito</th>
            <th>Status</th>
            <th>Fugulin</th>
            </tr>
            <tr>
            <td>Leito 1</td>
            <td>Ocupado</td>
            <td>Morendo</td>
            </tr>
            <tr>
            <td>Leito 2</td>
            <td>Livre</td>
            <td></td>
            </tr>
            <tr>
            <td>Leito 3</td>
            <td>Livre</td>
            <td></td>
            </tr>
        </table>
        </div>
      </body>
      </html>
      )
}
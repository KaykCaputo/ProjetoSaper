import React from 'react'
import Helmet from 'react-helmet'
import Sidebar from '../../sidebar/sidebar'
import BedDetails from './components/bedDetails'
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
            <BedDetails bedId={1} fugulim='Grave' status={true}/>
            <BedDetails bedId={2} fugulim='' status={false}/>
            <BedDetails bedId={3} fugulim='Moderado' status={true}/>
        </table>
        </div>
      </body>
      </html>
      )
}
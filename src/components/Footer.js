import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { fab, faFacebook } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
   return (
      <footer className="bottomi container-fluid">
         <div className="row">
         <div className="col text-center">
               <p>2021</p>
               <p>Ryhmä 5</p>
            </div>
            <div className="col text-center">
               <p>Someikonit </p>
               <FontAwesomeIcon icon={faFacebook} />  
            </div>
         </div>
      </footer>
   )
}

import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
   return (
      <footer className="bottomi container-fluid">
         <div className="row">
         <div className="col text-center">
               <p>2021</p>
               <p>Ryhmä 5</p>
            </div>
            <div className="col text-center">
               <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a> 
               <a href="https://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a> 
            </div>
         </div>
      </footer>
   )
}

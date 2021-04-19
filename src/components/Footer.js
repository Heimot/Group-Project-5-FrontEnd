import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
   return (
      <footer className="bottomi container-fluid">
         <hr className="viiva"></hr>
         <div className="row">
         <div className="col">
               <h4>Asiakaspalvelu</h4>
               <p>Ma-Pe 9-16</p>
               <p><FontAwesomeIcon icon={faPhone} /> +35840123456</p>
               <p><FontAwesomeIcon icon={faEnvelope} /> <a className="email" href="mailto:digifemma@digifemma.fi">digifemma@digifemma.fi</a></p>
               <p>Digikatu 3</p>
               <p>90100, Oulu</p>
            </div>
            <div className="col">
            <ul>
               <h4>Info</h4>
               <li><a className="linkText" href="/info/YhteystiedotSivu">Yhteystiedot</a></li>
               <li><a className="linkText" href="/info/service">Palvelut ja huolto</a></li>
               <li><a className="linkText" href="/info/ukk">UKK</a></li>
               <li><a className="linkText" href="/info/YritysMyynti">Yritysmyynti</a></li>
               <li><a className="linkText" href="/info/tietosuoja">Tietosuojaseloste</a></li>
               </ul>
            </div>
            <div className="col">
               <a className="ikonit" href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="6x" /></a> 
               <a className="ikonit" href="https://www.twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} size="6x"/></a>
               <a className="ikonit" href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon icon={faYoutube} size="6x"/></a>
               <a className="ikonit" href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="6x"/></a>
            </div>
         </div>
      </footer>
   )
}

import React from 'react'
import icon from "../img/pc_kauppa.jpg";
import './mainos.css'




export default function Mainos() {
    return (
        
        <div className="row">
            <img
                className="img-fluid"
                src={icon}
                width="400"
                height="400"
                alt=""
            />
            <ul>
                <li>Kotimainen yritys jolla on osaamista ja tietotaitoa!</li>
                <li>Aina ajantasalla olevat hinnat ja ensimmäisenä alan uusimmat tuotteet!</li>
                <li>Joustavat laina ja osamaksu mahdollisuudet!</li>
                <li>Nopeat toimitusajat ja kotiinkuljetus palvelut!</li>
                <li>Yksilöidyt palvelut juuri sinun tarpeeseesi!</li>
                <li>Joka viikko uusia alennustuotteita ja joka viikkoinen viikkoarvonta!</li>
                <li>Käytämme asennuksissamme vain korkealaatuisia aineita ja välineitä!</li>
                <li>Veloitamme vain tehokkaista työtunneista!</li>
                <li>Myymme myös käytettyjä tietokoneita ja komponenttejä edullisesti!</li>
            </ul>
        </div>
    )
}


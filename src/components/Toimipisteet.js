import Card from 'react-bootstrap/Card';
import "./toimipisteet.css";

import img1 from "../img/espoo.jpg";
import img2 from "../img/helsinki.jpg";
import img3 from "../img/oulu.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



export default function Toimipisteet() {

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card >
                        <Card.Title className="toimiPisteOtsikko">
                            Espoon myymälä
                    </Card.Title>
                    <div className="toimKuvat">
                    <img alt="ad" className="toimKuvat" src={img1}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">
                            <p>
                                Digifemma - Espoon toimipiste
                                <p> Osoite:</p>
                        </p>
                            <p>
                            <a className="lokaatio" href="https://www.google.fi/maps/place/L%C3%A4ntinen+teollisuuskatu+1,+02920+Espoo/@60.2742587,24.7559183,17z/data=!3m1!4b1!4m5!3m4!1s0x468df0d5a3abf89f:0x440158a4d4b6fc82!8m2!3d60.2742561!4d24.758107" target="_blank">
                                 <FontAwesomeIcon icon={ faMapMarkerAlt} size="lg"  /></a> Teollisuuskatu 1, Espoo, 02222
                        </p>
                            <p>
                                Puhelin:
                                020 1234 567
                        </p>
                            <p>
                                Sähköposti:
                               <p> <a className="sposti"> digifemma.espoo<p>@digifemma.com</p> </a></p>
                        </p>

                        <p>Aukioloajat:</p>
                        <p>Ma-Pe 10:00 - 18:00</p>
                        <p>La-Su 10:00 - 14:00</p>

                        </Card.Text>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card>

                        <Card.Title className="toimiPisteOtsikko">
                            Helsingin myymälä
                    </Card.Title>
                    <div>
                    <img alt="ad" className="toimKuvat" src={img2}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">
                            <p>
                                Digifemma - Helsingin toimipiste
                                <p> Osoite:</p>
                        </p>
                            <p>
                            <a className="lokaatio" href="https://www.google.fi/maps/place/Teollisuuskatu+2,+00510+Helsinki/@60.1899698,24.9568864,17z/data=!3m1!4b1!4m5!3m4!1s0x46920978b918bfcf:0x4a1dd9eb1ab6216e!8m2!3d60.1899672!4d24.9590751" target="_black"> 
                            <FontAwesomeIcon icon={ faMapMarkerAlt} size="lg" /></a> Teollisuuskatu 2, Helsinki, 01111
                        </p>
                            <p>
                                Puhelin:
                                020 2222 333
                        </p>
                            <p>
                                Sähköposti:
                               <p> <a className="sposti">  digifemma.helsinki<p>@digifemma.com</p> </a></p> 
                        </p>
                        <p>Aukioloajat:</p>
                        <p>Ma-Pe 10:00 - 18:00</p>
                        <p>La-Su 10:00 - 14:00</p>

                        </Card.Text>
                    </Card>

                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Title className="toimiPisteOtsikko">
                            Oulun myymälä
                    </Card.Title>
                    <div>
                    <img alt="ad" className="toimKuvat" src={img3}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">
                            <p>
                                Digifemma - Oulun toimipiste
                               <p> Osoite:</p>
                        </p>
                            <p>
                            <a className="lokaatio" href="https://www.google.fi/maps/place/Oulu/@65.2038581,24.8824593,9z/data=!3m1!4b1!4m8!1m2!2m1!1sTeollisuuskatu+3,+Oulu,+90000!3m4!1s0x468032a8c02185c1:0x8bb02d322b12e97d!8m2!3d65.0120888!4d25.4650772" target="_black"> 
                            <FontAwesomeIcon icon={ faMapMarkerAlt} size="lg" /></a> Teollisuuskatu 3, Oulu, 90000
                        </p>
                            <p>
                                Puhelin:
                                020 7777 444
                        </p>
                            <p>
                                Sähköposti:
                                <p><a className="sposti"> digifemma.oulu<p>@digifemma.com</p> </a></p>
                        </p>
                        <p>Aukioloajat:</p>
                        <p>Ma-Pe 10:00 - 18:00</p>
                        <p>La-Su 10:00 - 14:00</p>
                        </Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    );
}
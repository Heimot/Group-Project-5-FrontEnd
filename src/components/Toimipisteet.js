import Card from 'react-bootstrap/Card';
import "./toimipisteet.css";

import img1 from "../img/espoo.jpg";
import img2 from "../img/helsinki.jpg";
import img3 from "../img/oulu.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'



export default function Toimipisteet() {

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card >
                        <Card.Title className="toimiPisteOtsikko">
                            Espoon myymälä:
                    </Card.Title>
                    <div>
                    <img alt="ad" className="toimKuvat" src={img1}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">
                            <p>
                                Digifemma - Espoon toimipiste
                                Osoite:
                        </p>
                            <p>
                            <a className="lokaatio"> <FontAwesomeIcon icon={ faMapMarkerAlt} /></a> Teollisuuskatu 1, Espoo, 02222
                        </p>
                            <p>
                                Puhelin:
                                020 1234 567
                        </p>
                            <p>
                                Sähköposti:
                                <a className="sposti"> digifemma.espoo@gmail.com </a>
                        </p>
                        </Card.Text>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card>

                        <Card.Title className="toimiPisteOtsikko">
                            Helsingin myymälä:
                    </Card.Title>
                    <div>
                    <img alt="ad" className="toimKuvat" src={img2}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">
                            <p>
                                Digifemma - Helsingin toimipiste
                                Osoite:
                        </p>
                            <p>
                            <a className="lokaatio"> <FontAwesomeIcon icon={ faMapMarkerAlt} /></a> Teollisuuskatu 2, Helsinki, 01111
                        </p>
                            <p>
                                Puhelin:
                                020 2222 333
                        </p>
                            <p>
                                Sähköposti:
                                <a className="sposti">  digifemma.helsinki@gmail.com </a>
                        </p>
                        </Card.Text>
                    </Card>

                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Title className="toimiPisteOtsikko">
                            Oulun myymälä:
                    </Card.Title>
                    <div>
                    <img alt="" className="toimKuvat" src={img3}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">
                            <p>
                                Digifemma - Oulun toimipiste
                                Osoite:
                        </p>
                            <p>
                            <a className="lokaatio"> <FontAwesomeIcon icon={ faMapMarkerAlt} /></a> Teollisuuskatu 3, Oulu, 90000
                        </p>
                            <p>
                                Puhelin:
                                020 7777 444
                        </p>
                            <p>
                                Sähköposti:
                              <a className="sposti"> digifemma.oulu@gmail.com </a>
                        </p>
                        </Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    );
}
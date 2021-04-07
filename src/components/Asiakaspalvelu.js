import Card from 'react-bootstrap/Card';
import "./asiakaspalvelu.css";

import img2 from "../img/conference-room-768441_640.jpg";
import img1 from "../img/support.jpg";
import img3 from "../img/paakonttori.jpg";






export default function Asiakaspalvelu() {

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card >
                        <Card.Title className="toimiPisteOtsikko">
                        Asiakaspalvelu:
                    </Card.Title>
                    <div className="toimKuvat">
                    <img alt="ad" className="toimKuvat" src={img1}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">

                            <p>
                                Puhelin:
                                020 1234 999
                        </p>
                            <p>
                                Sähköposti:
                               <p> <a className="sposti"> digifemma.asiakaspalvelu@gmail.com </a></p>
                        </p>

                        <p>Aukioloajat:</p>
                        <p>Ma-Pe 9:00 - 16:00</p>
                        </Card.Text>
                    </Card>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card>

                        <Card.Title className="toimiPisteOtsikko">
                        Yritysmyynti:
                    </Card.Title>
                    <div>
                    <img alt="ad" className="toimKuvat" src={img2}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">

                            <p>
                                Puhelin:
                                020 2222 568
                        </p>
                            <p>
                                Sähköposti:
                               <p> <a className="sposti">  digifemma.yritysmyynti@gmail.com </a></p> 
                        </p>
                        <p>Aukioloajat:</p>
                        <p>Ma-Pe 9:00 - 16:00</p>
                        </Card.Text>
                    </Card>

                </div>

                <div className="col-sm-12 col-md-6 col-lg-4">
                    <Card>
                        <Card.Title className="toimiPisteOtsikko">
                        Pääkonttori:
                    </Card.Title>
                    <div>
                    <img alt="ad" className="toimKuvat" src={img3}></img>
                </div>
                        <Card.Text className="toimiPisteTeksti">

                            <p>
                                Puhelin:
                                020 7777 456
                        </p>
                            <p>
                                Sähköposti:
                                <p><a className="sposti"> digifemma.paakonttori@gmail.com </a></p>
                        </p>
                        <p>Aukioloajat:</p>
                        <p>Ma-Pe 9:00 - 16:00</p>
                        </Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    );
}
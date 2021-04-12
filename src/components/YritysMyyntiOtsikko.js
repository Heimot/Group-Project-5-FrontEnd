import "./YritysMyyntiOtsikko.css";
import Card from 'react-bootstrap/Card';
import img2 from "../img/conference-room-768441_640.jpg";


export default function YritysMyyntiOtsikko() {
    return (

        <div className="aloitus">
            <div className="container-fluid">
                <pre></pre>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h2 className="vasenReunaOtsikko">Yritysmyyntimme</h2>
                        <pre></pre>
                        <p className="vasenReunaEkaKappale" >Digifemman yritysmyyntimme suunnittelee ja räätälöi yksilöllisesti suuriakin kokonaisuuksia,
                         joten voit hankkia kaikki yrityksesi tietokoneet ja oheislaitteet kerralla säästäen sinulta aikaa ja rahaa.</p>
                         <pre></pre>
                        <Card>
                            <Card.Title className="toimiPisteOtsikko">
                                Yritysmyynnin yhteystiedot
                            </Card.Title>
                            <div className="img-fluid">
                                <img alt="ad" className="yritysMyynninKuva" src={img2}></img>
                            </div>
                            <Card.Text className="toimiPisteTekstiy">
                                <p>
                                    Sähköposti:
       <p> <a className="sposti">  digifemma.yritysmyynti<p>@digifemma.com</p></a></p>
                                </p>

                                <p>
                                    Puhelin:
                                    020 2222 568
</p>
                                <p>Aukioloajat:</p>
                                <p>Ma-Pe 9:00 - 16:00</p>
                                <p>La-Su Suljettu</p>
                            </Card.Text>
                        </Card>
                        <pre></pre>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <h2 className="oikeaReunaOtsikko">Yritystilin luominen</h2>
                        <pre></pre>
                        <div className="form-group">
                            <p className="oikeaReuna">Y-tunnus&nbsp;<a className="punaPilkku">*</a></p>
                            <input className="form-control" placeholder="1234567-8" />
                        </div>
                        <div className="form-group">
                            <p className="oikeaReuna">Etunimi&nbsp;<a className="punaPilkku">*</a></p>
                            <input className="form-control" placeholder="Anssi" />
                        </div>
                        <div className="form-group">
                            <p className="oikeaReuna">Sukunimi&nbsp;<a className="punaPilkku">*</a></p>
                            <input className="form-control" placeholder="Asiakas" />
                        </div>
                        <div className="form-group">
                            <p className="oikeaReuna">Puhelinnumero&nbsp;<a className="punaPilkku">*</a></p>
                            <input className="form-control" placeholder="+358 123456789" />
                        </div>
                        <div className="form-group">
                            <p className="oikeaReuna">Sähköpostiosoite&nbsp;<a className="punaPilkku">*</a></p>
                            <input className="form-control" placeholder="malli.esimerkki@hotmail.com" />
                        </div>
                        <div className="form-group">
                            <p className="oikeaReuna">Salasana&nbsp;<a className="punaPilkku">*</a></p>
                            <input className="form-control" placeholder="" />
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" required />
                                <label className="asd form-check-label">
                                    Hyväksyn käyttäjäsopimusehdot ja tietosuojaselosteen.&nbsp;<a className="punaPilkku">*</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" required />
                                <label className="form-check-label" >
                                    Haluan saada ajankohtaisia uutisia ja tarjouksia sähköpostiini.
                            </label>
                            </div>
                        </div>
                        <pre></pre>
                        <div>
                            <button type="submit" class="btn btn-primary btn-block">Lähetä hakemus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

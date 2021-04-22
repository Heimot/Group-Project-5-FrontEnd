import { Button } from 'react-bootstrap';

// CSS
import "./accountPage.css";

function Account() {

    return (
        <div className="container">
        <div className="row">
        <div className="col-12">
                <h1 className="text-center mt-3"> Hei, HAE NIMI TÄHÄN</h1>
                </div>
            <div className="col-lg-12 col-sm-10">
                <h2>Tilin tiedot</h2>
                <div className="row divborder">
      <div className="col-lg-4 col-sm-12">
      <h5>Yhteystiedot</h5>
      <ul className="listat">
          <li>Nimi: HAE TIEDOT TÄHÄN</li>
          <li>Sähköposti: HAE TIEDOT TÄHÄN</li>
          <li>Puhelinnumero: HAE TIEDOT TÄHÄN</li>
      </ul>
      </div>
      <div className="col-lg-4 col-sm-12">
      <h5>Osoitetiedot</h5>
      <ul className="listat">
          <li>HAE OSOITE TÄHÄN</li>
          <li>HAE KAUPUNKI JA POSTINUMERO TÄHÄN</li>
      </ul>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4">
          <Button className="navigationSearchBtn" onClick={event => window.location.href='/accountupdate'}>Muokkaa tilin tietoja</Button>
      </div>
      </div>
                </div>
            </div>
            </div>
    )
}

export default Account;
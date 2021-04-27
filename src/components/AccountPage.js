import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';

// CSS
import "./accountPage.css";

function Account({user}) {

    if (user===null) {
        return <Redirect to="/login" />
      }
      
    return (
        <div className="container">
        <div className="row">
        <div className="col-12">
                <h1 className="text-center mt-3"> Hei, {user ? user.firstName : ''}</h1>
                </div>
            <div className="col-lg-12 col-sm-10">
                <h2>Tilin tiedot</h2>
                <div className="row divborder">
      <div className="col-lg-4 col-sm-12">
      <h5>Yhteystiedot</h5>
      <ul className="listat">
          <li>Nimi: {user ? user.firstName : ''} {user ? user.lastName : ''}</li>
          <li>Sähköposti: {user ? user.email : ''}</li>
          <li>Puhelinnumero: {user ? user.phone : ''}</li>
      </ul>
      </div>
      <div className="col-lg-4 col-sm-12">
      <h5>Osoitetiedot</h5>
      <ul className="listat">
          <li>{user ? user.address : ''}</li>
          <li>{user ? user.city : ''}, {user ? user.postalcode : ''}</li>
      </ul>
      </div>
      <div className="col-lg-4 col-sm-12 mt-4">
          <Button className="accountBtn" onClick={event => window.location.href='/accountupdate'}>Muokkaa tilin tietoja</Button>
          <Button className="accountBtn" href="/logout">Kirjaudu ulos</Button>
      </div>
      </div>
                </div>
            </div>
            </div>
    )
}

export default Account;
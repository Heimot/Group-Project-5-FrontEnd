import {Link} from 'react-router-dom';
import './login.css';

export default function RegisterSuccess() {

  return (
    <div className="container">
      <div className="col-12 text-center mt-5 mb-3">
      <h1>REKISTERÖITYMINEN ONNISTUI!</h1>
      <Link className="logga" to="/login">Kirjaudu sisään</Link>
      </div>
      </div>
       );
    }
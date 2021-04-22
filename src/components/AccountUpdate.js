import './registration.css';
import { FormControl, Form, Button, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { faAt, faCity, faKey, faMapMarkedAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

export default function AccountUpdate() {

  const [serverResponse, setServerResponse] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  

  function registration(e) {
    e.preventDefault();

    if (email === '' || password === '' || firstname === '' || lastname === '' || address === '' || postalcode === '' || city === '' || phone === '') {
      alert("Kaikki kentät vaaditaan!");
      return;
    }

    fetch('http://localhost/Group-Project-5-BackEnd/registration_check.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type':'application/json',
      },
      body: JSON.stringify({
        email: email,
      })
    })
    .then(response => response.text())
    .then(
      (response) => {
        if (response === "Success!") {
          fetch('http://localhost/Group-Project-5-BackEnd/registration.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type':'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
              firstname: firstname,
              lastname: lastname,
              address: address,
              postalcode: postalcode,
              city: city,
              phone: phone
             })
          })
          .then(response => response.text())
          .then(
          (response) => {
            setServerResponse(response);
          }, (error) => {
            alert(error);
          }
          )
        } else {
          alert("Näillä tiedoilla on jo luotu käyttäjä")
        }
      }, (error) => {
        alert(error);
      }
    )
  }

  return (
    <div className="container">
<div className="col-12 text-center mt-5 mb-3">
      <h1>TILISI TIEDOT</h1>
      </div>
      <Form onSubmit={registration}>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label className="formText">SÄHKÖPOSTI</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faAt} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
            <Form.Control value={email} type="email" maxLength="256" onChange={e => setEmail(e.target.value)} required/>
            </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label className="formText">SALASANA</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faKey} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
          <Form.Control value={password} maxLength="256" type="password" onChange={e => setPassword(e.target.value)} required/>
          </InputGroup>
          </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label className="formText">ETUNIMI</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
            <Form.Control value={firstname} maxLength="256" onChange={e => setFirstname(e.target.value)} required/>
            </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label className="formText">SUKUNIMI</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
          <Form.Control value={lastname} maxLength="256" onChange={e => setLastname(e.target.value)} required/>
          </InputGroup>
          </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label className="formText">KATUOSOITE</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
            <Form.Control value={address} maxLength="16" onChange={e => setAddress(e.target.value)} required/>
            </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label className="formText">POSTINUMERO</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
          <Form.Control value={postalcode} maxLength="16" onChange={e => setPostalcode(e.target.value)} required/>
          </InputGroup>
          </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col}>
            <Form.Label className="formText">KAUPUNKI</Form.Label>
            <InputGroup>
            <InputGroup.Prepend>
            <InputGroup.Text>
            <FontAwesomeIcon icon={faCity} />
            </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control value={city} maxLength="64" onChange={e => setCity(e.target.value)} required/>
            </InputGroup>
            </Form.Group>

            <Form.Group as={Col}>
            <Form.Label className="formText">PUHELINNUMERO</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faPhone} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
          <Form.Control value={phone} maxLength="16" onChange={e => setPhone(e.target.value)} required/>
          </InputGroup>
          </Form.Group>
          </Form.Row>          
          <Button className="navigationSearchBtn" type="submit">Päivitä tietosi</Button>
      </Form>
      <div>
      {serverResponse}
      </div>
    </div>
  );
}

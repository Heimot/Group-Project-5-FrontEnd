import './registration.css';
import { FormControl, Form, Button, Col, InputGroup } from "react-bootstrap";
import { Redirect } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react';
import { faAt, faCity, faKey, faMapMarkedAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

export default function AccountUpdate({setUser, user}) {

  const [serverResponse, setServerResponse] = useState('');

  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (user) {
    setEmail(user.email);
    setFirstname(user.firstName);
    setLastname(user.lastName);
    setAddress(user.address);
    setPostalcode(user.postalcode);
    setCity(user.city);
    setPhone(user.phone);
    setId(user.id);
    }
  }, [user]);


  function update(e) {
    e.preventDefault();

    if (email === '' || firstname === '' || lastname === '' || address === '' || postalcode === '' || city === '' || phone === '') {
      alert("Kaikki kentät vaaditaan!");
      return;
    }
    console.log(id);
          fetch('http://localhost/Group-Project-5-BackEnd/updateAccount.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type':'application/json',
            },
            body: JSON.stringify({
              email: email,
              firstname: firstname,
              lastname: lastname,
              address: address,
              postalcode: postalcode,
              city: city,
              phone: phone,
              id: id
             })
          })
          .then(response => response.json())
          .then(
          (json) => {
            setUser(json);
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
      <Form onSubmit={update}>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label className="formText">SÄHKÖPOSTI</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faAt} />
                  </InputGroup.Text>
                  </InputGroup.Prepend>
            <Form.Control value={email} type="email" maxLength="256" onChange={e => setEmail(e.target.value)} disabled/>
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
          <Form.Control value={id} maxLength="16" onChange={e => setId(e.target.value)} hidden/>
      </Form>
      <div>
      </div>
      {serverResponse}
    </div>
  );
  }
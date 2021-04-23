import React, { useState } from 'react';
import { FormControl, Form, Button } from "react-bootstrap";
import './login.css';

export default function Login() {
    const [serverResponse, setServerResponse] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  function login(e) {
    e.preventDefault();
    fetch('http://localhost/Group-Project-5-BackEnd/auth.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type':'application/json',
      },
      body: JSON.stringify({
        email: emailLogin,
        password: passwordLogin
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
  } 

  return (
    <div className="container">
      <div className="col-12 text-center mt-5 mb-3">
      <h1>REKISTERÖITYMINEN ONNISTUI!</h1>
      <p>Tästä voit kirjautua sivulle</p>
      </div>
      <div className="col-12 text-center">
      <Form onSubmit={login}>
          <Form.Control className="mb-3 col-3 col-centered" maxLength="256" type="email" value={emailLogin} onChange={e => setEmailLogin(e.target.value)} placeholder='Sähköpostiosoite' required/>
          <Form.Control className="mb-3 col-3 col-centered" maxLength="256" type="password" value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} placeholder='Salasana' required/>
          <Button className="navigationSearchBtn" type="submit">Kirjaudu sisään</Button>
      </Form>
      </div>
      {serverResponse}
      </div>
       );
    }
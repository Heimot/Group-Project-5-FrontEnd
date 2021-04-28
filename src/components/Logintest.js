import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Form, Button } from "react-bootstrap";
import './login.css';
import { useHistory } from 'react-router';

export default function Login({setUser,user}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let history = useHistory();

    if (user!=null) {
        return <Redirect to="/account" />
      }

  async function login(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    const config = {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Accept' : 'application/json',
      },
      body: formData  
    }

    const response = await fetch('http://localhost/Group-Project-5-BackEnd/login.php',config);

    if (response.ok) {
        const json = await response.json();
        localStorage.setItem("user",JSON.stringify(json));
        setUser(json);
        history.push('/');
    } else {
        alert("Väärä käyttäjätunnus tai salasana");
    }
  } 

  return (
    <div className="container">
      <div className="col-12 text-center mt-5 mb-3">
      <h1>KIRJAUTUMINEN</h1>
      </div>
      <div className="col-12 text-center">
      <Form onSubmit={login}>
          <Form.Control className="mb-3 col-3 col-centered" maxLength="256" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Sähköpostiosoite' required/>
          <Form.Control className="mb-3 col-3 col-centered" maxLength="256" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Salasana' required/>
          <Button className="accountBtn" type="submit">Kirjaudu sisään</Button>
      </Form>
      <a className="register" href="/registration">Unohtuiko salasana? </a>|
      <a className="register" href="/registration"> Rekisteröidy</a>
      </div>
      </div>
       );
    }
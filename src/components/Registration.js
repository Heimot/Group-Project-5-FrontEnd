// import './App.css';
import React, { useState } from 'react';

export default function Registration() {
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  
  const [serverResponse, setServerResponse] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  


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
          alert("Already registered!")
        }
      }, (error) => {
        alert(error);
      }
    )
  }


  return (
    <div className="container">
      <div className="col-12 text-center">
      <h1>Login and Registration</h1>
      </div>
      <div className="col-12 text-center">
      <form onSubmit={login}>
        <label>Käyttäjätunnus 
          <input value={emailLogin} onChange={e => setEmailLogin(e.target.value)} placeholder='Enter Email...'/>
          <input value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)} placeholder='Enter password...'/>
          <button>Login</button>
        </label>
      </form>
      </div>
      <form onSubmit={registration}>
        <label>Create user:
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email...'/>
          <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter password...'/>
          <input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Enter firstname...'/>
          <input value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Enter lastname...'/>
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder='Enter address...'/>
          <input value={postalcode} onChange={e => setPostalcode(e.target.value)} placeholder='Enter postalcode...'/>
          <input value={city} onChange={e => setCity(e.target.value)} placeholder='Enter city...'/>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder='Enter phone...'/>
          <button>Register</button>
        </label>
      </form>
      <div>
      {serverResponse}
      </div>
    </div>
  );
}

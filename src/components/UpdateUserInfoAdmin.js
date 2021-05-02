// import './App.css';
import React, { useState, useEffect } from 'react';

export default function UpdateUserInfo({ active, SelectedCustomer }) {  
  const [serverResponse, setServerResponse] = useState('');
  
  //const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (SelectedCustomer) {
    setFirstname(SelectedCustomer.firstname);
    setLastname(SelectedCustomer.lastname);
    setAddress(SelectedCustomer.address);
    setPostalcode(SelectedCustomer.postalcode);
    setCity(SelectedCustomer.city);
    setPhone(SelectedCustomer.phone);
    }
  }, [SelectedCustomer]);

  function UpdateCurrentUser(e) {
    e.preventDefault();

    if (firstname === '' || lastname === '' || address === '' || postalcode === '' || city === '' || phone === '') {
      alert("Kaikki kentät vaaditaan!");
      return;
    }

    fetch('http://localhost/Group-Project-5-BackEnd/updateaccount.php', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-type':'application/json',
      },
      body: JSON.stringify({
        id: SelectedCustomer.id,
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
        alert("Tietoa muokattu");
      }, (error) => {
        alert(error);
      }
    )        
  }


  return (
    <div className="container">
      <form onSubmit={UpdateCurrentUser}>
        <label>Tietoa:
          <input value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Asiakkaan etunimi...'/>
          <input value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Asiakkaan sukunimi...'/>
          <input value={address} onChange={e => setAddress(e.target.value)} placeholder='Asiakkaan osoite...'/>
          <input value={postalcode} onChange={e => setPostalcode(e.target.value)} placeholder='Asiakkaan postinumero...'/>
          <input value={city} onChange={e => setCity(e.target.value)} placeholder='Asiakkaan postitoimipaikka...'/>
          <input value={phone} onChange={e => setPhone(e.target.value)} placeholder='Asiakkaan puhelinnumero...'/>
          <button>Varmistaa päivitetty tietoa</button>
        </label>
      </form>
      {/*<div>
      {serverResponse}
      </div>*/}
    </div>
  );
}

import './AddUserManually.css';
import React, { useState } from 'react';

export default function AddUserManually() {

    const [serverResponse, setServerResponse] = useState([]); // shows last insert ID


    

    const [customerid, setCustomerid] = useState(0);
    const [shipping, setShipping] = useState('');

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
              alert("Already registered!")
            }
          }, (error) => {
            alert(error);
          }
        )
      }


    return (
        <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12">
                <h1 className="otsikkoLisUusTil">Lisää uusi asiakas</h1>
                <form onSubmit={registration}>

                        <div className="ekatTiedot">
                            <input className="form-group col-md-6" value={firstname} onChange={e => setFirstname(e.target.value)} placeholder='Asiakkaan etunimi...' />
                            <input className="form-group col-md-6" value={lastname} onChange={e => setLastname(e.target.value)} placeholder='Asiakkaan sukunimi...' />
                            <input className="form-group col-md-6" value={address} onChange={e => setAddress(e.target.value)} placeholder='Asiakkaan osoite...' />
                            <input className="form-group col-md-6" value={postalcode} onChange={e => setPostalcode(e.target.value)} placeholder='Asiakkaan postinumero...' />
                        </div>

                        <div className="tokatTiedot">
                            <input className="form-group col-md-6" value={email} onChange={e => setEmail(e.target.value)} placeholder='Asiakkaan sähköposti...' />
                            <input className="form-group col-md-6" value={city} onChange={e => setCity(e.target.value)} placeholder='Asiakkaan postitoimipaikka...' />
                            <input className="form-group col-md-6" value={phone} onChange={e => setPhone(e.target.value)} placeholder='Asiakkaan puhelinnumero...' />
                            <input className="form-group col-md-6" value={password} onChange={e => setPassword(e.target.value)} placeholder='Luo salasana...'/>
                            <input type="hidden" value={customerid} onChange={e => setCustomerid(e.target.value)}/>
                        </div>
                            <button type="submit" className="tilausNappi btn btn-block">Lisää Asiakas:</button>
                </form>
                </div>
                <div>
                    {JSON.stringify(serverResponse)}
                </div>
            </div>
        </div>
    );
}

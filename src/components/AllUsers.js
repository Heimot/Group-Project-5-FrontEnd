import './allusers.css';
import React, { useState,useEffect } from 'react';


export default function AllUsers() {
    const [customer, setCustomers] = useState([]);
  

    useEffect(() => {
      fetch('http://localhost/Group-Project-5-BackEnd/showusers.php')
      .then(response => response.json())
      .then(
        (response) => {
          setCustomers(response);
        }, (error) => {
          alert(error);
        }
      )
    }, [])  
  
    function show() {
      fetch('http://localhost/Group-Project-5-BackEnd/showusers.php', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-type':'application/json',
        },
        body: JSON.stringify({
        })
      })
      .then(response => response.json())
      .then(
        (response) => {
          setCustomers(response);
        }, (error) => {
          alert(error);
        }
      )
    } 



return (
    <div className="container-fluid">
      <h1 className="kaikkiAsiakkaatOtsikko">Kaikki asiakkaat:</h1>
      <form onSubmit={show}>
    </form>
    <ol>
        {customer.map(item => (
            <li type='none' key={item.id}>
              <ul className="kaikkiAsiakkaat">Etunimi:&nbsp;{item.firstname}</ul>
              <ul className="kaikkiAsiakkaat">Sukunimi:&nbsp;{item.lastname}</ul>
              <ul className="kaikkiAsiakkaat">Osoite:&nbsp;{item.address}</ul>
              <ul className="kaikkiAsiakkaat">Postinumero:&nbsp;{item.postalcode}</ul>
              <ul className="kaikkiAsiakkaat">Kaupunki:&nbsp;{item.city}</ul>
              <ul className="kaikkiAsiakkaat">Sähköposti:&nbsp;{item.email}</ul>
              <ul className="kaikkiAsiakkaat">Puhelinnumero:&nbsp;{item.phone}</ul>
            </li>
        ))}
      </ol>      
    </div>
);
}

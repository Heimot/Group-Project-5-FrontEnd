import './allusers.css';
import React, { useState,useEffect } from 'react';
import UpdateUserInfo from './UpdateUserInfoAdmin.js';


export default function AllUsers() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState('');
    const [customerId, setCustomerId] = useState(0);

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
    function deleteCustomer(id) {
      let status = 0;
      fetch('http://localhost/Group-Project-5-BackEnd/deleteCustomer.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-type':'application/json',
        },
        body: JSON.stringify({
          id: id
        })
      })
      .then(res => {
        status = parseInt(res.status);
        return res.json();
      })
      .then(
        (res) => {
          if (status === 200) {
            const newListWithoutRemoved = customers.filter((item) => item.id !== id);
            setCustomer(newListWithoutRemoved);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error)
        }
      )
    }

    function ShowUsersButton() {
      const [show,setShow]=useState(false)

      const [editorUserId,setEditorUserId]=useState(0);

      function setVisible(rowUserId) {
        if ((editorUserId === 0)){
          setEditorUserId(rowUserId)
        } else if(rowUserId === editorUserId) {
          setEditorUserId(0)
        } else {
          setEditorUserId(rowUserId)
        }        
      }

      const buttonStyle = {
        backgroundColor: '#a1ffe9',
        border: 'none',
        backgroundImage: 'none',
        marginLeft: '1em'
      };

      return (
        <div className="ShowUsersButton">
        <button className="tilausNappi btn btn-block" onClick={()=>setShow(!show)} >N??yt?? asikkaat:</button> 

         {
           show?   
           <ol>
           {customers.map(item => (
               <li type='none' key={item.id}>
                 <ul className="kaikkiAsiakkaat">Etunimi:&nbsp;{item.firstname}</ul>
                 <ul className="kaikkiAsiakkaat">Sukunimi:&nbsp;{item.lastname}</ul>
                 <ul className="kaikkiAsiakkaat">Osoite:&nbsp;{item.address}</ul>
                 <ul className="kaikkiAsiakkaat">Postinumero:&nbsp;{item.postalcode}</ul>
                 <ul className="kaikkiAsiakkaat">Kaupunki:&nbsp;{item.city}</ul>
                 <ul className="kaikkiAsiakkaat">S??hk??posti:&nbsp;{item.email}</ul>
                 <ul className="kaikkiAsiakkaat">Puhelinnumero:&nbsp;{item.phone}</ul>
                 <a onClick={() => deleteCustomer(item.id)} href="#">Poista asiakas: {item.firstname} {item.lastname}</a>
                 <button style={buttonStyle} onClick={()=>setVisible(item.id)} >Muokkaa tietoa: {item.firstname} {item.lastname}</button>
                 {
                   (item.id === editorUserId)? 
                   <UpdateUserInfo SelectedCustomer={item}/>
                   :null
                 }
               </li>
           ))}
         </ol>       
           :null
         }
         {/* <button onClick={()=>setShow(false)} >Show</button>
         <button onClick={()=>setShow(true)} >Hide</button> */}
        </div>
      );
    }



return (
    <div className="container-fluid">
    <ShowUsersButton />
    </div>
);
}

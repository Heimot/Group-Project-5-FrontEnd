import React, { useState,useEffect } from 'react';
import './searchAllProducts.css';



export default function SearchAllProducts() {
    const [products, setProducts] = useState([]);
  

    useEffect(() => {
      fetch('http://localhost/Group-Project-5-BackEnd/product.php')
      .then(response => response.json())
      .then(
        (response) => {
          setProducts(response);
        }, (error) => {
          alert(error);
        }
      )
    }, [])  
  
    function showProducts() {
      fetch('http://localhost/Group-Project-5-BackEnd/product.php', {
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
          setProducts(response);
        }, (error) => {
          alert(error);
        }
      )
    } 



return (
    <div className="container-fluid">
      <h1 className="kaikkiTuotteetOtsikko">Kaikki tuotteet:</h1> 
      <form onSubmit={showProducts}>
    </form>
    <ol>
        {products.map(item => (
            <li type='none' key={item.id}>
              <ul className="kaikkiTuotteet">Tuotteen nimi:&nbsp;{item.name}</ul>
              <ul className="kaikkiTuotteet">Hinta:&nbsp;{item.price}</ul>
              <ul className="kaikkiTuotteet">Kategoria id:&nbsp;{item.categoryID}</ul>
              <ul className="kaikkiTuotteet">Alakategoria id:&nbsp;{item.subCategoryID}</ul>
              <ul className="kaikkiTuotteet">Tuotteen kuvaus:&nbsp;{item.description}</ul>
              <ul className="kaikkiTuotteet">Tuotteen paino:&nbsp;{item.weight}</ul>
              <ul className="kaikkiTuotteet">Varastossa:&nbsp;{item.stock}</ul>
            </li>
        ))}
      </ol>    
    </div>
);
}

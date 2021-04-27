import React, { useState,useEffect } from 'react';
import './searchAllProducts.css';



export default function SearchAllProducts() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [productId, setProductId] = useState(0);


  

    useEffect(() => {
      fetch('http://localhost/Group-Project-5-BackEnd/showproducts.php')
      .then(response => response.json())
      .then(
        (response) => {
          setProducts(response);
        }, (error) => {
          alert(error);
        }
      )
    }, [])  
  
    function show() {
      fetch('http://localhost/Group-Project-5-BackEnd/showproducts.php', {
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

    function deleteProduct(id) {
      let status = 0;
      fetch('http://localhost/Group-Project-5-BackEnd/deleteProduct.php', {
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
            const newListWithoutRemoved = products.filter((item) => item.id !== id);
            setProduct(newListWithoutRemoved);
          } else {
            alert(res.error);
          }
        }, (error) => {
          alert(error)
        }
      )
    }



return (
    <div className="container-fluid">
      <h1 className="kaikkiTuotteetOtsikko">Kaikki tuotteet:</h1> 
      <form onSubmit={show}>
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
              <a onClick={() => deleteProduct(item.id)} href="#">Poista tuote:</a>
            </li>
        ))}
      </ol>    
    </div>
);
}

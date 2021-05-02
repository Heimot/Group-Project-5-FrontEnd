import React, { useState,useEffect } from 'react';
import './searchAllProducts.css';



export default function SearchAllProducts() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [productId, setProductId] = useState(0);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [categoryID, setCategoryID] = useState('');
    const [subCategoryID, setSubCategoryID] = useState('');
    const [description, setDescription] = useState('');
    const [weight, setWeightn] = useState('');
    const [stock, setStock] = useState('');
    const [id, setID] = useState('');



  

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
    function updateProduct(id) {

            fetch('http://localhost/Group-Project-5-BackEnd/updateProduct.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-type':'application/json',
              },
              body: JSON.stringify({
                name: name,
                price: price,
                categoryID: categoryID,
                subCategoryID: subCategoryID,
                description: description,
                weight: weight,
                stock: stock,
                id: id

               })
            })
            .then(response => response.json())
            .then(
            (json) => {
              setProduct(json);
            }, (error) => {
              alert(error);
            }
            )
        }

    function ShowProductsButton() {
      const [show,setShow]=useState(false)
      return (
        <div className="ShowUsersButton">
        <button className="tilausNappi btn btn-block" onClick={()=>setShow(!show)} >Näytä tuotteet:</button> 

         {
           show?   
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
           :null
         }
         {/* <button onClick={()=>setShow(false)} >Show</button>
         <button onClick={()=>setShow(true)} >Hide</button> */}
        </div>
      );
    }

return (
    <div className="container">
      <ShowProductsButton />
    </div>
);
}

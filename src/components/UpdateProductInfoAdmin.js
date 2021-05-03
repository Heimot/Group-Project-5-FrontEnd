// import './App.css';
import React, { useState, useEffect } from 'react';

export default function UpdateProductInfo({ SelectedProduct }) {  
  const [serverResponse, setServerResponse] = useState('');
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryID, setCategoryID] = useState(0);
  const [subCategoryID, setSubCategoryID] = useState(0);
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [stock, setStock] = useState(0.0);

  useEffect(() => {
    if (SelectedProduct) {
      setName(SelectedProduct.name);
      setPrice(SelectedProduct.price);
      setCategoryID(SelectedProduct.categoryID);
      setSubCategoryID(SelectedProduct.subCategoryID);
      setDescription(SelectedProduct.description);
      setWeight(SelectedProduct.weight);
      setStock(SelectedProduct.stock);
    }
  }, [SelectedProduct]);

  function UpdateCurrentProduct(e) {
    e.preventDefault();

    if (
        name === "" ||
        price === "" ||
        categoryID === "" ||
        subCategoryID === ""
      ) {
        alert("Syötä vähintään tuotteen nimi, hinta, kategoria ja alakategoria!");
        return;
      }

    fetch('http://localhost/Group-Project-5-BackEnd/updateProduct.php', {
      method: 'POST',
      headers: {
         'Accept': 'application/json',
         'Content-type':'application/json',
      },
      body: JSON.stringify({
        id: SelectedProduct.id,
        name: name,
        price: price,
        categoryID: categoryID,
        subCategoryID: subCategoryID,
        description: description,
        weight: weight,
        stock: stock
      })
    })
    .then(response => response.text())
    .then(
      (response) => {
        setServerResponse(response);
        alert("Tietoa muokattu");
        window.location.reload();
      }, (error) => {
        alert(error);
      }
    )        
  }

  const divStyle = {
    backgroundColor: '#a1ffe9',
    padding: '1em'
  };


  return (
    <div style={divStyle} className="container">
      <form onSubmit={UpdateCurrentProduct}>
        <label>Tietoa:</label>
          <div>
            <input
                className="form-group col-md-4"
                value={name}
                maxLength="256"
                onChange={(e) => setName(e.target.value)}
                placeholder="Syötä tuotteen nimi..."
              />
              <input
                className="form-group col-md-4"
                value={categoryID}
                type="number"
                onChange={(e) => setCategoryID(e.target.value)}
                placeholder="Syötä tuotteen kategoria..."
              />
              <input
                className="form-group col-md-4"
                value={subCategoryID}
                type="number"
                onChange={(e) => setSubCategoryID(e.target.value)}
                placeholder="Syötä tuotteen alakategoria..."
              />
              <input
                className="form-group col-md-4"
                value={description}
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Syötä tuotteen kuvaus..."
              />
              <input
                className="form-group col-md-4"
                value={weight}
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Syötä tuotteen paino..."
              />
              <input
                className="form-group col-md-4"
                value={stock}
                type="number"
                onChange={(e) => setStock(e.target.value)}
                placeholder="Syötä tuotteen varastomäärä..."
              />
              <input
                className="form-group col-md-4"
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Syötä tuotteen hinta..."
              />
          </div>

          <div style={{ display: "flex" }}>
            <button style={{ marginLeft: "auto" }} className="tilausNappi btn">Varmistaa päivitetty tietoa</button>
          </div>                
      </form>
      {/*<div>
      {serverResponse}
      </div>*/}
    </div>
  );
}

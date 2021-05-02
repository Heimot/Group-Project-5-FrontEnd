import "./AddUserManually.css";
import React, { useState, useEffect } from "react";

export default function AddProductManually() {
  const [serverResponse, setServerResponse] = useState([]); // shows last insert ID

  const [productId, setProductId] = useState(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [subCategoryID, setSubCategoryID] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [stock, setStock] = useState("");
  const [files, setFiles] = useState([]);

  function AddNewPro(e) {
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

    fetch("http://localhost/Group-Project-5-BackEnd/addNewProduct.php", {
      method: "POST",

      body: JSON.stringify({
        name: name,
        price: price,
        categoryID: categoryID,
        subCategoryID: subCategoryID,
        description: description,
        weight: weight,
        stock: stock,
      }),
    })
      .then((response) => response.json())
      .then(
        (response) => {
          setServerResponse(response);
          let i;
          for (i = 0; i < files.length; i++) {
            const formData = new FormData();
            formData.append("file", files[i]);
            formData.append("id", response.id);
            fetch(
              "http://localhost/Group-Project-5-BackEnd/uploadImageTest.php",
              {
                method: "POST",
                body: formData,
              }
            )
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
              });
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <h1 className="otsikkoLisUusTil">Lisää uusi tuote:</h1>
          <form onSubmit={AddNewPro}>
            <div className="ekatTiedot">
              <input
                className="form-group col-md-6"
                value={name}
                maxLength="256"
                onChange={(e) => setName(e.target.value)}
                placeholder="Syötä tuotteen nimi..."
              />
              <input
                className="form-group col-md-6"
                value={categoryID}
                type="number"
                onChange={(e) => setCategoryID(e.target.value)}
                placeholder="Syötä tuotteen kategoria..."
              />
              <input
                className="form-group col-md-6"
                value={subCategoryID}
                type="number"
                onChange={(e) => setSubCategoryID(e.target.value)}
                placeholder="Syötä tuotteen alakategoria..."
              />
              <input
                className="form-group col-md-6"
                value={description}
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Syötä tuotteen kuvaus..."
              />
            </div>

            <div className="tokatTiedot">
              <input
                className="form-group col-md-6"
                value={weight}
                type="number"
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Syötä tuotteen paino..."
              />
              <input
                className="form-group col-md-6"
                value={stock}
                type="number"
                onChange={(e) => setStock(e.target.value)}
                placeholder="Syötä tuotteen varastomäärä..."
              />
              <input
                className="form-group col-md-6"
                value={price}
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Syötä tuotteen hinta..."
              />

              <input
                type="hidden"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="col-md-12"
              >
                <input
                  accept="image/png"
                  onChange={(e) => setFiles([...files, e.target.files[0]])}
                  className="form-group col-md-6"
                  type="file"
                ></input>
                <input
                  accept="image/png"
                  onChange={(e) => setFiles([...files, e.target.files[0]])}
                  className="form-group col-md-6"
                  type="file"
                ></input>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="col-md-12"
              >
                <input
                  accept="image/png"
                  onChange={(e) => setFiles([...files, e.target.files[0]])}
                  className="form-group col-md-6"
                  type="file"
                ></input>
                <input
                  accept="image/png"
                  onChange={(e) => setFiles([...files, e.target.files[0]])}
                  className="form-group col-md-6"
                  type="file"
                ></input>
              </div>
            </div>
            <button type="submit" className="tilausNappi btn btn-block">
              Lisää uusi tuote:
            </button>
          </form>
        </div>
        <div>{JSON.stringify(serverResponse)}</div>
      </div>
    </div>
  );
}

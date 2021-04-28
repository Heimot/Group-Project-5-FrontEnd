import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import ProductItem from "./ProductItem";
import "./productList.css";
import { useHistory } from 'react-router-dom';

export default function ProductList(props) {
  const [res, setRes] = useState(null);

  const history = useHistory();

  useEffect(() => {
    return history.listen(() => { 
       window.location.reload();
    }) 
 },[history]) 

  useEffect(() => {
    var pathArray = window.location.pathname.split("/");
    let res = null;
    async function getData() {
      if (pathArray[1] !== "search") {
        if (pathArray[2] === undefined && pathArray[3] === undefined) {
          res = await fetch(
            `http://localhost/Group-Project-5-BackEnd/product.php`,
            { method: "GET", headers: { "Content-Type": "application/json" } }
          );
        } else if (pathArray[2] !== undefined && pathArray[3] === undefined) {
          res = await fetch(
            `http://localhost/Group-Project-5-BackEnd/categoryProducts.php?name=${
              pathArray[2]
            }&type=${2}`,
            { method: "GET", headers: { "Content-Type": "application/json" } }
          );
        } else {
          res = await fetch(
            `http://localhost/Group-Project-5-BackEnd/categoryProducts.php?name=${
              pathArray[3]
            }&type=${1}`,
            { method: "GET", headers: { "Content-Type": "application/json" } }
          );
        }
        const json = await res.json();
        setRes(json);
      } else {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get("item");
        res = await fetch(
          `http://localhost/Group-Project-5-BackEnd/searchFill.php?search=${myParam}`,
          { method: "GET", headers: { "Content-Type": "application/json" } }
        );
        const json = await res.json();
        setRes(json);
      }
    }
    getData();
  }, []);

  function handleChange(e) {
    let myData = [];
    switch (e.target.value) {
      case "Halvimmasta kalleimpaan":
        myData = [].concat(res).sort((a, b) => a.price - b.price);
        setRes(myData);
        break;

      case "Kalleimmasta halvimpaan":
        myData = [].concat(res).sort((a, b) => b.price - a.price);
        setRes(myData);
        break;

      case "Aakkosjärjestykseen":
        myData = [].concat(res).sort((a, b) => a.name.localeCompare(b.name));
        setRes(myData);
        break;

      case "Tuotearvostelujen mukaan":
        alert("Arvostelut eivät ole vielä käytössä");
        break;

      default:
        setRes(res);
        break;
    }
  }

  if (res) {
    return (
      <div>
        <div className="productListing">
          <div>
            <div className="productArrangement">Järjestä</div>
            <Form.Control
              onChange={(e) => handleChange(e)}
              className="productListArrang"
              as="select"
            >
              <option defaultValue></option>
              <option>Halvimmasta kalleimpaan</option>
              <option>Kalleimmasta halvimpaan</option>
              <option>Aakkosjärjestykseen</option>
              <option>Tuotearvostelujen mukaan</option>
            </Form.Control>
          </div>
        </div>
        <div className="productRow">
          {res.map((item) => {
            return (
              <ProductItem
                isOpen2={(val) => props.isOpen(val)}
                key={item.id}
                product={item}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>Loading (Development? Forgot to launch XAMPP for MYSQL?)....</div>
    );
  }
}

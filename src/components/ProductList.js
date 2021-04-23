import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./productList.css";

export default function ProductList(props) {
  const [res, setRes] = useState(null);

  useEffect(() => {
    var pathArray = window.location.pathname.split('/');
    let res = null;
    async function getData() {
      if (pathArray[2] === undefined && pathArray[3] === undefined ) {
        res = await fetch(`http://localhost/Group-Project-5-BackEnd/product.php`, { method: "GET", headers: { 'Content-Type': 'application/json' } });
      } else if(pathArray[2] !== undefined && pathArray[3] === undefined){
        res = await fetch(`http://localhost/Group-Project-5-BackEnd/categoryProducts.php?name=${pathArray[2]}&type=${2}`, { method: "GET", headers: { 'Content-Type': 'application/json' } });
      } else {
        res = await fetch(`http://localhost/Group-Project-5-BackEnd/categoryProducts.php?name=${pathArray[3]}&type=${1}`, { method: "GET", headers: { 'Content-Type': 'application/json' } });
      }
      const json = await res.json();
      setRes(json);
    }
    getData();
  }, [])

  if (res) {
    return (
      <div className="productRow">
        {res.map(item => {
          return (
            <ProductItem isOpen2={(val) => props.isOpen(val)} key={item.id} product={item} />
          )
        })}
      </div>
    );
  } else {
    return (
      <div>
        Loading (Development? Forgot to launch XAMPP for MYSQL?)....
      </div>
    )
  }
};

import React from "react";
import ProductItem from "./ProductItem";
import "./productList.css";

let arr = [{ tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { tuote: "Tuote nimi", hinta: "50€", kuva: "" }]

export default function ProductList() {
  return (
        <div className="productRow">
          {arr.map(item => {
            return (
              <ProductItem product={item} />
            )
          })}
        </div>
  );
};

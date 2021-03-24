import React from "react";
import ProductItem from "./ProductItem";
import "./productList.css";

let arr = [{ id: 1, tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { id: 2, tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { id: 3, tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { id: 4, tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { id: 5, tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { id: 6, tuote: "Tuote nimi", hinta: "50€", kuva: "" }, { id: 7, tuote: "Tuote nimi", hinta: "50€", kuva: "" }]

export default function ProductList() {
  return (
        <div className="productRow">
          {arr.map(item => {
            return (
              <ProductItem key={item.id} product={item} />
            )
          })}
        </div>
  );
};

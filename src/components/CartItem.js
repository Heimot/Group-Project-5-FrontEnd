import { useState, useEffect } from "react";
import useFetch from "./hooks/fetch";
import "./CartItem.css";

function CartItem(props) {
  const [amount, setAmount] = useState(props.item.amount);
  const [picture, setPicture] = useState("");

  let productData = useFetch(
    "http://localhost/Group-Project-5-BackEnd/id.php?id=" +
      props.item.id +
      "&img=1",
    { method: "GET", headers: { "Content-Type": "application/json" } }
  );

  useEffect(() => {
    Prices();
    if (productData) {
      if (productData[0].picture === null) {
        setPicture("default.png");
      } else {
        setPicture(productData[0].picture);
      }
    }
  }, [productData]);

  function Prices() {
    if (productData) {
      props.allPrices(productData[0].price * amount);
    }
  }

  function onePrice(oldValue, value) {
    if (oldValue[0].amount < value) {
      props.allPrices(productData[0].price * (value - oldValue[0].amount));
    } else {
      if (value < 0) {
        value = 0;
      }
      props.allPrices(-productData[0].price * (oldValue[0].amount - value));
    }
  }

  function Price() {
    let price = productData[0].price * amount;
    return `${price.toFixed(2)} €`;
  }

  function changeAmount(value) {
    let ids = props.item.id;
    let id = ids.toString();
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
    let oldValue = cart.filter((item) => item.id === id);
    const found = cart.some((el) => el.id === id);
    if (found) {
      const allCartValues = cart.filter((item) => item.id !== id);
      if (value > 0) {
        allCartValues.push({ id, amount: parseInt(value) });
      } else {
        document.getElementById(id).remove();
      }
      cart = allCartValues;
    }
    let stringCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringCart);
    onePrice(oldValue, value);
  }

  return (
    <div id={props.item.id}>
      {productData ? (
        <div className="cartItem row">
          <div className="cartProductItem col-3 col-sm-3 col-md-5 col-xl-6">
            <img
              className="cartItemIMG d-none d-md-block image"
              src={`http://localhost/Group-Project-5-BackEnd/images/${picture}`}
              alt="no"
            ></img>
            <div className="text-wrap">{productData[0].name}</div>
          </div>
          {props.pos !== 3 ? (
            <div className="cartItemText col-3 col-sm-3 col-md-3 col-xl-2">
              <input
                min={0}
                value={amount}
                type="number"
                onChange={(e) =>
                  setAmount(e.target.value) + changeAmount(e.target.value)
                }
                className="cartProductAmount"
              ></input>
            </div>
          ) : null}

          {props.pos === 3 ? (
            <div className="cartItemText col-3 col-sm-3 col-md-3 col-xl-2">
              <div>{amount}</div>
            </div>
          ) : null}
          <div className="cartItemText col-3 col-sm-3 col-md-2 col-xl-2">
            {productData[0].price}
          </div>
          <div className="cartItemText font-weight-bold col-3 col-sm-3 col-md-2 col-xl-2">
            {Price()}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartItem;

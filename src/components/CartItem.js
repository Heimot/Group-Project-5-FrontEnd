import { useState, useEffect } from 'react';
import IMG from '../img/localproduct.png';
import './CartItem.css';

function CartItem(props) {
    const [amount, setAmount] = useState(props.item.amount)
    /*kaikki nämä valuet tulevat myöhemmin fetchin avulla propsejen kautta!*/
    // vaihda kaikki 499 myöhemmin fetchin hintoihin!!!!!!!!!!!!!!

    useEffect(() => {
        Prices();
    }, [])

    function Prices() {
        props.allPrices(499 * amount);
    }

    function onePrice(oldValue, value) {
        if(oldValue[0].amount < value) {
            props.allPrices(499 * (value - oldValue[0].amount))
        } else {
            if(value < 0) {
                value = 0;
            }
            props.allPrices(-499 * (oldValue[0].amount - value))
        }
       
    }

    function Price() {
        let price = 499 * amount;
        return `${price} €`;
    }

    function changeAmount(value) {
        let ids = props.item.id
        let id = ids.toString();
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        let oldValue = cart.filter(item => item.id === id)
        const found = cart.some(el => el.id === id)
        if (found) {
            const allCartValues = cart.filter(item => item.id !== id)
            if (value > 0) {
                allCartValues.push({ id, amount: parseInt(value) })
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
        <div id={props.item.id} className="cartItem row">
            <div className="cartProductItem col-3 col-sm-3 col-md-5 col-xl-6">
                <img className="cartItemIMG d-none d-md-block image" src={IMG} alt="no"></img>
                <div className="text-wrap">
                    BenQ 23,8" GW2475H, Full HD -monitori, musta (Tarjous! Norm. 139€!)
                </div>
            </div>
            <div className="cartItemText col-3 col-sm-3 col-md-3 col-xl-2">
                <input min={0} value={amount} type="number" onChange={(e) => setAmount(e.target.value) + changeAmount(e.target.value)} className="cartProductAmount"></input>
            </div>
            <div className="cartItemText col-3 col-sm-3 col-md-2 col-xl-2">
                499.0 €
            </div>
            <div className="cartItemText font-weight-bold col-3 col-sm-3 col-md-2 col-xl-2">
                {Price()}
            </div>
        </div>
    )
}

export default CartItem;
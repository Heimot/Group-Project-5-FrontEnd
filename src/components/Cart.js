import { useState, useEffect } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button';

let values = 0;

function Cart() {
    const [cart, setCart] = useState(null);
    const [price, setPrice] = useState(0);

    // Tähän myöhemmin tuotteiden haku ja ne sitten cart.mapataan ostoskoriin!
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, [])
    

    return (
        <div className="cartBody container">
            {cart !== null ?
                <div>
                    <h3 className="cartText cartTextCart">Ostoskori</h3>
                    <div className="row">
                        <div className="cartTuote col-3 col-sm-3 col-md-5 col-xl-6">
                            Tuote
                        </div>
                        <div className="cartTuote col-3 col-sm-3 col-md-3 col-xl-2">
                        </div>
                        <div className="cartTuote text-center col-3 col-sm-3 col-md-2 col-xl-2">
                            à hinta
                        </div>
                        <div className="cartTuote text-center col-3 col-sm-3 col-md-2 col-xl-2">
                            Yhteensä
                        </div>
                    </div>
                    {cart.map((item) => {
                        return (<CartItem key={item.id} item={item} allPrices={(value) => (values = values + value) + setPrice(values)} default={() => setPrice(0) + (values = 0)} />)
                    })}
                    <div className="cartBottomData">
                        <div>
                            <div>Yhteensä: {values} €</div>
                            <Button className="cartBtn">Kassalle</Button>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <h1 className="cartText">Ostoskorisi on tyhjä</h1>
                    <a className="cartText" href="/">Jatka ostoksia</a>
                </div>
            }
        </div>
    )
}

export default Cart;
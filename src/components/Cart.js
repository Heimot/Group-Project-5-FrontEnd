import { useState, useEffect } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import Button from 'react-bootstrap/Button';
import CartForm from './CartForm';
import CartDelivery from './CartDelivery';

let values = 0;

function Cart() {
    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState([]);
    const [position, setPosition] = useState(0);
    const [delivery, setDelivery] = useState(null);

    // Tähän myöhemmin tuotteiden select haku (fetch) ja ne sitten cart.mapataan ostoskoriin!
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, [])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("cart")).length <= 0) {
            setCart([])
        }
    }, [price])

    useEffect(() => {
        console.log(delivery)
    }, [delivery])

    return (
        <div className="cartBody container">
            {cart.length !== 0 ?
                <div>
                    <div className="row cartSteps">
                        <div className={position === 0 ? "col-2 cartStepButton cartStepButtonActive" : "col-2 cartStepButton"}>Ostoskori</div>
                        <div className={position === 1 ? "col-2 cartStepButton cartStepButtonActive" : "col-2 cartStepButton"}>Toimitustiedot</div>
                        <div className={position === 2 ? "col-2 cartStepButton cartStepButtonActive" : "col-2 cartStepButton"}>Toimitus ja maksutapa</div>
                        <div className={position === 3 ? "col-2 cartStepButton cartStepButtonActive" : "col-2 cartStepButton"}>Maksu/hyväksyntä</div>
                        <div className={position === 4 ? "col-2 cartStepButton cartStepButtonActive" : "col-2 cartStepButton"}>Valmis</div>
                    </div>
                    <div className="cartForms">
                        <h3 className="cartText cartTextCart">{position === 0 ? "Ostoskori" : position === 1 ? "Toimitustiedot" : position === 2 ? "Toimitustapa" : position === 3 ? "Maksu/hyväksyntä" : position === 4 ? "Valmis" : null}</h3>
                        {position === 0 ?
                            <div>

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
                                    return (<CartItem key={item.id} item={item} allPrices={(value) => (values = values + value) + setPrice([...price, 1])} />)
                                })}
                                <div className="cartBottomData">
                                    <div>
                                        <div>Yhteensä: {values} €</div>

                                    </div>
                                </div>
                            </div>
                            : position === 1 ?
                                <CartForm back={() => setPosition(position - 1)} next={() => setPosition(position + 1)} />
                                : position === 2 ?
                                    <CartDelivery method={(del) => setDelivery(del)}  back={() => setPosition(position - 1)} next={() => setPosition(position + 1)} />
                                    : null
                        }
                    </div>
                    {position !== 1 ? position !== 2 ?
                        <div>
                            <hr />
                            <div className="cartLastNext row">
                                <div className="col-6 cartLast">
                                    {position !== 0 ? <Button className="cartBtn cartLast" onClick={() => setPosition(position - 1)}>{"<< Edellinen"}</Button> : null}
                                </div>
                                <div className="col-6 cartNext">
                                    {position !== 4 ? <Button className="cartBtn cartNext" onClick={() => setPosition(position + 1)}>{"Seuraava >>"}</Button> : null}
                                </div>
                            </div>
                        </div>
                        : undefined
                        : undefined}
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
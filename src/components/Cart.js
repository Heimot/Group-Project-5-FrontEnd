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
    const [payment, setPayment] = useState(null);
    const [credentials, setCredentials] = useState(null);

    let IBank = [{ id: 1, bank: "OP" }, { id: 2, bank: "Nordea" }, { id: 3, bank: "Danske Bank" }];
    let mPay = [{ id: 1, bank: "pivo" }, { id: 2, bank: "MobilePay" }, { id: 3, bank: "Siirto." }];
    let card = [{ id: 1, bank: "VISA" }, { id: 2, bank: "VISA ELECTRON" }, { id: 3, bank: "mastercard" }];

    // Tähän myöhemmin tuotteiden select haku (fetch) ja ne sitten cart.mapataan ostoskoriin!
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
        values = 0;
    }, [])

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("cart")).length <= 0) {
            setCart([])
        }
    }, [price])

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")));
    }, [position])

    useEffect(() => {
        if (delivery !== null) {
            values = values + delivery[0].cost;
            setCredentials(JSON.parse(sessionStorage.getItem("credentials")));
        }
    }, [delivery])

    console.log(credentials)

    function newOrder() {
        fetch("http://localhost/Group-Project-5-BackEnd/neworder.php", { 
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customerid: null,
                price: values.toFixed(2),
                shipping: 1,
                email: credentials.email,
                firstname: credentials.firstName,
                lastname: credentials.lastName,
                address: credentials.address,
                postalcode: credentials.zip,
                city: credentials.municipality,
                phone: credentials.phoneNumber,
                cart: cart
            })
        })
    }

    return (
        <div className="cartBody container">
            {cart.length !== 0 ?
                <div>
                    <div className="row cartSteps">
                        <div className={position === 0 ? "col-lg-2 col-12 cartStepButton cartStepButtonActive" : "col-lg-2 col-12 cartStepButton"}>Ostoskori</div>
                        <div className={position === 1 ? "col-lg-2 col-12 cartStepButton cartStepButtonActive" : "col-lg-2 col-12 cartStepButton"}>Toimitustiedot</div>
                        <div className={position === 2 ? "col-lg-2 col-12 cartStepButton cartStepButtonActive" : "col-lg-2 col-12 cartStepButton"}>Toimitus ja maksutapa</div>
                        <div className={position === 3 ? "col-lg-2 col-12 cartStepButton cartStepButtonActive" : "col-lg-2 col-12 cartStepButton"}>Maksu/hyväksyntä</div>
                        <div className={position === 4 ? "col-lg-2 col-12 cartStepButton cartStepButtonActive" : "col-lg-2 col-12 cartStepButton"}>Valmis</div>
                    </div>
                    <div className="cartForms">
                        <h3 className="cartText cartTextCart">{position === 0 ? "Ostoskori" : position === 1 ? "Toimitustiedot" : position === 2 ? "Toimitustapa" : position === 3 ? "Maksu/hyväksyntä" : position === 4 ? "Valmis" : null}</h3>
                        {position === 0 || position === 3 ?
                            <div className={position === 3 ? "row pb-3" : null}>
                                <div className={position === 3 ? "col-lg-7" : null}>
                                    {position === 3 ? <div className="cartDeliveryConfirmationBox font-weight-bold">Tarkista vielä tilauksesi tiedot sekä ostoskorisi sisältö.</div> : null}
                                    <div className="row">
                                        <div className="cartTuote col-3 col-sm-3 col-md-5 col-xl-6">
                                            Tuote
                                    </div>
                                        {position !== 3 ? <div className="cartTuote col-3 col-sm-3 col-md-3 col-xl-2">
                                        </div> : null}
                                        {position === 3 ? <div className="cartTuote text-center col-3 col-sm-3 col-md-3 col-xl-2">
                                            Kpl
                                        </div> : null}
                                        <div className="cartTuote text-center col-3 col-sm-3 col-md-2 col-xl-2">
                                            à hinta
                                    </div>
                                        <div className="cartTuote text-center col-3 col-sm-3 col-md-2 col-xl-2">
                                            Yhteensä
                                    </div>
                                    </div>
                                    {cart.map((item) => {
                                        return (<CartItem key={item.id} pos={position} item={item} allPrices={(value) => (values = values + value) + setPrice([...price, 1])} />)
                                    })}
                                    <div className="row">
                                        <div className="col-7">
                                            {position === 3 ?
                                                <div><div>Toimitustavan/maksutavan kulut</div> <div>{delivery[0].title}</div></div>
                                                : null}
                                        </div>
                                        <div className="cartBottomData col-5">
                                            <div>
                                                <br />
                                                {position === 3 ? <div>{delivery[0].cost} €</div> : null}
                                                <div className="cartWholePrice">Yhteensä: {values.toFixed(2)} €</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {position === 3 ?
                                    <div className="cartDeliveryConfirmation col-lg-5">
                                        <div className="cartDeliveryConfirmationBox">
                                            <p>
                                                <div className="font-weight-bold">Toimitus- ja laskutusosoite:</div>
                                                <div>{`${credentials.firstName} ${credentials.lastName}`}</div>
                                            </p>
                                            <p>
                                                <div>{credentials.address}</div>
                                                <div>{`${credentials.zip} ${credentials.municipality}`}</div>
                                            </p>
                                            <p>
                                                <div>{credentials.phoneNumber}</div>
                                                <div>{credentials.email}</div>
                                            </p>
                                            <p>
                                                <div className="font-weight-bold">Toimitustapa:</div>
                                                <div>{delivery[0].title}</div>
                                            </p>
                                            <p>
                                                <div className="font-weight-bold">Maksutapa:</div>
                                                <div>{payment[0].title}</div>
                                            </p>
                                            {credentials.orderInfo !== "" ? <p>
                                                <div className="font-weight-bold">Lisätiedot tilauksesta:</div>
                                                <div>{credentials.orderInfo}</div>
                                            </p> : null}
                                        </div>
                                    </div>
                                    : null}
                            </ div>
                            : position === 1 ?
                                <CartForm back={() => setPosition(position - 1)} next={() => setPosition(position + 1)} />
                                : position === 2 ?
                                    <CartDelivery method={(del) => setDelivery(del)} pMethod={(pay) => setPayment(pay)} back={() => setPosition(position - 1)} next={() => setPosition(position + 1)} />
                                    : position === 4 ?
                                        <div>
                                            {sessionStorage.clear("credentials") + localStorage.setItem("cart", "[]")}
                                        </div>
                                        : null
                        }
                    </div>
                    {position === 3 ?
                        <div className="cartForms mt-2">
                            <h3 className="cartText cartTextCart">Tilauksen maksu maksupalvelun kautta</h3>
                            <div className="p-2">
                                <div className="cartDeliveryConfirmationBox">
                                    <p>
                                        Siirry maksamaan tilaus haluamallasi maksutavalla painamalla kyseisen maksutavan kuvaketta alta. Sinut ohjataan Checkout maksupalveluun josta sinut ohjataan joko maksutavan omaan palveluun antamaan tarvittavat tiedot maksua varten tai sitten tiedot kysytään suoraan Checkout maksupalvelun toimesta.
                                </p>
                                    <p className="font-weight-bold">
                                        Huom! Muista palata maksupalvelusta paluu linkin kautta takaisin sivuillemme. Tilaus rekisteröidään vasta onnistuneen maksun jälkeen.
                                </p>
                                    Maksamalla tilauksen hyväksyn <a href="/">takuu- ja toimitusehdot.</a>

                                </div>

                                <div className="mt-2">Verkkopankki maksut</div>
                                <div className="row">
                                    {IBank.map((item) => {
                                        return (
                                            <div key={item.bank} onClick={() => newOrder() + setPosition(position + 1)} className="paymentProviders ml-4 col-5 col-lg-1">{item.bank}</div>
                                        )
                                    })}
                                </div>
                                <div className="mt-2">Mobiilimaksut</div>
                                <div className="row">
                                    {mPay.map((item) => {
                                        return (
                                            <div key={item.bank} onClick={() => newOrder() + setPosition(position + 1)} className="paymentProviders ml-4 col-5 col-lg-1">{item.bank}</div>
                                        )
                                    })}
                                </div>
                                <div className="mt-2">Pankki/luottokortti</div>
                                <div className="row">
                                    {card.map((item) => {
                                        return (
                                            <div key={item.bank} onClick={() => newOrder() + setPosition(position + 1)} className="paymentProviders ml-4 col-5 col-lg-1">{item.bank}</div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        : null}
                    {position === 0 ?
                        <div>
                            <hr />
                            <div className="cartLastNext row">
                                <div className="col-6 cartLast">
                                    {position !== 0 ? <Button className="cartBtn cartLast" onClick={() => setPosition(position - 1) + (values = 0)}>{"<< Edellinen"}</Button> : null}
                                </div>
                                <div className="col-6 cartNext">
                                    {position !== 4 ? <Button className="cartBtn cartNext" onClick={() => setPosition(position + 1) + (values = 0)}>{"Seuraava >>"}</Button> : null}
                                </div>
                            </div>
                        </div>
                        : undefined}
                </div>
                : position === 4 ?
                    <div>
                        <h5>Olet "maksanut" tilauksesi!</h5>
                        <div>Tätä ennemmin pitäisi olla maksun processaus!</div>
                        <a className="cartText" href="/">Jatka ostoksia</a>
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
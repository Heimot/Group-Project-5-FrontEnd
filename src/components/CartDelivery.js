import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "./cartDelivery.css";

function CartDelivery(props) {
    const [deliver, setDeliver] = useState(0);
    const [payment, setPayment] = useState(0)
    const [step, setStep] = useState(0);
    const [methods, setMethods] = useState([])

    let deliveryMethods = [
        { id: 1, title: "Nouto paikan päältä", cost: 0, moreInfo: "Nouto Turun noutopalvelumyymälästämme.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti, ja lasku/osamaksu." },
        { id: 2, title: "Matkahuolto, lähellä paketti", cost: 0, moreInfo: "Toimitus valitsemaasi Matkahuollon noutopisteeseen.", extraInfo: "Tilauksesi toimitetaan osoitettasi lähimpään tai valitsemaasi Matkahuoltoon, Matkahuolto-asiamiespisteeseen tai Matkahuollon Noutopisteeseen (K-Marketit, R-kioskit, Pakettiautomaatit, Tokmannit ja monet muut yritykset). Saat tekstiviestin tai sähköpostin heti, kun tilaus on noudettavissa.", paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti ja lasku/osamaksu." },
        { id: 3, title: "Matkahuolto, bussipaketti", cost: 0, moreInfo: "Toimitus matkahuollon toimipisteeseen.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti ja lasku/osamaksu." },
        { id: 4, title: "Pakettiautomaatti", cost: 0, moreInfo: "Toimitus valitsemaasi pakettiautomaattiin.", extraInfo: "Pakettiautomaatin valinta tehdään seuraavassa tilausvaiheessa.", paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti ja lasku/osamaksu." },
        { id: 5, title: "Nouto postista", cost: 0, moreInfo: "Toimitus lähimpään postin toimipisteeseen.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti, postiennakko ja lasku/osamaksu." },
        { id: 6, title: "Matkahuolto, kotijakelu", cost: 12.50, moreInfo: "Toimitus suoraan kotiovelle sovittuna ajankohtana.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti sekä lasku/osamaksu" },
        { id: 7, title: "Postin kotiinkuljetus", cost: 12.50, moreInfo: "Toimitus suoraan kotiovelle sovittuna ajankohtana.", extraInfo: null, paymentMethods: "Ennakkomaksu, postiennakko ja Klarna lasku/tili" }
    ]

    let paymentMethod = [
        { id: 1, title: "Ennakkomaksu", moreInfo: "Ennakkomaksu Checkout maksupalvelun kautta", extraInfo: "Mobiilimaksut, verkkopankit ja luottokortit(visa/mastercard)" },
        { id: 2, title: "Maksu myymälään", moreInfo: "Maksu myymälään tilausta noudettaessa", extraInfo: "Pankki/luottokortti" },
        { id: 3, title: "Lahjakortti", moreInfo: "Digifemma lahjakortti. Mikäli lahjakortti ei riitä koko tilauksen summaan, loppu maksettava", extraInfo: "verkkopankki/luottokortti maksuna." }
    ]

    useEffect(() => {
        if (step === 0) {
            setMethods(deliveryMethods);
        }
    }, [step])

    function deliverySubmitted(e) {
        e.preventDefault();
        if (step === 0) {
            if (parseInt(deliver) !== 1) {
                paymentMethod = paymentMethod.filter((item) => parseInt(item.id) !== 2);
            }
            let del = deliveryMethods.filter((item) => parseInt(item.id) === parseInt(deliver));
            props.method(del);
            setMethods(paymentMethod);
            setStep(1);
        } else {
            let pay = paymentMethod.filter((item) => parseInt(item.id) === parseInt(payment));
            props.pMethod(pay);
            props.next();
        }
    }

    function stepBack() {
        if (step === 0) {
            props.back()
        } else {
            setStep(0);
        }
    }

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={deliverySubmitted}>
                <ol className="cartDeliveryList">
                    {methods.map((delivery) => {
                        return (
                            <li key={delivery.id}>
                                <div className="cartDelivery">
                                    {step === 0 ? <div className="cartDeliveryRadio">
                                        <input onClick={(e) => setDeliver(e.target.value)} required name="delivery" type="radio" id={delivery.id} value={delivery.id} />
                                        <label className="cartDeliveryLabel" htmlFor={delivery.id}>{delivery.title}</label>
                                        {step === 0 ? <div className="deliveryCost">{delivery.cost === 0 ? "Ilmainen" : delivery.cost + "0 €"} </div> : null}
                                    </div> : null}
                                    {step === 1 ?
                                        <div className="cartDeliveryRadio">
                                            <input onClick={(e) => setPayment(e.target.value)} required name="payment" type="radio" id={delivery.id} value={delivery.id} />
                                            <label className="cartDeliveryLabel" htmlFor={delivery.id}>{delivery.title}</label>
                                        </div>
                                        : null}
                                    <div className="cartDeliveryTextArea">
                                        <div className="cartDeliveryText">{delivery.moreInfo}</div>
                                        <div className="cartDeliveryText">{delivery.extraInfo}</div>
                                        {step === 0 ? <div className="cartDeliveryText"><div style={{ fontWeight: "bold" }}>Maksutavat:&nbsp;</div>{delivery.paymentMethods}</div> : null}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ol>
                <div>
                    <hr />
                    <div className="cartLastNext row">
                        <div className="col-6 cartLast">
                            <Button onClick={() => stepBack()} className="cartBtn cartLast" >{"<< Edellinen"}</Button>
                        </div>
                        <div className="col-6 cartNext">
                            <Button type="submit" className="cartBtn cartNext" >{"Seuraava >>"}</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CartDelivery;
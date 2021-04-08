import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./cartDelivery.css";

function CartDelivery(props) {
    const [delivery, setDelivery] = useState(0);

    let deliveryMethods = [
        { id: 1, title: "Nouto paikan päältä", cost: 0, moreInfo: "Nouto Turun noutopalvelumyymälästämme.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti, ja lasku/osamaksu." },
        { id: 2, title: "Matkahuolto, lähellä paketti", cost: 0, moreInfo: "Toimitus valitsemaasi Matkahuollon noutopisteeseen.", extraInfo: "Tilauksesi toimitetaan osoitettasi lähimpään tai valitsemaasi Matkahuoltoon, Matkahuolto-asiamiespisteeseen tai Matkahuollon Noutopisteeseen (K-Marketit, R-kioskit, Pakettiautomaatit, Tokmannit ja monet muut yritykset). Saat tekstiviestin tai sähköpostin heti, kun tilaus on noudettavissa.", paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti ja lasku/osamaksu." },
        { id: 3, title: "Matkahuolto, bussipaketti", cost: 0, moreInfo: "Toimitus matkahuollon toimipisteeseen.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti ja lasku/osamaksu." },
        { id: 4, title: "Pakettiautomaatti", cost: 0, moreInfo: "Toimitus valitsemaasi pakettiautomaattiin.", extraInfo: "Pakettiautomaatin valinta tehdään seuraavassa tilausvaiheessa.", paymentMethods: "" },
        { id: 5, title: "Nouto postista", cost: 0, moreInfo: "Toimitus lähimpään postin toimipisteeseen.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti, postiennakko ja lasku/osamaksu." },
        { id: 6, title: "Matkahuolto, kotijakelu", cost: 12.50, moreInfo: "Toimitus suoraan kotiovelle sovittuna ajankohtana.", extraInfo: null, paymentMethods: "Verkkopankki, mobiilimaksu, pankki/luottokortti sekä lasku/osamaksu" },
        { id: 7, title: "Postin kotiinkuljetus", cost: 12.50, moreInfo: "Toimitus suoraan kotiovelle sovittuna ajankohtana.", extraInfo: null, paymentMethods: "Ennakkomaksu, postiennakko ja Klarna lasku/tili" }
    ]

    function deliverySubmitted(e) {
        e.preventDefault();
        props.method(delivery);
        props.next();
    }

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={deliverySubmitted}>
                <ol className="cartDeliveryList">
                    {deliveryMethods.map((delivery) => {
                        return (
                            <li key={delivery.id}>
                                <div className="cartDelivery">
                                    <div className="cartDeliveryRadio">
                                        <input onClick={(e) => setDelivery(e.target.value)} required name="delivery" type="radio" id={delivery.id} value={delivery.id} />
                                        <label className="cartDeliveryLabel" htmlFor={delivery.id}>{delivery.title}</label>
                                        <div className="deliveryCost">{delivery.cost === 0 ? "Ilmainen" : delivery.cost + "0 €"}</div>
                                    </div>
                                    <div className="cartDeliveryTextArea">
                                        <div className="cartDeliveryText">{delivery.moreInfo}</div>
                                        <div className="cartDeliveryText">{delivery.extraInfo}</div>
                                        <div className="cartDeliveryText"><div style={{ fontWeight: "bold" }}>Maksutavat:&nbsp;</div>{delivery.paymentMethods}</div>
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
                            <Button onClick={() => props.back()} className="cartBtn cartLast" >{"<< Edellinen"}</Button>
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
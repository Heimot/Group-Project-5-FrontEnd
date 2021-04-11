import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import './CartForm.css';

function CartForm(props) {
    const [credentials, setCredentials] = useState({ firstName: "", lastName: "", address: "", zip: "", municipality: "", email: "", phoneNumber: "", orderInfo: "" });

    useEffect(() => {
        try {
            const data = JSON.parse(sessionStorage.getItem("credentials"));
            if (data !== null) {
                setCredentials(data)
            }
        } catch (err) {
            sessionStorage.clear("credentials");
        }
    }, [])

    function orderData(e) {
        e.preventDefault();
        sessionStorage.setItem("credentials", JSON.stringify(credentials));
        props.next()
    }

    const onChangeValue = (e) => {
        const { value, id } = e.target;
        setCredentials({ ...credentials, [id]: value });
    }

    return (
        <form onSubmit={orderData}>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="firstName">Etunimi</label>
                        <input onChange={onChangeValue} className="cartFormInputData" value={credentials.firstName} required type="text" id="firstName" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="lastName">Sukunimi</label>
                        <input onChange={onChangeValue} className="cartFormInputData" value={credentials.lastName} required type="text" id="lastName" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="address">Osoite</label>
                        <input onChange={onChangeValue} className="cartFormInputData" value={credentials.address} required type="text" id="address" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="ZIP">Postinumero</label>
                        <input onChange={onChangeValue} className="cartFormInputData" value={credentials.zip} required type="text" id="zip" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="municipality">Kunta</label>
                        <input onChange={onChangeValue} className="cartFormInputData" value={credentials.municipality} required type="text" id="municipality" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="email">Sähköposti</label>
                        <input onChange={onChangeValue} className="cartFormInputData" value={credentials.email} required type="email" id="email" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="phoneNumber">Puhelinnumero</label>
                        <input onChange={onChangeValue} className="cartFormInputData cartFormInputNumberData" value={credentials.phoneNumber} required type="text" id="phoneNumber" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="orderInfo">Tilauksen lisätiedot</label>
                        <textarea onChange={onChangeValue} className="cartFormInputData cartFormInputNumberData" value={credentials.orderInfo} type="textarea" id="orderInfo" />
                    </div>
                    <div className="cartFormInput">
                        <input required type="checkbox" id="terms" />
                        <label className="cartFormLabel" htmlFor="terms">Olen lukenut ja hyväksyn&nbsp;<a href="">tietosuojaselosteen</a></label>
                    </div>
                </div>
            </div>
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
    )
}

export default CartForm;
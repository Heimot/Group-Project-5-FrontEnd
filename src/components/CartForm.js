import Button from 'react-bootstrap/Button';
import './CartForm.css';

function CartForm(props) {

    function orderData(e) {
        e.preventDefault();
        props.next()
    }

    return (
        <form onSubmit={orderData}>
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="firstName">Etunimi</label>
                        <input className="cartFormInputData" required type="text" id="firstName" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="lastName">Sukunimi</label>
                        <input className="cartFormInputData" required type="text" id="lastName" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="address">Osoite</label>
                        <input className="cartFormInputData" required type="text" id="address" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="ZIP">Postinumero</label>
                        <input className="cartFormInputData" required type="number" id="ZIP" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="municipality">Kunta</label>
                        <input className="cartFormInputData" required type="text" id="municipality" />
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="email">Sähköposti</label>
                        <input className="cartFormInputData" required type="email" id="email" />
                    </div>
                    <div className="cartFormInput">
                        <label className="cartFormLabel" htmlFor="phoneNumber">Puhelinnumero</label>
                        <input className="cartFormInputData" required type="number" id="phoneNumber" />
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
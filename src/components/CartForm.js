import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./CartForm.css";

function CartForm(props) {
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postalcode: "",
    city: "",
    email: "",
    phone: "",
    orderInfo: "",
  });

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const data = JSON.parse(sessionStorage.getItem("credentials"));
      if (user) {
        setCredentials(user);
      } else {
        if (data !== null) {
          setCredentials(data);
        }
      }
    } catch (err) {
      sessionStorage.clear("credentials");
    }
  }, []);

  function orderData(e) {
    e.preventDefault();
    sessionStorage.setItem("credentials", JSON.stringify(credentials));
    props.next();
  }

  const onChangeValue = (e) => {
    const { value, id } = e.target;
    setCredentials({ ...credentials, [id]: value });
  };

  return (
    <form onSubmit={orderData}>
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="firstName">
              Etunimi
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData"
              value={credentials.firstName}
              required
              type="text"
              id="firstName"
            />
          </div>
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="lastName">
              Sukunimi
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData"
              value={credentials.lastName}
              required
              type="text"
              id="lastName"
            />
          </div>
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="address">
              Osoite
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData"
              value={credentials.address}
              required
              type="text"
              id="address"
            />
          </div>
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="postalcode">
              Postinumero
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData"
              value={credentials.postalcode}
              required
              type="text"
              id="postalcode"
            />
          </div>
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="city">
              Kunta
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData"
              value={credentials.city}
              required
              type="text"
              id="city"
            />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="email">
              Sähköposti
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData"
              value={credentials.email}
              required
              type="email"
              id="email"
            />
          </div>
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="phone">
              Puhelinnumero
            </label>
            <input
              onChange={onChangeValue}
              className="cartFormInputData cartFormInputNumberData"
              value={credentials.phone}
              required
              type="text"
              id="phone"
            />
          </div>
          <div className="cartFormInput">
            <label className="cartFormLabel" htmlFor="orderInfo">
              Tilauksen lisätiedot
            </label>
            <textarea
              onChange={onChangeValue}
              className="cartFormInputData cartFormInputNumberData"
              value={credentials.orderInfo}
              type="textarea"
              id="orderInfo"
            />
          </div>
          <div className="cartFormInput">
            <input required type="checkbox" id="terms" />
            <label className="cartFormLabel" htmlFor="terms">
              Olen lukenut ja hyväksyn&nbsp;<a href="">tietosuojaselosteen</a>
            </label>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="cartLastNext row">
          <div className="col-6 cartLast">
            <Button onClick={() => props.back()} className="cartBtn cartLast">
              {"<< Edellinen"}
            </Button>
          </div>
          <div className="col-6 cartNext">
            <Button type="submit" className="cartBtn cartNext">
              {"Seuraava >>"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CartForm;

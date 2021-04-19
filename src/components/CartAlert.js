import { useEffect, useState } from 'react';
import './CartAlert.css';

function CartAlert(props) {
    const [item, setItem] = useState(null);
    const [visibility, setVisibility] = useState("");

    useEffect(() => {
        if (props.isOpen) {
            setItem(props.isOpen);
            setVisibility("cartAlert");
        }



    }, [props]);

    useEffect(() => {
        if (props.isOpen) {
            setTimeout(() => {
                setVisibility("cartAlertHidden");
            }, 1000)
        }
    }, [visibility])


    return (
        <div className={visibility}>
            {item !== null ?
                <div className="cartAlertDiv">
                    <img className="cartAlertImage" src={item.IMG} />
                    <div>{item.name} on lisätty ostoskoriin!</div>
                </div>
                : null}
        </div>
    )
}

export default CartAlert;
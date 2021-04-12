import { useState, useEffect } from 'react';
import Dialog from './Dialog';
import "./productGroups.css";

function ProductGroups() {
    const [isOpen, setisOpen] = useState(false);
    const [dialogData, setdialogData] = useState(null);
    const [catalog, setcatalog] = useState("");
    const [width, setwidth] = useState(getWidth());
    let arr = [{ id: "1", ryhma: "Yhteystiedot"}, { id: "2", ryhma: "Palvelut ja huolto"}, { id: "3", ryhma: "UKK"}, { id: "4", ryhma: "Yritysmyynti"}, { id: "5", ryhma: "Tietosuojaseloste" }];

    function getWidth() {
        const { innerWidth: width } = window;
        return {
            width
        };
    }

    useEffect(() => {
        const handleResize = () => {
            setwidth(getWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    if (width.width > 767) {
        return (
            <div className="dialogAndGroups">
                <div className="productGroupsMain">
                    <h4 className="productGroups">Info</h4>
                    <div className="groups">
                        {arr.map(item => {
                            return (
                                <a href={`/info/${item.ryhma}`} onMouseEnter={() => setcatalog(item.ryhma) + setisOpen(true)} onMouseLeave={() => setisOpen(false)} className="groupsButton" key={item.ryhma}>{item.ryhma}</a>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default ProductGroups;

import { useState, useEffect } from 'react';
import "./productGroups.css";

function InfoGroups() {
    const [isOpen, setisOpen] = useState(false);
    const [catalog, setcatalog] = useState("");
    const [width, setwidth] = useState(getWidth());
    let arr = [{ id: "1", ryhma: "Yhteystiedot", osoite: "YhteystiedotSivu"}, { id: "2", ryhma: "Palvelut ja huolto", osoite: "service"}, { id: "3", ryhma: "UKK", osoite: "UKK"}, { id: "4", ryhma: "Yritysmyynti", osoite: "yritysmyynti"}, { id: "5", ryhma: "Tietosuojaseloste", osoite: "tietosuoja" }];

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
                                <a href={`/info/${item.osoite}`} onMouseEnter={() => setcatalog(item.ryhma) + setisOpen(true)} onMouseLeave={() => setisOpen(false)} className="groupsButton" key={item.ryhma}>{item.ryhma}</a>
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

export default InfoGroups;

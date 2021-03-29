import { useState, useEffect } from 'react';
import Dialog from './Dialog';
import "./productGroups.css";

function ProductGroups() {
    const [isOpen, setisOpen] = useState(false);
    const [dialogData, setdialogData] = useState(null);
    const [catalog, setcatalog] = useState("");
    const [width, setwidth] = useState(getWidth());
    let arr = [{ id: "1", ryhma: "Osat", underGroups: ["1", "2", "3"] }, { id: "2", ryhma: "Koneet", underGroups: ["4", "5", "6"] }, { id: "3", ryhma: "Lisätarvikkeet", underGroups: ["Hiiret", "Näppäimistöt"] }, { id: "4", ryhma: "Komponentit", underGroups: ["GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY"] }, { id: "5", ryhma: "Näytöt" }, { id: "6", ryhma: "Gaming" }, { id: "7", ryhma: "TV ja video" }, { id: "8", ryhma: "Kamerat" }, { id: "9", ryhma: "Palvelut" }];

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
                    <h4 className="productGroups">Tuoteryhmät</h4>
                    <div className="groups">
                        {arr.map(item => {
                            return (
                                <a href={`/catalog/${item.ryhma}`} onMouseEnter={() => setcatalog(item.ryhma) + setisOpen(true) + setdialogData(item.underGroups)} onMouseLeave={() => setisOpen(false)} className="groupsButton" key={item.ryhma}>{item.ryhma}</a>
                            )
                        })}
                    </div>
                </div>
                <Dialog mouseLeft={() => setisOpen(false)} mouseOn={() => setisOpen(true)} isOpen={isOpen} onLoad={false} onClose={() => setisOpen(false)}>
                    <div className="subGroups">
                        {dialogData && dialogData.length ? dialogData.map(item => {
                            return (<a href={`/catalog/${catalog}/${item}`} className="subGroupCol">{item}</a>)
                        }) : <div></div>}
                    </div>
                </Dialog>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default ProductGroups;

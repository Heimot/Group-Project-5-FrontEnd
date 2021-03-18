import { useState } from 'react';
import Dialog from './dialog';
import "./productGroups.css";

function ProductGroups() {
    const [isOpen, setisOpen] = useState(false);
    const [dialogData, setdialogData] = useState(null);
    const [catalog, setcatalog] = useState("");
    let arr = [{ id: "1", ryhma: "Osat", underGroups: ["1", "2", "3"] }, { id: "1", ryhma: "Koneet", underGroups: ["4", "5", "6"] }, { id: "1", ryhma: "Lisätarvikkeet", underGroups: ["Hiiret", "Näppäimistöt"] }, { id: "1", ryhma: "Komponentit", underGroups: ["GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY"] }, { id: "1", ryhma: "Näytöt" }];

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
}

export default ProductGroups;
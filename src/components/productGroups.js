import {useState} from 'react';
import Dialog from './dialog';
import "./productGroups.css";

function ProductGroups() {
    const [isOpen, setisOpen] = useState(false);
    const [dialogData, setdialogData] = useState(null);
    const [position, setposition] = useState({x: "", y: ""})
    let arr = [{ id: "1", ryhma: "Osat", underGroups: ["1", "2", "3"]}, { id: "1", ryhma: "Koneet", underGroups: ["4", "5", "6"] }, { id: "1", ryhma: "Lisätarvikkeet", underGroups: ["7", "8", "9"] }, { id: "1", ryhma: "Komponentit", underGroups: ["10", "11", "12"] }, { id: "1", ryhma: "Näytöt" }];

    return (
        <div>
            <h4 className="productGroups">Tuoteryhmät</h4>
            <div className="groups">
                {arr.map(item => {
                    return (
                        <button onMouseEnter={() => setisOpen(true) + setdialogData(item.underGroups)} onMouseLeave={() => setisOpen(false) + setdialogData(null)} className="groupsButton" key={item.ryhma}>{item.ryhma}</button>
                    )
                })}
            </div>
            <Dialog isOpen={isOpen} onLoad={false} onClose={() => setisOpen(false)}>
                            <div>
                                {dialogData && dialogData.length ? dialogData.map(item => {
                                    return (<button>{item}</button>)
                                }) : <div></div>}
                            </div>
            </Dialog>
        </div>
    )
}

export default ProductGroups;
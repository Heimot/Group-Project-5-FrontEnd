import { useState, useEffect } from 'react';
import Dialog from './Dialog';
import useFetch from './hooks/fetch';
import "./productGroups.css";

function ProductGroups() {
    const [isOpen, setisOpen] = useState(false);
    const [dialogData, setdialogData] = useState(null);
    const [catalog, setcatalog] = useState("");
    const [width, setwidth] = useState(getWidth());

    let category = useFetch('http://localhost/Group-Project-5-BackEnd/category.php', { method: "GET" });

    function getWidth() {
        const { innerWidth: width } = window;
        return {
            width
        };
    }

    async function subCategories(id) {
        let res = await fetch('http://localhost/Group-Project-5-BackEnd/subcategory.php?id=' + id, {
            method: "GET",
        })
        const json = await res.json();
        setdialogData(json)
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
            <div>
                {category ?
                    <div className="dialogAndGroups">
                        <div className="productGroupsMain">
                            <h4 className="productGroups">Tuoteryhmät</h4>
                            <div className="groups">
                                {category.map(item => {
                                    return (
                                        <a href={`/catalog/${item.name}`} onMouseEnter={() => setcatalog(item.name) + setisOpen(true) + subCategories(item.id)} onMouseLeave={() => setisOpen(false)} className="groupsButton" key={item.name}>{item.name}</a>
                                    )
                                })}
                            </div>
                        </div>
                        <Dialog mouseLeft={() => setisOpen(false)} mouseOn={() => setisOpen(true)} isOpen={isOpen} onLoad={false} onClose={() => setisOpen(false)}>
                            <div className="subGroups">
                                {dialogData && dialogData.length ? dialogData.map(item => {
                                    return (<a key={item.id} href={`/catalog/${catalog}/${item.name}`} className="subGroupCol">{item.name}</a>)
                                }) : <div></div>}
                            </div>
                        </Dialog>
                    </div>
                    : null}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default ProductGroups;

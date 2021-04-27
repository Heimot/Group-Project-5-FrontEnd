import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useHistory} from 'react-router-dom';
import "./SearchedItems.css";

function SearchedItems() {
  const [suggestions, setSuggestions] = useState([]);
  const [term, setTerm] = useState("");

  let history = useHistory();

  function renderSuggestions() {
    try {
      if (suggestions) {
        return (
          <ul className="AutoCompleteUl">
            {suggestions.map((item) => {
              let url = item.picture;
              if (url === null) {
                url = "default.png";
              }
              return (
                <li
                  key={item.id}
                  className="AutoCompleteLi"
                  onClick={() => history.push(`/product?productid=${item.id}`) + (document.getElementById("SearchedItemsInput").value = "")}
                >
                  <div>
                    <img
                      alt="Search item picture"
                      src={`http://localhost/Group-Project-5-BackEnd/images/${url}`}
                      className="AutoCompletePicture"
                    />
                  </div>
                  <div>
                    <a>{item.name}</a>
                  </div>
                </li>
              );
            })}
          </ul>
        );
      }
    } catch (error) {
        alert("Fill failed")
    }
  }

  async function onTextChange(e) {
      setTerm(e.target.value);
    if (e.target.value.length > 1) {
      let res = await fetch(
        `http://localhost/Group-Project-5-BackEnd/searchFill.php?search=${e.target.value}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      const json = await res.json();
      setSuggestions(json);
    }
  }

  function hideBoxes() {
    setTimeout(() => {
      setSuggestions([]);
    }, 100)

  }

  return (
    <div className="AutoCompletePropsText" onBlur={() => hideBoxes()}>
      <div className="AutoCompleteBtnInp">
        <input
          type="text"
          name="kukka"
          id="SearchedItemsInput"
          className="AutoCompletePropsInput"
          placeholder={"Etsi tuotteita"}
          value={term}
          onChange={(e) => onTextChange(e)}
        />
        <Button onClick={() => history.push(`/search?item=${term}`)}>Etsi</Button>
      </div>
      {renderSuggestions()}
    </div>
  );
}

export default SearchedItems;

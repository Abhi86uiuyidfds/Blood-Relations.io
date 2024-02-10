import "../Style.css";
import React, { useState } from "react";
function SearchNavbar() {
  const [data, setData] = useState("");

  const searchdata = document.getElementById("Searchbox-textsearch");
  const button = document.getElementById("Searchbox-Searchbutton");

  const onChange = (e) => {
    setData(e.target.value);
  };
  const a = (e) => {
    if (searchdata.value !== "") {
      const search = searchdata.value;
      button.setAttribute("href", search);
    } else {
      button.setAttribute("disabled", "true");
    }
  };
  return (
    <>
      <header className="Search-header">
        <nav className="Search-nav">
          <div className="Search-logo">
            <a className="Search-text-logo" href="/">
              Blood Relation
            </a>
          </div>
          <ul className="Search-nav-ul">
            <li className="Search-nav-item">
              <a className="Search-nav-item-a" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul> 
          <div className="Searchbox">
            <input
              type="text"
              value={data}
              onChange={onChange}
              placeholder="Search..."
              id="Searchbox-textsearch"
              className="Searchbox-textsearch"
            />

            <button
              type="button"
              disabled={data === "" || data === null}
              onClick={a}
              className="Searchbox-btn"
            >
              <a id="Searchbox-Searchbutton" className="Searchbox-Searchbutton" onClick={a} href="/">
                Search
              </a>
            </button>
          </div>
        </nav>
      </header>
      
    </>
  );
}

export default SearchNavbar;

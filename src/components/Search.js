import React from "react";
import "./Search.css";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch style={{ fontSize: "30px" }} />
      <input
        type="text"
        name="text"
        class="input"
        placeholder="Type to Search..."
        onChange={(e) => handleSearchNote(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;

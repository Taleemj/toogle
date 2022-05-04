import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { ResultContext } from "../contexts/ContextProvider";

const Navbar = () => {
  const { setSearchTerm, searchTerm, getResults } = useContext(ResultContext);
  const searchRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = searchRef.current.value;

    setSearchTerm(search);
  };

  return (
    <div className="nav-container">
      <div className="navbar">
        <Link to="/">
          <h1>
            <span style={{ color: "blue" }}>T</span>
            <span style={{ color: "red" }}>o</span>
            <span style={{ color: "orange" }}>o</span>
            <span style={{ color: "blue" }}>g</span>
            <span style={{ color: "green" }}>l</span>
            <span style={{ color: "red" }}>e</span>
          </h1>
        </Link>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            placeholder="Search..."
            id="search"
            ref={searchRef}
          />
        </form>
      </div>

      <div className="nav-links">
        <Link to="/">All</Link>
        <Link to="/news">News</Link>
        <Link to="/images">Images</Link>
        <Link to="/videos">Videos</Link>
      </div>
    </div>
  );
};

export default Navbar;

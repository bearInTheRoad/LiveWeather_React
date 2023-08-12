import React from "react";

function Header({ count }) {
  return (
    <div>
      <header className="heading">
        <h1>Current Weather</h1>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default Header;

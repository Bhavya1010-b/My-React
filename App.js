import React from "react";
import ReactDOM from "react-dom/client";
import g1 from "./images/logo.png";

const Header = () => {
  return (
    <div className ="header">
      <div className="logo-container">
        <img className="logo" src={g1} />

      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
      </ul>

      </div>
    </div>
  );
}

const Body = () => {
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">

    </div>
  </div>
}
const App = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

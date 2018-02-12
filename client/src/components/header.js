import React from "react";

const Header = props => {
  return (
    <div className="header">
      <img className="header__img" />
      <h2 className="header__text">{props.headertext}</h2>
    </div>
  );
};

export default Header;

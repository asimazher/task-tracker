import React from "react";
import Button from "./Button";

const Header = ({ onShowAdd, onShow }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        color={onShow ? "red" : "lightseagreen"}
        text={onShow ? "Close" : "Add"}
        onClick={onShowAdd}
      />
    </header>
  );
};

export default Header;

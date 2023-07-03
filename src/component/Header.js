import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ onShowAdd, onShow }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color={onShow ? "red" : "lightseagreen"}
          text={onShow ? "Close" : "Add"}
          onClick={onShowAdd}
        />
      )}
    </header>
  );
};

export default Header;

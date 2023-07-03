import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation()

  return (
    <footer>
      <p>copyright &copy; 2023</p>
      { location.pathname ==="/" && (<Link to="/about">About</Link>)}
    </footer>
  );
};

export default Footer;

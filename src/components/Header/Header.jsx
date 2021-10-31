import './Header.css'
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="buttons">
        <a className="home-btn">HOME</a>
        <a>PRODUCTS</a>
      </div>
    </div>
  );
};

export default Header;

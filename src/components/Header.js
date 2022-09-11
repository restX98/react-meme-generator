import logo from "../assets/troll-face.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img className="logo-icon" src={logo} alt="Logo" />
      <span className="logo-text">Meme Generator</span>
      <span className="title">React Course - Project 3</span>
    </header>
  );
}

export default Header;

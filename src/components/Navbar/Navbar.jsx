import logo from "../assets/logo.png";
import "./Navbar.style.css";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-right">
                <a href="*">Work</a>
                <a href="*">About</a>
                <a href="*">Services</a>
                <a href="*">Ideas</a>
                <a href="*">Careers</a>
                <a href="*">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;
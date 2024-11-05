import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header>
            <Link className="logo" to='/'>MovieFlash</Link>
            <Link className="favoritos" to='/favoritos'>Meus favoritos</Link>
        </header>
    )
};

export default Header;
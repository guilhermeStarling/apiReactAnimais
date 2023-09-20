import styles from "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <nav>
                <div>
                    <Link to="/">Gato</Link>
                </div>
                <p>API animais</p>
                <div>
                    <Link to="/acao">Cachorro</Link>
                    <Link to="/comedia">Aves</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
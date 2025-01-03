import CardWidget from "./CardWidget/CardWidget";
import { Button } from 'react-bootstrap';
import Style from "../Style";

const NavBar = () => {
    return (
        <nav>
            <h3>Eccomerce</h3>

            <div>
                <button className="btn btn-primary">Silla</button>
                <button className="btn btn-success">Mesa</button>
                <button className="btn btn-warning">Escritorio</button>
                <button className="btn btn-info">Perchero</button>
            </div>

            <CardWidget />

        </nav>
    )
}
export default NavBar;
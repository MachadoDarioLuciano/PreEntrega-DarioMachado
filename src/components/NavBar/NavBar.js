import CardWidget from "../CardWidget/CardWidget";
import { NavLink , Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="Navbar">
            <Link to='/'>
                <h3>Eccomerce</h3>
            </Link>
            
            <div className="Categories">
                <NavLink to={`category/muebles`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Muebles</NavLink>
            </div>

            <CardWidget />

        </nav>
    )
}
export default NavBar;
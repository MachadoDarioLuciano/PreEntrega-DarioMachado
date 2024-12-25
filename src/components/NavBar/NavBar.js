import CardWidget from "./CardWidget/CardWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Eccomerce</h3>

            <div>
                <button>Silla</button>
                <button>Mesa</button>
                <button>Escritorio</button>
                <button>Perchero</button>
            </div>

            <CardWidget />

        </nav>
    )
}
export default NavBar;
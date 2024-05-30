import { Link } from "react-router-dom"

export default function Header({ onCartOpen, cartPrice }) {
    return (
        <header className="d-flex justify-between align-center header">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                <div className="d-flex align-center">
                    <img src="img/logo.png" width="40" height="40" alt="logo" />
                    <div className="ml-15">
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="header__list">
                <li onClick={onCartOpen}>
                    <img src="img/cart.svg" width="18" height="18" alt="cart" />
                    <span className="ml-10 xs-hide">{cartPrice} руб.</span>
                </li>
                <li>
                    <Link to="/favourites" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <img style={{ verticalAlign: 'middle' }} src="img/favourite.svg" width="18" height="18" alt="favourite" />
                        <span className="ml-10 sm-hide">Закладки</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <img src="img/user.svg" width="18" height="18" alt="user" />
                        <span className="ml-10 sm-hide">Профиль</span>
                    </Link>
                </li>
            </ul>
        </header>
    )
};
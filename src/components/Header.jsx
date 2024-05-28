export default function Header({ onCartOpen, cartPrice }) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img src="img/logo.png" width="40" height="40" alt="logo" />
                <div className="ml-15">
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30 d-flex align-center cu-p" onClick={onCartOpen}>
                    <img src="img/cart.svg" width="18" height="18" alt="cart" />
                    <span className="ml-10">{cartPrice} руб.</span>
                </li>
                <li className="mr-30 d-flex align-center cu-p">
                    <img src="img/favourite.svg" width="18" height="18" alt="favourite" />
                    <span className="ml-10">Закладки</span>
                </li>
                <li className="d-flex align-center">
                    <img src="img/user.svg" width="18" height="18" alt="user" />
                    <span className="ml-10">Профиль</span>
                </li>
            </ul>
        </header>
    )
};
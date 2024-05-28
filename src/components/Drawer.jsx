export default function Drawer({ items, onClose, onRemove, totalPrice }) {
    if (!items.length) {
        return (
            <div className="overlay" onClick={e => !e.target.closest('.drawer') && onClose()}>
                <div className="drawer">
                    <h2 className="d-flex justify-between">
                        Корзина <img className="cu-p" src="img/btn-remove.svg" alt="remove" onClick={onClose} />
                    </h2>
                    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img src="img/empty-cart.jpg" className="mb-20" width="120" height="120" alt="empty cart" />
                        <h2 className="mb-10">Корзина пустая</h2>
                        <p className="opacity-6 mb-40 text-center">Добавьте хотя бы одну пару кроссовок чтобы сделать заказ.</p>
                        <button className="greenButton" onClick={() => onClose()}>
                            <img src="img/arrow-right.svg" alt="arrow" />Вернуться назад
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="overlay" onClick={e => !e.target.closest('.drawer') && onClose()}>
            <div className="drawer">
                <h2 className="d-flex justify-between">
                    Корзина <img className="cu-p" src="img/btn-remove.svg" alt="remove" onClick={onClose} />
                </h2>
                <div className="cartItems mt-30">
                    {items.map(item =>
                        <div key={item.id} className="cartItem d-flex align-center">
                            <img src={item.imageUrl} style={{ marginTop: -10 }} width="70" height="70" alt="sneakers" />
                            <div className="ml-20 mr-20">
                                <p className="mb-5">{item.title}</p>
                                <b>{item.price} руб.</b>
                            </div>
                            <img src="img/btn-remove.svg" className="removeBtn" onClick={() => onRemove(item)} alt="remove" />
                        </div>
                    )}
                </div>
                <div className="cartTotal">
                    <ul>
                        <li className="d-flex">
                            <span>Итого:</span>
                            <div></div>
                            <b>{totalPrice} руб.</b>
                        </li>
                        <li className="d-flex">
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>{Math.round(totalPrice * 0.05)} руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton mt-25">Оформить заказ<img src="img/arrow-right.svg" alt="arrow" /></button>
                </div>
            </div>
        </div>
    )
};
import Empty from "./Empty"
import GreenButton from "./GreenButton"

export default function Drawer({ items, onClose, onRemove, totalPrice }) {
    if (!items.length) {
        return (
            <div className="overlay" onClick={e => !e.target.closest('.drawer') && onClose()}>
                <div className="drawer">
                    <h2 className="d-flex justify-between">
                        Корзина <img className="cu-p" src="img/btn-remove.svg" alt="remove" onClick={onClose} />
                    </h2>
                    <Empty
                        imageUrl="img/empty-cart.jpg"
                        title="Корзина пустая"
                        text="Добавьте хотя бы одну пару кроссовок чтобы сделать заказ."
                        onClose={onClose}
                    />
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
                            <img src="img/btn-remove.svg" className="removeBtn" onClick={() => onRemove({...item, inCart: false})} alt="remove" />
                        </div>
                    )}
                </div>
                <div className="cartTotal">
                    <ul className="mb-25">
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
                    <GreenButton text="Оформить заказ" isArrowRight />
                </div>
            </div>
        </div>
    )
};
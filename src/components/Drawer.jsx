import { useState } from 'react';
import Info from "./Info"
import GreenButton from "./GreenButton"
import { useAppContext } from "../context/AppContext"

export default function Drawer({ items, onClose, onRemove, totalPrice }) {
    const [isOrdered, setIsOrdered] = useState(false);
    const { makeOrder, orders, isOrdering } = useAppContext();

    function makeOrderHandler() {
        makeOrder(items);
        setIsOrdered(true);
    }

    function closeCartHandler() {
        onClose();
        setIsOrdered(false);
    }

    let content;
    if (isOrdering) {
        content = (
            <Info
                imageUrl="img/loading.jpg"
                title="Загрузка"
                text={`Оформляем заказ...`}
                onClose={closeCartHandler}
            />
        )
    } else if (isOrdered) {
        content = (
            <Info
                imageUrl="img/order.jpg"
                title="Заказ оформлен"
                text={`Ваш заказ #${orders[orders.length - 1].id} скоро будет передан курьерской доставке.`}
                onClose={closeCartHandler}
            />
        )
    } else if (!items.length) {
        content = (
            <Info
                imageUrl="img/empty-cart.jpg"
                title="Корзина пустая"
                text="Добавьте хотя бы одну пару кроссовок чтобы сделать заказ."
                onClose={closeCartHandler}
            />
        )
    } else {
        content = (
            <>
                <div className="cartItems mt-30">
                    {items.map(item =>
                        <div key={item.id} className="cartItem d-flex align-center">
                            <img src={item.imageUrl} style={{ marginTop: -10 }} width="70" height="70" alt="sneakers" />
                            <div className="ml-20 mr-20">
                                <p className="mb-5">{item.title}</p>
                                <b>{item.price} руб.</b>
                            </div>
                            <img src="img/btn-remove.svg" className="removeBtn" onClick={() => onRemove({ ...item, inCart: false })} alt="remove" />
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
                    <GreenButton text="Оформить заказ" isArrowRight onClick={makeOrderHandler} />
                </div>
            </>
        )
    }

    return (
        <div className="overlay" onClick={e => !e.target.closest('.drawer') && closeCartHandler()}>
            <div className="drawer">
                <h2 className="d-flex justify-between">
                    Корзина <img className="cu-p" src="img/btn-remove.svg" alt="remove" onClick={closeCartHandler} />
                </h2>
                {content}
            </div>
        </div>
    )
};
import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";
import Info from "../components/Info";

export default function Home() {
    const { sneakers, updateSneakers, orders } = useAppContext();

    const orderedItems = orders.reduce((acc, order) => [...acc, ...order.items.map(orderItem => sneakers.find(item => item.id === orderItem.id))] , []);

    return (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Мои покупки</h1>
            </div>
            {orderedItems.length
                ? <div className="sneakers">
                    {orderedItems.map((item, idx) =>
                        <Card
                            key={idx}
                            {...item}
                            onPlusClick={() => updateSneakers({ ...item, inCart: !item.inCart })}
                            onLikeClick={() => updateSneakers({ ...item, isFavourite: !item.isFavourite })}
                        />
                    )}
                </div>
                : <Info
                    imageUrl="img/emoji/tears.jpg"
                    title="У вас нет заказов"
                    text={<>Вы нищеброд?<br />Оформите хотя бы один заказ.</>}
                    onClose={() => { }}
                />
            }
        </div>
    )
};
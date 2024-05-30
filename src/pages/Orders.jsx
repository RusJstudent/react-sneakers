import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";
import Info from "../components/Info";

export default function Home() {
    const { sneakers, updateSneakers, orders } = useAppContext();

    const particularOrders = orders.reduce((acc, order) => {
        acc.push({ items: order.items.map(orderItem => sneakers.find(item => item.id === orderItem.id)), id: order.id })
        return acc;
    }, []);

    return (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Мои покупки</h1>
            </div>
            {particularOrders.length
                ? particularOrders.reverse().map(particularOrder => 
                    <div key={particularOrder.id} className="particularOrder">
                        <h2 className="mb-30">Заказ #{particularOrder.id}</h2>
                        <div className="sneakers">
                            {particularOrder.items.map((item, idx) =>
                                <Card
                                    key={idx}
                                    {...item}
                                    bought
                                />
                            )}
                        </div>
                    </div>
                )
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
import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";
import Empty from "../components/Empty";

export default function Favourites() {
    const { cartItems, handleCartChange, favourites, handleFavouriteChange } = useAppContext();

    if (!favourites.length) {
        return (
            <div className="content">
                <div className="mb-40 d-flex align-center justify-between">
                    <h1>Мои Закладки</h1>
                </div>
                <Empty imageUrl="img/sad.jpg" title="Закладок нет :(" text="Вы ничего не добавляли в закладки" />
            </div >
        )
    }

    return (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Мои Закладки</h1>
            </div>
            <div className="sneakers">
                {favourites
                    .map(item => ({ ...item, inCart: Boolean(cartItems.find(cartItem => cartItem.itemId === item.itemId)) }))
                    .map(item =>
                        <Card
                            key={item.itemId}
                            {...item}
                            onPlusClick={() => handleCartChange(item)}
                            onLikeClick={() => handleFavouriteChange(item)}
                        />
                    )}
            </div>
        </div>
    )
};
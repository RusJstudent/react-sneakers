import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";
import Empty from "../components/Empty";

export default function Favourites() {
    const { sneakers, updateSneakers } = useAppContext();

    const favourites = sneakers.filter(item => item.isFavourite);

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
                    .map(item =>
                        <Card
                            key={item.id}
                            {...item}
                            onPlusClick={() => updateSneakers({...item, inCart: !item.inCart})}
                            onLikeClick={() => updateSneakers({...item, isFavourite: !item.isFavourite})}
                        />
                    )}
            </div>
        </div>
    )
};
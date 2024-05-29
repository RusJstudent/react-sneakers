import { useAppContext } from "../context/AppContext";
import Empty from "../components/Empty";
import Cards from "../components/Cards";

export default function Favourites() {
    const { sneakers } = useAppContext();

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
            <Cards items={favourites} />
        </div>
    )
};
import { useState } from 'react';
import { useAppContext } from "../context/AppContext";
import Info from "../components/Info";
import Cards from "../components/Cards";
import { useNavigate } from 'react-router-dom';

function getFavouritesIds(items) {
    return items.reduce((acc, item) => {
        if (item.isFavourite) acc.push(item.id);
        return acc;
    }, []);
}

export default function Favourites() {
    const navigate = useNavigate();
    const { sneakers } = useAppContext();
    const [preservedIds, setPreservedIds] = useState(getFavouritesIds(sneakers));

    const favourites = sneakers.filter(item => item.isFavourite || preservedIds.includes(item.id));

    return (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Мои Закладки</h1>
            </div>
            {favourites.length
                ? <Cards items={favourites} />
                : <Info
                    imageUrl="img/emoji/sad.jpg"
                    title="Закладок нет :("
                    text="Вы ничего не добавляли в закладки"
                    onClose={() => navigate('/')}
                />
            }
        </div>
    )
};
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";
import SearchBlock from "../components/SearchBlock";

export default function Home() {
    const { sneakers, cartItems, handleCartChange, favourites, handleFavouriteChange } = useAppContext();
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Все кроссовки</h1>
                <SearchBlock value={searchValue} setValue={setSearchValue} />
            </div>
            <div className="sneakers">
                {sneakers
                    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(item => ({ ...item, inCart: Boolean(cartItems.find(cartItem => cartItem.itemId === item.itemId)) }))
                    .map(item => ({ ...item, isFavourite: Boolean(favourites.find(favouriteItem => favouriteItem.itemId === item.itemId)) }))
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
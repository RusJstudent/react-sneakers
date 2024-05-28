import { useState, useEffect } from "react";
import Card from "../components/Card";
import Drawer from "../components/Drawer";
import Header from "../components/Header";
import SearchBlock from "../components/SearchBlock";
import { useAppContext } from "../context/AppContext";

export default function Layout() {
    const { sneakers, cartItems, handleCartChange, favourites, handleFavouriteChange } = useAppContext();
    const [searchValue, setSearchValue] = useState('');
    const [cartOpen, setCartOpen] = useState(false);

    const cartItemsPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        document.body.style.overflowY = cartOpen ? 'hidden' : '';
    }, [cartOpen]);

    return (
        <div className="wrapper">
            {cartOpen &&
                <Drawer
                    items={cartItems}
                    onClose={() => setCartOpen(false)}
                    onRemove={handleCartChange}
                    totalPrice={cartItemsPrice}
                />}
            <Header onCartOpen={() => setCartOpen(true)} cartPrice={cartItemsPrice} />
            <div className="p-40"> {/* content */}
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
        </div>
    )
}

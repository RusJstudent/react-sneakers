import { useState, useEffect } from "react";
import axios from "axios";
import { fetchData } from './util';
import AppContext from "./context/AppContext";
import Layout from "./components/Layout";

export default function App() {
    const [sneakers, setSneakers] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourite')) || []);

    useEffect(() => {
        fetchData('https://66543a331c6af63f4676ef3a.mockapi.io/items').then(setSneakers);
        fetchData('https://66543a331c6af63f4676ef3a.mockapi.io/cart').then(setCartItems);
    }, []);

    function handleCartChange(item) {
        let updatedItems;

        if (cartItems.find(cartItem => cartItem.itemId === item.itemId)) {
            updatedItems = cartItems.filter(cartItem => cartItem.itemId !== item.itemId);
            fetchData('https://66543a331c6af63f4676ef3a.mockapi.io/cart')
                .then(cartItems => cartItems.find(cartItem => cartItem.itemId === item.itemId))
                .then(item => axios.delete(`https://66543a331c6af63f4676ef3a.mockapi.io/cart/${item.id}`))
        } else {
            updatedItems = [...cartItems, item];
            axios.post('https://66543a331c6af63f4676ef3a.mockapi.io/cart', item);
        }

        setCartItems(updatedItems);
    }

    function handleFavouriteChange(item) {
        let updatedItems;

        if (favourites.find(favouriteItem => favouriteItem.itemId === item.itemId)) {
            updatedItems = favourites.filter(favouriteItem => favouriteItem.itemId !== item.itemId);
        } else {
            updatedItems = [...favourites, item];
        }

        setFavourites(updatedItems);
        localStorage.setItem('favourite', JSON.stringify(updatedItems));
    }

    return (
        <AppContext.Provider value={{ sneakers, cartItems, handleCartChange, favourites, handleFavouriteChange }}>
            <Layout />
        </AppContext.Provider>
    )
}
import { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import SearchBlock from "./components/SearchBlock";
import axios from "axios";
import { fetchData } from './util';

export default function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourite')) || []);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

  const cartItemsPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  useEffect(() => {
    fetchData('https://66543a331c6af63f4676ef3a.mockapi.io/items').then(setSneakers);
    fetchData('https://66543a331c6af63f4676ef3a.mockapi.io/cart').then(setCartItems);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = cartOpen ? 'hidden' : '';
  }, [cartOpen]);

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
            .map(item => ({ ...item, inCart: Boolean( cartItems.find(cartItem => cartItem.itemId === item.itemId) ) }) )
            .map(item => ({ ...item, isFavourite: Boolean( favourites.find(favouriteItem => favouriteItem.itemId === item.itemId) ) }) )
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

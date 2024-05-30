import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { Routes, Route } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";
import Home from '../pages/Home';
import Favourites from "../pages/Favourites";
import Orders from "../pages/Orders";

export default function Layout() {
    const { sneakers, updateSneakers, isLoading } = useAppContext();
    const [cartOpen, setCartOpen] = useState(false);

    const cartItemsPrice = sneakers.reduce((sum, item) => item.inCart ? sum + item.price : sum, 0);

    useEffect(() => {
        document.body.style.overflowY = cartOpen ? 'hidden' : '';
    }, [cartOpen]);

    const loader = (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Загрузка...</h1>
            </div>
        </div>
    );

    return (
        <div className="wrapper">
            {cartOpen &&
                <Drawer
                    items={sneakers.filter(item => item.inCart)}
                    onClose={() => setCartOpen(false)}
                    onRemove={updateSneakers}
                    totalPrice={cartItemsPrice}
                />}
            <Header onCartOpen={() => setCartOpen(true)} cartPrice={cartItemsPrice} />
            {isLoading
                ? loader
                : <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            }
        </div>
    )
}

import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { Routes, Route } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";
import Home from '../pages/Home';
import Favourites from "../pages/Favourites";

export default function Layout() {
    const { sneakers, updateSneakers } = useAppContext();
    const [cartOpen, setCartOpen] = useState(false);

    const cartItemsPrice = sneakers.reduce((sum, item) => item.inCart ? sum + item.price : sum, 0);

    useEffect(() => {
        document.body.style.overflowY = cartOpen ? 'hidden' : '';
    }, [cartOpen]);

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
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourites" element={<Favourites />} />
            </Routes>
        </div>
    )
}

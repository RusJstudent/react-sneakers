import { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "./context/AppContext";
import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";

const serverURL = 'https://66543a331c6af63f4676ef3a.mockapi.io';

export default function App() {
    const [sneakers, setSneakers] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOrdering, setIsOrdering] = useState(false);

    useEffect(() => {
        Promise.all([
            axios.get(`${serverURL}/items`)
                .then(response => setSneakers(response.data)),
            axios.get(`${serverURL}/orders`)
                .then(response => setOrders(response.data)),
        ])
        .catch(err => console.log('Ошибка при получении данных:', err))
        .then(result => setIsLoading(false));
    }, []);

    function updateSneakers(item) {
        axios.put(`${serverURL}/items/${item.id}`, item)
            .catch(err => console.log('Ошибка при обновлении данных:', err));
        setSneakers(prevItems => prevItems.map(prevItem => prevItem.id === item.id ? item : prevItem));
    }

    function makeOrder(items) {
        setIsOrdering(true);
        items.forEach(item => updateSneakers({ ...item, inCart: false }));
        axios.post(`${serverURL}/orders`, { items })
            .catch(err => console.log('Ошибка при создании заказа:', err))
            .then(response => {
                setOrders(orders => [...orders, response.data]);
                setIsOrdering(false);
            });
    }

    function removeOrder(orderId) {
      axios.delete(`${serverURL}/orders/${orderId}`)
          .catch(err => console.log('Ошибка при удалении заказа:', err))
          .then(response => {
              setOrders(orders => orders.filter(order => order.id !== orderId))
          });
  }

    return (
        <AppContext.Provider value={{ sneakers, updateSneakers, isLoading, makeOrder, orders, isOrdering, removeOrder }}>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </AppContext.Provider>
    )
}

/* Backend (mockAPI)
// items
[
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "imageUrl": "img/sneakers/1.jpg",
    "price": 12999,
    "id": "1",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "imageUrl": "img/sneakers/2.jpg",
    "price": 12999,
    "id": "2",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "imageUrl": "img/sneakers/3.jpg",
    "price": 8499,
    "id": "3",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "imageUrl": "img/sneakers/4.jpg",
    "price": 8999,
    "id": "4",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Under Armour Curry 8",
    "imageUrl": "img/sneakers/5.jpg",
    "price": 15199,
    "id": "5",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie 7",
    "imageUrl": "img/sneakers/6.jpg",
    "price": 11299,
    "id": "6",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Jordan Air Jordan 11",
    "imageUrl": "img/sneakers/7.jpg",
    "price": 10799,
    "id": "7",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike LeBron XVIII",
    "imageUrl": "img/sneakers/8.jpg",
    "price": 16499,
    "id": "8",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike Lebron XVIII Low",
    "imageUrl": "img/sneakers/9.jpg",
    "price": 13999,
    "id": "9",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "imageUrl": "img/sneakers/10.jpg",
    "price": 8499,
    "id": "10",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "imageUrl": "img/sneakers/11.jpg",
    "price": 8999,
    "id": "11",
    "inCart": false,
    "isFavourite": false
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
    "imageUrl": "img/sneakers/12.jpg",
    "price": 11299,
    "id": "12",
    "inCart": false,
    "isFavourite": false
  }
]

*/
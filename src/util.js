import axios from "axios";

export async function fetchData(url) {
    const response = await axios.get(url);
    return response.data;

    // const response = await fetch(url);
    // const data = await response.json();
    // return data;
}

/* Сравнение синтаксиса POST-запроса fetch и axios

1) axios POST:
axios.post('https://66543a331c6af63f4676ef3a.mockapi.io/cart', item)
.then(response => console.log(response.data));

2) fetch POST:
fetch('https://66543a331c6af63f4676ef3a.mockapi.io/cart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(item)
})
.then(response => response.json())
.then(result => console.log(result))

*/








/* items BACKEND (mockAPI)

[
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "imageUrl": "img/sneakers/1.jpg",
    "price": 12999,
    "itemId": 1,
    "id": "1"
  },
  {
    "title": "Мужские Кроссовки Nike Air Max 270",
    "imageUrl": "img/sneakers/2.jpg",
    "price": 12999,
    "itemId": 2,
    "id": "2"
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "imageUrl": "img/sneakers/3.jpg",
    "price": 8499,
    "itemId": 3,
    "id": "3"
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "imageUrl": "img/sneakers/4.jpg",
    "price": 8999,
    "itemId": 4,
    "id": "4"
  },
  {
    "title": "Мужские Кроссовки Under Armour Curry 8",
    "imageUrl": "img/sneakers/5.jpg",
    "price": 15199,
    "itemId": 5,
    "id": "5"
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie 7",
    "imageUrl": "img/sneakers/6.jpg",
    "price": 11299,
    "itemId": 6,
    "id": "6"
  },
  {
    "title": "Мужские Кроссовки Jordan Air Jordan 11",
    "imageUrl": "img/sneakers/7.jpg",
    "price": 10799,
    "itemId": 7,
    "id": "7"
  },
  {
    "title": "Мужские Кроссовки Nike LeBron XVIII",
    "imageUrl": "img/sneakers/8.jpg",
    "price": 16499,
    "itemId": 8,
    "id": "8"
  },
  {
    "title": "Мужские Кроссовки Nike Lebron XVIII Low",
    "imageUrl": "img/sneakers/9.jpg",
    "price": 13999,
    "itemId": 9,
    "id": "9"
  },
  {
    "title": "Мужские Кроссовки Nike Blazer Mid Suede",
    "imageUrl": "img/sneakers/10.jpg",
    "price": 8499,
    "itemId": 10,
    "id": "10"
  },
  {
    "title": "Кроссовки Puma X Aka Boku Future Rider",
    "imageUrl": "img/sneakers/11.jpg",
    "price": 8999,
    "itemId": 11,
    "id": "11"
  },
  {
    "title": "Мужские Кроссовки Nike Kyrie Flytrap IV",
    "imageUrl": "img/sneakers/12.jpg",
    "price": 11299,
    "itemId": 12,
    "id": "12"
  }
]

*/
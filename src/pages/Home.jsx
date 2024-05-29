import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Cards from "../components/Cards";
import SearchBlock from "../components/SearchBlock";

export default function Home() {
    const { sneakers } = useAppContext();
    const [searchValue, setSearchValue] = useState('');

    const filtered = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <div className="content">
            <div className="mb-40 d-flex align-center justify-between">
                <h1>Все кроссовки</h1>
                <SearchBlock value={searchValue} setValue={setSearchValue} />
            </div>
            <Cards items={filtered} />
        </div>
    )
};
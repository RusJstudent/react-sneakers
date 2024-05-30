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
            <div>
                <img className="w100p mb-25" src="img/adds.jpg" alt="adds" />
            </div>
            <div style={{rowGap: 30}} className="mb-40 d-flex align-center justify-between flex-wrap">
                <h1>Все кроссовки</h1>
                <SearchBlock value={searchValue} setValue={setSearchValue} />
            </div>
            <Cards items={filtered} />
        </div>
    )
};
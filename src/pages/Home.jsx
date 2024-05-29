import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Card from "../components/Card";
import SearchBlock from "../components/SearchBlock";

export default function Home() {
    const { sneakers, updateSneakers } = useAppContext();
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
                    .map(item =>
                        <Card
                            key={item.id}
                            {...item}
                            onPlusClick={() => updateSneakers({...item, inCart: !item.inCart})}
                            onLikeClick={() => updateSneakers({...item, isFavourite: !item.isFavourite})}
                        />
                    )}
            </div>
        </div>
    )
};
import { useAppContext } from "../context/AppContext"
import Card from "./Card";

export default function Cards({ items }) {
    const { updateSneakers } = useAppContext();

    return (
        <div className="sneakers">
            {items.map(item =>
                <Card
                    key={item.id}
                    {...item}
                    onPlusClick={() => updateSneakers({ ...item, inCart: !item.inCart })}
                    onLikeClick={() => updateSneakers({ ...item, isFavourite: !item.isFavourite })}
                />
            )}
        </div>
    )
};